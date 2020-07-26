export const constant = {
  // webBaseURL: 'http://localhost:3000',
  webBaseURL: 'https://well-em-node.herokuapp.com/',
  authPToken: localStorage.getItem('authPToken') || '',
  authDToken: localStorage.getItem('authDToken') || '',
  authHToken: localStorage.getItem('authHToken') || '',
  authLToken: localStorage.getItem('authLToken') || '',
  authPhToken: localStorage.getItem('authPhToken') || '',
  userName: localStorage.getItem('userName') || ''
}

export const getServiceToken = (userType) => {
  switch (userType) {
    case 'p':
      return localStorage.getItem('authPToken')
    case 'd':
      return localStorage.getItem('authDToken')
    case 'h':
      return localStorage.getItem('authHToken')
    case 'l':
      return localStorage.getItem('authLToken')
    case 'ph':
      return localStorage.getItem('authPhToken')
    default:
      return ''
  }
}
