import { createElement as h, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'

const MarvelCard = ({state}) => {
  console.log('MarvelCard', state['card'])
  
  return (
    h('div', { className: 'col-md-12', style: { display: 'flex', flexDirection: 'column' } }, 
      h('h2', { className: css(Styles['heroes']) }, 'Fiche identité :'),  
      h('div', { display: 'flex' },
        h('div', { className: 'col-md-2' },
          h('img', { 
              src: `${state['card']['thumbnail']['path']}/standard_xlarge.jpg`, 
              alt: state['card']['name'],
              style: { padding: '0 0 5px 0' }
            } 
          )
        ),
        h('div', { className: 'col-md-10', style: { display: 'flex', flexDirection: 'column' } },
          h('div', { 
              className: 'thumbnail',
              style: { boxShadow: '0 5px 5px -5px #ccc' }
            },
            h('h2', { style: { padding: '0 10px' } }, state['card']['name']),
            h('p', { style: { padding: '0 10px' } }, state['card']['description'])
          ),
          h('div', { 
              className: 'comics',
            },
            h('p', { className: css(Styles['cards']) }, 'Comics'),
            h('p', { style: { padding: '0 10px' } }, state['card']['description'])
          ),
          h('div', { 
              className: 'series',
            },
            h('p', { className: css(Styles['cards']) }, 'Series'),
            h('p', { style: { padding: '0 10px' } }, state['card']['description'])
          )
        )
      ),
      h('div', { className: 'cta-wrapper',  style: { display: 'flex', justifyContent: 'center' } },
        h('a', { 
            className: 'cta-wrapper',
            onClick: () => state.init('card', [])
          }, 'Retour'
        )
      )
    )
  )
}

MarvelCard.propTypes = {
  store: PropTypes.object,
}

export default observer(MarvelCard)