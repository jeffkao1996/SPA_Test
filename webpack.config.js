var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProvidePlugin = webpack.ProvidePlugin;

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
        fallback: {
            "crypto": false,
            "stream": false,
            "randombytes": false,
            "buffer": require.resolve("buffer/") 
        }
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
            template: path.resolve(__dirname, 'public/index.html'), 
            filename: 'index.html',
            inject: 'body',
         }),
        new ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
    ]
};
