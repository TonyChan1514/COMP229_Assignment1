// app.js

const express = require('express');
const app = express();
const path = require('path');
var router = express.Router();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.use(express.static('public'));

module.exports = router;