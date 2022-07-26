const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const catalogRouter = require('./routes/catalog');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', catalogRouter);
app.listen(4433);
