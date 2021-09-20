<template>
  <div id="modal-container" class="z-100">
    <span class="close" @click="toggleModal">CLOSE</span>
    <div class="recipient-card__modal" :class="recipient.cardLayout">
        <div class="headshot">
          <img :src="require('../images/' + recipient.imgHeadshot)" rel="preload" />
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
          <p v-if="recipient.socialHandle"><a :href="'https://' + recipient.url" target="_blank">@{{ recipient.socialHandle }}</a></p>
          <p v-else-if="recipient.url"><a :href="'https://' + recipient.url" target="_blank">{{ recipient.url }}</a></p>
        </div>
        <div class="description">
          <p v-html="recipient.description"></p>
          <p v-html="recipient.bio"></p>
        </div>
        <div class="artwork">
          <img :src="require('../images/' + recipient.imgArtwork)" rel="preload" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'recipientModal',

  props: [
    'recipient'
  ],

  methods: {
    toggleModal () {
      // this.recipient = false
      Event.$emit('modal-closed')
    }
  }
}
</script>
