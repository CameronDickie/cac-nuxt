<template>
  <!-- component -->
  <header class="shadow-sm fixed bg-transparent" style="width:100%; z-index:99">
    <!-- <div class="bg-blue-300 py-1"></div> -->
    <nav class="flex items-center justify-between flex-wrap bg-transparent hover:bg-opacity-75 hover:bg-white py-4 mx-auto px-8">
      <div class="flex items-center flex-shrink-0 mr-6">
        <h3 class="xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl font-semibold capitalize dark:text-gray-300 hover:text-gray-800">
          <!-- Header -->
          <img style="padding-right:20px; display:inline-block; width:48px;" :src="logo" />
          <span class="">Climate Action Carleton</span>
          <button class="ml-2" @click="showSubtitle = !showSubtitle">
            <svg class="h-5 w-5 fill-current" viewBox="0 0 256 512">
              <path
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
              />
            </svg>
          </button>
        </h3>
      </div>

      <div class="flex items-center flex-shrink-0 text-black mr-6 hidden md:block">
        <!-- <a class="text-black no-underline hover:text-grey hover:no-underline pl-2" href="#">
          <div class="h-8 bg-gray-500 w-16 block mx-auto rounded-sm"></div>
          <h1>Dunns Famous</h1>
        </a>-->
        <div class="text-2xl uppercase text-gray-400 font-bold" :v-if="showSubtitle">{{saying}}</div>
      </div>

      <div class="block lg:hidden pt-1" @click="hidden = !hidden">
        <button id="nav-toggle" class="outline-none">
          <!-- <div class="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>
          <div class="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>
          <div class="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>-->
          <i class="material-icons md-64 text-gray-900" v-bind:class="{ hidden: !hidden }">dehaze</i>
          <i class="material-icons md-64 text-gray-900" v-bind:class="{ hidden: hidden }">clear</i>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0"
        id="nav-content"
        v-bind:class="{ hidden: hidden }"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3 pb-1 pt-1">
            <!-- <a
              class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="#"
            >
              <div class="h-2 bg-gray-400 w-16 mt-2 block mx-auto rounded-sm"></div>
            </a>-->
            <nuxt-link to="/" class="border-none">
              <button
                class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-4 rounded-lg outline-none uppercase transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                v-bind:class="{ 'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/' }"
                @click="delayChange; saying=phrases[0]; hidden=true"
              >Home</button>
            </nuxt-link>
          </li>
          <li class="mr-3 pb-1 pt-1">
            <nuxt-link to="/about">
              <button
                class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-4 rounded-lg outline-none uppercase transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                v-bind:class="{ 'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/about' }"
                @click="delayChange; saying=phrases[1]; hidden=true"
              >About</button>
            </nuxt-link>
          </li>
          <li class="mr-3 pb-1 pt-1">
            <nuxt-link to="/contact">
              <button
                class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-4 rounded-lg outline-none uppercase transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                v-bind:class="{ 'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/contact' }"
                @click="delayChange; saying=phrases[2]; hidden=true"
              >Contact</button>
            </nuxt-link>
          </li>
          <!-- <li class="mr-3 pb-1 pt-1">
            <nuxt-link to="/services">
              <button
                class="bg-transparent text-grey-800 font-semibold py-2 px-4 border border-grey rounded-full outline-none"
                v-bind:class="{ 'bg-gray-900 text-white': $route.path == '/services' }"
                @click="delayChange"
              >Services</button>
            </nuxt-link>
          </li>-->
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.double-line {
  border-bottom: 3px double;
}
</style>

<script>
export default {
  data() {
    return {
      logo: require('../assets/imgs/logo.png'),
      hidden: true,
      saying: "The Time is Now",
      showSubtitle: true,
      phrases: [
        "The Time is Now",
        "It's Time for Action",
        "Don't wait to Sign up"
      ]
    }
  },
  methods: {
    delayChange: function () {
      // `this` inside methods point to the Vue instance
      setTimeout(() => (this.hidden = true), 200)
    },
  },
}
</script>