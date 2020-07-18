<template>
  <div>
    <h1 class="mb-0 text-center">Sign in</h1>
    <p class="text-center">Enter your staff id and password to access your account.</p>
    <sign-in-staff-form formType="healthcare" email="" password=""></sign-in-staff-form>
  </div>
</template>

<script>
import SignInStaffForm from './Forms/SignInStaffForm'
// import { constant } from '../../../config/constant'

export default {
  name: 'SignInStaff',
  components: { SignInStaffForm },
  mounted () {
    // if (constant.authDToken !== undefined && constant.authDToken !== null && constant.authDToken !== '') {
    //   this.$router.push({ name: 'default.dashboard-patient' })
    // }
  },
  methods: {}
}
</script>
