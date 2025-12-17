# 🚀 Quick Start Guide - View Your Changes

## Every Time You Want to See Your Changes:

### Step 1: Open PowerShell in Your Project Folder
- Right-click on your project folder
- Select "Open in Terminal" or "Open PowerShell window here"
- OR press `Windows Key`, type `powershell`, press Enter, then type:
  ```bash
  cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"
  ```

### Step 2: Make Sure Docker Desktop is Running
- Look for the whale icon 🐳 in your system tray (bottom-right)
- If it's not there, open Docker Desktop from Start menu

### Step 3: Start Your Game
Copy and paste this command:
```bash
docker-compose up -d
```

### Step 4: Open Your Browser
Go to: **http://localhost:3000**

You should see your game! 🎉

---

## If You Made Changes to Your Files:

After you edit your HTML, CSS, or JavaScript files:

1. **Stop the old version:**
   ```bash
   docker-compose down
   ```

2. **Rebuild with your changes:**
   ```bash
   docker-compose up -d --build
   ```

3. **Refresh your browser** (press F5 or Ctrl+R)

---

## Stop the Game When Done:

```bash
docker-compose down
```

---

## Troubleshooting:

**Game not showing?**
- Check if container is running: `docker ps`
- Check logs: `docker logs shooting-star-app`
- Make sure Docker Desktop is running

**Changes not appearing?**
- Make sure you ran: `docker-compose up -d --build`
- Hard refresh browser: `Ctrl + Shift + R`

---

## That's It! 🎉

Just remember:
1. Open PowerShell in project folder
2. Run: `docker-compose up -d`
3. Open: `http://localhost:3000`

