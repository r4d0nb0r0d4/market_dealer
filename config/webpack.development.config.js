const webpackConfig = require('./webpack.config');
const webpackLambdaConfig = require('./webpack.lambda.config');

const webpackDevelopmentConfig = {
  ...webpackConfig,
  mode: 'development',
  devtool: 'cheap-source-map',
};

const webpackLambdaDevelopmentConfig = {
  ...webpackLambdaConfig,
  mode: 'development',
  devtool: 'cheap-source-map',
};

module.exports = [webpackDevelopmentConfig, webpackLambdaDevelopmentConfig];
