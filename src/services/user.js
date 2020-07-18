import { instance } from './index'
import { getServiceToken } from '../config/constant'

export default {
  searchPatient (userType, userData) {
    const token = getServiceToken(userType)
    if (token) {
      instance.defaults.headers.common['token'] = token
      return instance.post('/users/getUserDetails/p/' + userData)
    }
  }
}
