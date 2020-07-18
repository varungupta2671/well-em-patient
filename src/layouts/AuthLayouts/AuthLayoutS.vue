<template>
  <div>
    <Loader />
    <section class="sign-in-staff-page sign-in-common">
      <b-container class="sign-in-page-bg p-0"> <!--- mt-5 --->
        <div class="row no-gutters">
          <div class="col-md-6 sign-in-detail position-relative">
             <div class="text-white">
                <a class="sign-in-logo mb-3" href="#"><img :src="logo" class="img-fluid" alt="logo"></a>
              </div>
            <div class="sign-in-from">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>
<script>
import Loader from '../../components/wellem/loader/Loader'
import logo from '../../assets/images/well-em-logo.png'
import { wellem } from '../../config/pluginInit'
import bgImage from '../../assets/images/login/2.png'
export default {
  name: 'AuthLayout1',
  components: {
    Loader
  },
  mounted () {
    wellem.index()
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      },
      logo: logo,
      bgImageURL: bgImage
    }
  }
}
</script>
