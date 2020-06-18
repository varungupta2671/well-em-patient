import { instance } from './index'
import constant from '../config/constant'

export default {
  login (userData, self) {
    instance
      .post('/auth/patient/signin', userData)
      .then(response => {
        constant.authToken = response.data.token
        localStorage.setItem('authToken', response.data.token)
        self.$router.push({ name: 'dashboard.dashboard' })
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  },
  checkAuth (self) {
    instance.defaults.headers.common['token'] = constant.authToken

    return instance
      .post('/auth/check')
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
        localStorage.removeItem('user')
        localStorage.removeItem('authToken')
        self.$router.push({ name: 'auth.sign-in' })
        // this.errored = true
      })
  },
  register (userData) {
    return instance.post('/api/register', userData)
  }
}
