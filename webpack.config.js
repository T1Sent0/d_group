const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const devServer = require('./devserver');
const scss = require('./webpack_conf/sass');
const css = require('./webpack_conf/css');
const font = require('./webpack_conf/fonts');
const uglifyJs = require('./webpack_conf/js.uglify');
const images = require('./webpack_conf/images');
const es = require('./webpack_conf/es');
const video = require('./webpack_conf/video');


const PATHS = {
    development: path.join(__dirname, '/Development'),
    production: path.join(__dirname, '/Production')
};

const common = WebpackMerge([
    {
        entry: PATHS.development + '/entry/entry.js',
        output: {
            path: PATHS.production + '/js',
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'React App',
                filename: 'index.html',
                template: PATHS.development + '/Template/template.html'

            }),
            // new webpack.ProvidePlugin({
            //     $: "jquery",
            //     jQuery: "jquery"
            // }),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'common'
            // })
        ],
    },
    images(),
    es(),
    css(),
    font(),
    video()
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
            devServer(),
            scss(),
            es()
        ])
    }
};