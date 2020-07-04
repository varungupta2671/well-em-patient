import { instance } from './index'
import constant from '../config/constant'

export default {
  register (userType, userData) {
    return instance.post('/api/register/' + userType, userData)
  },
  login (userType, userData) {
    return instance.post('/auth/signin/' + userType, userData)
  },
  checkAuth (userType) {
    instance.defaults.headers.common['token'] = constant.authToken
    return instance.post('/auth/check/' + userType)
  }
}
