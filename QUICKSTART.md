# Quick Reference 📋

## Local Development Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Fix linting issues
npm run lint
```

## Deployment Steps (5 minutes)

### 1. Create GitHub Repo
- Go to github.com → Click **+** → **New repository**
- Name: `transcriber`
- Choose **Public**
- Create it

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/transcriber.git
git push -u origin main
```

### 3. Deploy to Vercel
- Go to vercel.com
- Click **New Project**
- Select your GitHub `transcriber` repo
- Click **Deploy**
- Done! ✅

### 4. Your Live App
```
https://transcriber-YOUR_USERNAME.vercel.app
```

## File Structure

```
transcriber/
├── src/
│   ├── App.tsx         ← Main app
│   └── App.css         ← Styles
├── dist/               ← Build output
├── package.json        ← Dependencies
├── vite.config.ts      ← Vite config
├── vercel.json         ← Vercel config
└── DEPLOYMENT.md       ← Detailed guide
```

## Using the App

1. **Enter Claude API Key** - Get from console.anthropic.com
2. **Click "Start Recording"** - Records audio
3. **Click "Stop Recording"** - Stops recording
4. **Wait** - Claude transcribes the audio
5. **Download** - Save transcription as .txt

## Important Notes

- 🔐 API key never leaves your browser
- 💰 Monitor API usage to control costs
- 📱 Works on phone, tablet, desktop
- ⚡ Fast with Vite (sub-second HMR)

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Microphone not working | Allow browser permission |
| API key error | Verify key is valid |
| Build fails | Run `npm install` again |
| App won't start | Check port 5173 is free |

## Useful Links

- [Claude API Console](https://console.anthropic.com/)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [GitHub Profile](https://github.com)
- [Claude Documentation](https://docs.anthropic.com/)

## Stats

- **Build Size**: ~62KB (gzipped)
- **Load Time**: <1 second
- **Languages**: React, TypeScript
- **Hosting**: Vercel (free)

---

**First deploy?** Read `DEPLOYMENT.md` for step-by-step instructions.

**Questions?** Check the `README.md` for full documentation.
