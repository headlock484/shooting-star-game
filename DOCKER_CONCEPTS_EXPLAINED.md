# 🐳 Docker Concepts Explained Simply

A beginner-friendly guide to understanding Docker terminology and how to share your builds.

---

## 📸 Why Is It Called an "Image"?

It's called an **image** because it works like a **photograph/snapshot** of your entire app at a specific moment in time.

### Think of It Like This:

| Concept | Real World | Docker |
|---------|-----------|--------|
| **Image** | A photograph of you | A frozen snapshot of your game + everything it needs |
| **Container** | The actual living you | A running copy of that snapshot |

You can take ONE photo and print it multiple times → You can take ONE image and run multiple containers from it!

### What's Actually IN a Docker Image?

When you build a Docker image of your game, it captures:

```
📸 Snapshot contains:
├── Your game files (HTML, JS, CSS)
├── Node.js (the runtime)
├── All npm packages (express, etc.)
├── The operating system bits it needs
└── Instructions on how to start it
```

It's **frozen in time** - like a photograph. It doesn't change.

---

## 🔄 Image vs Container

| Image | Container |
|-------|-----------|
| 📸 A snapshot/template | 🏃 A running instance |
| Doesn't change | Can be started/stopped |
| Like a recipe | Like the actual cooked meal |
| Like a CD/DVD | Like playing the CD |
| Stored on disk | Running in memory |

```
Image (frozen)  →  Container (alive)
     📸         →       🏃
```

### For Your Game:
```bash
# This creates an IMAGE (snapshot) of your game
docker build -t shooting-star-app .

# This creates a CONTAINER (running copy) from that image
docker run shooting-star-app
```

---

## 🏷️ What is "Tagging" a Docker Image?

**Think of it like naming a file on your computer.**

When you build a Docker image, it gets a generic name like `shooting-star-app:latest`. A **tag** is just a **label/name** you give to that specific version of your image.

### Real-World Analogy

Imagine you have a box (your Docker image). You put a sticker on it that says:
- **Box name:** `shooting-star-app`
- **Version:** `latest`

When you "tag" it for Docker Hub, you're adding **your username** to the sticker so Docker Hub knows it belongs to you:

```
Before:  shooting-star-app:latest              (just on your computer)
After:   yourusername/shooting-star-app:latest (ready for Docker Hub)
```

### Why Do You Need to Tag?

Docker Hub is like a public library. To put your image there, Docker needs to know:

1. **Who owns it** → Your Docker Hub username
2. **What it's called** → The image name
3. **Which version** → The tag (like `latest`, `v1.0`, `2024-dec-04`)

The format is: `username/imagename:version`

### Tag Examples
```bash
# Basic tag for Docker Hub
docker tag shooting-star-app:latest fiona/shooting-star-app:latest

# Tag with a specific version
docker tag shooting-star-app:latest fiona/shooting-star-app:v1.0

# Tag with a date (so you remember when you built it)
docker tag shooting-star-app:latest fiona/shooting-star-app:2024-dec-04
```

### What the Tag Command Actually Does

```bash
docker tag shooting-star-app:latest yourusername/shooting-star-app:latest
```

| Part | Meaning |
|------|---------|
| `docker tag` | The command to add a label |
| `shooting-star-app:latest` | Your **existing** local image |
| `yourusername/shooting-star-app:latest` | The **new name** with your username |

**It doesn't copy the image** - it just adds another name pointing to the same image. Like having two shortcuts to the same file!

---

## 📤 Complete Guide: Upload to Docker Hub

### Step 1: Create a Docker Hub Account

