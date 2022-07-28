const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const catalogRouter = require('./routes/catalog');
const port = process.env.PORT || 3344;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', catalogRouter);
app.listen(port);
