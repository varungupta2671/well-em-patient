import Vue from 'vue'
import moment from 'moment'

Vue.filter('reverse', function (value) {
  // slice to make a copy of array, then reverse the copy
  return value.slice().reverse()
})

Vue.filter('age', function (value) {
  if (value) {
    var t = new Date()
    var dob = new Date(value)
    var age = t.getFullYear() - dob.getFullYear()
    var m = t.getMonth() - dob.getMonth()
    if (m < 0 || (m === 0 && t.getDate() < dob.getDate())) {
      age--
    }
    return age
  }
})

Vue.filter('experience', function (value) {
  if (value) {
    var c = new Date()
    var exp = c.getFullYear() - value
    return exp
  }
})

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('LL')
  }
})

Vue.filter('gender', function (value) {
  if (!value) return ''
  value = value.toString()
  return value === 'm' ? 'Male' : 'Female'
})

Vue.filter('staff', function (value) {
  if (!value) return ''
  value = value.toString()
  return value === 'd' ? 'Doctor' : 'Staff Member'
})

Vue.filter('capitalizeOne', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('capitalizeEach', function (value) {
  if (!value) return ''
  let s = value.toLowerCase().split(' ')
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].charAt(0).toUpperCase() + s[i].substring(1)
  }
  return s.join(' ')
})
