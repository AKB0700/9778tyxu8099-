const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;

const app = express();

// Security middleware - adds various HTTP headers for security
app.use(helmet({
  contentSecurityPolicy: false, // Disabled for inline styles in this demo app
}));

// Compression middleware - compresses responses for better performance
app.use(compression());

// Static file serving with caching
app.use(express.static('public', {
  maxAge: process.env.NODE_ENV === 'production' ? '6h' : 0,
  etag: true,
}));

app.set('view engine', 'ejs');

// Main route with error handling
app.get('/', (req, res) => {
  res.render('index', { haikus: haikus });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).send('Something went wrong!');
});

// Start server with error handling
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});