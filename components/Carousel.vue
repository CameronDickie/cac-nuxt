<template>
  <div class="carousel">
    <slot></slot>
    <button @click="next" class="next">Next</button>
    <button @click="prev" class="previous">Previous</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    },
  },
}
</script>

<style scoped>
.carousel {
  position: relative;
  width:600px;
  height:350px;
  overflow: hidden;
}
button {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  height: 40px;
  width: auto;
  padding-left: 5px;
  padding-right: 5px;
  border: none;
  top: calc(50% - 20px);
}
.next {
  justify-self: start !important;
  right:0%;
}
.previous {
  justify-self: end !important;
  left: 0%;
}
button:focus,
button:hover {
  outline: none;
  cursor: pointer;
}
</style>