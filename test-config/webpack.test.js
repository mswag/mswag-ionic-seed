var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'ts-loader'
          } , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },

      // coverage via istanbul-instrumenter-loader and karma-coverage-istanbul-reporter
      {
        test: /src\/.+\.ts$/,
        exclude: /(node_modules|\.spec\.ts$)/,
        loader: 'istanbul-instrumenter-loader',
        enforce: 'post',
        query: {
          esModules: true
        }
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /(ionic-angular)|(angular(\\|\/)core(\\|\/)@angular)/,
      path.resolve('./src'),
      {}
    )
  ]
};

function root(localPath) {
  return path.resolve(__dirname, localPath);
}

