const webpackConfig = require('./webpack.config');
const webpackLambdaConfig = require('./webpack.lambda.config');

const webpackProductionConfig = {
  ...webpackConfig,
  mode: 'production',
};

const webpackLambdaProductionConfig = {
  ...webpackLambdaConfig,
  mode: 'production',
};

module.exports = [webpackProductionConfig, webpackLambdaProductionConfig];
