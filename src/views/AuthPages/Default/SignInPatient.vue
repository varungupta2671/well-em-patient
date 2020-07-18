<template>
  <div>
    <h1 class="mb-0">Sign in using</h1>
    <!-- <p>Enter your healthcare id and password to access your account.</p> -->
     <fieldset class="form-group">
        <template v-for="(item,index) in custom">
          <b-form-radio
            inline
            v-model="stateActive[item[Object.keys(item)[0]]]"
            :name="item.name"
            :key="index"
            :value="item.value"
            :disabled="item.disabled"
          >{{ item.label }}</b-form-radio>
        </template>
      </fieldset>
    <sign-in1-form v-if="stateActive.loginChannel === 'hid'" formType="healthcare" email="" password=""></sign-in1-form>
    <sign-in2-form v-if="stateActive.loginChannel === 'aid'" formType="healthcare" email="" password=""></sign-in2-form>
    <sign-in3-form v-if="stateActive.loginChannel === 'mob'" formType="healthcare" email="" password=""></sign-in3-form>
  </div>
</template>

<script>
import SignIn1Form from './Forms/SignIn1Form'
import SignIn2Form from './Forms/SignIn2Form'
import SignIn3Form from './Forms/SignIn3Form'

export default {
  name: 'SignIn',
  components: { SignIn1Form, SignIn2Form, SignIn3Form },
  data: () => ({
    stateActive: {
      single: 'active',
      disable: 'active',
      loginChannel: 'hid'
    },
    custom: [
      {
        name: 'loginChannel',
        label: 'Healthcare ID',
        value: 'hid',
        disabled: false
      },
      {
        name: 'loginChannel',
        label: 'Aadhar ID',
        value: 'aid',
        disabled: false
      },
      {
        name: 'loginChannel',
        label: 'Mobile',
        value: 'mob',
        disabled: false
      }
    ]
  }),
  mounted () {},
  methods: {}
}
</script>
