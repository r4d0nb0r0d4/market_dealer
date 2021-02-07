const webpackDefaultConfig = require('./webpack.default.config');

const webpackProductionConfig = {
  ...webpackDefaultConfig,
  mode: 'production',
};

module.exports = webpackProductionConfig;