1. Go to **https://hub.docker.com**
2. Click **Sign Up** (it's free!)
3. Choose a username (this will be part of your image names)
4. Verify your email

### Step 2: Make Sure Docker Desktop is Running

- Look for the 🐳 whale icon in your system tray (bottom right of screen)
- If not there, open **Docker Desktop** from your Start menu
- Wait until it says "Docker is running"

### Step 3: Open Terminal/PowerShell

- Press `Windows Key + R`
- Type `powershell` and press Enter
- Navigate to your project:
```bash
cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"
```

### Step 4: Build Your Image (If Not Already Built)

```bash
docker-compose build
```
Or:
```bash
docker build -t shooting-star-app .
```

**What you'll see:** Docker downloading and building. This takes 1-2 minutes.

### Step 5: Verify Your Image Exists

```bash
docker images
```

**What you should see:** A list including `shooting-star-app`

### Step 6: Tag Your Image for Docker Hub

Replace `YOUR_DOCKERHUB_USERNAME` with your actual Docker Hub username:

```bash
docker tag shooting-star-app:latest YOUR_DOCKERHUB_USERNAME/shooting-star-app:latest
```

**Example** (if your username is "fiona123"):
```bash
docker tag shooting-star-app:latest fiona123/shooting-star-app:latest
```

### Step 7: Login to Docker Hub

```bash
docker login
```

**What happens:**
- It will ask for your **Username** - type it and press Enter
- It will ask for your **Password** - type it and press Enter (you won't see the characters)
- You should see: `Login Succeeded`

### Step 8: Push (Upload) to Docker Hub

```bash
docker push YOUR_DOCKERHUB_USERNAME/shooting-star-app:latest
```

**Example:**
```bash
docker push fiona123/shooting-star-app:latest
```

**What you'll see:** Progress bars as layers upload. This might take a few minutes depending on your internet speed.

### Step 9: Verify It's Uploaded

1. Go to **https://hub.docker.com**
2. Log in
3. Click on your profile → **Repositories**
4. You should see `shooting-star-app` listed! 🎉

---

## 🎁 Sharing With Your Team

Once your image is on Docker Hub, share these instructions with your team:

### For Your Team Members:

```bash
# Step 1: Make sure Docker Desktop is running

# Step 2: Pull (download) the image
docker pull YOUR_DOCKERHUB_USERNAME/shooting-star-app:latest

# Step 3: Run it
docker run -p 3000:3000 YOUR_DOCKERHUB_USERNAME/shooting-star-app:latest

# Step 4: Open browser to http://localhost:3000
```

That's it! They don't need your source code - just these 2 commands!

---

## 📋 Quick Reference: All Commands in Order

```bash
# 1. Navigate to project
cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"

# 2. Build the image
docker-compose build

# 3. Check it exists
docker images

# 4. Tag for Docker Hub (replace USERNAME)
docker tag shooting-star-app:latest USERNAME/shooting-star-app:latest

# 5. Login to Docker Hub
docker login

# 6. Push to Docker Hub
docker push USERNAME/shooting-star-app:latest

# Done! 🎉
```

---

## 🔖 Version Tagging (Pro Tip)

Instead of always using `latest`, you can create version tags:

```bash
# Tag as version 1.0
docker tag shooting-star-app:latest USERNAME/shooting-star-app:v1.0

# Tag with today's date
docker tag shooting-star-app:latest USERNAME/shooting-star-app:2024-dec-04

# Push specific version
docker push USERNAME/shooting-star-app:v1.0
```

This way you can have multiple versions on Docker Hub and your team can choose which one to use!

---

## ❓ Common Questions

**Q: Is Docker Hub free?**  
A: Yes! Free accounts can have unlimited public repositories. Private repos require a paid plan.

**Q: Will my image be public?**  
A: Yes, by default. Anyone can pull it. For private images, you need Docker Hub Pro.

**Q: How big will the upload be?**  
A: Usually 100-500MB for a Node.js app. First upload takes longest; future uploads are faster because Docker only uploads changed parts.

**Q: Do I need to push every time I make changes?**  
A: Only when you want to share a new version. For local development, just use `docker-compose up -d`.

**Q: Can I delete images from Docker Hub?**  
A: Yes! Go to your repository on hub.docker.com and click Settings → Delete.

---

## 🎯 Summary

| Term | Simple Meaning |
|------|----------------|
| **Image** | A frozen snapshot of your app |
| **Container** | A running copy of an image |
| **Tag** | A name/label for your image |
| **Push** | Upload to Docker Hub |
| **Pull** | Download from Docker Hub |
| **Docker Hub** | Online storage for Docker images (like GitHub for code) |

---

## 📝 Remember

1. **Build** → Creates the image on your computer
2. **Tag** → Adds your username so Docker Hub knows it's yours
3. **Login** → Authenticates you with Docker Hub
4. **Push** → Uploads to Docker Hub
5. **Share** → Give your team the pull command!

That's everything you need to know! 🚀

---

## 🎯 YOUR Personal Quick Reference (headlock1)

Copy-paste ready commands for your Docker Hub account:

```bash
# Navigate to project
cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"

# Build the image
docker-compose build

# Tag for Docker Hub
docker tag public-shooting-star:latest headlock1/shooting-star-app:latest

# Login to Docker Hub
docker login

# Push (upload) to Docker Hub
docker push headlock1/shooting-star-app:latest
```

### Share This With Your Team:

```bash
# Pull (download) the image
docker pull headlock1/shooting-star-app:latest

# Run the game
docker run -p 3000:3000 headlock1/shooting-star-app:latest

# Then open http://localhost:3000 in browser
```

### Your Docker Hub Repository:
https://hub.docker.com/r/headlock1/shooting-star-app

