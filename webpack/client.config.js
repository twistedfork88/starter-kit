const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const optimization = {
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendor",
        chunks: "initial",
      }
    }
  }
}

var browserConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'build', 'client'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  optimization,
  watch: true,
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
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    new WebpackAssetsManifest({})
  ]
}

module.exports = browserConfig;