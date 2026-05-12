# 🎙️ Filipino Audio Transcriber

An interactive web application for transcribing audio to text using Claude's AI. Built with React, Vite, and TypeScript, and deployed on Vercel.

## Features

- 🎙️ **Audio Recording**: Record audio directly from your browser
- 🤖 **AI Transcription**: Uses Claude's powerful AI to transcribe audio accurately
- 📥 **Download Results**: Export transcriptions as text files
- 🌐 **No Backend Required**: Entirely client-side processing
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Beautiful UI**: Modern gradient design with smooth interactions

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Claude API key from [console.anthropic.com](https://console.anthropic.com/)

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/yourusername/transcriber.git
cd transcriber

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview  # Test production build locally
```

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/transcriber.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy" (no environment variables needed)

**That's it!** Your app is now live on Vercel's free tier.

## How to Use

1. Enter your Claude API key (it's only used in your browser, never stored on servers)
2. Click "🎙️ Start Recording" to record audio
3. Click "⏹️ Stop Recording" when done
4. Wait for Claude AI to transcribe your audio
5. Download or copy the transcription

## Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool (fast development & production builds)
- **TypeScript** - Type safety
- **Claude API** - AI-powered transcription
- **Vercel** - Free hosting

## Project Structure

```
├── src/
│   ├── App.tsx          # Main app component
│   ├── App.css          # Styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static files
├── package.json         # Dependencies
├── vite.config.ts       # Vite config
├── vercel.json          # Vercel deployment config
├── .env.example         # Environment variables template
└── README.md            # This file
```

## Security & Privacy

⚠️ **Your API key is never stored on our servers**
- The API key is entered directly in your browser
- It's only used to make requests to the Claude API from your device
- The transcript is never sent to any external server
- Never commit your `.env.local` file (it's in `.gitignore`)

## Cost Management

- **Vercel**: Free hosting (this tier is perfect for this app)
- **Claude API**: Pay as you go (monitor usage at [console.anthropic.com](https://console.anthropic.com/))
- Set API usage limits in your Claude console to control costs

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Microphone not working | Check browser permissions, try another app first |
| API key error | Verify key is valid at console.anthropic.com |
| No transcription | Ensure audio was recorded, check API status |

## Environment Variables

Create a `.env.local` file (based on `.env.example`):
```
VITE_CLAUDE_API_KEY=your_key_here
```

## API Reference

- **Model**: `claude-3-5-sonnet-20241022`
- **Max Tokens**: 1024 per request
- **Format**: Accepts base64 encoded audio (WAV)

## Contributing

Contributions welcome! Please submit a Pull Request.

## License

MIT License - Use freely for personal or commercial projects.

## Support

- [GitHub Issues](https://github.com/yourusername/transcriber/issues)
- [Claude Docs](https://docs.anthropic.com/)
- [Vercel Docs](https://vercel.com/docs)

---

Built with ❤️ for audio transcription
