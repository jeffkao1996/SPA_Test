var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "./"),
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: 'app.js',
        publicPath: '/assets/js/',  
    },
    resolve: {
        extensions: ['.js', '.jsx'],  
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public')
        }
    }
}
