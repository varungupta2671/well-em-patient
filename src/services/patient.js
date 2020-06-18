import axios from './index'

export default {
  getPatients (userData) {
    return axios.post('/patients/getPatients', userData)
  },
  register (userData) {
    return axios.post('/api/register', userData)
  }
}
// // body: JSON.stringify(this.message)
// fetch(API_URL + this.hcareID, {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json',
//     'token':
//   }
// })
//   .then(response => response.json())
//   .then(result => {
//     this.patient = result
//   })
