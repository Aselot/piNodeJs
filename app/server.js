var express = require('express');
var app = express();
var fs = require('fs');
var mysql = require('mysql')


app.get('/', function (req, res) {
    fs.readFile('../../login.html', function (err, data) {
        res.write(data);
    });
});

app.listen(3306, function () {
    console.log('Example app listening on port 3000!');
});

