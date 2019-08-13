var webpack = require('webpack');
var path = require('path');
// build library
var BUILD_DIR = path.resolve(__dirname, './dist/js');

// source file location
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'jquery.image.splitter.view.js'
    },

    module: {
        rules: [
            {
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        modules: [
            "node_modules",
            APP_DIR
        ],
    },
};

module.exports = config;