import { createElement as h, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'

const MarvelSearch = ({state}) => {
  return (
    h('div', { className: 'col-md-2' },
      h('input', {
          className: 'form-control',          
          type: 'text',
          placeholder: 'Recherchez un super héros',
          value: state['filter'],
          onChange: (e) => state.init('filter', e.target.value),
          style: { height: '50px', fontSize: '20px' }
      })
    )
  )
}

MarvelSearch.propTypes = {
  state: PropTypes.object,
}

export default observer(MarvelSearch)