import { createElement as h } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Store from './stores/Store'
import App from './containers/App'

const store = new Store()
const rootEl = document.getElementById('root')

render(
  h(AppContainer, null,
    h(App, {store})
  ),
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(
      h(AppContainer, null,
        h(App, {store})
      ),
      rootEl
    )
  })
}