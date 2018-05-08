var webpackConfig = require('./webpack.test.js');
const path = require('path');
const reportDir = path.join(__dirname, '/../test-reports/coverage');
module.exports = function(config) {
  var _config = {
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      {
        pattern: './test-config/karma-test-shim.js',
        watched: true
      },
      {
        pattern: './src/assets/**/*',
        watched: false,
        included: false,
        served: true,
        nocache: false
      }
    ],

    proxies: {
      '/assets/': './src/assets/'
    },

    preprocessors: {
      './test-config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },

    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true,
      dir: reportDir,
    },

    specReporter: {
      // maxLogLines: 5,          // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false,      // do not print information about failed tests
      suppressPassed: false,      // do not print information about passed tests
      suppressSkipped: true,      // do not print information about skipped tests
      showSpecTiming: true,       // print the time elapsed for each spec
      failFast: false             // test would finish with error when a first fail occurs.
    },

    reporters: config.coverage ? ['spec', 'dots', 'coverage-istanbul'] : ['spec', 'dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  };

  config.set(_config);
};
