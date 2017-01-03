import env from '../config/env'
import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin'

export default {
  entry: {
    marvel: [
      './client/assets/skin.css',
      './client/marvel/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        exclude: [
          /\.html$/,
          /\.js$/,
          /\.css$/,
          /\.svg$/
        ],
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '../client'),
          path.join(__dirname, '../node_modules/fluture'),
          path.join(__dirname, '../node_modules/inspect-f')
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?importLoaders=1' })
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [    
    // new webpack.optimize.AggressiveSplittingPlugin({
    //   minSize: 5000,
    //   maxSize: 10000
    // }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: 'public'
    }),
    new HtmlWebpackPlugin({ 
      inject: true,
      template: path.join(__dirname, '../public/index.html') 
    }),
    new ExtractTextPlugin('static/css/[name].[contenthash:8].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin(Object.assign(env, { 'process.env.NODE_ENV': JSON.stringify('production') }))
  ]
}