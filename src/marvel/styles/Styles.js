import { StyleSheet } from 'aphrodite'

const appLogoSpin = {
  'from': { transform: 'rotate(0deg)' },
  'to': { transform: 'rotate(360deg)' }
}

export default StyleSheet.create({
  'App': {
    'font-family': 'vp_sans, sans-serif'
  },

  'App-logo': {
    animation: 'infinite 20s linear',
    animationName: appLogoSpin,
    height: '80px'
  },

  'welcome': {
    'font-family': 'vp_sans, sans-serif', 
    color: '#e9008a' 
  },

  'heroes': {   
    color: '#e9008a',
    'font-weight': '700',
    'margin': '20px 0px 20px 15px'
  },

  'caption': {
     'line-height': '25px',
     'font-weight': '400'
  }
})