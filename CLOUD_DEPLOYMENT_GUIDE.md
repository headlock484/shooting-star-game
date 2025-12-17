# ☁️ Cloud Deployment Guide - Learn to Deploy Your Game Online

**Yes, this still uses Docker!** The same Docker setup you have locally will run on a cloud server. This guide teaches you how to deploy it.

---

## 🎯 What You'll Learn

By the end of this guide, you'll know how to:
- ✅ Deploy your game to a cloud server
- ✅ Get a public URL that anyone can access
- ✅ Understand cloud hosting basics
- ✅ Update your deployed game
- ✅ Monitor and troubleshoot deployments

**This is a valuable skill** that looks great on your resume! 🚀

---

## 🏗️ How Cloud Deployment Works

### The Big Picture:
```
Your Computer (Local)          →    Cloud Server (Online)
├── Docker Container          →    ├── Same Docker Container
├── localhost:3000            →    ├── Public IP:3000
└── Only you can access       →    └── Anyone can access!
```

### What Happens:
1. You upload your files to a cloud server
2. The server runs Docker (same as your computer)
3. Your game becomes accessible via a public URL
4. Anyone with the link can play your game!

---

## 🎓 Option 1: Railway (Easiest - Recommended for Learning)

**Why Railway?**
- ✅ Super beginner-friendly
- ✅ Free tier available ($5 credit/month)
- ✅ Automatic HTTPS (secure URLs)
- ✅ One-click deployment
- ✅ Great for learning

### Step-by-Step Guide:

#### Step 1: Sign Up
1. Go to: https://railway.app
2. Click "Start a New Project"
3. Sign up with GitHub (easiest) or email

#### Step 2: Create New Project
1. Click "New Project"
2. Select "Deploy from GitHub repo" (if you have GitHub) OR "Empty Project"

#### Step 3: Connect Your Code

**Option A: If you have GitHub:**
1. Connect your GitHub account
2. Select your repository (or create one)
3. Railway will detect Docker automatically

**Option B: If you don't have GitHub:**
1. Click "Empty Project"
2. Click "Add Service" → "GitHub Repo"
3. Create a GitHub repo and push your code

#### Step 4: Configure Deployment
1. Railway will auto-detect your `Dockerfile`
2. Set the port to `3000` (should be automatic)
3. Click "Deploy"

#### Step 5: Get Your Public URL
1. Once deployed, Railway gives you a URL like:
   ```
   https://your-app-name.up.railway.app
   ```
2. Click on it to open your game!
3. **This URL works from anywhere in the world!** 🌍

#### Step 6: Update Your Game
Whenever you make changes:
1. Push changes to GitHub
2. Railway automatically rebuilds and redeploys
3. Your URL stays the same, but content updates!

---

## 🎓 Option 2: DigitalOcean (More Control - Great for Learning)

**Why DigitalOcean?**
- ✅ Industry-standard (used by many companies)
- ✅ $6/month (very affordable)
- ✅ Full server control (great learning experience)
- ✅ More hands-on

### Step-by-Step Guide:

#### Step 1: Create Account & Droplet
1. Go to: https://www.digitalocean.com
2. Sign up (get $200 credit for 60 days!)
3. Click "Create" → "Droplets"
4. Choose:
   - **Image:** Ubuntu 22.04 LTS
   - **Plan:** Basic ($6/month is fine)
   - **Region:** Choose closest to you
   - **Authentication:** SSH keys (or password)

#### Step 2: Connect to Your Server
1. After creation, you'll get an IP address (e.g., `157.230.123.45`)
2. Open PowerShell/Command Prompt
3. Connect via SSH:
   ```bash
   ssh root@YOUR_SERVER_IP
   ```
   (Replace `YOUR_SERVER_IP` with your actual IP)

#### Step 3: Install Docker on Server
Once connected, run these commands:
```bash
# Update system
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install docker-compose -y

# Verify installation
docker --version
docker-compose --version
```

#### Step 4: Upload Your Files
**Option A: Using SCP (from your computer):**
```powershell
# In PowerShell on YOUR computer (not the server)
scp -r "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public" root@YOUR_SERVER_IP:/root/shooting-star
```

**Option B: Using Git (recommended):**
1. Create a GitHub repo
2. Push your code
3. On server, run:
   ```bash
   git clone YOUR_GITHUB_REPO_URL
   cd shooting-star/public
   ```

#### Step 5: Deploy on Server
```bash
# Navigate to your project
cd /root/shooting-star/public

# Deploy with Docker
docker-compose up -d --build

# Check it's running
docker ps
```

#### Step 6: Open Firewall Port
```bash
# Allow port 3000
ufw allow 3000/tcp
ufw enable
```

#### Step 7: Access Your Game
Open browser: `http://YOUR_SERVER_IP:3000`

**Example:** If your IP is `157.230.123.45`, use:
```
http://157.230.123.45:3000
```

