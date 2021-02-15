const webpackDefaultConfig = require('./webpack.default.config');

const webpackLambdaConfig = {
  entry: {},
  output: {
    filename: 'lambda/[name]/index.js',
    path: __dirname + './../dist',
    libraryTarget: 'umd',
  },
  ...webpackDefaultConfig,
};

module.exports = webpackLambdaConfig;
