<template>
  <div>
    <!-- logo -->
    <a href="/" class="link-home">
      <inline-svg :src="require('../images/h4c-logo.svg')"></inline-svg>
    </a>

    <!-- hamburger menu -->
    <a href="#" class="hamburger-menu" @click="openMenu">
      <inline-svg :src="require('../images/hamburger.svg')"></inline-svg>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    openMenu (e) {
      e.preventDefault()
      Event.$emit('menuOpened')
    }
  }
}
</script>
