<template>
  <div>
    <h1 class="mb-0 text-center">Sign in</h1>
    <p class="text-center">Enter your staff id and password to access your account.</p>
    <sign-in-hospital-form formType="healthcare" email="" password=""></sign-in-hospital-form>
  </div>
</template>

<script>
import SignInHospitalForm from './Forms/SignInHospitalForm'
// import { constant } from '../../../config/constant'

export default {
  name: 'SignInHospital',
  components: { SignInHospitalForm },
  mounted () {
    // if (constant.authDToken !== undefined && constant.authDToken !== null && constant.authDToken !== '') {
    //   this.$router.push({ name: 'default.dashboard-patient' })
    // }
  },
  methods: {}
}
</script>
