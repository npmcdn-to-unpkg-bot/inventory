/**
 * Created by m.charyton on 27.06.2016.
 */
var express = require('express');
var app = express();
// var mysql = require('src/msyql');

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});