var path = require('path');
var webpack = require('webpack');
var entryPath = path.join(__dirname, 'src');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(entryPath, 'app.js')
    },

    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.(less|css)?$/,
            loader: ExtractTextPlugin.extract(['css', 'less'])
        }, {
            test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.less'],
        alias: {
            components: path.resolve(entryPath, 'components'),
            actions: path.resolve(entryPath, 'actions'),
            reducers: path.resolve(entryPath, 'reducers'),
            containers: path.resolve(entryPath, 'containers'),
            constants: path.resolve(entryPath, 'constants'),
            apis: path.resolve(entryPath, 'apis'),
            store: path.resolve(entryPath, 'store'),
            images: path.resolve(entryPath, 'images'),
            styles: path.resolve(entryPath, 'styles')
        }
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('commons', 'lib/commons.js'),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'todo',
            template: 'template/index.html',
            inject: true,
            filename: 'index.html',
            chunks: ['commons', 'app']
        }),
    ]
}