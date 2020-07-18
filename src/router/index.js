import Vue from 'vue'
import VueRouter from 'vue-router'

/* Layouts */
import Layout1 from '../layouts/Layout1'
import Default from '../layouts/BlankLayout'
import AuthLayoutP from '../layouts/AuthLayouts/AuthLayoutP'
import AuthLayoutS from '../layouts/AuthLayouts/AuthLayoutS'
import AuthLayoutH from '../layouts/AuthLayouts/AuthLayoutH'

import SignUp1 from '../views/AuthPages/Default/SignUp1'
import RecoverPassword1 from '../views/AuthPages/Default/RecoverPassword1'
import LockScreen1 from '../views/AuthPages/Default/LockScreen1'
import ConfirmMail1 from '../views/AuthPages/Default/ConfirmMail1'

/* Patient View */
import SignInPatient from '../views/AuthPages/Default/SignInPatient'
import PatientDashboard from '../views/Dashboards/PatientDashboard'
import AddAppointment from '../views/Pages/AddAppointment'
import LabTestBooking from '../views/Pages/LabTestBooking'

/* Staff View */
import SignInStaff from '../views/AuthPages/Default/SignInStaff'
import StaffDashboard from '../views/Dashboards/StaffDashboard'
import PatientDetails from '../views/Pages/PatientDetails'

/* Hospital View */
import SignInHospital from '../views/AuthPages/Default/SignInHospital'
import HospitalDashboard from '../views/Dashboards/HospitalDashboard'

/* Extra Pages */
import ErrorPage from '../views/Pages/ErrorPage'
import ComingSoon from '../views/Pages/ComingSoon'
import Maintenance from '../views/Pages/Maintenance'
import BlankPage from '../views/Pages/BlankPage'

/* Todo */
import Callback from '../views/AuthPages/Default/Callback'
Vue.use(VueRouter)

const staffChildRoutes = (prop, mode = false) => [
  {
    path: 'sign-in',
    name: prop + '.sign-in',
    meta: { dark: mode, auth: true },
    component: SignInStaff
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

const hospitalChildRoutes = (prop, mode = false) => [
  {
    path: 'sign-in',
    name: prop + '.sign-in',
    meta: { dark: mode, auth: true },
    component: SignInHospital
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

const patientChildRoutes = (prop, mode = false) => [
  {
    path: 'sign-in',
    name: prop + '.sign-in',
    meta: { dark: mode, auth: true },
    component: SignInPatient
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
    path: 'dashboard-patient',
    name: prop + '.dashboard-patient',
    meta: { dark: mode, auth: true, name: 'Dashboard' },
    component: PatientDashboard
  },
  {
    path: 'dashboard-staff',
    name: prop + '.dashboard-staff',
    meta: { dark: mode, auth: true, name: 'Dashboard' },
    component: StaffDashboard
  },
  {
    path: 'dashboard-hospital',
    name: prop + '.dashboard-hospital',
    meta: { dark: mode, auth: true, name: 'Dashboard' },
    component: HospitalDashboard
  },
  {
    path: 'patient-details/:uid',
    name: prop + '.patient-details',
    meta: { dark: mode, auth: true, name: 'Patient Details' },
    component: PatientDetails
  },
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
    path: '/patient',
    name: 'patient',
    component: AuthLayoutP,
    meta: { auth: true },
    children: patientChildRoutes('patient')
  },
  {
    path: '/staff',
    name: 'staff',
    component: AuthLayoutS,
    meta: { auth: true },
    children: staffChildRoutes('staff')
  },
  {
    path: '/hospital',
    name: 'hospital',
    component: AuthLayoutH,
    meta: { auth: true },
    children: hospitalChildRoutes('staff')
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
    meta: { auth: false },
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

router.beforeResolve((to, from, next) => {
  // console.log('TO_', to)
  if (to.name === (undefined || null)) {
    return next({ name: 'pages.error', params: { code: '404' }, replace: true })
  } else {
    next()
  }
})

export default router
