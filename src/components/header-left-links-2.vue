<template>
  <div>
    <!-- logo -->
    <a href="/" @click.prevent="scrollToTop">
      <inline-svg :src="require('../images/h4c-logo.svg')"></inline-svg>
    </a>
    <!-- juliet -->
    <a href="https://www.wearejuliet.com/" target="_blank">
      <inline-svg :src="require('../images/juliet.svg')"></inline-svg>
    </a>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  methods: {
    // Scroll to top when H4C logo is clicked
    scrollToTop () {
      gsap.to(window, { scrollTo: 0 })
    }
  }
}
</script>
