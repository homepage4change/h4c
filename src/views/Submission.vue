<template>
  <div id="app" class="page page-submission">
    <vue-headful
        title="Submit Your Work | Homepage for Change"
        description="A grant to get BIPOC students who are interested in the arts published + paid"
        url="https://www.homepageforchange.com/submission"
    />
    <headerTop v-if="isDesktop"></headerTop>
    <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media;" src="https://form.typeform.com/to/BRPH7fLk?typeform-medium=embed-snippet"></iframe>
  </div>
</template>

<script>
import headerTop from '../components/header-top.vue'

export default {
  name: 'Submission',

  components: {
    headerTop
  },

  data () {
    return {
      isDesktop: true
    }
  },

  mounted () {
    const typeformScript = document.createElement('script')
    typeformScript.setAttribute('src', '//embed.typeform.com/next/embed.js')
    document.head.appendChild(typeformScript)

    this.isDesktop = (window.innerWidth > 767)
    window.addEventListener('resize', () => {
      this.isDesktop = (window.innerWidth > 767)
    })
  }
}
</script>

<style>
body, html, #app, .page-submission {
  height: 100%;
}
</style>
