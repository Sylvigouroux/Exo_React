import { action, observable } from 'mobx'

export default class UiState {
  @observable text = {
    'loading': `Welcome to ${PROJECT_NAME} for`,
    'list': 'Liste des super héros :',
    'card': 'Fiche identité :',
    'search': 'Recherchez un super héros'
  }

  @observable card = []

  @observable filter = ''
  
  @action init = (obj, data) => this[`${obj}`] = data
}