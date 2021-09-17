<template>
  <div class="recipient-card swipe" @click="toggleModal">
    <h3 class="swipe">{{ recipient.month }}: {{ recipient.name }}</h3>
    <img :src="require('../images/' + recipient.imgScreenshot)" />
  </div>

</template>

<script>
export default {
  name: 'recipientCard',

  props: [
    'recipient'
  ],

  methods: {
    toggleModal () {
      Event.$emit('modal-opened', this.recipient)
    }
  }
}
</script>

<style lang="scss">

</style>
