<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form novalidate @submit.prevent="handleSubmit(onSubmit)"> <!--- class="mt-4" --->
      <ValidationProvider vid="hid" name="Staff Id" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="sInput">Hospital user Id</label>
          <input
            type="text"
            :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
            id="sInput"
            aria-describedby="sIdHelp"
            v-model="user.uid"
            placeholder="Enter Hospital user id"
            required
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="passwordInput">Password</label>
          <router-link to="/auth/password-reset1" class="float-right">Forgot password?</router-link>
          <input
            type="password"
            :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
            id="passwordInput"
            v-model="user.password"
            placeholder="Password"
            required
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" :id="formType" />
          <label class="custom-control-label" :for="formType">Remember Me</label>
        </div>
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
import AuthServices from './../../../../services/auth'
import { constant } from '../../../../config/constant'

export default {
  name: 'SignIn1Form',
  props: ['formType', 'email', 'password'],
  data: () => ({
    user: {
      uid: '',
      password: ''
    }
  }),
  mounted () {
    this.user.uid = this.$props.uid
    this.user.password = this.$props.password
  },
  computed: {
    ...mapGetters({
      stateUsers: 'Setting/usersState'
    })
  },
  methods: {
    onSubmit () {
      AuthServices.login('h', this.user)
        .then(response => {
          constant.authHToken = response.headers['auth-token']
          localStorage.setItem('authHToken', response.headers['auth-token'])
          localStorage.setItem('userType', 'h')
          this.$router.push({ name: 'default.dashboard-hospital' })
        })
        .catch(error => {
          // console.log(error)
          this.errored = true
        })
    }
  }
}
</script>
