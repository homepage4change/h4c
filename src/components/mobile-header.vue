<template>
  <nav>
    <!-- logo -->
    <a href="/" class="link-home mobile-nav" :class="mobileNavClasses">
      <inline-svg :src="require('../images/h4c-logo.svg')"></inline-svg>
    </a>
    <!-- hamburger menu -->
    <a href="#" class="hamburger-menu link-menu mobile-nav" :class="mobileNavClasses">
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

  mounted () {
    if (window.innerWidth <= 767) {
      this.mobile_swapNavClasses()
    }
  },

  methods: {
    mobile_swapNavClasses () {
      const app = this
      const sections = document.querySelectorAll('section')

      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset

        for (const section of sections) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            app.mobileNavClasses = ''
            if (section.classList.contains('card--image')) {
              app.mobileNavClasses = 'hidden'
            } else if (section.classList.contains('bg-lavender') || section.classList.contains('bg-red')) {
              app.mobileNavClasses = 'lime'
            } else if (section.classList.contains('bg-lime')) {
              if (section.id !== 'hero') {
                app.mobileNavClasses = 'lavender'
              }
            }
          }
        }
      })
    }
  }

}
</script>
