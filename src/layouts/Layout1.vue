<template>
  <div>
    <div id="show-overlay"></div>
    <Loader />
    <div class="wrapper">
      <!-- Sidebar  -->
      <SideBarStyle1 :items="verticalMenu" :horizontal="horizontal" :logo="logo" @toggle="sidebarMini" />
      <div id="content-page" class="content-page" :class="horizontal ? 'ml-0' : ''">
        <!-- TOP Nav Bar -->
        <NavBarStyle1 title="Dashboard" :homeURL="{ name: 'default.dashboard-patient' }" @toggle="sidebarMini" :logo="logo" :horizontal="horizontal" :items="horizontalMenu">
          <template slot="responsiveRight">
            <ul class="navbar-nav ml-auto navbar-list">
              <li class="nav-item iq-full-screen">
                <a href="#" class="iq-waves-effect" id="btnFullscreen"><i class="ri-fullscreen-line"></i></a>
              </li>
              <li class="nav-item">
                <a href="#" class="search-toggle iq-waves-effect">
                  <i class="ri-notification-3-fill"></i>
                  <span class="bg-danger dots"></span>
                </a>
                <div class="iq-sub-dropdown">
                  <div class="iq-card shadow-none m-0">
                    <div class="iq-card-body p-0 ">
                      <div class="bg-primary p-3">
                        <h5 class="mb-0 text-white">{{ $t('nav.allNotifications') }}<small class="badge  badge-light float-right pt-1">{{ notification.length }}</small></h5>
                      </div>
                      <a href="#" class="iq-sub-card" v-for="(item, index) in notification" :key="index">
                        <div class="media align-items-center">
                          <div class="">
                            <div class="rounded-circle iq-card-icon" :class="`${item.reminderbg}`">
                              <i :class="`${item.remindericon}`"></i>
                            </div>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0 ">{{ item.name }}</h6>
                            <small class="float-right font-size-12">{{ item.date }}</small>
                            <p class="mb-0">{{ item.description.substring(0,40) + '...' }}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </template>
          <template slot="right">
            <ul class="navbar-list">
              <li>
                <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">
                  <img :src="userProfile" class="img-fluid rounded mr-3" alt="user">
                  <div class="caption">
                    <h6 class="mb-0 line-height user-name">{{ userName | capitalizeEach }}</h6>
                    <span class="font-size-12">{{ $t('nav.user.available') }}</span>
                  </div>
                </a>
                <div class="iq-sub-dropdown iq-dropdown">
                  <div class="iq-card shadow-none m-0">
                    <div class="iq-card-body p-0 ">
                      <div class="bg-primary p-3">
                        <h5 class="mb-0 text-white line-height user-name">Hello {{ userName | capitalizeEach }}</h5>
                      </div>
                      <a href="#" class="iq-sub-card iq-bg-primary-hover">
                        <div class="media align-items-center">
                          <div class="rounded iq-card-icon iq-bg-primary">
                            <i class="ri-account-pin-box-line"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0 ">{{ $t('nav.user.profileTitle') }}</h6>
                            <p class="mb-0 font-size-12">{{ $t('nav.user.profileSub') }}</p>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="iq-sub-card iq-bg-primary-danger-hover">
                        <div class="media align-items-center">
                          <div class="rounded iq-card-icon iq-bg-danger">
                            <i class="ri-list-settings-line"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0 ">{{ $t('nav.user.accountSettingTitle') }}</h6>
                            <p class="mb-0 font-size-12">{{ $t('nav.user.accountSettingSub') }}</p>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="iq-sub-card iq-bg-primary-secondary-hover">
                        <div class="media align-items-center">
                          <div class="rounded iq-card-icon iq-bg-secondary">
                            <i class="ri-phone-line"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0 ">{{ $t('nav.user.contactHmsTitle') }}</h6>
                            <p class="mb-0 font-size-12">{{ $t('nav.user.contactHmsSub')}}</p>
                          </div>
                        </div>
                      </a>
                      <div class="d-inline-block w-100 text-center p-3">
                        <a class="iq-bg-danger iq-sign-btn" href="javascript:void(0)" @click="logout" role="button">{{ $t('nav.user.signout') }}<i class="ri-login-box-line ml-2"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </template>
        </NavBarStyle1>
        <!-- TOP Nav Bar END -->
        <transition name="router-anim" :enter-active-class="`animated ${animated.enter}`" mode="out-in"
                    :leave-active-class="`animated ${animated.exit}`">
          <router-view/>
        </transition>
        <FooterStyle1>
          <template v-slot:left>
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            <li class="list-inline-item"><a href="#">Terms of Use</a></li>
          </template>
          <template v-slot:right>
            Copyright 2020 <a href="#">Well-EM</a> All Rights Reserved.
          </template>
        </FooterStyle1>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from '../components/wellem/loader/Loader'
