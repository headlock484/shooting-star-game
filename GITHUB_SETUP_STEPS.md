# 📚 GitHub Setup - Step by Step (For Beginners)

Since you're new to GitHub, here's exactly what to do:

---

## ✅ Step 1: Install Git (5 minutes)

**What is Git?** It's the tool that lets you upload code to GitHub.

1. **Download Git:**
   - Go to: https://git-scm.com/download/win
   - Click "Download for Windows"
   - The download will start automatically

2. **Install Git:**
   - Run the downloaded file (Git-2.x.x-64-bit.exe)
   - Click "Next" through all screens (default settings are fine!)
   - When it asks about "Default editor", choose "Nano" or "Notepad" (easiest)
   - Click "Install"
   - Wait for installation to finish

3. **Restart PowerShell:**
   - Close this PowerShell window
   - Open a NEW PowerShell window
   - Navigate back to your project:
     ```powershell
     cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"
     ```

4. **Verify Git is installed:**
   ```powershell
   git --version
   ```
   You should see something like: `git version 2.x.x`

---

## ✅ Step 2: Create GitHub Repository (2 minutes)

1. **Go to GitHub:**
   - Open: https://github.com
   - Sign in to your account

2. **Create New Repository:**
   - Click the **"+"** icon in the top right
   - Click **"New repository"**

3. **Fill in the form:**
   - **Repository name:** `shooting-star-game`
   - **Description:** `Shooting Star Game - Classic and PvP modes with Live Bets`
   - **Visibility:** Choose **Public** (so Railway can access it)
   - **IMPORTANT:** Do NOT check "Add a README file"
   - **IMPORTANT:** Do NOT check "Add .gitignore"
   - **IMPORTANT:** Do NOT choose a license (leave as "None")

4. **Click "Create repository"**

5. **Copy the repository URL:**
   - GitHub will show you a page with setup instructions
   - You'll see a URL like: `https://github.com/YOUR_USERNAME/shooting-star-game.git`
   - **Copy this URL** - you'll need it in the next step!

---

## ✅ Step 3: Set Up Your Local Code (3 minutes)

**In PowerShell, run these commands one by one:**

```powershell
# Make sure you're in the right folder
cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"

# Initialize git (creates a .git folder)
git init

# Add all your files
git add .

# Create your first commit (like saving a snapshot)
git commit -m "Initial commit - Shooting Star Game"

# Rename branch to main (GitHub uses 'main' now)
git branch -M main

# Connect to your GitHub repository (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/shooting-star-game.git
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## ✅ Step 4: Push Code to GitHub (2 minutes)

```powershell
# Push your code to GitHub
git push -u origin main
```

**When prompted:**
- **Username:** Enter your GitHub username
- **Password:** Enter a **Personal Access Token** (NOT your GitHub password)

**Don't have a Personal Access Token?** Here's how to create one:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Railway Deployment`
4. Check the box: **`repo`** (this gives full repository access)
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

---

## ✅ Step 5: Verify It Worked

1. Go back to your GitHub repository page
2. Refresh the page
3. You should see all your files! 🎉

---

## 🎯 What's Next?

Once your code is on GitHub, you can deploy to Railway! See `DEPLOY_NOW.md` for Railway deployment steps.

---

## 🐛 Troubleshooting

### "Git is not recognized"
- Git isn't installed or PowerShell needs restart
- Install Git from Step 1
- Restart PowerShell completely

### "Repository not found"
- Check your GitHub username is correct
- Make sure you created the repository on GitHub first
- Verify the repository name matches exactly

### "Authentication failed"
- Use Personal Access Token, not password
- Make sure token has `repo` permissions
- Token might have expired - create a new one

### "Remote origin already exists"
- Run: `git remote remove origin`
- Then run: `git remote add origin https://github.com/YOUR_USERNAME/shooting-star-game.git`

---

## 💡 Quick Reference

**Your GitHub repository URL format:**
```
https://github.com/YOUR_USERNAME/shooting-star-game.git
```

**Common Git commands you'll use:**
```powershell
git status              # See what files changed
git add .               # Add all changes
git commit -m "message" # Save changes with a message
git push                 # Upload to GitHub
```

---

**Ready? Start with Step 1! 🚀**

