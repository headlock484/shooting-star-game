# 🔧 Fix "Running Scripts is Disabled" Error on Windows

## The Problem

Windows PowerShell blocks scripts by default for security. This prevents `npm start` from working.

---

## ✅ Solution 1: Use Command Prompt Instead (Easiest!)

**Instead of PowerShell, use Command Prompt:**

1. Press `Windows Key + R`
2. Type `cmd` (not `powershell`)
3. Press Enter
4. Navigate to your project:
   ```bash
   cd "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"
   ```
5. Run:
   ```bash
   npm start
   ```

**This should work immediately!** Command Prompt doesn't have this restriction.

---

## ✅ Solution 2: Change PowerShell Execution Policy (Permanent Fix)

### Option A: For Current User Only (Recommended - Safer)

1. Open PowerShell as Administrator:
   - Right-click Start button
   - Click "Windows PowerShell (Admin)" or "Terminal (Admin)"
   - Click "Yes" when asked for permission

2. Run this command:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. Type `Y` and press Enter when asked

4. Close PowerShell and open a new one

5. Try `npm start` again

### Option B: For Just This Session (Temporary)

In PowerShell (regular, not admin), run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

Then try `npm start`. This only works for that one PowerShell window.

---

## ✅ Solution 3: Use npm.cmd Explicitly

In PowerShell, try:
```powershell
npm.cmd start
```

This bypasses the script restriction.

---

## ✅ Solution 4: Use npx (Alternative)

Try:
```powershell
npx node server.js
```

This directly runs Node.js without going through npm scripts.

---

## 🎯 Recommended: Use Command Prompt

**The easiest solution is to just use Command Prompt instead of PowerShell:**

1. Open Command Prompt (`cmd`)
2. Navigate to your folder
3. Run `npm start`

**No configuration needed!**

---

## Why This Happens

Windows PowerShell has an "execution policy" that prevents scripts from running to protect your computer. This is a security feature, but it also blocks legitimate commands like `npm start`.

**Command Prompt doesn't have this restriction**, so it's often easier to just use that instead.

---

## Quick Test

After fixing, try:
```bash
npm start
```

You should see:
```
🚀 Shooting Star server running on http://localhost:3000
```

Then open `http://localhost:3000` in your browser!

---

## Still Having Issues?

If none of these work, let me know what error message you're seeing!

