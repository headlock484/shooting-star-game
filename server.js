const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Disable caching for development
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// Serve static files from the current directory (where all HTML/JS/CSS files are)
app.use(express.static(path.join(__dirname), { etag: false, lastModified: false }));

// Route for root - serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Shooting Star server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Shooting Star server running on http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${path.join(__dirname)}`);
});

