import MarvelFetch from './MarvelFetch'

const MarvelCharacters = ({store, type, characterId}) => {   
  async function Characters () {
    try {
      const total = (await MarvelFetch({type: 'characters'}))['data']['total']
      // const totalCharacters = Array.from({length: Math.ceil(total / 20)}, (x, i) => MarvelFetch({ type: 'characters', offset: 20 * i }))
      const totalCharacters = Array.from({length: 2}, (x, i) => MarvelFetch({ type: 'characters', offset: 20 * i }))

      store.init('characters', (await Promise.all(totalCharacters)).reduce((prev, curr) => prev.concat(curr['data']['results']), []))
    } catch (error) {
      console.error(error)
    }
  }

  async function CharactersInfo () {
    try {
      const response = await MarvelFetch({type: 'charactersInfo', characterId})

      console.log('CharactersInfo', response)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    'characters': Characters,
    'charactersInfo': CharactersInfo
  }[type]()
}

export default MarvelCharacters