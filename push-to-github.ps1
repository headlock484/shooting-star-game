# PowerShell Script to Push Code to GitHub
# Run this after creating your GitHub repository

Write-Host "🚀 Pushing code to GitHub..." -ForegroundColor Green
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "✅ Git is installed" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
Write-Host ""

# Push to GitHub
git push -u origin main

Write-Host ""
Write-Host "✅ Done! Your code is now on GitHub!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next step: Deploy to Railway at https://railway.app" -ForegroundColor Cyan
Write-Host ""

