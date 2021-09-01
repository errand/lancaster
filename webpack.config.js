const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'templates')
}

module.exports = {
    mode: 'production',
    entry: './static/src/index.js',
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'scripts.js'
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        },
                    },
                    'sass-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../style.css',
        }),
        new BrowserSyncPlugin({
            files: [
                './style.css',
                './js/scripts.js',
                './static/*.html',
                './templates/**/*.twig',
                '!./node_modules',
                '!./package.json',
            ],
            reloadDelay: 0
        }),
    ],

};