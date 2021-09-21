<template>
  <div id="modal-container" class="z-100">
    <!-- close modal -->
    <a href="#" class="close" @click.prevent="toggleModal">
      <svg class="icon-close-menu close-menu nav-element z-1 fixed lime" width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill-rule="nonzero" points="-0.0291790571 38.8629882 16.9413837 21.8924255 -0.0291790571 4.92186272 4.92056841 -0.0278847506 21.8911312 16.942678 38.8616939 -0.0278847506 43.8114414 4.92186272 26.8408786 21.8924255 43.8114414 38.8629882 38.8616939 43.8127357 21.8911312 26.8421729 4.92056841 43.8127357"></polygon></svg>
    </a>
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
          <img v-if="isImage(recipient.imgArtwork)" :src="require('../images/' + recipient.imgArtwork)" rel="preload" />
          <video v-else loop="" muted="" playsinline="" autoplay="" preload="auto">
            <source :src="require('../images/' + recipient.imgArtwork)" type="video/mp4">
          </video>
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
    },

    isImage (asset) {
      return asset.includes('.jpg')
    }
  }
}
</script>
