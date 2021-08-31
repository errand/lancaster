const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                test:/\.(s*)css$/,
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
    ],

};