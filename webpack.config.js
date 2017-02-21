const webpack = require('webpack');

module.exports = {
  entry: './browser.jsx',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ] : [],

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
