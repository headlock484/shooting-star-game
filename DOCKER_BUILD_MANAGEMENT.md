# 🐳 Docker Build Management & Sharing Guide

## 📦 Viewing Previous Builds

### Quick Start (View Yesterday's Build)
1. **Start Docker Desktop** (look for whale icon in system tray)
2. **Check if container exists:**
   ```bash
   docker ps -a
   ```
   This shows all containers (running and stopped)

3. **Start existing container:**
   ```bash
   docker start shooting-star-app
   ```
   OR rebuild and start:
   ```bash
   docker-compose up -d
   ```

4. **Open in browser:** `http://localhost:3000`

### Where Are Builds Stored?

**Docker Images** (the built app):
- Stored on your computer in Docker's storage
- Location: Usually `C:\ProgramData\docker` (Windows)
- View all images: `docker images`
- Images persist until you delete them

**Docker Containers** (running instances):
- Containers are temporary by default
- They stop when you shut down Docker or restart your computer
- Data inside containers is lost unless you use volumes

### View Your Stored Images
```bash
# See all images you've built
docker images

# See all containers (running and stopped)
docker ps -a
```

### Save a Specific Build (Tag It)
```bash
# Tag your current build with a version/date
docker tag shooting-star-app:latest shooting-star-app:v1.0-2024-01-15

# Now you can reference it later
docker run shooting-star-app:v1.0-2024-01-15
```

---

## 🔄 Always Need Docker to View?

**Short answer:** Yes, for Docker builds. But you have alternatives:

### Option 1: Run Without Docker (Development)
```bash
# Install dependencies
npm install

# Run directly
npm start

# Then open http://localhost:3000
```
This doesn't require Docker at all!

### Option 2: Use Docker (Production-like)
- More consistent environment
- Matches production setup
- Requires Docker Desktop running

---

## 📤 Sharing Docker Builds

### Method 1: Share Source Code (Easiest - Recommended)
**Best for:** Sharing with developers

1. Share your project folder (zip, git, etc.)
2. Recipient runs:
   ```bash
   docker-compose up -d
   ```

**Pros:** 
- Small file size
- Recipient gets latest code
- Standard practice

**Cons:** 
- Recipient needs to build it

---

### Method 2: Docker Hub (Best for Teams)
**Best for:** Sharing with team members or deploying

#### Step 1: Create Docker Hub Account
- Go to https://hub.docker.com
- Sign up (free)

#### Step 2: Tag Your Image
```bash
# Replace 'yourusername' with your Docker Hub username
docker tag shooting-star-app:latest yourusername/shooting-star-app:latest
```

#### Step 3: Login to Docker Hub
```bash
docker login
# Enter your Docker Hub username and password
```

#### Step 4: Push to Docker Hub
```bash
docker push yourusername/shooting-star-app:latest
```

#### Step 5: Share with Others
Others can now pull and run:
```bash
docker pull yourusername/shooting-star-app:latest
docker run -p 3000:3000 yourusername/shooting-star-app:latest
```

**Pros:**
- Easy sharing
- Version control
- Works anywhere Docker runs

**Cons:**
- Requires Docker Hub account
- Image is public (unless you pay for private repos)

---

### Method 3: Export/Import Image File
**Best for:** Sharing without internet or Docker Hub

#### Export (Create a file):
```bash
# Save image to a file
docker save shooting-star-app:latest -o shooting-star-app.tar

# Or compressed (smaller file)
docker save shooting-star-app:latest | gzip > shooting-star-app.tar.gz
```

#### Share the file:
- Send `shooting-star-app.tar` or `shooting-star-app.tar.gz` to recipient
- File will be large (hundreds of MB to GB)

#### Import (Recipient loads it):
```bash
# Load the image
docker load -i shooting-star-app.tar

# Or if compressed
gunzip -c shooting-star-app.tar.gz | docker load

# Then run it
docker run -p 3000:3000 shooting-star-app:latest
```

**Pros:**
- Works offline
- No account needed
- Exact copy of your build

**Cons:**
- Large file size
- Manual file transfer

---

### Method 4: Share docker-compose.yml + Source
**Best for:** Quick sharing with developers

1. Share your entire project folder
2. Recipient just runs:
   ```bash
   docker-compose up -d
   ```

This is usually the easiest method!

---

## 🎯 Quick Reference Commands

### Daily Use
```bash
# Start Docker Desktop (GUI application)
# Then in terminal:

# Start your app
docker-compose up -d

# Stop your app
docker-compose down

# View logs
docker logs shooting-star-app

# Check if running
docker ps
```

### Build Management
```bash
# List all images
docker images

# List all containers
docker ps -a

# Remove old containers
docker container prune

# Remove old images
docker image prune

# Tag a build
docker tag shooting-star-app:latest shooting-star-app:v1.0
```

### Sharing
```bash
# Export to file
docker save shooting-star-app:latest -o app.tar

# Push to Docker Hub
docker push yourusername/shooting-star-app:latest

# Pull from Docker Hub
docker pull yourusername/shooting-star-app:latest
```

---

## 💡 Pro Tips

1. **Always tag important builds:**
   ```bash
   docker tag shooting-star-app:latest shooting-star-app:production-2024-01-15
   ```

2. **Use docker-compose for consistency:**
   - Everyone gets the same setup
   - Easy to share

3. **For development, run without Docker:**
   - Faster iteration
   - Easier debugging
   - Use Docker for final testing

4. **Clean up old images:**
   ```bash
   docker system prune -a
   ```
   (Be careful - removes unused images!)

---

## ❓ FAQ

**Q: Do I need Docker Desktop running all the time?**  
A: Only when you want to run Docker containers. You can close it when not using Docker.

**Q: Will my build from yesterday still work?**  
A: Yes! Images persist. Just start Docker Desktop and run `docker-compose up -d`.

**Q: Can I view the app without Docker?**  
A: Yes! Run `npm install && npm start` directly (no Docker needed).

**Q: What's the smallest way to share?**  
A: Share source code + docker-compose.yml (Method 1 or 4).

**Q: What's the easiest way to share?**  
A: Docker Hub (Method 2) - one command to pull and run.

