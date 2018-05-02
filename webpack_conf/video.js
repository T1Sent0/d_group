const path = require('path');

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(mp4)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'video/[name].[ext]',
                        publicPath: '/'
                    }
                },
            ]
        }
    }
};