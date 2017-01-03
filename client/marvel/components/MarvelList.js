import { createElement as h, PropTypes } from 'react'
import MarvelSearch from './MarvelSearch'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'

const MarvelList = ({store, state}) => {
  return (
    h('div', { className: 'col-lg-12' }, 
      h('div', { className: 'row', style: { display: 'flex', alignItems: 'center', marginBottom: '30px' } },  
        h('div', { className: 'col-lg-5' }, 
          h('h1', { className: css(Styles['heroes']) }, 'Liste des super héros :'),
        ),           
        h(MarvelSearch, {store, state})
      ),
      store['characters'].reduce((prev, curr, currentIndex) => {
        curr['name'].toLowerCase().includes(state['filter'].toLowerCase())
        ? prev.push(
            h('div', { 
                className: 'col-lg-3', 
                key: window.crypto.getRandomValues(new Uint32Array(1))[0],
                style: { marginBottom: '15px' }
              },
              h('div', { 
                  className: 'card',               
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
                      className: 'card-img-top',
                      src: `${curr['thumbnail']['path'].replace(new RegExp('http:'), 'https:')}/standard_xlarge.jpg`, 
                      alt: curr['name'],
                      style: { padding: '0 0 5px 0' }
                    } 
                  )
                ),
                h('div', { 
                    className: 'card-block',
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
                  h('div', { 
                      className: 'card-block',
                      style: { display: 'flex', padding: '0 9px' } 
                    },
                    curr['urls'].reduce((prev1, curr1) => {
                      prev1.push(
                        h('div', { 
                            key: window.crypto.getRandomValues(new Uint32Array(1))[0],
                            style: { marginRight: '10px' }
                          },
                          h('i', {
                              className: 'fa fa-book fa-1',
                              'aria-hidden': 'true',
                              style: { marginRight: '5px', color: '#999' }
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
  state: PropTypes.object
}

export default observer(MarvelList)