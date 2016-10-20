var path = require('path');
var fs = require('fs');
var express = require('express');
var router = express.Router();

var env = process.env.NODE_ENV || '';



router.get('/apis/todos', function(req, res, next) {
    console.log(__dirname);

    fs.readFile(path.join(__dirname, '../db/todo.json'), {encoding: 'utf-8'}, function(err, data) {
        if (err) {
            throw err;
            return;
        }
        res.json(JSON.parse(data));
    })

})



if (env === 'development') {
    router.get('/*', function (req, res, next) {
        res.sendFile(path.join(__dirname, '../index.html'));
    })
} else if (env === 'production') {
    router.get('/*', function (req, res, next) {
        res.sendFile(path.join(__dirname, '../assests/index.html'));
    })
}



module.exports = router;