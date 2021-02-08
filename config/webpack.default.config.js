
const entry = require('./entries.config');
const alias = require('./alias.config');

const webpackDefaultConfig = {
  entry,

  target: 'node',
  output: {
    filename: '[name].js',
    path: __dirname + './../dist',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/node_modules/, /dist/],
      },
    ],
  },

  resolve: {
    alias,
    extensions: ['.ts', '.js'],
  },
};

module.exports = webpackDefaultConfig;
