const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const baseConfig = {
    entry: {
        index: './RS-selectors/src/index.js',
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, './RS-selectors/dist'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './RS-selectors/src/index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            name: 'common',
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                use: 'html-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};

module.exports = ({}, { mode }) => {
    const isProductionMode = mode === 'production';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};