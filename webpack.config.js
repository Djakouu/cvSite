const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development')
    require('dotenv').config({ path: '.env' })

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        publicPath: '/',
        filename: 'js/bundle.js'
    },
    //mode: 'development' (put in package.json)
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.PROXY': JSON.stringify(process.env.PROXY),
            'process.env.KEY': JSON.stringify(process.env.KEY)
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};