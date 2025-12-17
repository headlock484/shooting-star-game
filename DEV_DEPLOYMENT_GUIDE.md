# 🚀 Dev/Test Environment Deployment Guide

## Quick Start (5 Minutes)

### Prerequisites
- Docker and Docker Compose installed on the server
- Access to the deployment server (SSH or direct access)

### Step 1: Transfer Files
Copy the entire `public` folder to your dev/test server.

### Step 2: Navigate to Project Folder
```bash
cd /path/to/public
```

### Step 3: Deploy
```bash
docker-compose up -d --build
```

### Step 4: Verify
```bash
# Check if container is running
docker ps

# Check logs
docker-compose logs -f

# Test health endpoint
curl http://localhost:3000/health
```

### Step 5: Access
Open browser: `http://your-server-ip:3000`

**💡 Want to deploy to the cloud?** See `CLOUD_DEPLOYMENT_GUIDE.md` for step-by-step instructions on deploying to Railway, DigitalOcean, or Render. Perfect for learning cloud deployment!

---

## What Your Dev Team Needs to Know

### File Structure
All files are in the `public` folder:
- `index.html` - Landing page
- `shooting_star_classic_FINAL.html` - Classic game mode
- `shooting_star_pvp_FINAL.html` - PvP game mode
- `server.js` - Express server
- `Dockerfile` - Docker build instructions
- `docker-compose.yml` - Docker configuration
- `package.json` - Dependencies
- `assets/` - Audio and other assets
- `js/` - JavaScript files

### Port Configuration
- **Default Port:** 3000
- **To Change Port:** Edit `docker-compose.yml`:
  ```yaml
  ports:
    - "YOUR_PORT:3000"  # Change YOUR_PORT to desired port
  ```

### Environment Variables
- `PORT` - Server port (default: 3000)
- Set in `docker-compose.yml` or via environment file

---

## Common Deployment Scenarios

### Scenario 1: Standard Deployment
```bash
docker-compose up -d --build
```
Access at: `http://server-ip:3000`

### Scenario 2: Custom Port
1. Edit `docker-compose.yml`:
   ```yaml
   ports:
     - "8080:3000"  # Use port 8080 instead
   ```
2. Deploy:
   ```bash
   docker-compose up -d --build
   ```
3. Access at: `http://server-ip:8080`

### Scenario 3: Behind Reverse Proxy (nginx/Apache)
1. Deploy normally:
   ```bash
   docker-compose up -d --build
   ```
2. Configure reverse proxy to forward to `localhost:3000`
3. Example nginx config:
   ```nginx
   location / {
       proxy_pass http://localhost:3000;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
   }
   ```

---

## Useful Commands

### Start/Stop
```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# Restart
docker-compose restart

# Rebuild and restart
docker-compose up -d --build
```

### Monitoring
```bash
# View logs
docker-compose logs -f

# Check status
docker-compose ps

# View container logs
docker logs shooting-star-app
```

### Troubleshooting
```bash
# Check if container is running
docker ps

# Check container health
docker inspect shooting-star-app | grep Health

# View detailed logs
docker-compose logs --tail=100
```

---

## Health Check

The application includes a health check endpoint:
- **URL:** `http://your-server:3000/health`
- **Expected Response:**
  ```json
  {
    "status": "ok",
    "message": "Shooting Star server is running"
  }
  ```

Use this for monitoring and load balancer health checks.

---

## Updating the Application

When you receive updates:

1. **Stop the container:**
   ```bash
   docker-compose down
   ```

2. **Replace files** with new versions

3. **Rebuild and start:**
   ```bash
   docker-compose up -d --build
   ```

---

## Production Considerations

For production deployment, consider:

1. **Reverse Proxy:** Use nginx or Apache in front
2. **SSL/TLS:** Configure HTTPS certificates
3. **Environment Variables:** Use `.env` file for configuration
4. **Monitoring:** Set up logging and monitoring
5. **Backup:** Regular backups of configuration

---

## Support

If you encounter issues:
1. Check logs: `docker-compose logs -f`
2. Verify Docker is running: `docker ps`
3. Check port availability: `netstat -tuln | grep 3000`
4. Review this guide and `DOCKER_GUIDE.md`

---

## Quick Reference

| Task | Command |
|------|---------|
| Deploy | `docker-compose up -d --build` |
| Stop | `docker-compose down` |
| Restart | `docker-compose restart` |
| View Logs | `docker-compose logs -f` |
| Check Status | `docker-compose ps` |
| Health Check | `curl http://localhost:3000/health` |

---

**That's it! The application is ready to deploy.** 🎉

