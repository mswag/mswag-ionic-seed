const webpackConfig = require('./webpack.test.js');
const path = require('path');

const withCoverage = process.argv.indexOf('--coverage') > -1;
const reportDir = path.join(__dirname, '/../test-reports/coverage');

if (withCoverage) {
  console.log(`>>> coverage report will be created in ${reportDir}`)
}

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-chrome-launcher'),
      require('karma-spec-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-jasmine-diff-reporter')
    ],
    files: [
      { pattern: './karma-test-shim.js', watched: true }
    ],
    proxies: {

    },

    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap'],

      // TODO: would be so nice so get ionic styles and icons etc.
      // try karma scss/sass preprocessor...

      // './src/participants/*.scss': ['scss']
      // './node_modules/ionic-angular/themes/*.scss': ['scss']
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

    reporters: withCoverage
      ? ['spec', 'coverage-istanbul']
      : ['jasmine-diff', 'spec', 'kjhtml'],

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      dir: reportDir,
      fixWebpackSourcePaths: true
    },

    jasmineDiffReporter: {
      pretty: true,
      multiline: true,
      verbose: false,
      matchers: {}
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    // browserNoActivityTimeout: 100000,
    browserDisconnectTolerance: 1,

    specReporter: {
      // maxLogLines: 5,          // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false,      // do not print information about failed tests
      suppressPassed: false,      // do not print information about passed tests
      suppressSkipped: true,      // do not print information about skipped tests
      showSpecTiming: true,       // print the time elapsed for each spec
      failFast: false             // test would finish with error when a first fail occurs.
    }
  });
};
