import md5 from 'blueimp-md5'

const MarvelFetch = ({type, offset, characterId}) => {   
  const baseUrl = 'http://gateway.marvel.com:80'  
  async function api (url) {
    const response = await fetch(url, {
      method: 'GET'
    })   

    return (response.status >= 200 && response.status < 300)
           ? response.json()
           : (() => { throw new Error(response.statusText) })()
  }

  const queryParams = () => {
    const ts = Math.floor(Date.now() / 1000)
    const concatenatedString = `${ts}${API_PRIVATE}${API_PUBLIC}`
    const params = {
      ts,
      apikey: API_PUBLIC,
      hash: md5(concatenatedString),
      offset
    }

    return Object.keys(params).reduce((prev, curr) => `${prev}${curr}=${params[curr]}&`, '').slice(0, -1)
  }

  const Characters = () => api(`${baseUrl}/v1/public/characters?${queryParams()}`)

  return {
    'characters': Characters,
  }[type]()
}

export default MarvelFetch