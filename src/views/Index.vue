<template>
  <div id="home-page" class="page w-full h-full md:overflow-hidden flex flex-wrap" :class="pageState">
    <bumper id="hero" zIndex="z-55" version="1">
      <h1>Welcome to the Homepage of Homepage For Change.</h1>
      <p class="w-11/12 m-auto">We’re on a mission to give BIPOC students a platform for their art and a <u>$2,000 grant</u> to continue making more.</p>
    </bumper>

    <template v-for="slide in slides">
      <!-- content cards -->
      <section :id="slide.id" :key="slide.id" class="hide-on-load card flex w-full md:w-1/2 relative md:absolute overflow-hidden" :class="slideLeft(slide.z, slide.bgLeft)">
        <headerLeft></headerLeft>
        <div class="container mx-auto text-center self-center">
          <div class="flex md:h-full w-full justify-center">
            <div class="heading self-center relative">
              <h2>{{ slide.heading1 }}
              <p>{{ slide.subHeading1 }}</p>
              {{ slide.heading2 }}
              <p>{{ slide.subHeading2 }}</p>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section :id="idContent(slide.id)" :key="idContent(slide.id)" class="hide-on-load card flex w-full md:w-1/2 relative md:absolute overflow-hidden" :class="slideRight(slide.z, slide.bgRight)">
        <headerRight></headerRight>
        <div class="container mx-auto text-center self-center">
          <div class="flex md:h-full w-full justify-center">
            <div class="copy self-center" v-html="slide.content"></div>
          </div>
        </div>
      </section>

      <!-- image cards -->
      <section :id="idImage1(slide.id)" :key="idImage1(slide.id)" class="card card--image w-full md:w-1/2 relative md:absolute overflow-hidden" :class="zBottom(slide.z)">
        <div class="container">
          <div class="image self-center h-screen">
            <img :src="require('../images/' + slide.image1)" class="object-cover h-full w-full" />
          </div>
        </div>
      </section>
      <section :id="idImage2(slide.id)" :key="idImage2(slide.id)" class="card card--image w-full md:w-1/2 relative md:absolute overflow-hidden" :class="zBottom(slide.z)">
        <div class="container">
          <div class="image self-center h-screen">
            <img :src="require('../images/' + slide.image2)" class="object-cover h-full w-full" />
          </div>
        </div>
      </section>
    </template>

    <bumper id="the-end" zIndex="z-0" version="2">
      <a href="/submission" class="swipe submit uppercase">
        Submit your artwork.
      </a>
    </bumper>
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

import headerLeft from '../components/header-left.vue'
import headerRight from '../components/header-right.vue'
import bumper from '../components/home-page-bumper.vue'

