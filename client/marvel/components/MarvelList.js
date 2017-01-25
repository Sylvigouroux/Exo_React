import { createElement as h, PropTypes } from 'react'
import MarvelSearch from './MarvelSearch'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'

const MarvelList = ({store, state}) => {
  return (
    h('div', { className: 'col-lg-12' }, 
      h('div', { className: 'd-flex flex-row align-items-center mb-5' },  
        h('div', { className: 'col-lg-5' }, 
          h('h1', { className: css(Styles['heroes']) }, store['text']['list']),
        ),           
        h(MarvelSearch, {store, state})
      ),
      h('div', { className: 'd-flex flex-wrap justify-content-center' },
        store['characters'].reduce((prev, curr, currentIndex) => {
          curr['name'].toLowerCase().includes(state['filter'].toLowerCase())
          ? prev.push(
              h('div', { 
                  className: 'card col-lg-3 mb-4 mr-4 p-0',      
                  key: window.crypto.getRandomValues(new Uint32Array(1))[0],         
                  style: { 
                    boxShadow: '0 0 3px #ccc',
                  }                
                },
                h('div', {
                    className: 'd-flex justify-content-center',
                    style: {
                      backgroundColor: '#ececec',
                      cursor: 'pointer'
                    },
                    onClick: () => state.init('card', store['characters'][currentIndex])
                  },
                  h('img', { 
                      className: 'card-img-top pb-1',
                      src: `${curr['thumbnail']['path'].replace(new RegExp('http:'), 'https:')}/standard_xlarge.jpg`, 
                      alt: curr['name']
                    } 
                  )
                ),
                h('div', { 
                    className: 'card-block py-2 pl-0',
                    style: { 
                      boxShadow: '0 -1px 1px -1px #ccc'
                    }
                  },
                  h('p', { 
                      className: css(Styles['caption']), 
                      style: { 
                        padding: '10px', 
                        boxShadow: '0 1px 1px -1px #ccc' 
                      } 
                    }, curr['name']
                  ),
                  h('div', { 
                      className: 'card-block d-flex',
                      style: { padding: '0 9px' } 
                    },
                    curr['urls'].reduce((prev1, curr1) => {
                      prev1.push(
                        h('div', { 
                            key: window.crypto.getRandomValues(new Uint32Array(1))[0],
                            className: 'mr-2'
                          },
                          h('i', {
                              className: 'fa fa-book fa-1 mr-1',
                              'aria-hidden': 'true',
                              style: { color: '#999' }
                            }
                          ),                   
                          h('a', { 
                              href: curr1['url'], 
                              style: { fontSize: '18px', color: '#999' } 
                            }, curr1['type']) 
                        )
                      )
                      return prev1 }, [])
                  )
                )
              )
            )
          : null  
          return prev }, [])
      )
    )
  )
}

MarvelList.propTypes = {
  store: PropTypes.object,
  state: PropTypes.object
}

export default observer(MarvelList)