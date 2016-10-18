var path = require('path');
var express = require('express');
var router = express.Router();

var env = process.env.NODE_ENV || '';

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