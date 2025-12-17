# 🚀 Quick GitHub Setup - Let's Get Your Code Online!

Since Git might not be in your PowerShell PATH, here are your options:

---

## ✅ Option 1: Use Git Bash (Easiest)

**If you have Git installed, you should have "Git Bash" installed too!**

1. **Open Git Bash:**
   - Press `Windows Key`
   - Type: `Git Bash`
   - Click on "Git Bash"

2. **Navigate to your project:**
   ```bash
   cd /c/Users/fiona/OneDrive/Desktop/FINAL_shooting_star/public
   ```

3. **Set up Git repository:**
   ```bash
   # Initialize git
   git init
   
   # Add all files
   git add .
   
   # Create first commit
   git commit -m "Initial commit - Shooting Star Game"
   
   # Set branch to main
   git branch -M main
   ```

4. **Connect to GitHub:**
   ```bash
   # Replace YOUR_USERNAME with your GitHub username
   git remote add origin https://github.com/YOUR_USERNAME/shooting-star-game.git
   ```

5. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```
   - When asked for username: Enter your GitHub username
   - When asked for password: Enter a **Personal Access Token** (see below)

---

## ✅ Option 2: Create Repository on GitHub First

**Do this FIRST before running git commands:**

1. **Go to GitHub:** https://github.com
2. **Click "+" → "New repository"**
3. **Name:** `shooting-star-game`
4. **Make it Public**
5. **Don't check any boxes** (no README, no .gitignore)
6. **Click "Create repository"**
7. **Copy the repository URL** - you'll need it!

---

## 🔑 Create Personal Access Token

**GitHub requires a token instead of password:**

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Name:** `Railway Deployment`
4. **Expiration:** Choose 90 days (or longer)
5. **Check:** `repo` (full repository access)
6. **Click "Generate token"**
7. **COPY THE TOKEN** (you won't see it again!)
8. **Use this token as your password** when pushing

---

## 📋 Complete Command List

**Run these in Git Bash (or PowerShell if Git works):**

```bash
# 1. Make sure you're in the right folder
cd /c/Users/fiona/OneDrive/Desktop/FINAL_shooting_star/public

# 2. Initialize git
git init

# 3. Add all files
git add .

# 4. Create commit
git commit -m "Initial commit - Shooting Star Game with Live Bets"

# 5. Set branch name
git branch -M main

# 6. Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/shooting-star-game.git

# 7. Push to GitHub
git push -u origin main
```

---

## 🎯 After Code is on GitHub

**Next step: Deploy to Railway!**

1. Go to: https://railway.app
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose `shooting-star-game`
6. Railway will auto-deploy!
7. Get your public URL 🎉

---

## 🐛 Troubleshooting

### "Git is not recognized"
- Use Git Bash instead of PowerShell
- Or restart PowerShell completely

### "Repository not found"
- Make sure you created the repository on GitHub first
- Check your username is correct

### "Authentication failed"
- Use Personal Access Token, not password
- Make sure token has `repo` permissions

### "Remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/shooting-star-game.git
```

---

## 💡 Quick Tips

- **Git Bash path format:** `/c/Users/fiona/...` (forward slashes, /c for C:)
- **PowerShell path format:** `C:\Users\fiona\...` (backslashes)
- **Always create GitHub repo first** before pushing
- **Save your Personal Access Token** somewhere safe

---

**Ready? Start with creating the GitHub repository, then use Git Bash! 🚀**

