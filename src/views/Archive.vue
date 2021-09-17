<template>
  <div id="archive-page" class="bg-red w-full h-full md:overflow-hidden" :class="pageState">
    <headerTop></headerTop>

    <h1 class="sr-only">Recipient Archive</h1>

    <div id="archives" class="w-full">
      <template v-for="archive in archives">
        <div  :key="archive.year" class="recipients">
          <h2>{{ archive.year }}</h2>
          <template v-for="recipient in archive.recipients">
            <recipientCard :key="recipient.name" :recipient="recipient"></recipientCard>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import headerTop from '../components/header-top.vue'
import recipientCard from '../components/recipient-card.vue'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

// Set up Greensock
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export default {
  name: 'Archive',

  tl: '',

  components: {
    headerTop, recipientCard
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

  data () {
    return {
      pageState: '',
      archives: [
        {
          year: '2021',
          recipients: [
            {
              month: 'Sept',
              name: 'Elvina Raharja',
              title: 'Multi-disciplinary Artist',
              description: 'Puan is a coming-of-age performance exploring self-identity and womanhood as a young Indonesian woman. Back home in Indonesia, things exist in a binary. You’re either A or B – but you better be A. This philosophy is deeply reflected in Indonesian beauty standards, favouring Eurocentric features and lighter skin tones. It was embedded in our culture and media. As someone who is not the Asian beauty standard, I have felt displaced most of my life. When you’re told your body is wrong, you start to wonder if your existence is valid. However, my past informs my present. I wouldn’t be able to tell this story without going through those tribulations. I’m glad I could find the help and healing I needed to bring me to this place and create this project.',
              url: 'wearejuliet.com',
              socialHandle: '@elvinanr',
              imgHeadshot: 'Elvina-Raharja-headshot.jpg',
              imgScreenshot: 'screenshot-sep-2021.jpg',
              imgArtwork: 'screenshot-sep-2021.jpg',
              cardLayout: 'landscape'
            },
            {
              month: 'Aug',
              name: 'Tone Burke',
              title: 'Digital Artist',
              description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui.',
              url: 'wearejuliet.com',
              socialHandle: '@toneburke',
              imgHeadshot: 'Tone-Burke-headshot.jpg',
              imgScreenshot: 'screenshot-aug-2021.jpg',
              imgArtwork: 'screenshot-aug-2021.jpg',
              cardLayout: 'landscape'
            },
            {
              month: 'July',
              name: 'Hau Pham',
              title: 'Visual Artist',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
              url: 'wearejuliet.com',
              socialHandle: '@haupham',
              imgHeadshot: 'Hau-Pham-headshot.jpg',
              imgScreenshot: 'screenshot-jul-2021.jpg',
              imgArtwork: 'screenshot-jul-2021.jpg',
              cardLayout: 'landscape'
            }
          ]
        }
      ]
    }
  },

  created () {
    Event.$on('menu-closed', () => { this.pageState = '' })
    Event.$on('menu-opened', () => { this.pageState = 'blur' })
    Event.$on('modal-closed', () => { this.pageState = '' })
    Event.$on('modal-opened', () => { this.pageState = 'blur' })
  },

  mounted () {
    const app = this

    window.addEventListener('load', function (event) {
      app.cards = document.querySelectorAll('.recipient-card')

      app.requestId = null

      // Set up the timeline animation
      if (window.innerWidth > 767) {
        app.initTimeline()
        app.buildTimeline()
        window.addEventListener('resize', app.requestResize)
        window.tl = this.tl
      }
    })
  },

  methods: {
    cardLayout (version) {
      return 'layout' + version
    },

    initTimeline () {
      const app = this

      gsap.to(window, {
        scrollTo: 100,
        duration: 0.2,
        delay: 0.2,
        ease: 'ease-in-out'
      })

      this.tl = gsap.timeline({
        // Attach it to the scroll
        scrollTrigger: {
          id: 'st',
          trigger: '#archive-page',
          pin: true,
          start: 'top top',
          end: () => `+=${(this.cards.length * window.innerHeight) - (window.innerHeight / 2)}`, // note: increasing the end position slows down the scroll animation
          scrub: 0.3,
          invalidateOnRefresh: true,
          onRefresh: self => app.tl.progress(self.progress)
        }
      })
    },

    buildTimeline (progress) {
      // Animation duration
      const d = 4
      const pos = 2
      const xStart = 4
      const xEnd = 12
      const easing = 'linear'

      const cardHeight = document.querySelector('.recipient-card').offsetHeight
      const yEnd = -(cardHeight + window.innerHeight)

      let el, _d, _xStart, _xEnd, _yEnd, _pos

      // loop through the cards
      for (let i = 1; i < this.cards.length + 1; i++) {
        // get a reference to the current card
        el = document.querySelector('.recipient-card:nth-of-type(' + i + ')')

        _d = d
        _xStart = xStart
        _xEnd = xEnd
        _yEnd = yEnd
        _pos = pos

        if (i % 2 === 0) { // even cards
          _xEnd = '-' + _xEnd
        } else { // odd cards
          _xStart = '-' + _xStart
        }

        // first card
        if (i === 1) {
          _xStart = xStart * 1.5
          _yEnd = yEnd / 2
          _d = d / 2
          _pos = 0

        // last card
        } else if (i === this.cards.length) {
          _xStart = _xStart / 2
          _xEnd = _xEnd / 2
          _yEnd = _yEnd / 2
          _d = _d / 2
        }

        // animate card
        this.tl.fromTo(el, { x: _xStart + 'vw' }, { y: _yEnd, x: _xEnd + 'vw', duration: _d, ease: easing }, '-=' + _pos)
      }

      this.tl.totalProgress(progress || 0)
    },

    requestResize () {
      cancelAnimationFrame(this.requestId)
      this.requestId = requestAnimationFrame(this.resize)
    },

    resize () {
      const progress = this.tl.totalProgress()
      this.tl.seek(0).clear()
      this.buildTimeline(progress)
    }
  }
}
</script>

<style lang="scss">

</style>
