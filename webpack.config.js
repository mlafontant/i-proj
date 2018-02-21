
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './client/App.jsx',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist/',
        hot: false
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        // new HtmlWebpackPlugin({
        //     title: 'Development',
        //     template: './index.html'
        // }),
        // new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'webpack-bundle.js',
        path: path.join(__dirname, './dist/'),
    },
    module: {
        loaders: [
            {
                test: /.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
            // },
            // {
            //     test: /\.scss$/,
            //     loader: [
            //         "style-loader", // creates style nodes from JS strings
            //         "css-loader", // translates CSS into CommonJS
            //         "sass-loader" // compiles Sass to CSS
            //     ]
            // }
        ]
    }
};

