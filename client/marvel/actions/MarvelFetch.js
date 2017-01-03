import md5 from 'blueimp-md5'
import Future from 'fluture'

export const MarvelFetch = ({type, offset}) => {   
  const baseUrl = 'https://gateway.marvel.com'    

  const api = ({url, method, headers, body}) => {
    // https://developers.google.com/web/fundamentals/getting-started/primers/promises#toc-promisifying-xmlhttprequest

    return Future((reject, resolve) => {
      const req = new XMLHttpRequest()
      req.open(method, url)

      req.onload = () => {
        return (req.status >= 200 && req.status < 300) 
               ? resolve(req.response)
               : reject(Error(req.statusText))
      }

      req.onerror = () => reject(Error('Network Error'))

      req.send()
    })
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

  const Characters = () => api({
    url: `${baseUrl}/v1/public/characters?${queryParams()}`,
    method: 'GET'
  })

  return {
    'characters': Characters,
  }[type]()
}
