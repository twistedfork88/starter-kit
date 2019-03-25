var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const plugins = [];
plugins.push(
  new webpack.DefinePlugin({
    __isBrowser__: "false"
  }),
  new WebpackShellPlugin({
    onBuildStart: ['echo "Starting server build..."'],
    onBuildEnd: ['npm run start']
  })
);

var serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: __dirname + '/build/server',
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          loader: 'babel-loader',
          options: {
            plugins: ['syntax-dynamic-import']
          }
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: 'images/[hash]-[name].[ext]'
              } 
          }]
        }
      ]
    },
    plugins
  }

  module.exports = serverConfig;