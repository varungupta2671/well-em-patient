<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form novalidate @submit.prevent="handleSubmit(onSubmit)">
      <!--- class="mt-4" --->
      <p>Verify your mobile number to access your account.</p>
      <ValidationProvider vid="mboile" name="Mobile Number" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="mobInput">Mobile Number</label>
          <input
            type="text"
            :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
            id="mobInput"
            aria-describedby="emailHelp"
            v-model="user.mboile"
            placeholder="Enter Mobile Number"
            required
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="OTP" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="passwordInput">OTP</label>
          <router-link to="/auth/password-reset1" class="float-right">Generate OTP</router-link>
          <input
            type="password"
            :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
            id="passwordInput"
            v-model="user.password"
            placeholder="OTP"
            required
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <button type="submit" class="btn btn-primary float-right">Sign in</button>
      </div>
      <div class="sign-info">
        <span class="dark-color d-inline-block line-height-2">
          Don't have an account?
          <router-link
            to="/dark/auth/sign-up1"
            class="iq-waves-effect pr-4"
            v-if="$route.meta.dark"
          >Sign up</router-link>
          <router-link to="/auth/sign-up1" class="iq-waves-effect pr-4" v-else>Sign up</router-link>
        </span>
        <!-- <social-login-form></social-login-form> -->
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SignIn3Form',
  props: ['formType', 'email', 'password'],
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),
  mounted () {
    // this.user.email = this.$props.email
    this.user.password = this.$props.password
  },
  computed: {
    ...mapGetters({
      stateUsers: 'Setting/usersState'
    })
  },
  methods: {
    onSubmit () {
      this.login()
    },
    login () {
      this.$router.push({ name: 'dashboard.dashboard' })
    }
  }
}
</script>
