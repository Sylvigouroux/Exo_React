import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.dev.config'
import openBrowser from 'react-dev-utils/openBrowser'

new WebpackDevServer(webpack(config), {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hotOnly: true,
  https: true,
  stats: {
    colors: true,
    chunks: false
  }
}).listen(3000, 'localhost', (err, result) => {
    (err) ? console.error(err) : console.log('The app is running at https://localhost:3000')

    openBrowser('https://localhost:3000/')
  })