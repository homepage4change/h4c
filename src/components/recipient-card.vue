<template>
  <div class="recipient-card swipe" @click="toggleModal">
    <h3 class="swipe">{{ recipient.month }} {{ year }}: {{ recipient.name }}</h3>
    <img :src="require('../images/' + recipient.imgScreenshot)" rel="preload" />
  </div>

</template>

<script>
export default {
  name: 'recipientCard',

  props: [
    'recipient',
    'year'
  ],

  methods: {
    toggleModal () {
      Event.$emit('modal-opened', this.recipient)
    }
  }
}
</script>
