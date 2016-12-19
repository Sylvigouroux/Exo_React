import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.prod.config'

new WebpackDevServer(webpack(config), {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: {
    colors: true,
    chunks: false
  }
}).listen(3000, 'localhost', (err, result) => {
  (err) ? console.error(err) : null

  console.log('Listening at localhost:3000')
})