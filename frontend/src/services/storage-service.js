export default class StorageService {
  constructor () {
    this.name = 'Groupomania'
    this.data = window.sessionStorage.getItem(this.name)
    if (!this.data) {
      this.data = {
        userSession: {
          token: '',
          userId: null,
          userName: '',
          isAdmin: null
        }
      }
      window.sessionStorage.setItem(this.name, JSON.stringify(this.data))
    } else {
      this.data = JSON.parse(this.data)
    }
  }

  get (userToken) {
    return this.data[userToken]
  }

  // Création du sessionStorage
  set (userToken, value) {
    this.data[userToken] = value
    window.sessionStorage.setItem(this.name, JSON.stringify(this.data))
  }

  // Suppression du sessionStorage (Déconnexion)
  remove () {
    window.sessionStorage.removeItem(this.name)
  }
}
