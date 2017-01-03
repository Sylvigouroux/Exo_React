import { createElement as h } from 'react'
import { render } from 'react-dom'
import Store from './stores/Store'
import State from './stores/UiState'
import App from './containers/App'

const store = new Store()
const state = new State()
const rootEl = document.getElementById('root')

render(
  h(App, {store, state}),
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(
      h(App, {store, state}),
      rootEl
    )
  })
}