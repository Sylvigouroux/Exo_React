import { action, observable } from 'mobx'
import MarvelCharacters from '../actions/MarvelCharacters'

export default class UiState {
//   @observable card = false
  
  @action init = (obj, data) => this[`${obj}`] = data

//   @action list = (bool) => this['card'] = false
}