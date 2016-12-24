import { MarvelFetch } from './MarvelFetch'
import Future from 'fluture'

export const MarvelCharacters = ({store, type}) => {   
  const Characters = () => {
    MarvelFetch({ type: 'characters' })
      .map(characters => JSON.parse(characters)['data']['total'])
      .fork(console.error, (total) => {
        // const totalCharacters = Array.from({ length: Math.ceil(total / 20) }, (x, i) => MarvelFetch({ type: 'characters', offset: 20 * i }))
        const totalCharacters = Array.from({ length: 2 }, (x, i) => MarvelFetch({ type: 'characters', offset: 20 * i }))

        Future.parallel(Infinity, totalCharacters).fork(console.error, (characters) => {
          store.init('characters', characters.reduce((prev, curr) => prev.concat(JSON.parse(curr)['data']['results']), []))
        })
      })
  } 

  return {
    'characters': Characters,
  }[type]()
}
