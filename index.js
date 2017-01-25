"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();
const http = require('http').Server(app);

// parse post body
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// load the controllers
app.use(controllers);

const listener = app.listen(3001, () => {
    console.log("App is listening at port " + listener.address().port);
});