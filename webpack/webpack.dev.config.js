import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: {
    marvel: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './client/assets/skin.css',
      'whatwg-fetch',
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
        loader: 'style-loader!css-loader?importLoaders=1'
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
    new HtmlWebpackPlugin({ 
      inject: true,
      template: path.join(__dirname, '../index.html') 
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      PROJECT_NAME: JSON.stringify('Exo React'),
      API_PUBLIC: JSON.stringify('298bab46381a6daaaee19aa5c8cafea5'),
      API_PRIVATE: JSON.stringify('b0223681fced28de0fe97e6b9cd091dd36a5b71d')           
    })    
  ]
}