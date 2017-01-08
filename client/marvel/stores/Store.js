import { action, observable } from 'mobx'
import { MarvelCharacters } from '../actions/MarvelCharacters'

export default class Store {
  @observable text = {
    'loading': `Welcome to ${PROJECT_NAME} for`,
    'list': 'Liste des super héros :',
    'card': 'Fiche identité :',
    'search': 'Recherchez un super héros'
  }

  @observable characters = MarvelCharacters({ store: this, type: 'characters' })
  
  @action init = (obj, data) => this[`${obj}`] = data
}