import SideBarStyle1 from '../components/wellem/sidebars/SideBarStyle1'
import NavBarStyle1 from '../components/wellem/navbars/NavBarStyle1'
import SideBarItems from '../FackApi/json/SideBar'
import HorizontalItems from '../FackApi/json/HorizontalMenu'
import profile from '../assets/images/user/11.png'
import loader from '../assets/images/well-em-logo.png'
import { wellem, customMethods } from '../config/pluginInit'
import { Users } from '../FackApi/api/chat'
import { mapGetters, mapActions } from 'vuex'
import { constant } from '../config/constant'
export default {
  name: 'Layout1',
  components: {
    Loader,
    SideBarStyle1,
    NavBarStyle1
  },
  mounted () {
    this.updateRadio()
  },
  computed: {
    ...mapGetters({
      selectedLang: 'Setting/langState',
      langsOptions: 'Setting/langOptionState',
      colors: 'Setting/colorState'
    })
  },
  watch: {
  },
  // sidebarTicket
  data () {
    return {
      userName: constant.userName,
      horizontal: false,
      mini: false,
      darkMode: false,
      animated: { enter: 'fadeIn', exit: 'fadeOut' },
      animateClass: [
        { value: { enter: 'zoomIn', exit: 'zoomOut' }, text: 'Zoom' },
        { value: { enter: 'fadeInUp', exit: 'fadeOutDown' }, text: 'Fade' },
        { value: { enter: 'slideInLeft', exit: 'slideOutRight' }, text: 'Slide' },
        { value: { enter: 'rotateInDownLeft', exit: 'rotateOutDownLeft' }, text: 'Roll' }
      ],
      horizontalMenu: HorizontalItems,
      verticalMenu: SideBarItems,
      userProfile: profile,
      logo: loader,
      usersList: Users,
      rtl: false,
      notification: [
        { reminderbg: 'bg-danger', remindericon: 'ri-calendar-fill', name: 'Medicine Time', date: '23 hour left', description: 'Crocine' },
        { reminderbg: 'bg-warning', remindericon: 'ri-notification-3-fill', name: 'Test Report', date: '14 hour left', description: '' }
      ]
    }
  },
  methods: {
    updateRadio () {
      this.horizontal = this.$store.getters['Setting/horizontalMenuState']
      this.mini = this.$store.getters['Setting/miniSidebarState']
    },
    sidebarHorizontal () {
      this.$store.dispatch('Setting/horizontalMenuAction')
      this.updateRadio()
    },
    sidebarMini () {
      wellem.triggerSet()
      this.$store.dispatch('Setting/miniSidebarAction')
      this.updateRadio()
    },
    changeColor (code) {
      document.documentElement.style.setProperty('--iq-primary', code.primary)
      document.documentElement.style.setProperty('--iq-primary-light', code.primaryLight)
      if (this.darkMode) {
        document.documentElement.style.setProperty('--iq-bg-dark-color', code.bodyBgDark)
      } else {
        document.documentElement.style.setProperty('--iq-bg-light-color', code.bodyBgLight)
      }
    },
    reset () {
      this.changeColor({ primary: '#827af3', primaryLight: '#b47af3', bodyBgLight: '#efeefd', bodyBgDark: '#1d203f' })
      this.animated = { enter: 'zoomIn', exit: 'zoomOut' }
      this.light()
    },
    logout () {
      customMethods.resetUserState('d', true, constant, this)
    },
    langChange (lang) {
      this.langChangeState(lang)
      this.$i18n.locale = lang.value
      document.getElementsByClassName('iq-show')[0].classList.remove('iq-show')
      if (lang.value === 'ar') {
        this.rtlAdd(lang)
      } else {
        this.rtlRemove(lang)
      }
    },
    ...mapActions({
      langChangeState: 'Setting/setLangAction',
      rtlAdd: 'Setting/setRtlAction',
      rtlRemove: 'Setting/removeRtlAction'
    })
  }
}
</script>
<style>
  @import url("../assets/css/custom.css");
</style>
