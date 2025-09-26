var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "./"),
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 告訴插件你的 HTML 模板在哪裡
            filename: 'index.html',
            inject: 'body',
        })
    ]
};
