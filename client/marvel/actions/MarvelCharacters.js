import MarvelFetch from './MarvelFetch'

const MarvelCharacters = ({store, type}) => {   
  async function Characters () {
    try {
      const total = (await MarvelFetch({type: 'characters'}))['data']['total']
      // const totalCharacters = Array.from({length: Math.ceil(total / 20)}, (x, i) => MarvelFetch({ type: 'characters', offset: 20 * i }))
      const totalCharacters = Array.from({length: 1}, (x, i) => MarvelFetch({ type: 'characters', offset: 20 * i }))

      store.init('characters', (await Promise.all(totalCharacters)).reduce((prev, curr) => prev.concat(curr['data']['results']), []))
    } catch (error) {
      console.error(error)
    }
  }

  return {
    'characters': Characters,
  }[type]()
}

export default MarvelCharacters