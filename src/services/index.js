import axios from 'axios'
import { constant } from '../config/constant'

// let token = document.head.querySelector('meta[name="csrf-token"]') || ''
// 'X-CSRF-TOKEN': token,
export const instance = axios.create({
  baseURL: constant.webBaseURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// instance.defaults.headers.common['token'] = constant.authPToken.toString()
