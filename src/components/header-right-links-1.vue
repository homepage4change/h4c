<template>
  <div>
    <!-- hamburger menu -->
    <a href="#" class="hamburger-menu" @click.prevent="openMenu">
      <inline-svg :src="require('../images/hamburger.svg')"></inline-svg>
    </a>
    <!-- submit cta -->
    <a href="/submission" class="link-submit">
      <button ref="button" class="swipe submit-cta nav-element z-1 absolute button uppercase" :style="buttonWidth">Submit</button>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttonWidth: 'width: auto'
    }
  },

  mounted () {
    setTimeout(this.fixButtonWidth, 200)
    window.addEventListener('resize', this.fixButtonWidth)
  },

  methods: {
    openMenu () {
      Event.$emit('menu-opened')
    },

    // This was done to ensure that the submit button's are all exactly the same size and aren't partial pixels
    // so that when the page is scrolled they are all in alignment and the same size.
    fixButtonWidth () {
      this.buttonWidth = 'width: auto' // reset
      this.buttonWidth = 'width: ' + Math.round(this.$refs.button.clientWidth) + 'px' // recalculate
    }
  }
}
</script>
