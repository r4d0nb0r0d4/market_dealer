const alias = require('./alias.config');

const webpackConfig = {
  target: 'node',
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

module.exports = webpackConfig;
