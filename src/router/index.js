import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layouts */
import Layout1 from '../layouts/Layout1'
import Default from '../layouts/BlankLayout'
import AuthLayout1 from '../layouts/AuthLayouts/AuthLayout1'
/* Dashboards View */
import Dashboard from '../views/Dashboards/Dashboard'
/* Authentic View */
import SignIn1 from '../views/AuthPages/Default/SignIn1'
import SignUp1 from '../views/AuthPages/Default/SignUp1'
import RecoverPassword1 from '../views/AuthPages/Default/RecoverPassword1'
import LockScreen1 from '../views/AuthPages/Default/LockScreen1'
import ConfirmMail1 from '../views/AuthPages/Default/ConfirmMail1'
/* Extra Pages */
import ErrorPage from '../views/Pages/ErrorPage'
import ComingSoon from '../views/Pages/ComingSoon'
import Maintenance from '../views/Pages/Maintenance'
import BlankPage from '../views/Pages/BlankPage'
import AddAppointment from '../views/Pages/AddAppointment'
import LabTestBooking from '../views/Pages/LabTestBooking'
/* Todo */
import Callback from '../views/AuthPages/Default/Callback'
Vue.use(VueRouter)

const childRoutes = (prop, mode) => [
  {
    path: 'dashboard',
    name: prop + '.dashboard',
    meta: { dark: mode, auth: true, name: 'Patient Details' },
    component: Dashboard
  }
]

const authChildRoutes = (prop, mode = false) => [
  {
    path: 'sign-in',
    name: prop + '.sign-in',
    meta: { dark: mode, auth: true },
    component: SignIn1
  },
  {
    path: 'sign-up1',
    name: prop + '.sign-up1',
    meta: { dark: mode, auth: true },
    component: SignUp1
  },
  {
    path: 'password-reset1',
    name: prop + '.password-reset1',
    meta: { dark: mode, auth: true },
    component: RecoverPassword1
  },
  {
    path: 'lock-screen1',
    name: prop + '.lock-screen1',
    meta: { dark: mode, auth: true },
    component: LockScreen1
  },
  {
    path: 'confirm-mail1',
    name: prop + '.confirm-mail1',
    meta: { dark: mode, auth: true },
    component: ConfirmMail1
  }
]

const pagesChildRoutes = (prop, mode = false) => [
  {
    path: 'error/:code',
    name: prop + '.error',
    meta: { dark: mode, auth: true },
    component: ErrorPage
  },
  {
    path: 'coming-soon',
    name: prop + '.coming-soon',
    meta: { dark: mode, auth: true },
    component: ComingSoon
  },
  {
    path: 'maintenance',
    name: prop + '.maintenance',
    meta: { dark: mode, auth: true },
    component: Maintenance
  }
]

const defaultlayout = (prop, mode = false) => [
  {
    path: 'blank-page',
    name: prop + '.blank-page',
    meta: { dark: mode, auth: true, name: 'Blank Page' },
    component: BlankPage
  },
  {
    path: 'add-appointment',
    name: prop + '.add-appointment',
    meta: { dark: mode, auth: true, name: 'Add Appointment' },
    component: AddAppointment
  },
  {
    path: 'lab-test-booking',
    name: prop + '.lab-test-booking',
    meta: { dark: mode, auth: true, name: 'Lab Test Booking' },
    component: LabTestBooking
  }
]

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Layout1,
    meta: { auth: true },
    children: childRoutes('dashboard')
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthLayout1,
    meta: { auth: true },
    children: authChildRoutes('auth')
  },
  {
    path: '/app',
    name: 'app',
    component: Layout1,
    meta: { auth: true },
    children: defaultlayout('default')
  },
  {
    path: '/pages',
    name: 'pages',
    component: Default,
    meta: { auth: true },
    children: pagesChildRoutes('pages')
  },
  {
    path: '/callback',
    name: 'callback',
    meta: { auth: false },
    component: Callback
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router
