<template>
  <div id="app" class="page page-submission">
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

  metaInfo () {
    const pageTitle = 'Application Submission'
    const pageDesc = 'A grant to get BIPOC students who are interested in the arts published + paid'
    const slug = 'submission'

    return {
      title: pageTitle,
      titleTemplate: '%s | Homepage for Change',
      meta: [
        { name: 'description', content: pageDesc },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: pageTitle + ' | Homepage for Change' },
        { property: 'og:url', content: 'https://www.homepageforchange.com/' + slug },
        { property: 'description', content: pageDesc }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.homepageforchange.com/' + slug }
      ]
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
