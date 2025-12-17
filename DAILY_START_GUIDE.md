# 🚀 Daily Start Guide - Run Your Game Every Morning

## Quick Start (Copy & Paste These Commands)

### Step 1: Open PowerShell
- Press `Windows Key + X`
- Click "Windows PowerShell" or "Terminal"

### Step 2: Go to Your Project Folder
```powershell
cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"
```

### Step 3: Start Your Game
```powershell
npm.cmd start
```

### Step 4: Open Your Browser
Go to: **http://localhost:3000**

**That's it!** 🎉

---

## ⚠️ Important: Use `npm.cmd` (Not `npm`)

**In PowerShell, always use:**
- ✅ `npm.cmd start` 
- ❌ NOT `npm start`

**Why?** PowerShell blocks `npm` but allows `npm.cmd`.

---

## 📋 Complete Daily Routine

### Morning (Start Your Game):
1. Open PowerShell
2. Type: `cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"`
3. Type: `npm.cmd start`
4. Open browser to `http://localhost:3000`
5. **Keep the PowerShell window open!** (Don't close it - that stops your game)

### Evening (Stop Your Game):
1. Go to the PowerShell window where your game is running
2. Press `Ctrl + C`
3. Close the window

---

## 🔄 Alternative: Use Command Prompt (Easier!)

If you prefer, use Command Prompt instead - it's simpler:

### Step 1: Open Command Prompt
- Press `Windows Key + R`
- Type `cmd`
- Press Enter

### Step 2: Go to Your Project
```bash
cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"
```

### Step 3: Start Your Game
```bash
npm start
```
(Note: In Command Prompt, you can use `npm` directly - no `.cmd` needed!)

### Step 4: Open Browser
Go to: **http://localhost:3000**

---

## 💡 Pro Tips

### Create a Desktop Shortcut (Super Easy!)

1. Right-click on your desktop
2. Click "New" → "Shortcut"
3. Paste this:
   ```
   powershell.exe -NoExit -Command "cd 'C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public'; npm.cmd start"
   ```
4. Click "Next"
5. Name it: "Start Shooting Star Game"
6. Click "Finish"

**Now you can just double-click the shortcut every morning!** 🎉

---

### Create a Batch File (Even Easier!)

1. Open Notepad
2. Paste this:
   ```batch
   @echo off
   cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"
   npm start
   pause
   ```
3. Save as: `StartGame.bat` (save it in your project folder)
4. Double-click `StartGame.bat` anytime to start your game!

---

## ❓ Troubleshooting

### Problem: "npm.cmd is not recognized"
**Solution:** You're not in the right folder. Make sure you ran the `cd` command first.

### Problem: "Cannot find module 'express'"
**Solution:** Dependencies aren't installed. Run:
```powershell
npm.cmd install
```
(You only need to do this once, or if you add new dependencies)

### Problem: "Port 3000 is already in use"
**Solution:** Your game is already running! Check if you have another terminal window with it running.

### Problem: Game doesn't load in browser
**Solution:** 
1. Make sure `npm.cmd start` is still running (don't close that window!)
2. Try `http://127.0.0.1:3000` instead of `localhost:3000`

---

## 📝 Quick Reference Card

**PowerShell:**
```powershell
cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"
npm.cmd start
```

**Command Prompt:**
```bash
cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"
npm start
```

**Browser:**
```
http://localhost:3000
```

---

## 🎯 Remember

1. **Keep the terminal window open** while playing (closing it stops the game)
2. **Use `npm.cmd` in PowerShell**, or use Command Prompt instead
3. **Press `Ctrl + C` to stop** the game when you're done

That's all you need! No help required! 🚀

