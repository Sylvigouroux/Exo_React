import { createElement as h, PropTypes } from 'react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'
import loader from '../../assets/images/assets/loader.gif'
import logoReact from '../../assets/images/logos/react_logo.svg'
import logoVentePrivee from '../../assets/images/logos/logo_vp.png'

export const Loading = ({store}) => {
  return (
    h('div', { className: 'col-12 mt-4', style: { textAlign: 'center' } },
      h('img', { className: css(Styles['App-logo']), src: logoReact, alt: 'logo' }),       
      h('div', { className: 'd-flex justify-content-center' },
        h('h2', { className: css(Styles['welcome']) }, store['text']['loading']),
        h('img', { style: { margin: '8px 0 0 6px' }, height: '45px', src: logoVentePrivee, alt: 'Vente Privée' })
      ),
      h('img', { src: loader, alt: 'loader' })   
    )
  )        
}

Loading.propTypes = {
  store: PropTypes.object
}
