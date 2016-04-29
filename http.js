var express = require('express');

var app = express();

app.use(express.static('myApp/www'));

app.listen(3067);