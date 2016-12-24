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
    ],
    vendor: [
      'react',
      'react-dom'
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
        include: path.join(__dirname, '../client')
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
    new webpack.optimize.CommonsChunkPlugin({ 
      name: 'vendor', 
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      PROJECT_NAME: JSON.stringify('Exo React'),
      API_PUBLIC: JSON.stringify('298bab46381a6daaaee19aa5c8cafea5'),
      API_PRIVATE: JSON.stringify('b0223681fced28de0fe97e6b9cd091dd36a5b71d')           
    })
  ]
}