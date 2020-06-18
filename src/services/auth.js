import { instance } from './index'
import constant from '../config/constant'

export default {
  login (userData) {
    return instance.post('/auth/patient/signin', userData)
  },
  checkAuth () {
    instance.defaults.headers.common['token'] = constant.authToken
    return instance.post('/auth/check')
  },
  register (userData) {
    return instance.post('/api/register', userData)
  }
}
