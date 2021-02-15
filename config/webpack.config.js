const webpackDefaultConfig = require('./webpack.default.config');

const webpackConfig = {
  entry: {
    app: './src/index.ts',
  },
  output: {
    filename: '[name]/index.js',
    path: __dirname + './../dist',
  },
  ...webpackDefaultConfig,
};

module.exports = webpackConfig;
