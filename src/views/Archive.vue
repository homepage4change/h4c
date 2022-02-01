<template>
  <div id="archive-page" class="page bg-red w-full min-h-full md:overflow-hidden" :class="pageState">
    <vue-headful
        title="Grant Recipients | Homepage for Change"
        description="Grant recipients of the H4C to get BIPOC students who are interested in the arts published + paid"
        url="https://www.homepageforchange.com/grant-recipients"
    />
    <headerTop v-if="isDesktop"></headerTop>

    <h1>Recipient Archive</h1>

    <div id="archives" class="hide-on-load w-full min-h-full">
      <h2>Grant<br>Recipients</h2>
      <template v-for="archive in archives">
        <!-- <div :key="archive.year" class="recipients"> -->
          <template v-for="recipient in archive.recipients">
            <recipientCard :key="recipient.name" :recipient="recipient" :year="archive.year"></recipientCard>
          </template>
        <!-- </div> -->
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

  data () {
    return {
      isDesktop: true,
      pageState: 'preloading',
      archives: [
        {
          year: '2022',
          recipients: [
            {
              month: 'February',
              name: 'Ella Saini',
              title: 'Filmmaker',
              description: '“This short documentary showcases the experiences of three LGBTQ+ youth learning about sex health under an inadequete Canadian sex-ed curriculum. Each subject opens up about their knowledge surrounding sexual health, gender identity, sexuality, and its impact on their self-image.”',
              bio: 'Ella Saini (she/they) is a Filipino-Indian artist born and raised in Scarborough, Ontario. They’re a passionate editor and sound engineer currently studying film at Sheridan College. They also have a love for experimenting with different mediums of art, sharing ideas in an interesting and collaborative way. THE TALK is an illuminating film brought to life by Saini and a team of fellow creatives, including producer and animator, Vanessa Solivio.',
              url: 'ellasaini.myportfolio.com',
              socialHandle: '',
              imgHeadshot: 'headshot-ella-saini-square.jpg',
              imgScreenshot: 'screenshot-feb-2022.jpg',
              imgArtwork: 'artwork-feb-2022.mp4',
              cardLayout: 'landscape'
            },
            {
              month: 'January',
              name: 'Sameena Anis',
              title: 'Multi-disciplinary Artist',
              description: '“As a disabled, queer, and Brown immigrant – all my identities mesh together in this fictional story. The background is a mixed media illustration with Indian glass painting, and the piece itself is in a shadow box frame with sculpture encased in resin; unable to move, forever encased in its history.”',
              bio: 'Sameena Anis (they/them) is a multi-disciplinary artist born in India and raised in Sharjah, moving to Canada seven years ago. They’re currently taking hybrid courses at Thornhill Secondary School and Seneca College with a love for all mediums of art. Their entry titled “Wind in the Night” is a beautifully intricate piece that represents colonization and the fear of aliens, pondering what inspires people to immigrate, move places, and fear newcomers.',
              url: 'dairysam.wixsite.com/portfolio',
              socialHandle: 'dairy.sam',
              imgHeadshot: 'headshot-sameena-anis-square.jpg',
              imgScreenshot: 'screenshot-jan-2022.jpg',
              imgArtwork: 'artwork-jan-2022.jpg',
              cardLayout: 'landscape'
            }
          ]
        },
        {
          year: '2021',
          recipients: [
            {
              month: 'December',
              name: 'Vicky Wang',
              title: 'Musician',
              description: '“Earlybird, Live in Concert” is my debut live EP and concert film as a musical artist. Under the moniker Earlybird, I write and perform soulful and soothing songs with my voice secure and guitar in hand. I recorded this 7-song project and performance on a chilly winter day at the height of the pandemic. I hope these songs serve to encourage those who watch and listen, and remind them where the light is.”',
              bio: 'Vicky Wang AKA Earlybird is a Toronto-based songstress with a zest for life. Her songwriting is candid and heartfelt, and listeners can’t help but follow along as her stories unfold, line by line. In the midst of excitement and uncertainty, she encourages her listeners to take heart and pause to reflect. With her recently released “Earlybird, Live in Concert” EP and film, she is well on her way to taking flight.',
              url: 'instagram.com/theearlybirdsings',
              socialHandle: 'theearlybirdsings',
              imgHeadshot: 'headshot-earlybird-square.jpg',
              imgScreenshot: 'screenshot-dec-2021.jpg',
              imgArtwork: 'artwork-dec-2021.mp4',
              cardLayout: 'landscape'
            },
            {
              month: 'November',
              name: 'Tevon Edwards',
              title: 'Illustrator',
              description: '“This artwork is of multiple versions of me. It’s almost like a party with how much random shenanigans are going on in the picture. It’s called <em>Vacancy</em> because that’s the opposite of busy, which is what this illustration demonstrates.”',
              bio: 'TEVON EDWARDS is a high school student of Guyanese and Filipino heritage, currently attending Western Technical Commercial School. His love for drawing started at a young age, ever since he got his hands on crayons as a kid. Over the years his focus has become mainly character work and design. Tevon is currently part of his high school’s Design Studio Program.',
              url: 'instagram.com/twvons',
              socialHandle: 'twvons',
              imgHeadshot: 'headshot-tevon-edwards-square.jpg',
              imgScreenshot: 'screenshot-nov-2021.jpg',
              imgArtwork: 'artwork-nov-2021.jpg',
              cardLayout: 'landscape'
            },
            {
              month: 'October',
              name: 'Safa Ali Mudei',
              title: 'Dancer and Director',
              description: '“In Islam, there’s a belief that when a person dies and they have been laid to rest in the grave(s), their soul gets separated from their physical body and goes into another realm where they are put through many trials of either blessings or punishments; heaven or hell, depending on what they have done in their intermediate lives until their last days. This realm is called Barzakh, the Islamic version of purgatory which is also in relation to being in limbo. Follow the soul as they endure their own version of Barzakh.”',
              bio: 'SAFA ALI MUDEI is a Muslim, East-African Canadian artist attending UofT. Safa’s artistic style of dance and film derives from the experiences and perspectives she has received from the religion of Islam and her Somali heritage.',
              url: 'instagram.com/safaali_',
              socialHandle: 'safaali_',
              imgHeadshot: 'headshot-safa-ali-square.jpg',
              imgScreenshot: 'screenshot-oct-2021.jpg',
              imgArtwork: 'artwork-oct-2021.mp4',
              cardLayout: 'landscape'
            },
            {
              month: 'September',
              name: 'Elvina Raharja',
              title: 'Multi-disciplinary Artist',
              description: '“<em>Puan</em> is a coming-of-age performance exploring self-identity and womanhood as a young Indonesian woman. Back home in Indonesia, things exist in a binary. You’re either A or B – but you better be A. This philosophy is deeply reflected in Indonesian beauty standards, favouring Eurocentric features and lighter skin tones. It was embedded in our culture and media. As someone who is not the Asian beauty standard, I have felt displaced most of my life. When you’re told your body is wrong, you start to wonder if your existence is valid. However, my past informs my present. I wouldn’t be able to tell this story without going through those tribulations. I’m glad I could find the help and healing I needed to bring me to this place and create this project.”',
              bio: 'ELVINA RAHARJA (she/they) is a multi-disciplinary artist who works in dance, fashion, and film. Their artistry strives for conscious and intentional creation, stemming from their experiences as a Southeast Asian immigrant and mindfulness practices.',
              url: 'elvinaraharja.com',
              socialHandle: '',
              imgHeadshot: 'Elvina-Raharja-headshot.jpg',
              imgScreenshot: 'screenshot-sep-2021.jpg',
              imgArtwork: 'artwork-sep-2021.mp4',
              cardLayout: 'landscape'
            },
            {
              month: 'August',
              name: 'Tone Burke',
              title: 'Digital Artist',
              description: '“Oftentimes I stare at the stars in wonder of what else there may be out there, answers to questions no one may really have but continuing to reach for answers. When I stare at the sky, I feel connected. I realize how small we are, and I feel grateful. I understand how everything works in unison with each other. The answers to the questions are in nature. The answers to the questions are in the sky. This digital rendering depicts a hand in the sky whilst being struck by lightning. The lightning signifies connectivity, and the butterfly which sits on the hand is a symbol of rebirth, revival, and untimely giving direction to the answers.”',
              bio: 'TONE BURKE is an emerging artist from Toronto, Ontario. A self-taught designer and entrepreneur, Burke began designing in high school and later designing clothing, which only furthered his passion. Today his design is a representation of everyday life and personal expression.',
              url: 'originaltone.com',
              socialHandle: '',
              imgHeadshot: 'Tone-Burke-headshot.jpg',
              imgScreenshot: 'screenshot-aug-2021.jpg',
              imgArtwork: 'artwork-aug-2021.jpg',
              cardLayout: 'landscape'
            },
            {
              month: 'July',
              name: 'Hau Pham',
              title: 'Visual Artist',
              description: '“My artistic practice is a depiction of the Asian feminine experience. Through examining the relationship with the object, my work explores the curiosity, guilt and uncertainty when connecting value with identity. Value is often placed in objects, and objects are considerably traced to identity, identity often being intertwined within a cultural narrative. We often make quick assumptions of other people based off the things they choose to surround themselves with. We use objects as indicators for not only how we see ourselves, but also how we choose to understand others. With this painting, there is a depiction of a common object that has clearly been affected by the human experience, a single pair of fake eyelashes that have been worn and crumpled. What does this tell us about the person who holds possession of it? With this still life work, there is an asking of consideration for understanding, but beyond the surface level. The still life asks the viewer to reconsider, to reframe how we perceive something we have assumed ourselves to understand.”',
              bio: 'HAU PHAM is an emerging artist based in Vaughan, Ontario. She is a soon to be graduate of OCAD University, with a BFA in Drawing and Painting and a minor in English.',
              url: 'haupham.format.com',
              socialHandle: '',
              imgHeadshot: 'Hau-Pham-headshot.jpg',
              imgScreenshot: 'screenshot-jul-2021.jpg',
              imgArtwork: 'artwork-jul-2021.jpg',
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

    const app = this

    window.addEventListener('load', function (event) {
      app.cards = document.querySelectorAll('.recipient-card')

      app.requestId = null

      // Set up the timeline animation
      if (window.innerWidth > 767) {
        app.initTimeline()
        app.buildTimeline()
        window.addEventListener('resize', () => app.requestResize())
        window.tl = this.tl
      } else {
        app.initTimeline_Mobile()
        app.buildTimeline_Mobile()
        window.addEventListener('resize', () => app.requestResize('mobile'))
        window.tl = this.tl
      }
    })
  },

  mounted () {
    setTimeout(() => { this.pageState = '' }, 250)
    this.isDesktop = (window.innerWidth > 767)
    window.addEventListener('resize', () => {
      this.isDesktop = (window.innerWidth > 767)
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
      const yEnd = -(cardHeight + (window.innerHeight * 1.05))

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

    initTimeline_Mobile () {
      const app = this

      this.tl = gsap.timeline({
        // Attach it to the scroll
        scrollTrigger: {
          id: 'st',
          trigger: '#archives',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          invalidateOnRefresh: true,
          onRefresh: self => app.tl.progress(self.progress)
        }
      })
    },

    buildTimeline_Mobile (progress) {
      // Animation duration
      const easing = 'linear'
      const yEnd = -40
      let el

      // loop through the cards
      for (let i = 1; i < this.cards.length + 1; i++) {
        // get a reference to the current card
        el = document.querySelector('.recipient-card:nth-of-type(' + i + ')')
        this.tl.to(el, { y: yEnd, x: 0, ease: easing })
      }

      this.tl.totalProgress(progress || 0)
    },

    requestResize (viewport) {
      cancelAnimationFrame(this.requestId)
      this.requestId = requestAnimationFrame(() => this.resize(viewport))
    },

    resize (viewport) {
      const progress = this.tl.totalProgress()
      this.tl.seek(0).clear()
      if (viewport === 'mobile') {
        this.buildTimeline_Mobile(progress)
      } else {
        this.buildTimeline(progress)
      }
    }
  }
}
</script>
