<template>
  <div id="menu" class="flex flex-col justify-center md:h-screen w-screen fixed top-0 left-0" :class="menuState">
    <header>
      <!-- close menu -->
      <a href="#" @click.prevent="closeMenu">
        <svg class="icon-close-menu close-menu nav-element z-1 fixed" width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill-rule="nonzero" points="-0.0291790571 38.8629882 16.9413837 21.8924255 -0.0291790571 4.92186272 4.92056841 -0.0278847506 21.8911312 16.942678 38.8616939 -0.0278847506 43.8114414 4.92186272 26.8408786 21.8924255 43.8114414 38.8629882 38.8616939 43.8127357 21.8911312 26.8421729 4.92056841 43.8127357"></polygon></svg>
      </a>
    </header>

    <div class="container mx-auto self-center">
      <ul>
        <li><a href="/" @click="deepLink" class="link-home uppercase close-menu swipe">Home</a></li>
        <li>
          <a href="#" @click="toggleCollapsible" class="uppercase collapsible swipe">The Program</a>
          <ul class="collapse" :class="subMenuState">
            <li><a href="/#who" @click="deepLink" class="close-menu swipe">Requirements</a></li>
            <li><a href="/#what" @click="deepLink" class="close-menu swipe">Submission Details</a></li>
            <li><a href="/#where" @click="deepLink" class="close-menu swipe">Process</a></li>
            <li><a href="/#when" @click="deepLink" class="close-menu swipe">Deadlines</a></li>
            <li><a href="/#why" @click="deepLink" class="close-menu swipe">About H4C</a></li>
          </ul>
        </li>
        <li><a href="/grant-recipients" class="uppercase close-menu swipe">Grant Recipients</a></li>
        <li><a href="/submit-your-work" class="uppercase close-menu swipe">Submit Your Work</a></li>
      </ul>
    </div>

    <contact></contact>
  </div>
</template>

<script>
import gsap from 'gsap'
import contact from './contact.vue'

export default {
  components: {
    contact
  },

  data () {
    return {
      menuState: 'closed hidden',
      subMenuState: ''
    }
  },

  created () {
    const app = this
    Event.$on('menu-opened', () => {
      app.menuState = 'closed' // remove hidden
      setTimeout(() => { app.menuState = '' }, 20)
    })
  },

  methods: {
    toggleCollapsible () {
      this.subMenuState = (this.subMenuState) ? '' : 'active'
    },

    deepLink (e) {
      if (window.innerWidth > 767) { // Desktop
        if (location.pathname === '/') {
          e.preventDefault()
        }
        if (this.$route.path === '/') {
          const $el = e.target
          const href = $el.getAttribute('href')
          const cards = document.querySelectorAll('.card')

          if (href.indexOf('.html') === -1) {
            if ($el.classList.contains('icon-close-menu')) {
              this.closeMenu()
            } else {
              const sectionID = href.substring(2)
              let cnt = 0
              let scrollOffset = 0

              for (const card of cards) {
                if (card.getAttribute('id') === sectionID) {
                  scrollOffset = innerHeight + (innerHeight * (cnt / 2))
                  break
                }
                cnt++
              }

              gsap.to(window, {
                scrollTo: scrollOffset,
                duration: 0,
                onComplete: () => setTimeout(this.closeMenu, 200)
              })
            }
          }
        }
      } else { // Mobile
        this.closeMenu()
      }
    },

    closeMenu () {
      this.subMenuState = ''
      this.menuState = 'closed'
      setTimeout(() => { this.menuState = 'closed hidden' }, 600)
      Event.$emit('menu-closed')
    }
  }
}
</script>
