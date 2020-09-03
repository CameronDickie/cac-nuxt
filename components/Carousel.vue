<template>
  <div class="carousel">
    <slot></slot>
    <button @click="next" class="next">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
    <!-- <button @click="prev" class="previous">Previous</button> -->
    <button @click="prev" class="previous">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
        />
      </svg>
    </button>
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
  width: 100vw;
  height: 85vh;
  overflow: hidden;
  align-items: center;
  justify-items: center;
}
button {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);

  padding-left: 5px;
  padding-right: 5px;
  border: none;
  top: calc(50% - 12px);
}
.next {
  justify-self: start !important;

  right: 0%;
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