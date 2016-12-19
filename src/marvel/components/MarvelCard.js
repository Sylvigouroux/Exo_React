import { createElement as h, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'

const MarvelCard = ({store, state}) => {
  return (
    h('div', { className: 'col-md-12' }, 
      h('h2', { className: css(Styles['heroes']) }, 'Liste des super héros :'),   
    )
  )
}

MarvelCard.propTypes = {
  store: PropTypes.object,
}

export default observer(MarvelCard)