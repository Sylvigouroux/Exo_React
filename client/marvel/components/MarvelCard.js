import { createElement as h, PropTypes } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import Styles from '../styles/Styles'

const MarvelCard = ({store, state}) => {
  return (
    h('div', { className: 'col-12' }, 
      h('h1', { className: css(Styles['heroes']) }, store['text']['card']),
      h('div', { className: 'col-12 mt-5 d-flex' },
        h('div', { className: 'col-3 d-flex flex-column' },
          h('div', { className: 'card', style: { border: '0' } }, 
            h('div', { className: 'd-flex justify-content-center' },
              h('img', { 
                  className: 'card-img-top mb-4',
                  src: `${state['card']['thumbnail']['path'].replace(new RegExp('http:'), 'https:')}/portrait_uncanny.jpg`, 
                  alt: state['card']['name']
                } 
              )
            )
          ),
          h('div', { className: 'cta-wrapper d-flex justify-content-center' },
            h('a', { 
                className: 'cta-wrapper',
                onClick: () => state.init('card', []),
                style: { color: 'white' }
              }, 'Retour'
            )
          )
        ),
        h('div', { className: 'col-6' },
          h('div', { 
              className: 'card mb-5',
              style: { 
                padding: '10px 0 0 10px',
                boxShadow: '0 5px 5px -5px #ccc' 
              }
            },
            h('h2', { style: { padding: '0 10px' } }, state['card']['name']),
            h('p', { style: { padding: '0 10px' } }, state['card']['description'])
          ),
          ['comics', 'series'].reduce((prev, curr) => {
            prev.push(
              h('div', { 
                  className: `${curr} mt-2`,
                  key: window.crypto.getRandomValues(new Uint32Array(1))[0]
                },
                h('p', { className: css(Styles['cards']) }, `${curr.slice(0, 1).toUpperCase()}${curr.slice(1)}`),
                h('ul', { className: 'list-unstyled' },
                  [{ name: null, resourceURI: null }].concat(toJS(state['card'][curr]['items'])).reduce((prev1, curr1) => {
                    prev1.push(
                      h('li', { 
                          className: 'mb-2',
                          key: window.crypto.getRandomValues(new Uint32Array(1))[0],
                          style: { 
                            borderBottom: '1px solid #ddd', 
                            padding: '0 0 5px 10px' 
                          }
                        },
                        h('span', null, curr1['name'])
                      )
                    )
                    return prev1 }, [])
                )
              )
            )
            return prev }, [])
        )
      )
    )
  )
}

MarvelCard.propTypes = {
  store: PropTypes.object,
  state: PropTypes.object
}

export default observer(MarvelCard)