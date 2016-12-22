import { createElement as h, PropTypes } from 'react'
import MarvelList from '../components/MarvelList'
import MarvelCard from '../components/MarvelCard'
import { Loading } from '../components/Loading'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'

const App = ({store, state}) => {
  return (
    (store['characters'].length)
    ? h('div', { className: 'container-fluid', style: { fontFamily: 'vp_sans, sans-serif' } },
        h('div', { className: 'row' },
          (state['card'].length === 0)
          ? h(MarvelList, {store, state})
          : h(MarvelCard, {state})
        )
      ) 
    : h(Loading, null)     
  )
}

App.propTypes = {
  store: PropTypes.object,
  state: PropTypes.object
}

export default observer(App)