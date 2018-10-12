const path = require('path');

module.exports = {
  entry: './client/src/index.js', // where webpack starts looking for files
  output: { // where webpack should put bundle
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  }, //webpack willput our bundle at ./dist/bundle.js
  module: {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'] // translates es6 to es5
        }
      }
    }
  ]
},
mode: 'development'
};