# Shooting Star Game

A web-based shooting star crash game with Classic and Player vs Player (PvP) modes.

## Project Structure

```
.
├── public/                 # Static files (HTML, JS, CSS, assets)
│   ├── index.html          # Landing page
│   ├── shooting_star_classic_FINAL.html
│   ├── shooting_star_pvp_FINAL.html
│   ├── js/
│   │   └── makeAWish.js
│   ├── multiplier-timing.js
│   └── assets/
│       └── audio/
├── server.js               # Express server
├── package.json            # Node.js dependencies
├── Dockerfile             # Docker image configuration
├── docker-compose.yml     # Docker Compose configuration
└── README.md              # This file
```

## Running Locally (Without Docker)

1. Install Node.js (v18 or higher)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to: `http://localhost:3000`

## Running with Docker

### Option 1: Using Docker Compose (Recommended)

1. Make sure Docker and Docker Compose are installed
2. Build and start the container:
   ```bash
   docker-compose up -d
   ```
3. The application will be available at: `http://localhost:3000`

**Useful Docker Compose commands:**
- View logs: `docker-compose logs -f`
- Stop the container: `docker-compose down`
- Restart the container: `docker-compose restart`
- Rebuild after changes: `docker-compose up -d --build`

### Option 2: Using Docker directly

1. Build the Docker image:
   ```bash
   docker build -t shooting-star .
   ```

2. Run the container:
   ```bash
   docker run -d -p 3000:3000 --name shooting-star-app shooting-star
   ```

3. The application will be available at: `http://localhost:3000`

**Useful Docker commands:**
- View logs: `docker logs -f shooting-star-app`
- Stop the container: `docker stop shooting-star-app`
- Start the container: `docker start shooting-star-app`
- Remove the container: `docker rm shooting-star-app`
- Remove the image: `docker rmi shooting-star`

## Viewing the Application in Docker

Once the container is running, you can access the application in several ways:

### 1. From your local browser:
- Open your web browser
- Navigate to: `http://localhost:3000`
- You should see the Shooting Star landing page

### 2. Check if the container is running:
```bash
docker ps
```
You should see `shooting-star-app` in the list.

### 3. View container logs:
```bash
docker logs shooting-star-app
```
or with Docker Compose:
```bash
docker-compose logs -f
```

### 4. Access the health endpoint:
```bash
curl http://localhost:3000/health
```
Should return: `{"status":"ok","message":"Shooting Star server is running"}`

### 5. If you need to change the port:
Edit `docker-compose.yml` and change the port mapping:
```yaml
ports:
  - "8080:3000"  # Maps host port 8080 to container port 3000
```
Then access at: `http://localhost:8080`

## Troubleshooting

### Container won't start:
- Check logs: `docker logs shooting-star-app`
- Verify Docker is running: `docker ps`
- Check if port 3000 is already in use

### Can't access the application:
- Verify the container is running: `docker ps`
- Check the port mapping in `docker-compose.yml`
- Try accessing `http://localhost:3000/health` to test connectivity
- Check firewall settings

### Changes not appearing:
- Rebuild the image: `docker-compose up -d --build`
- Or restart: `docker-compose restart`

## Environment Variables

You can customize the port by setting the `PORT` environment variable:
```bash
docker run -d -p 3000:8080 -e PORT=8080 shooting-star
```

## Production Deployment

For production, consider:
- Using a reverse proxy (nginx)
- Setting up SSL/TLS certificates
- Using environment variables for configuration
- Setting up proper logging and monitoring

