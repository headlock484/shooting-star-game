# PowerShell Script to Set Up GitHub Repository
# Run this script to prepare your code for GitHub

Write-Host "🚀 Setting up GitHub repository..." -ForegroundColor Green
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "✅ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Then restart PowerShell and run this script again." -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "📝 Please provide your GitHub username:" -ForegroundColor Cyan
$githubUsername = Read-Host

if ([string]::IsNullOrWhiteSpace($githubUsername)) {
    Write-Host "❌ Username cannot be empty!" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "🔧 Initializing git repository..." -ForegroundColor Yellow

# Initialize git if not already done
if (-not (Test-Path ".git")) {
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "📦 Adding files..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "💾 Creating commit..." -ForegroundColor Yellow
git commit -m "Initial commit - Shooting Star Game with Live Bets and Username features"

Write-Host ""
Write-Host "🌿 Setting branch to main..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "🔗 Adding GitHub remote..." -ForegroundColor Yellow
# Remove existing remote if it exists
git remote remove origin 2>$null
git remote add origin "https://github.com/$githubUsername/shooting-star-game.git"

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Create a repository on GitHub named 'shooting-star-game'" -ForegroundColor White
Write-Host "2. Then run: git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "Or run this command to push now (if repo exists):" -ForegroundColor Yellow
Write-Host "git push -u origin main" -ForegroundColor White
Write-Host ""

