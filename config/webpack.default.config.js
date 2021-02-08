const path = require('path');

const webpackDefaultConfig = {
  entry: {
    app: './src/index.ts',
    containerDealer: './src/service/ContainerDealer/index.ts',
  },

  target: 'node',
  output: {
    filename: '[name].js',
    path: __dirname + './../dist',
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
        exclude: [/node_modules/],
      },
    ],
  },

  resolve: {
    alias: {
      __service: path.resolve(__dirname, '../src/service'),
      __controllers: path.resolve(__dirname, '../src/controllers'),
      __routes: path.resolve(__dirname, '../src/routes'),
      __constants: path.resolve(__dirname, '../src/constants'),
      __models: path.resolve(__dirname, '../src/models'),
      __modules: path.resolve(__dirname, '../src/modules'),
      __utils: path.resolve(__dirname, '../src/utils'),
      __types: path.resolve(__dirname, '../src/types'),
    },
    extensions: ['.ts', '.js'],
  },
};

module.exports = webpackDefaultConfig;
