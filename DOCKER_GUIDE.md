# 🐳 How to Run Your Game in Docker - Beginner's Guide

## What is Docker?
Think of Docker like a shipping container for your app. It packages everything your game needs to run, so it works the same way on any computer.

## Step-by-Step Instructions

### Step 1: Open Command Prompt or PowerShell
- Press `Windows Key + R`
- Type `cmd` and press Enter (or type `powershell` for PowerShell)
- OR right-click on your project folder and select "Open in Terminal" or "Open PowerShell window here"

### Step 2: Navigate to Your Project Folder
Type this command (replace with your actual path if different):
```bash
cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"
```

Press Enter.

### Step 3: Check if Docker is Running
Type this command:
```bash
docker --version
```

**What you should see:** Something like `Docker version 20.10.x` or similar

**If you see an error:** Docker might not be installed or running. Make sure Docker Desktop is open (look for the Docker icon in your system tray).

### Step 4: Build and Start Your Game
Type this command:
```bash
docker-compose up -d
```

**What this does:**
- `docker-compose` = tells Docker to use the configuration file
- `up` = start the container
- `-d` = run in the background (so you can keep using your terminal)

**What you'll see:** Docker will download Node.js, install your app, and start it. This might take 1-2 minutes the first time.

**Expected output:**
```
Creating network...
Creating shooting-star-app...
Starting shooting-star-app...
```

### Step 5: Check if It's Running
Type this command:
```bash
docker ps
```

**What you should see:** A table with a row showing `shooting-star-app` with status "Up"

**What this means:** Your game is running! ✅

### Step 6: Open Your Game in a Browser
1. Open any web browser (Chrome, Firefox, Edge, etc.)
2. In the address bar, type:
   ```
   http://localhost:3000
   ```
3. Press Enter

**You should see:** Your Shooting Star game landing page! 🎉

---

## How to Check if Everything is Working

### Method 1: Check Container Status
```bash
docker ps
```
Look for `shooting-star-app` in the list. If you see it, it's running!

### Method 2: Check the Logs
```bash
docker logs shooting-star-app
```

**What you should see:**
```
🚀 Shooting Star server running on http://localhost:3000
📁 Serving files from: /app
```

### Method 3: Test the Health Endpoint
Open a new terminal and type:
```bash
curl http://localhost:3000/health
```

**What you should see:**
```json
{"status":"ok","message":"Shooting Star server is running"}
```

**Note:** If `curl` doesn't work, you can also just open `http://localhost:3000/health` in your browser.

### Method 4: Open in Browser
Simply open your browser and go to:
```
http://localhost:3000
```

If you see your game, everything is working! ✅

---

## Common Commands You'll Need

### View Logs (see what's happening)
```bash
docker logs shooting-star-app
```

### View Logs in Real-Time (watch updates)
```bash
docker logs -f shooting-star-app
```
Press `Ctrl + C` to stop watching.

### Stop the Game
```bash
docker-compose down
```

### Start the Game Again
```bash
docker-compose up -d
```

### Restart the Game
```bash
docker-compose restart
```

### Remove Everything (if you want to start fresh)
```bash
docker-compose down
docker-compose up -d --build
```

---

## Troubleshooting

### Problem: "docker: command not found"
**Solution:** Docker isn't installed or isn't in your PATH. Make sure Docker Desktop is installed and running.

### Problem: "port is already allocated" or "port 3000 is in use"
**Solution:** Something else is using port 3000. You can:
1. Close whatever is using port 3000, OR
2. Change the port in `docker-compose.yml`:
   ```yaml
   ports:
     - "8080:3000"  # Change 3000 to 8080 on the left side
   ```
   Then access at `http://localhost:8080`

### Problem: Container keeps stopping
**Solution:** Check the logs:
```bash
docker logs shooting-star-app
```
This will show you what went wrong.

### Problem: Can't see the game in browser
**Solutions:**
1. Make sure the container is running: `docker ps`
2. Try `http://127.0.0.1:3000` instead of `localhost:3000`
3. Check if Windows Firewall is blocking it
4. Check the logs: `docker logs shooting-star-app`

### Problem: "Cannot connect to Docker daemon"
**Solution:** Docker Desktop isn't running. Open Docker Desktop application and wait for it to start (look for the whale icon in system tray).

