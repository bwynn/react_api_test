const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Config
const PORT = process.env.PORT || 3000;
const db = require('./config/db');

mongoose.connect(db.db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(express.static('public'));

require('./routes/routes')(app);

// start server
app.listen(PORT);

console.log('Server fired up on port ' + PORT);

module.exports = app;
