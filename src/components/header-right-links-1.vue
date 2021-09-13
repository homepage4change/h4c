<template>
  <div>
    <!-- hamburger menu -->
    <a href="#" class="hamburger-menu" @click="openMenu">
      <inline-svg :src="require('../images/hamburger.svg')"></inline-svg>
    </a>
    <!-- submit cta -->
    <a href="/submission" class="link-submit">
      <button class="swipe submit-cta nav-element z-1 absolute button uppercase">Submit</button>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    openMenu () {
      Event.$emit('menuOpened')
    }
  }
}
</script>
