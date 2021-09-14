<template>
  <div id="app" class="page-submission">
    <a href="/" class="link-home">
      <inline-svg :src="require('../images/h4c-logo.svg')"></inline-svg>
    </a>
    <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media;" src="https://form.typeform.com/to/BRPH7fLk?typeform-medium=embed-snippet"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Submission',

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
  }
}
</script>

<style>
body, html, #app, .page-submission {
  height: 100%;
}
</style>
