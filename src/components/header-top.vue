<template>
  <nav>
    <!-- logo -->
    <a href="/" class="link-home lime">
      <inline-svg :src="require('../images/h4c-logo.svg')"></inline-svg>
    </a>
    <!-- hamburger menu -->
    <a href="#" class="hamburger-menu link-menu lime" @click.prevent="openMenu">
      <inline-svg :src="require('../images/hamburger.svg')"></inline-svg>
    </a>
  </nav>
</template>

<script>
export default {
  methods: {
    openMenu () {
      Event.$emit('menu-opened')
    }
  }
}
</script>
