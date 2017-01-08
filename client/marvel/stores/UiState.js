import { action, observable } from 'mobx'

export default class UiState {
  @observable card = []

  @observable filter = ''
  
  @action init = (obj, data) => this[`${obj}`] = data
}