const path = require('path');

module.exports = {
  __service: path.resolve(__dirname, '../src/service'),
  __lambda: path.resolve(__dirname, '../src/lambda'),
  __controllers: path.resolve(__dirname, '../src/controllers'),
  __routes: path.resolve(__dirname, '../src/routes'),
  __constants: path.resolve(__dirname, '../src/constants'),
  __models: path.resolve(__dirname, '../src/models'),
  __modules: path.resolve(__dirname, '../src/modules'),
  __utils: path.resolve(__dirname, '../src/utils'),
  __types: path.resolve(__dirname, '../src/types'),
};