---

## Visual Checklist

✅ Docker Desktop is running (whale icon in system tray)  
✅ Opened terminal/command prompt  
✅ Navigated to project folder  
✅ Ran `docker-compose up -d`  
✅ Ran `docker ps` and see the container  
✅ Opened browser to `http://localhost:3000`  
✅ See your game! 🎉

---

## What Each File Does (Simple Explanation)

- **package.json** = List of things your app needs (like a shopping list)
- **server.js** = The program that runs your website
- **Dockerfile** = Instructions for Docker on how to build your app
- **docker-compose.yml** = Settings for running your app (like port number)
- **README.md** = Documentation (this file!)

---

## Need More Help?

If something doesn't work:
1. Check the logs: `docker logs shooting-star-app`
2. Make sure Docker Desktop is running
3. Try restarting: `docker-compose restart`
4. Check that port 3000 isn't being used by something else

---

## 📸 Understanding Docker Terms

### Why Is It Called an "Image"?

It's called an **image** because it works like a **photograph/snapshot** of your entire app at a specific moment in time.

| Concept | Real World | Docker |
|---------|-----------|--------|
| **Image** | A photograph of you | A frozen snapshot of your game + everything it needs |
| **Container** | The actual living you | A running copy of that snapshot |

You can take ONE photo and print it multiple times → You can take ONE image and run multiple containers from it!

### Image vs Container

| Image | Container |
|-------|-----------|
| 📸 A snapshot/template | 🏃 A running instance |
| Doesn't change | Can be started/stopped |
| Like a recipe | Like the actual cooked meal |
| Stored on disk | Running in memory |

---

## 🏷️ What is "Tagging"?

**Think of it like naming a file on your computer.**

A **tag** is just a **label/name** you give to a specific version of your image.

When you "tag" for Docker Hub, you're adding **your username** so Docker Hub knows it belongs to you:

```
Before:  shooting-star-app:latest              (just on your computer)
After:   yourusername/shooting-star-app:latest (ready for Docker Hub)
```

The format is: `username/imagename:version`

---

## 📤 How to Upload to Docker Hub (Step-by-Step)

### Step 1: Create a Docker Hub Account
1. Go to **https://hub.docker.com**
2. Click **Sign Up** (it's free!)
3. Choose a username
4. Verify your email

### Step 2: Make Sure Docker Desktop is Running
Look for the 🐳 whale icon in your system tray

### Step 3: Build Your Image (If Not Already Built)
```bash
docker-compose build
```

### Step 4: Verify Your Image Exists
```bash
docker images
```

### Step 5: Tag Your Image for Docker Hub
Replace `YOUR_USERNAME` with your Docker Hub username:
```bash
docker tag shooting-star-app:latest YOUR_USERNAME/shooting-star-app:latest
```

### Step 6: Login to Docker Hub
```bash
docker login
```
Enter your username and password when prompted.

### Step 7: Push (Upload) to Docker Hub
```bash
docker push YOUR_USERNAME/shooting-star-app:latest
```

### Step 8: Verify It's Uploaded
Go to https://hub.docker.com → Your Profile → Repositories

---

## 🎁 Share With Your Team

Once uploaded, give your team these commands:

```bash
# Pull (download) the image
docker pull YOUR_USERNAME/shooting-star-app:latest

# Run it
docker run -p 3000:3000 YOUR_USERNAME/shooting-star-app:latest

# Open browser to http://localhost:3000
```

---

## 📋 Quick Reference: Upload Commands

```bash
# 1. Build the image
docker-compose build

# 2. Tag for Docker Hub
docker tag shooting-star-app:latest USERNAME/shooting-star-app:latest

# 3. Login
docker login

# 4. Push to Docker Hub
docker push USERNAME/shooting-star-app:latest
```

---

## 🎯 Docker Terms Summary

| Term | Simple Meaning |
|------|----------------|
| **Image** | A frozen snapshot of your app |
| **Container** | A running copy of an image |
| **Tag** | A name/label for your image |
| **Push** | Upload to Docker Hub |
| **Pull** | Download from Docker Hub |
| **Docker Hub** | Online storage for images (like GitHub for code) |

