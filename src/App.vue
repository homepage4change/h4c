<template>
  <div id="app">
    <mobileHeader></mobileHeader>

    <transition>
      <router-view></router-view>
    </transition>

    <transition name="fade">
      <recipientModal :recipient="recipient" v-if="recipient"></recipientModal>
    </transition>
    <mainMenu></mainMenu>
  </div>
</template>

<script>
import mainMenu from './components/menu.vue'
import mobileHeader from './components/mobile-header.vue'
import recipientModal from './components/recipient-modal.vue'

export default {
  name: 'App',

  components: {
    mainMenu,
    mobileHeader,
    recipientModal
  },

  data () {
    return {
      recipient: false
    }
  },

  created () {
    this.testTouchDevice()
    window.addEventListener('resize', this.testTouchDevice)

    Event.$on('modal-opened', (recipient) => {
      this.recipient = recipient
    })
    Event.$on('modal-closed', () => { this.recipient = false })
  },

  mounted () {
    const app = this

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
    },

    testTouchDevice () {
      const isTouchDevice = require('is-touch-device')

      if (isTouchDevice()) {
        document.querySelector('body').classList.add('is-touch')
        Event.$emit('is-touch-device')
      } else {
        document.querySelector('body').classList.remove('is-touch')
        Event.$emit('is-pointer-device')
      }
    }
  }
}
</script>

<style lang="scss">
$color: red;
</style>
