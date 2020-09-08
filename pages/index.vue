<template>
  <div>
    <div class='pt-10'>
      <Carousel @next="next" @prev="prev">
        <CarouselSlide
          v-for="(slide, index) in slides"
          :key="index"
          :index="index"
          :visibleSlide="visibleSlide"
          :direction="direction"
        >
          <a :href="slide.link">
            <div
              class="card flex absolute flex-col justify-center p-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-lg divide-y divide-gray-400"
              style="top:25%; left:5%;"
            >
              <div class="prod-title">
                <p class="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-md uppercase text-black font-bold">{{slide.title}}</p>
                <p class="uppercase text-sm text-gray-700">{{slide.subtitle}}</p>
              </div>
            </div>
          </a>
          <img :src="slide.src" class="carousel-image" />
        </CarouselSlide>
      </Carousel>
    </div>
    <div class="container">
      <div class>
        This is where the homepage content will be going
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          src: require('../assets/imgs/environmental-racism.jpg'),
          title: 'See our post about Environmental Racism',
          subtitle: 'Read more on instagram',
          link: 'https://www.instagram.com/p/CBjZ-Een8eS/',
        },
        {
          src: require('../assets/imgs/greenwashing.png'),
          title: 'See our post about Greenwashing',
          subtitle: 'And how it impacts consumerism',
          link: 'https://www.instagram.com/p/CEMcOVSnUhC/',
        },
      ],
      visibleSlide: 0,
      direction: '',
    }
  },
  computed: {
    slideLen() {
      return this.slides.length
    },
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slideLen - 1) {
        this.visibleSlide = 0
      } else {
        this.visibleSlide++
      }
      this.direction = 'left'
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slideLen - 1
      } else {
        this.visibleSlide--
      }
      this.direction = 'right'
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  /* margin: 0 auto;
  min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.carousel-image {
  width: 100%;
  height: 85vh;
  object-fit:contain;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
