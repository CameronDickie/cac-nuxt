<template>
  <div>
    <div class="container">
      <div class>
        <Carousel @next="next" @prev="prev">
          <CarouselSlide v-for="(slide, index) in slides" :key="slide" :index="index" :visibleSlide = "visibleSlide" :direction="direction">
            <img :src="slide" class="carousel-image" />
          </CarouselSlide>
        </Carousel>
        <Logo />
        <h1 class="title">cac</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        'https://picsum.photos/id/237/600/350',
        'https://picsum.photos/id/236/600/350',
        'https://picsum.photos/id/235/600/350',
        'https://picsum.photos/id/234/600/350',
        'https://picsum.photos/id/233/600/350',
        'https://picsum.photos/id/232/600/350',
      ],
      visibleSlide: 0,
      direction: ''
    }
  },
  computed: {
    slideLen() {
      return this.slides.length;
    }
  },
  methods: {
    next() {
      if(this.visibleSlide >= this.slideLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide ++;
      }
      this.direction = "left"
    },
    prev() {
      if(this.visibleSlide <= 0) {
        this.visibleSlide = this.slideLen - 1;
      } else {
        this.visibleSlide --;
      }
      this.direction = "right"
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.carousel-image {
  width:fit-content;
  height:fit-content;
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