// Set up Greensock
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export default {
  name: 'Index',

  tl: '',

  components: {
    bumper, headerLeft, headerRight
  },

  metaInfo () {
    const pageTitle = 'Homepage for Change'
    const pageDesc = 'A grant to get BIPOC students who are interested in the arts published + paid'

    return {
      title: pageTitle,
      meta: [
        { name: 'description', content: pageDesc },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: pageTitle },
        { property: 'og:url', content: 'https://www.homepageforchange.com/' },
        { property: 'description', content: pageDesc }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.homepageforchange.com/' }
      ]
    }
  },

  data () {
    return {
      pageState: 'preloading',
      slides: [
        { id: 'who', z: '55', bgLeft: 'red', bgRight: 'lavender', heading1: 'Who', subHeading1: 'can participate?', heading2: '', subHeading2: '', image1: 'alqasim.jpg', image2: 'radeva.jpg', content: '<p>This program is open to all Toronto/GTA BIPOC students enrolled in high school, post-secondary, or a community arts program. (Don’t worry, we always evaluate work against those at the same education level.)</p>' },
        { id: 'what', z: '45', bgLeft: 'lavender', bgRight: 'lime', heading1: 'What', subHeading1: 'can I submit &', heading2: 'What', subHeading2: 'is the selection process?', image1: 'neath.jpg', image2: 'arias.jpg', content: '<p>You can submit any manifestation of your art – whether that’s a photo you took, a photo you took of something you made, or even a Word document containing a short story or poem. Just double-check specs and file types before submitting.</p><p>You’re welcome to apply multiple times (please do!) but we ask that you only submit one piece per submission period.</p><p>Voting will be conducted by a jury within the Juliet agency. We’ll consider each piece’s originality, aesthetic, and message when deciding who the recipient of the homepage space – and the $2,000 grant – will be. Shortly after the judging process, we’ll contact the chosen recipient via email.</p>' },
        { id: 'where', z: '35', bgLeft: 'red', bgRight: 'lavender', heading1: 'Where', subHeading1: 'can I submit &', heading2: 'Where', subHeading2: 'will my work live?', image1: 'brock.jpg', image2: 'alqasim-2.jpg', content: '<p>Simply fill out the form provided under the submission section and attach your JPEG, MP4, or Word document containing your piece of work.</p><p>If selected, your work will appear on the Juliet homepage until the next recipient is announced. This will give everyone from creatives to producers to directors a chance to see your work. Once your time on our homepage is up, we’ll catalogue your piece right here on homepageforchange.com alongside the work of other past recipients.</p>' },
        { id: 'when', z: '25', bgLeft: 'lavender', bgRight: 'lime', heading1: 'When', subHeading1: 'can I submit?', heading2: '', subHeading2: '', image1: 'warszynski.jpg', image2: 'collis.jpg', content: '<p>Please make your submission by the deadlines listed below, but feel free to enter again (and again and again) after that. Here are the dates to keep in mind for submissions, and when you can expect to see your work take over the wearejuliet.com homepage.</p><div class="schedule"><table><thead><tr><th>2021 Submission Deadlines*</th><th>Homepage Takeovers</th></tr></thead><tbody><tr><td><span class="font-bold">1.</span> June 22</td><td>July 1 - 30</td></tr><tr><td><span class="font-bold">2.</span> July 22</td><td>August 1 - 31</td></tr><tr><td><span class="font-bold">3.</span> August 23</td><td>September 1 - 30</td></tr><tr><td><span class="font-bold">4.</span> September 22</td><td>October 1 - 31</td></tr><tr><td><span class="font-bold">5.</span> November 21</td><td>December 1 - 31</td></tr></tbody></table><div class="footnote">*All work needs to be submitted by 12PM EST on the given dates.</div></div>' },
        { id: 'why', z: '15', bgLeft: 'red', bgRight: 'lavender', heading1: 'Why', subHeading1: 'does this program exist?', heading2: '', subHeading2: '', image1: 'radeva-2.jpg', image2: 'rodrigues.jpg', content: '<p>To give BIPOC artists a platform and the means to continue creating their art.</p><p>The advertising industry needs a dramatic increase in BIPOC representation. It’s been embarrassingly imbalanced for far too long. Especially in a city as diverse as Toronto, that’s unacceptable. We hope that initiatives like this can help to create change. Because change is long overdue.</p>' }
      ]
    }
  },

  created () {
    Event.$on('menu-closed', () => { this.pageState = '' })
    Event.$on('menu-opened', () => { this.pageState = 'blur' })

    const app = this

    window.addEventListener('load', function (event) {
      app.cards = document.querySelectorAll('.card')

      app.requestId = null

      // Set up the timeline animation
      if (window.innerWidth > 767) {
        app.initTimeline()
        app.buildTimeline()
        window.addEventListener('resize', app.requestResize)
        window.tl = this.tl
        if (location.hash) {
          setTimeout(app.deepLink, 100)
        }
      } else {
        if (location.hash) {
          window.location = location.hash
        }
      }
    })
  },

  mounted () {
    setTimeout(() => { this.pageState = '' }, 1000)
  },

  methods: {
    idContent (i) { return i + '-content' },
    idImage1 (i) { return i + '-image-1' },
    idImage2 (i) { return i + '-image-2' },
    zIndex (z) { return 'z-' + z },
    zBottom (z) { return 'z-' + (parseInt(z) - 5) },
    slideLeft (z, bg) { return this.zIndex(z) + ' bg-' + bg },
    slideRight (z, bg) { return this.zIndex(z) + ' bg-' + bg },

    deepLink () {
      const sectionID = location.hash.substring(1)
      let cnt = 0
      let scrollOffset = 0

      for (const card of this.cards) {
        if (card.getAttribute('id') === sectionID) {
          scrollOffset = window.innerHeight + (window.innerHeight * (cnt / 2))
          break
        }
        cnt++
      }

      gsap.to(window, {
        scrollTo: scrollOffset,
        duration: 0
      })
    },

    initTimeline () {
      const app = this
      const rootElem = document.getElementById('home-page')
      const bumpers = document.querySelectorAll('.bumper')

      app.tl = gsap.timeline({
        // Attach it to the scroll
        scrollTrigger: {
          id: 'st',
          trigger: '#home-page',
          pin: true,
          start: 'top top',
          end: () => `+=${rootElem.offsetHeight * (app.cards.length / 2 + bumpers.length / 2)}`,
          scrub: 0.3,
          invalidateOnRefresh: true,
          onRefresh: self => app.tl.progress(self.progress)
        }
      })
    },

    buildTimeline (progress) {
      // Animation duration
      const d = 1

      // Move the first two cards into the center position
      this.tl.fromTo('.card:nth-child(2)', { yPercent: 100 }, { yPercent: 0, duration: d, ease: 'linear' })
      this.tl.fromTo('.card:nth-child(2) .container', { yPercent: -100 }, { yPercent: 0, duration: d, ease: 'linear' }, '-=' + d)
      this.tl.fromTo('.card:nth-child(2) .nav-element', { y: -1 * innerHeight }, { y: 0, duration: d, ease: 'linear' }, '-=' + d)

      this.tl.fromTo('.card:nth-child(3)', { yPercent: -100 }, { yPercent: 0, duration: d, ease: 'linear' }, '-=' + d)
      this.tl.fromTo('.card:nth-child(3) .container', { yPercent: 100 }, { yPercent: 0, duration: d, ease: 'linear' }, '-=' + d)
      this.tl.fromTo('.card:nth-child(3) .nav-element', { y: innerHeight }, { y: 0, duration: d, ease: 'linear' }, '-=' + d)

      // Hide the hero
      this.tl.to('#hero', { yPercent: 100, duration: 0, ease: 'linear' })

      // Animate all the cards
      for (let i = 1; i < this.cards.length - 2; i += 2) {
        // target                       //from  //to    //duration //delay
        this.tl.fromTo('.card:nth-child(' + (i + 1) + ')', { yPercent: 0 }, { yPercent: -100, duration: d, ease: 'linear' })
        this.tl.fromTo('.card:nth-child(' + (i + 1) + ') .container', { yPercent: 0 }, { yPercent: 100, duration: d, ease: 'linear' }, '-=' + d)
        if (document.querySelector('.card:nth-child(' + (i + 1) + ') .nav-element')) {
          this.tl.fromTo('.card:nth-child(' + (i + 1) + ') .nav-element', { y: 0 }, { y: innerHeight, duration: d, ease: 'linear' }, '-=' + d)
        }

        this.tl.fromTo('.card:nth-child(' + (i + 3) + ')', { yPercent: 100 }, { yPercent: 0, duration: d, ease: 'linear' }, '-=' + d)
        this.tl.fromTo('.card:nth-child(' + (i + 3) + ') .container', { yPercent: -100 }, { yPercent: 0, duration: d, ease: 'linear' }, '-=' + d)
        if (document.querySelector('.card:nth-child(' + (i + 3) + ') .nav-element')) {
          this.tl.fromTo('.card:nth-child(' + (i + 3) + ') .nav-element', { y: -1 * innerHeight }, { y: 0, duration: d, ease: 'linear' }, '-=' + d)
        }

        this.tl.fromTo('.card:nth-child(' + (i + 2) + ')', { yPercent: 0 }, { yPercent: 100, duration: d, ease: 'linear' }, '-=' + d)
        this.tl.fromTo('.card:nth-child(' + (i + 2) + ') .container', { yPercent: 0 }, { yPercent: -100, duration: d, ease: 'linear' }, '-=' + d)
        if (document.querySelector('.card:nth-child(' + (i + 2) + ') .nav-element')) {
          this.tl.fromTo('.card:nth-child(' + (i + 2) + ') .nav-element', { y: 0 }, { y: -1 * innerHeight, duration: d, ease: 'linear' }, '-=' + d)
        }

        this.tl.fromTo('.card:nth-child(' + (i + 4) + ')', { yPercent: -100 }, { yPercent: 0, duration: d, ease: 'linear' }, '-=' + d)
        this.tl.fromTo('.card:nth-child(' + (i + 4) + ') .container', { yPercent: 100 }, { yPercent: 0, duration: d, ease: 'linear' }, '-=' + d)
        if (document.querySelector('.card:nth-child(' + (i + 4) + ') .nav-element')) {
          this.tl.fromTo('.card:nth-child(' + (i + 4) + ') .nav-element', { y: innerHeight }, { y: 0, duration: d, ease: 'linear' }, '-=' + d)
        }
      }

      // Move the last two cards off stage to reveal the final section
      this.tl.fromTo('.card:nth-child(' + (this.cards.length) + ')', { yPercent: 0 }, { yPercent: -100, duration: d, ease: 'linear' })
      this.tl.fromTo('.card:nth-child(' + (this.cards.length) + ') .container', { yPercent: 0 }, { yPercent: 100, duration: d, ease: 'linear' }, '-=' + d)
      if (document.querySelector('.card:nth-child(' + (this.cards.length) + ') .nav-element')) {
        this.tl.fromTo('.card:nth-child(' + (this.cards.length) + ') .nav-element', { y: 0 }, { y: innerHeight, duration: d, ease: 'linear' }, '-=' + d)
      }

      this.tl.fromTo('.card:nth-child(' + (this.cards.length + 1) + ')', { yPercent: 0 }, { yPercent: 100, duration: d, ease: 'linear' }, '-=' + d)
      this.tl.fromTo('.card:nth-child(' + (this.cards.length + 1) + ') .container', { yPercent: 0 }, { yPercent: -100, duration: d, ease: 'linear' }, '-=' + d)
      if (document.querySelector('.card:nth-child(' + (this.cards.length + 1) + ') .nav-element')) {
        this.tl.fromTo('.card:nth-child(' + (this.cards.length + 1) + ') .nav-element', { y: 0 }, { y: -1 * innerHeight, duration: d, ease: 'linear' }, '-=' + d)
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
