<template>
  <div id="app">
    <mobileHeader></mobileHeader>

    <router-view/>

    <mainMenu></mainMenu>
  </div>
</template>

<script>
import mainMenu from './components/menu.vue'
import mobileHeader from './components/mobile-header.vue'

export default {
  name: 'App',
  components: {
    mainMenu,
    mobileHeader
  },

  mounted () {
    const isTouchDevice = require('is-touch-device')

    // Add 'is-touch' class to the <body> element if the device is touch enabled
    if (isTouchDevice()) {
      document.querySelector('body').classList.add('is-touch')
    }
  }
}
</script>

<style lang="scss">
$color: red;
</style>
