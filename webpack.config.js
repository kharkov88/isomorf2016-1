var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var publicPath = 'http://localhost:8050/public/src/assets/app'
// var cssName = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css'
// var jsName = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js'

var cssName = process.env.NODE_ENV === 'production' ? 'styles.css' : 'styles.css'
var jsName = process.env.NODE_ENV === 'production' ? 'bundle.js' : 'bundle.js'

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER: JSON.stringify(true),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }),
  new ExtractTextPlugin(cssName)
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new CleanWebpackPlugin([ 'public/' ], {
      root: __dirname,
      verbose: true,
      dry: false
    })
  )
  plugins.push(new webpack.optimize.DedupePlugin())
  plugins.push(new webpack.optimize.OccurenceOrderPlugin())
  plugins.push(
    new CopyWebpackPlugin([
      { from: 'src/assets', to: `${__dirname}/public/src/assets` },
      { from: 'src/components', to: `${__dirname}/public/src/components` },
      { from: 'src/utilities', to: `${__dirname}/public/src/utilities` },
      { from: 'src/configs', to: `${__dirname}/public/src/configs` },
      { from: 'src/routes.jsx', to: `${__dirname}/public/src/routes.jsx` },
      { from: 'src/server.js', to: `${__dirname}/public/src/server.js` },
      { from: '.babelrc', to: `${__dirname}/public/` },
      { from: 'server.js', to: `${__dirname}/public/` },
      { from: 'src/deploy', to: `${__dirname}/public/` }
    ])
  )
}

module.exports = {
  entry: ['babel-polyfill', './src/client.js'],
  debug: process.env.NODE_ENV !== 'production',
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  plugins,
  output: {
    path: `${__dirname}/public/src/assets/app/`,
    filename: jsName,
    publicPath
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
      },
      { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
      { test: /\.jsx?$/, loader: process.env.NODE_ENV !== 'production' ? 'react-hot!babel' : 'babel', exclude: [/node_modules/, /public/] },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
}
