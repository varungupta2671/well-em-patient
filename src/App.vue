<template>
  <router-view/>
</template>
<script>
import { wellem } from './config/pluginInit'

export default {
  name: 'App',
  components: {
  },
  mounted () {
    wellem.mainIndex()
  }
}
</script>
<style lang="scss">
  @import "assets/scss/style.scss";
</style>
