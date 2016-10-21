var path = require('path')
var express = require('express')
var webpack = require('webpack')

var port = process.env.PORT || 3000

var app = express()
var routes = require('../routes/index.js');


// set env
var env = process.env.NODE_ENV || '';
app.set('env', env);

if (app.get('env') === 'development') {
    var webpack = require('webpack'),
        webpackDevMiddleware = require('webpack-dev-middleware'),
        webpackHotMiddleware = require('webpack-hot-middleware'),
        webpackDevConfig = require('../webpack.config.dev.js');

    var compiler = webpack(webpackDevConfig);

    var devMiddleware = webpackDevMiddleware(compiler, {
        publicPath: webpackDevConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true,
            // chunks: false
        }
    });
    // app.use(express.static(path.join(__dirname, '')))

    // serve webpack bundle output
    app.use(devMiddleware);

    // enable hot-reload and state-preserving
    // compilation error display
    app.use(webpackHotMiddleware(compiler));
} else {
    app.use(express.static(path.join(__dirname, 'assests')))
}

app.use('/', routes);


app.listen(port, function() {
    console.log('Listening at http://localhost:' + port + '\n')
})
