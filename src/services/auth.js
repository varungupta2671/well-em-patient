import { instance } from './index'
import { getServiceToken } from '../config/constant'

export default {
  register (userType, userData) {
    return instance.post('/api/register/' + userType, userData)
  },
  login (userType, userData) {
    return instance.post('/auth/signin/' + userType, userData)
  },
  checkAuth (userType) {
    const token = getServiceToken(userType)
    if (token) {
      instance.defaults.headers.common['token'] = token
      return instance.post('/auth/check/' + userType)
    }
  }
}
