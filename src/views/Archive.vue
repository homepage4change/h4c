<template>
  <div id="archive-page" class="bg-red">
    <headerTop></headerTop>
    <h1>Archive Page</h1>
  </div>
</template>

<script>
import headerTop from '../components/header-top.vue'

export default {
  name: 'Archive',

  components: {
    headerTop
  },

  metaInfo () {
    const pageTitle = 'Archive'
    const pageDesc = 'Grant recipients of the H4C to get BIPOC students who are interested in the arts published + paid'
    const slug = 'archive'

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
    console.log('Archive mounted')
  }
}
</script>
