const path = require('path');

module.exports = {
  entry: './src/index.jsx',         
  output: {
    path: path.resolve(__dirname, 'build'),   
    filename: 'assets/js/app.js',             
    publicPath: '/',                           
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
