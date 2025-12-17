#!/bin/bash
# Commands to push your Shooting Star game to GitHub
# Run these in Git Bash after creating the repository

# Navigate to your project folder
cd /c/Users/fiona/OneDrive/Desktop/FINAL_shooting_star/public

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Shooting Star Game with Live Bets and Username features"

# Set branch to main
git branch -M main

# Connect to your GitHub repository
git remote add origin https://github.com/headlock484/shooting-star-game.git

# Push to GitHub
git push -u origin main

