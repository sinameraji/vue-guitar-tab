import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// how we call this method from another file
// AuthentificationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
