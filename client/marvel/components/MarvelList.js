import { createElement as h, PropTypes } from 'react'
import MarvelSearch from './MarvelSearch'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'

const MarvelList = ({store, state}) => {
  return (
    h('div', { className: 'col-md-12' }, 
      h('div', { style: { display: 'flex', alignItems: 'center', marginBottom: '30px' } },
        h('h2', { className: css(Styles['heroes']) }, 'Liste des super héros :'),   
        h(MarvelSearch, {store, state})
      ),
      store['characters'].reduce((prev, curr, currentIndex) => {
        curr['name'].toLowerCase().includes(state['filter'].toLowerCase())
        ? prev.push(
            h('div', { 
                className: 'col-md-3', 
                key: window.crypto.getRandomValues(new Uint32Array(1))[0]
              },
              h('div', { 
                  className: 'thumbnail',               
                  style: { 
                    padding: '0', 
                    boxShadow: '0 0 3px #ccc'
                  }                
                },
                h('div', { 
                    style: { 
                      display: 'flex', 
                      justifyContent: 'center', 
                      backgroundColor: '#ececec',
                      cursor: 'pointer'
                    },
                    onClick: () => state.init('card', store['characters'][currentIndex])
                  },
                  h('img', { 
                      src: `${curr['thumbnail']['path']}/standard_xlarge.jpg`, 
                      alt: curr['name'],
                      style: { padding: '0 0 5px 0' }
                    } 
                  )
                ),
                h('div', { 
                    className: 'caption',
                    style: { 
                      padding: '10px 0', 
                      boxShadow: '0 -1px 1px -1px #ccc'
                    }
                  },
                  h('p', { 
                      className: css(Styles['caption']), 
                      style: { padding: '10px', boxShadow: '0 1px 1px -1px #ccc' } 
                    }, curr['name']
                  ),
                  h('div', { style: { display: 'flex', padding: '0 9px' } },
                    curr['urls'].reduce((prev1, curr1) => {
                      prev1.push(
                        h('div', { 
                            key: window.crypto.getRandomValues(new Uint32Array(1))[0],
                            style: { marginRight: '10px' }
                          },
                          h('span', { 
                              className: 'glyphicon glyphicon-link',
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
          )
        : null  
        return prev }, [])
    )
  )
}

MarvelList.propTypes = {
  store: PropTypes.object,
}

export default observer(MarvelList)