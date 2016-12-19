import { action, observable } from 'mobx'
import MarvelCharacters from '../actions/MarvelCharacters'

export default class Store {
  @observable characters = MarvelCharacters({ store: this, type: 'characters' })
  
  @action init = (obj, data) => this[`${obj}`] = data
}