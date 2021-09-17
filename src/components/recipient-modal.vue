<template>
  <div id="modal-container" class="z-100" v-if="recipient">
    <span class="close" @click="toggleModal">CLOSE</span>
    <div class="recipient-card__modal" :class="recipient.cardLayout">
        <div class="headshot">
          <img :src="require('../images/' + recipient.imgHeadshot)" />
        </div>
        <div class="date">
          <p>{{ recipient.month }}&nbsp;Recipient</p>
        </div>
        <div class="name">
          <h3  @click="toggleModal">{{ recipient.name }}</h3>
        </div>
        <div class="title">
          <h4>{{ recipient.title }}</h4>
        </div>
        <div class="link">
          <p>{{ recipient.socialHandle }}</p>
        </div>
        <div class="description">
          <p>{{ recipient.description }}</p>
        </div>
        <div class="artwork">
          <img :src="require('../images/' + recipient.imgArtwork)" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'recipientModal',

  data () {
    return {
      recipient: false
    }
  },

  created () {
    Event.$on('modal-opened', (recipient) => {
      console.log('modal was opened')
      this.recipient = recipient
    })
  },

  methods: {
    toggleModal () {
      this.recipient = false
      Event.$emit('modal-closed')
    }
  }
}
</script>
