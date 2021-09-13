<template>
  <section :id="id" class="bumper flex bg-lime w-full relative md:absolute overflow-hidden" :class="zIndex">

    <headerFull :version="ver"></headerFull>

    <div class="container mx-auto text-center self-center">
      <div class="flex h-full w-full justify-center">
        <div class="heading self-center relative" :class="hoverState">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import headerFull from '../components/header-full.vue'

export default {
  name: 'bumper',

  components: {
    headerFull
  },

  props: [
    'id', 'zIndex', 'version'
  ],

  data () {
    return {
      hoverState: '',
      ver: this.version
    }
  },

  mounted () {
    const app = this
    const submitButton = document.querySelector('#the-end .submit')
    submitButton.addEventListener('mouseover', () => { app.hoverState = 'pause' })
    submitButton.addEventListener('mouseout', () => { app.hoverState = '' })
  }
}
</script>
