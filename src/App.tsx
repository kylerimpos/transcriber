import { useState, useRef } from 'react'
import './App.css'

interface TranscriptionResult {
  text: string;
  language?: string;
  duration?: number;
}

function App() {
  const [isRecording, setIsRecording] = useState(false)
  const [transcription, setTranscription] = useState<TranscriptionResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [apiKey, setApiKey] = useState('')
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const streamRef = useRef<MediaStream | null>(null)

  const startRecording = async () => {
    try {
      setError(null)
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream

      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
        await transcribeAudio(audioBlob)
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (err) {
      setError('Failed to access microphone. Please check permissions.')
      console.error(err)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }

  const transcribeAudio = async (audioBlob: Blob) => {
    if (!apiKey.trim()) {
      setError('Please enter your Claude API key')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Convert blob to base64
      const reader = new FileReader()
      reader.readAsDataURL(audioBlob)

      reader.onload = async () => {
        const base64Audio = reader.result as string
        const base64Data = base64Audio.split(',')[1]

        try {
          const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey,
              'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({
              model: 'claude-3-5-sonnet-20241022',
              max_tokens: 1024,
              messages: [
                {
                  role: 'user',
                  content: [
                    {
                      type: 'image',
                      source: {
                        type: 'base64',
                        media_type: 'audio/wav',
                        data: base64Data,
                      },
                    },
                    {
                      type: 'text',
                      text: 'Please transcribe this audio. Respond with just the transcription text.',
                    },
                  ],
                },
              ],
            }),
          })

          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.error?.message || 'Transcription failed')
          }

          const data = await response.json()
          const transcribedText = data.content[0].text

          setTranscription({
            text: transcribedText,
            duration: Math.round(audioBlob.size / 16000 / 2), // Rough estimate
          })
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'An error occurred during transcription'
          setError(errorMessage)
        } finally {
          setIsLoading(false)
        }
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process audio'
      setError(errorMessage)
      setIsLoading(false)
    }
  }

  const downloadTranscription = () => {
    if (!transcription) return

    const element = document.createElement('a')
    const file = new Blob([transcription.text], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `transcription-${Date.now()}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🎙️ Filipino Audio Transcriber</h1>
        <p>Convert your audio to text using Claude's AI</p>
      </header>

      <main className="main">
        <section className="api-section">
          <label htmlFor="apiKey">Claude API Key:</label>
          <input
            id="apiKey"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Claude API key"
            className="api-input"
          />
          <p className="api-hint">
            Get your API key from <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">console.anthropic.com</a>
          </p>
        </section>

        <section className="recording-section">
          <div className="button-group">
            <button
              onClick={startRecording}
              disabled={isRecording || isLoading}
              className="btn btn-primary"
            >
              {isRecording ? '🔴 Recording...' : '🎙️ Start Recording'}
            </button>
            <button
              onClick={stopRecording}
              disabled={!isRecording}
              className="btn btn-secondary"
            >
              ⏹️ Stop Recording
            </button>
          </div>

          {isLoading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Transcribing audio...</p>
            </div>
          )}
        </section>

        {error && (
          <section className="error-section">
            <h3>❌ Error</h3>
            <p>{error}</p>
          </section>
        )}

        {transcription && (
          <section className="result-section">
            <h3>✅ Transcription</h3>
            <div className="transcription-box">
              <p>{transcription.text}</p>
            </div>
            <button
              onClick={downloadTranscription}
              className="btn btn-success"
            >
              📥 Download Transcription
            </button>
          </section>
        )}

        <section className="info-section">
          <h3>📋 How to use:</h3>
          <ol>
            <li>Enter your Claude API key</li>
            <li>Click "Start Recording" to begin recording audio</li>
            <li>Click "Stop Recording" when done</li>
            <li>Wait for the transcription to complete</li>
            <li>Download the transcription as a text file</li>
          </ol>
        </section>
      </main>

      <footer className="footer">
        <p>Made with React + Vite + Claude AI</p>
        <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
      </footer>
    </div>
  )
}

export default App
