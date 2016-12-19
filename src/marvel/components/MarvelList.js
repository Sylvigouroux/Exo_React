import { createElement as h, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'

const MarvelList = ({store}) => {
  return (
    h('div', { className: 'col-md-12' }, 
      h('h2', { className: css(Styles['heroes']) }, 'Liste des super héros :'),   
      store['characters'].reduce((prev, curr, currentIndex) => {
        prev.push(
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
                  onClick: () => console.log('thumbnail', currentIndex) 
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
                    padding: '9px 0', 
                    boxShadow: '0 -1px 1px -1px #ccc'
                  }
                },
                h('p', { 
                    className: css(Styles['caption']), 
                    style: { padding: '9px', boxShadow: '0 1px 1px -1px #ccc' } 
                  }, curr['name']),
                h('div', { style: { display: 'flex', padding: '0 9px' } },
                  curr['urls'].reduce((prev1, curr1) => {
                    prev1.push(
                      h('div', { 
                          key: window.crypto.getRandomValues(new Uint32Array(1))[0],
                          style: { marginRight: '10px' }
                        },
                        h('span', { 
                            className: 'glyphicon glyphicon-link',
                            style: { color: '#777' } 
                          }
                        ),                      
                        h('a', { 
                            href: curr1['url'], 
                            style: { color: '#777' } 
                          }, curr1['type']) 
                      )
                    )
                    return prev1 }, [])
                )
              )
            )
          )
        )
        return prev }, [])
    )
  )
}

MarvelList.propTypes = {
  store: PropTypes.object,
}

export default observer(MarvelList)