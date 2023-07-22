// const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { merge } = require('webpack-merge');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// const baseConfig = {
//     entry: {
//         index: './src/index.js',
//     },
//     output: {
//         filename: '[name].js',
//         chunkFilename: '[name].js',
//         path: path.resolve(__dirname, './dist'),
//         publicPath: '/',
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html',
//             filename: 'index.html',
//         }),
//         new CleanWebpackPlugin(),
//         new CopyWebpackPlugin({
//             patterns: [
//                 {
//                     from: path.resolve(__dirname, 'src/data/backgrounds'),
//                     to: path.resolve(__dirname, 'dist/assets'),
//                 },
//             ],
//         }),
//     ],

//     optimization: {
//         splitChunks: {
//             name: 'common',
//             chunks: 'all',
//         },
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: ['style-loader', 'css-loader'],
//             },
//             {
//                 test: /\.html$/i,
//                 use: 'html-loader',
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.js'],
//     },
// };
// module.exports = ({}, { mode }) => {
//     const isProductionMode = mode === 'production';
//     const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

//     return merge(baseConfig, envConfig);
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public'),
                    to: path.resolve(__dirname, 'dist'),
                },
            ],
        }),
        new BundleAnalyzerPlugin(),
    ],
};
