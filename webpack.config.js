const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const scss = require('./webpack_conf/sass');
const css = require('./webpack_conf/css');
const uglifyJs = require('./webpack_conf/js.uglify');
const images = require('./webpack_conf/images');
const es = require('./webpack_conf/es');

const PATHS = {
    development: path.join(__dirname, '/Development/'),
    production: path.join(__dirname, '/Production/')
};

const common = WebpackMerge([
    {
        entry: './entry/entry.js',
        output: {
            filename: '[name].js',
            path: PATHS.production + 'js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'React App',
                filename: 'index.html',
                template: PATHS.development + 'Template/template.html'

            }),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'common'
            // })
        ],
        devServer: {
            inline: true,
            compress: true,
            port: 9000,
            open: true,
            host: 'localhost'
        }
    },
    images(),
    es(),
    css()
]);


module.exports = function (env) {
    if(env === 'production') {
        return WebpackMerge([
            common,
            scss(),
            uglifyJs()
        ])
    }
    if(env === 'development') {
        return WebpackMerge([
            common,
            scss()
        ])
    }
};