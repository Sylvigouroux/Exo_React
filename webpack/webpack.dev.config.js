import env from '../config/env'
import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin'

export default {
  entry: {
    marvel: [
      'react-hot-loader/patch',
      'react-dev-utils/webpackHotDevClient',
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
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL: 'public'
    }),
    new HtmlWebpackPlugin({ 
      inject: true,
      template: path.join(__dirname, '../public/index.html') 
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(env)    
  ]
}