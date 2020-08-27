<template>
  <v-carousel
    cycle
    interval="8000"
    :show-arrows="false"
    max-height="75%"
    min-height="75%"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      style="width:100%; height:75%"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
var imgs = [
  require("../assets/imgs/environmental-racism.jpg"),
  require("../assets/imgs/img-3.jpg"),
  require("../assets/imgs/img-4.jpg"),
  require("../assets/imgs/img-5.jpg"),
  require("../assets/imgs/img-6.jpg"),
];
export default {
  name: "Carousel",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      items: [
        {
          title: "Environmental Racism - Outlined",
          text: "See our post about Environmental Racism on Instagram",
          src: imgs[0],
          url: "https://www.instagram.com/p/CBjZ-Een8eS/",
        },
        {
          title: "Image 1 title",
          text:
            "Image 1 test Which might break up into separate lines When I do this",
          src: imgs[1],
          url: "",
        },
        {
          title: "Image 2 title",
          text:
            "Image 2 test Which might break up into separate lines When I do this",
          src: imgs[2],
          url: "",
        },
        {
          title: "Image 3 title",
          text:
            "Image 3 test Which might break up into separate lines When I do this",
          src: imgs[3],
          url: "",
        },
        {
          title: "Image 4 title",
          text:
            "Image 4 test Which might break up into separate lines When I do this",
          src: imgs[4],
          url: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .container {
  height: 200px !important;
  position: relative !important;
}
.vertical-center {
  margin: 0 !important;
  position: absolute !important;
  top: 50% !important;
  -ms-transform: translateY(-50%) !important;
  transform: translateY(-50%) !important;
} */
</style>