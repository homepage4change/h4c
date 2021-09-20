<template>
  <nav>
    <!-- logo -->
    <a href="/" class="link-home mobile-nav" :class="mobileNavClasses">
      <inline-svg :src="require('../images/h4c-logo.svg')"></inline-svg>
    </a>
    <!-- hamburger menu -->
    <a href="#" class="hamburger-menu link-menu mobile-nav" :class="mobileNavClasses" @click.prevent="openMenu">
      <inline-svg :src="require('../images/hamburger.svg')"></inline-svg>
    </a>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      mobileNavClasses: ''
    }
  },

  created () {
    Event.$on('menu-closed', () => { this.swapNavClasses() })
    Event.$on('menu-opened', () => { this.mobileNavClasses = this.mobileNavClasses + ' blur' })
    Event.$on('modal-closed', () => { this.swapNavClasses() })
    Event.$on('modal-opened', () => { this.mobileNavClasses = this.mobileNavClasses + ' blur' })
  },

  mounted () {
    if (window.innerWidth <= 767) {
      if (location.pathname !== '/') {
        this.swapNavClasses()
      } else {
        window.addEventListener('load', this.scrollListener)
      }
    }
  },

  methods: {
    openMenu () {
      Event.$emit('menu-opened')
    },

    scrollListener () {
      window.addEventListener('scroll', this.swapNavClasses)
    },

    swapNavClasses () {
      if (location.pathname === '/archive') {
        this.mobileNavClasses = 'lime'
      } else if (location.pathname === '/submission') {
        this.mobileNavClasses = 'plum'
      } else {
        // const app = this
        const sections = document.querySelectorAll('section')
        const scrollTop = window.pageYOffset

        for (const section of sections) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            this.mobileNavClasses = ''
            if (section.classList.contains('card--image')) {
              this.mobileNavClasses = 'hidden'
            } else if (section.classList.contains('bg-lavender') || section.classList.contains('bg-red')) {
              this.mobileNavClasses = 'lime'
            } else if (section.classList.contains('bg-lime')) {
              if (section.id !== 'hero') {
                this.mobileNavClasses = 'lavender'
              }
            }
          }
        }
      }
    }
  }
}
</script>
