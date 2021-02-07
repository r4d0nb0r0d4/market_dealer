const webpackDefaultConfig = require('./webpack.default.config');

const webpackDevelopmentConfig = {
  ...webpackDefaultConfig,
  mode: 'development',
  devtool: 'cheap-source-map',
};

module.exports = webpackDevelopmentConfig;
