import { createElement as h, PropTypes } from 'react'
import MarvelList from '../components/MarvelList'
import Loading from '../components/Loading'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'
import '../../assets/bootstrap.css'
import '../../assets/skin.css'

const App = ({store}) => {
  return (
    (store['characters'].length)
    ? h('div', { className: css(Styles['App']) },
        h(MarvelList, {store})
      ) 
    : h(Loading, null)     
  )
}

App.propTypes = {
  store: PropTypes.object,
}

export default observer(App)