---

## 🎓 Option 3: Render (Simple & Free Tier)

**Why Render?**
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Easy setup
- ✅ Good for small projects

### Step-by-Step Guide:

#### Step 1: Sign Up
1. Go to: https://render.com
2. Sign up with GitHub

#### Step 2: Create Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repo
3. Select your repository

#### Step 3: Configure
- **Name:** shooting-star (or your choice)
- **Environment:** Docker
- **Dockerfile Path:** `Dockerfile` (or `public/Dockerfile` if in subfolder)
- **Port:** 3000

#### Step 4: Deploy
1. Click "Create Web Service"
2. Render will build and deploy automatically
3. Get your URL: `https://your-app.onrender.com`

---

## 🔄 Updating Your Deployed Game

### For Railway/Render (Automatic):
1. Make changes to your code
2. Push to GitHub
3. Cloud service auto-redeploys
4. Done! ✨

### For DigitalOcean (Manual):
```bash
# SSH into server
ssh root@YOUR_SERVER_IP

# Navigate to project
cd /root/shooting-star/public

# Pull latest changes (if using Git)
git pull

# Rebuild and restart
docker-compose down
docker-compose up -d --build
```

---

## 🛠️ Troubleshooting

### Game Not Loading?
1. **Check if container is running:**
   ```bash
   docker ps
   ```

2. **Check logs:**
   ```bash
   docker-compose logs -f
   ```

3. **Verify port is open:**
   - Railway/Render: Check service settings
   - DigitalOcean: Check firewall: `ufw status`

### Health Check
Test if server is responding:
```bash
curl http://YOUR_URL/health
```

Should return:
```json
{"status":"ok","message":"Shooting Star server is running"}
```

---

## 📊 Comparison Table

| Feature | Railway | DigitalOcean | Render |
|---------|---------|--------------|--------|
| **Difficulty** | ⭐ Easy | ⭐⭐⭐ Advanced | ⭐⭐ Medium |
| **Free Tier** | ✅ $5/month credit | ❌ $6/month | ✅ Free tier |
| **Learning Value** | ⭐⭐ Good | ⭐⭐⭐ Excellent | ⭐⭐ Good |
| **Control** | Limited | Full | Limited |
| **Best For** | Quick deployment | Learning servers | Free projects |

---

## 🎯 Recommended Learning Path

### Week 1: Start with Railway
- Deploy your game
- Learn the basics
- Get comfortable with cloud concepts

### Week 2: Try DigitalOcean
- Learn server management
- Understand SSH, Linux basics
- Gain deeper knowledge

### Week 3: Compare & Learn
- Understand differences
- Learn when to use each
- Build confidence

---

## 💡 Pro Tips

1. **Always use Git/GitHub** - Makes updates easier
2. **Test locally first** - Fix issues before deploying
3. **Monitor logs** - Learn what's happening
4. **Use health checks** - Verify everything works
5. **Document your process** - Helps you remember!

---

## 🎓 What This Teaches You

By doing this, you're learning:
- ✅ **DevOps basics** (deployment, containers)
- ✅ **Cloud computing** (AWS, Azure, GCP concepts)
- ✅ **Server management** (Linux, SSH, networking)
- ✅ **CI/CD concepts** (automated deployment)
- ✅ **Production deployment** (real-world skills)

**These are valuable, in-demand skills!** 💼

---

## 📚 Next Steps After Deployment

1. **Add a Domain Name** (optional)
   - Buy domain from Namecheap/GoDaddy
   - Point it to your server
   - Looks more professional!

2. **Set Up Monitoring**
   - Use Railway/Render's built-in monitoring
   - Or add UptimeRobot (free)

3. **Learn About SSL/HTTPS**
   - Railway/Render: Automatic
   - DigitalOcean: Use Let's Encrypt (free)

4. **Explore More**
   - Load balancing
   - Auto-scaling
   - Database integration
   - CI/CD pipelines

---

## 🚀 Ready to Deploy?

**Recommended First Step:**
1. Try Railway (easiest)
2. Get your game online in 10 minutes
3. Share the URL with friends/colleagues
4. Then explore DigitalOcean for deeper learning

**Your game URL will look like:**
- Railway: `https://shooting-star.up.railway.app`
- DigitalOcean: `http://157.230.123.45:3000`
- Render: `https://shooting-star.onrender.com`

---

## ❓ Questions?

**Common Questions:**

**Q: Do I need to keep my computer on?**
A: No! Once deployed, the cloud server runs 24/7.

**Q: How much does it cost?**
A: Railway: Free tier. DigitalOcean: $6/month. Render: Free tier.

**Q: Can I stop/start the server?**
A: Yes! You can pause Railway/Render services. DigitalOcean charges even when stopped.

**Q: Is my code safe?**
A: Yes, cloud providers are secure. Use strong passwords and SSH keys.

---

**Good luck with your deployment! You've got this! 🎉**

