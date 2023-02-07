'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./src/router/user.js');
const routerFile = require('./src/router/file.js');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);
app.use('/api',routerFile)


module.exports = app;