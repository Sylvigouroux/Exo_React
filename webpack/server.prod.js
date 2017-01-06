import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.prod.config'
import openBrowser from 'react-dev-utils/openBrowser'
import chalk from 'chalk'

new WebpackDevServer(webpack(config), {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  https: true,
  stats: {
    colors: true,
    chunks: false
  }
}).listen(3000, 'localhost', (err, result) => {
     (err) ? console.error(err) : console.log(`The app is running at ${chalk.cyan('https://localhost:3000/')}`)

     openBrowser('https://localhost:3000/')
   })