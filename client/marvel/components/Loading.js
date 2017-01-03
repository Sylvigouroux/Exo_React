import { createElement as h, PropTypes } from 'react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'
import loader from '../../assets/images/assets/loader.gif'
import logoReact from '../../assets/images/logos/react_logo.svg'
import logoVentePrivee from '../../assets/images/logos/logo_vp.png'

export const Loading = ({state}) => {
  return (
    h('div', { className: 'col-md-12', style: { textAlign: 'center', marginTop: '20px' } },
      h('img', { className: css(Styles['App-logo']), src: logoReact, alt: 'logo' }),       
      h('div', { style: { display: 'flex', justifyContent: 'center' } },
        h('h2', { className: css(Styles['welcome']) }, state['text']['loading']),
        h('img', { style: { margin: '8px 0 0 6px' }, height: '45px', src: logoVentePrivee, alt: 'Vente Privée' })
      ),
      h('img', { src: loader, alt: 'loader' })   
    )
  )        
}
