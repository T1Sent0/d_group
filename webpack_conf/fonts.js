const path = require('path');

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'font/[name].[ext]',
                                publicPath: '/'
                            }
                        }
                    ]
                },
            ]
        }
    }
};