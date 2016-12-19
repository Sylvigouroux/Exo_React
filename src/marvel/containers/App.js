import { createElement as h, PropTypes } from 'react'
import MarvelList from '../components/MarvelList'
import MarvelCard from '../components/MarvelCard'
import Loading from '../components/Loading'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'
import '../../assets/skin.css'

const App = ({store, state}) => {
  return (
    (store['characters'].length)
    ? h('div', { className: css(Styles['App']) },
        (state['card'].length === 0)
        ? h(MarvelList, {store, state})
        : h(MarvelCard, {state})
      ) 
    : h(Loading, null)     
  )
}

App.propTypes = {
  store: PropTypes.object,
}

export default observer(App)