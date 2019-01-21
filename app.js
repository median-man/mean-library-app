var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const clientDir = path.join(__dirname, 'public');

app.use(express.static(clientDir));

app.use('/api', apiRouter);

app.get('*', (req, res) => res.sendFile(path.join(clientDir, 'index.html')));

module.exports = app;
