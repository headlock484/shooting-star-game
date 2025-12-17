# 🚂 Railway Quick Start - Deploy in 10 Minutes

The fastest way to get your game online! Perfect for learning cloud deployment.

---

## ⚡ Quick Steps (10 Minutes)

### Step 1: Sign Up (2 minutes)
1. Go to: https://railway.app
2. Click "Start a New Project"
3. Sign up with GitHub (recommended) or email

### Step 2: Prepare Your Code (3 minutes)

**If you don't have GitHub yet:**
1. Go to: https://github.com
2. Sign up (free)
3. Create a new repository called `shooting-star-game`
4. Upload your `public` folder contents

**Quick GitHub upload:**
```bash
# In PowerShell, navigate to your project
cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/shooting-star-game.git
git push -u origin main
```

### Step 3: Deploy on Railway (5 minutes)

1. **In Railway:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `shooting-star-game` repository

2. **Railway will:**
   - Auto-detect your Dockerfile ✅
   - Build your Docker image ✅
   - Deploy your app ✅

3. **Get Your URL:**
   - Railway generates a URL like: `https://shooting-star-game.up.railway.app`
   - Click "Open" or copy the URL
   - **Your game is now live!** 🎉

### Step 4: Test (1 minute)
1. Open the Railway URL in your browser
2. Test the game
3. Share with friends!

---

## 🔄 Updating Your Game

Whenever you make changes:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Updated game"
   git push
   ```

2. **Railway automatically:**
   - Detects the change ✅
   - Rebuilds your Docker image ✅
   - Redeploys your app ✅
   - Your URL stays the same! ✨

**That's it!** No manual steps needed.

---

## 💰 Pricing

- **Free Tier:** $5 credit/month (plenty for learning!)
- **After Free Tier:** Pay-as-you-go
- **Your game:** Probably costs $0-2/month

---

## 🎯 What You Get

✅ Public URL (anyone can access)  
✅ Automatic HTTPS (secure)  
✅ Auto-deployment (push to GitHub = live)  
✅ Free tier to start  
✅ Easy to use  

---

## 🐛 Troubleshooting

### Game Not Loading?
1. Check Railway logs (click on your service → "Logs")
2. Verify Dockerfile is in root of repo
3. Check that port 3000 is exposed

### Need to Rebuild?
1. Click on your service
2. Click "Settings"
3. Click "Redeploy"

---

## 📚 Learn More

For detailed cloud deployment info, see: `CLOUD_DEPLOYMENT_GUIDE.md`

---

**Ready? Go to https://railway.app and get started! 🚀**

