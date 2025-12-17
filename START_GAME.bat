@echo off
echo.
echo ========================================
echo   Starting Shooting Star Game...
echo ========================================
echo.

cd /d "C:\Users\fiona\OneDrive\Desktop\FINAL_shooting_star\public"

echo Installing dependencies (if needed)...
call npm install

echo.
echo Starting server...
echo.
echo Your game will be available at: http://localhost:3000
echo.
echo Keep this window open while playing!
echo Press Ctrl+C to stop the game.
echo.

call npm start

pause

