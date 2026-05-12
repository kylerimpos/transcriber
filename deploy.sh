#!/bin/bash

# Deploy to GitHub & Vercel - Interactive Guide
# Run this script to get step-by-step instructions

echo "🚀 Filipino Audio Transcriber - Deployment Guide"
echo "=================================================="
echo ""
echo "This will help you deploy your app to GitHub and Vercel in 5 minutes!"
echo ""
echo "Prerequisites:"
echo "✓ Git installed"
echo "✓ GitHub account created"
echo "✓ Vercel account (free, uses GitHub login)"
echo ""

# Step 1
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 1: Create a GitHub Repository"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Go to https://github.com/new"
echo "2. Repository name: transcriber"
echo "3. Description: Audio transcription app powered by Claude AI"
echo "4. Choose: Public (for free Vercel hosting)"
echo "5. Click: Create repository"
echo ""
read -p "Press Enter when you've created the repository..."
echo ""

# Step 2
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 2: Configure Git Repository"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Run these commands in the terminal:"
echo ""
echo "git init"
echo "git add ."
echo "git commit -m \"Initial commit: Filipino Audio Transcriber\""
echo "git branch -M main"
echo "git remote add origin https://github.com/YOUR_USERNAME/transcriber.git"
echo "git push -u origin main"
echo ""
echo "⚠️  Replace YOUR_USERNAME with your GitHub username!"
echo ""
read -p "Press Enter when you've pushed to GitHub..."
echo ""

# Step 3
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 3: Deploy to Vercel"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Go to https://vercel.com"
echo "2. Click: New Project"
echo "3. Sign in with GitHub (if not already)"
echo "4. Find and select: transcriber"
echo "5. Click: Deploy"
echo ""
echo "⏳ Vercel will now build and deploy your app (takes ~1-2 minutes)"
echo ""
read -p "Press Enter when deployment is complete..."
echo ""

# Success
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ DEPLOYMENT COMPLETE!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Your app is now live at:"
echo "https://transcriber-YOUR_USERNAME.vercel.app"
echo ""
echo "⚠️  Replace YOUR_USERNAME with your GitHub username!"
echo ""

# Verification
echo "📋 Verification Checklist:"
echo "  ✓ Repository pushed to GitHub"
echo "  ✓ App deployed to Vercel"
echo "  ✓ Live URL working"
echo ""

# Next steps
echo "🎉 Next Steps:"
echo "  1. Visit your live URL"
echo "  2. Get Claude API key from console.anthropic.com"
echo "  3. Test the transcriber"
echo "  4. Share your app!"
echo ""

# Info
echo "ℹ️  Tips:"
echo "  • API key is never stored on servers"
echo "  • Updates auto-deploy on git push"
echo "  • Monitor API usage at console.anthropic.com"
echo ""

# Links
echo "🔗 Useful Links:"
echo "  GitHub: https://github.com/YOUR_USERNAME/transcriber"
echo "  Vercel: https://vercel.com/dashboard"
echo "  Claude: https://console.anthropic.com/"
echo ""

echo "Happy transcribing! 🎙️"
echo ""
