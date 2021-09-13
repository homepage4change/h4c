<template>
  <header>
    <headerLeftLinks1></headerLeftLinks1>
    <headerRightLinks1 v-if="version == 1"></headerRightLinks1>
    <headerRightLinks2 v-if="version == 2"></headerRightLinks2>
  </header>
</template>

<script>
import headerLeftLinks1 from '../components/header-left-links-1.vue'
import headerRightLinks1 from '../components/header-right-links-1.vue'
import headerRightLinks2 from '../components/header-right-links-2.vue'

export default {
  components: {
    headerLeftLinks1,
    headerRightLinks1,
    headerRightLinks2
  },

  props: [
    'version'
  ]
}
</script>
