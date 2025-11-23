const express = require('express');
const compression = require('compression');
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;

const app = express();

// Enable gzip compression for better performance
app.use(compression());

// Serve static files with caching headers
app.use(express.static('public', {
  maxAge: '1d',
  etag: true
}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { haikus });
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Graceful shutdown handling
const gracefulShutdown = (signal) => {
  console.log(`${signal} received, closing server gracefully`);
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));