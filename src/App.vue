<template>
  <div id="app">
    <mobileHeader></mobileHeader>

    <transition>
      <router-view></router-view>
    </transition>

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
    const app = this
    const isTouchDevice = require('is-touch-device')

    // Add 'is-touch' class to the <body> element if the device is touch enabled
    if (isTouchDevice()) {
      document.querySelector('body').classList.add('is-touch')
    }

    window.addEventListener('load', function (event) {
      app.setInitialViewportVars()
      app.setVariableViewportVars()
      window.addEventListener('resize', app.setVariableViewportVars)
    })
  },

  methods: {
    setInitialViewportVars () {
      const ih = (typeof (window.visualViewport) !== 'undefined') ? window.visualViewport.height * 0.01 : window.innerHeight * 0.01
      document.documentElement.style.setProperty('--ih', ih + 'px')
    },

    setVariableViewportVars () {
      let vw, vh

      if (typeof (window.visualViewport) !== 'undefined') {
        vh = window.visualViewport.height * 0.01
        vw = window.visualViewport.width * 0.01
      } else {
        vh = window.innerHeight * 0.01
        vw = window.innerWidth * 0.01
      }

      document.documentElement.style.setProperty('--vh', vh + 'px')
      document.documentElement.style.setProperty('--vw', vw + 'px')
    }
  }
}
</script>

<style lang="scss">
$color: red;
</style>
