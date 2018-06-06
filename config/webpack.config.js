
const defaultConfig = require('@ionic/app-scripts/config/webpack.config.js');
const webpack = require('webpack');
const version = require('../scripts/version');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.IONIC_ENV': JSON.stringify(process.env.IONIC_ENV),
    'process.env.PROJECT_ENV': JSON.stringify(process.env.PROJECT_ENV || process.env.IONIC_ENV),
    'process.env.VERSION': JSON.stringify(version)
  })
];

defaultConfig.dev.plugins = [...defaultConfig.dev.plugins, ...plugins];
defaultConfig.prod.plugins = [...defaultConfig.prod.plugins, ...plugins];

module.exports = function () {
  return defaultConfig;
};
