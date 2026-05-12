# Deployment Guide for Filipino Audio Transcriber

This guide will help you push this project to GitHub and deploy it to Vercel (free hosting).

## Step 1: Initialize Git Repository

```bash
cd /Users/kylemarkrimpos/Desktop/Transcriber

git init
git add .
git commit -m "Initial commit: Filipino Audio Transcriber app"
```

## Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **+** icon in the top right → **New repository**
3. Name it: `transcriber` (or your preferred name)
4. Add description: "Audio transcription app powered by Claude AI"
5. Choose **Public** (for free Vercel hosting)
6. Click **Create repository**

## Step 3: Push to GitHub

After creating the repository, GitHub will show you commands. Run:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/transcriber.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

**Verify:** Visit `https://github.com/YOUR_USERNAME/transcriber` to see your code.

## Step 4: Deploy to Vercel

### Option A: Automatic Deployment (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → Sign in with GitHub
3. Click **New Project**
4. Select your **transcriber** repository
5. Click **Deploy**

**That's it!** Vercel will automatically build and deploy your app.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
```

Then follow the prompts to deploy.

## Step 5: Your Live App

After deployment, you'll get a URL like:
```
https://transcriber-YOUR_USERNAME.vercel.app
```

Your app is now live! Share it with friends.

## Environment Setup

Since this is a client-side app:
- ✅ No environment variables needed in Vercel
- ✅ Users enter their own Claude API key in the browser
- ✅ No server-side secrets required

## Post-Deployment Checklist

- [ ] Visit your Vercel URL and test the app
- [ ] Record some audio and verify transcription works
- [ ] Update the GitHub link in the app footer (optional)
- [ ] Share your app on social media!

## Continuous Deployment

After this initial setup:
- Every push to `main` branch → Vercel auto-deploys
- Takes ~1 minute to deploy
- No additional steps needed

Just commit and push:
```bash
git add .
git commit -m "Your changes"
git push
```

## Troubleshooting

### Build fails on Vercel?
- Check `npm run build` works locally first
- Fix any TypeScript errors
- Push the fixed code to GitHub

### App loads but doesn't work?
- Make sure you entered a valid Claude API key
- Check browser console for errors (F12)
- Verify microphone permissions

### Need to update the app?
```bash
# Make changes locally
npm run dev  # Test it
git add .
git commit -m "Description of changes"
git push
# Vercel automatically redeploys!
```

## Sharing Your App

Once deployed, you can:
- Share the URL with anyone
- Add to your portfolio
- Submit to Indie Hackers or Product Hunt
- Link from your GitHub profile

---

**Next Steps:**
1. Complete the 5 steps above
2. Test your live app
3. Start recording audio and transcribing!

For help, check:
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Help](https://docs.github.com)
- [Claude API Docs](https://docs.anthropic.com/)
