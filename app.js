/*  Author: Chi Shing Chan
    Student ID # 301268811
    Date: 04 Jun, 2023
    File: app.js
 */

const express = require('express');
const path = require('path');
const logger = require('morgan');
const router = require('./routes/index');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// moddlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000');
});

// Set the static path
app.use(express.static('public'));

module.exports = app;
