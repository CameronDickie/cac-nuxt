<template>
  <div class="pt-20" v-on:scroll="handleScroll">
    <div class="p-4 w-128 fixed right-0">
      <!--light mode - wide side navigation-->
      <div
        :class="table ?'hidden' : 'w-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left capitalize divide-y divide-gray-400 font-medium shadow-lg'"
      >
        <button @click="table=!table">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
            />
          </svg>
        </button>
      </div>
      <div
        :class="table ? 'w-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left capitalize divide-y divide-gray-400 font-medium shadow-lg' : 'w-full hidden py-4 px-2 text-gray-900 bg-white rounded-lg text-left capitalize divide-y divide-gray-400 font-medium shadow-lg'"
      >
        <button class="bg-white" @click="table = !table">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        </button>

        <div class="pt-4">
          <span
            class="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5"
            @click="scrollTo('intro')"
          >
            <i :class="contents[0].highlighted ? 'w-8 fas fa-search p-2 bg-gray-900 rounded-full':'w-8 fas fa-search p-2 bg-gray-200 rounded-full'"></i>
            <span class="mx-2">Introduction</span>
          </span>
          <span
            class="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5"
            @click="scrollTo('whatis')"
          >
            <i :class="contents[1].highlighted ? 'w-8 fas fa-search p-2 bg-gray-900 rounded-full':'w-8 fas fa-search p-2 bg-gray-200 rounded-full'"></i>
            <span class="mx-2">What is Divestment?</span>
          </span>
          <span
            class="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5"
            @click="scrollTo('why')"
          >
            <i :class="contents[2].highlighted ? 'w-8 fas fa-search p-2 bg-gray-900 rounded-full':'w-8 fas fa-search p-2 bg-gray-200 rounded-full'"></i>
            <span class="mx-2">Why should we Divest?</span>
          </span>
        </div>
      </div>
    </div>

    <div class="w-auto h-auto justify-center">
      <div
        class="card flex absolute flex-col justify-center p-4 bg-white bg-opacity-50 hover:bg-opacity-75 hover:bg-blue-600 rounded-lg divide-y divide-gray-400 xs:mx-32 md:mx-64 my-64"
      >
        <div class="prod-title text-center">
          <p
            class="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-md uppercase text-black font-bold"
          >Carleton University and the University of Ottawa Must Divest from Fossil Fuels</p>
          <p
            class="uppercase text-sm text-gray-700"
          >“Money is the oxygen on which the fire of global warming burns” ­– Bill McKibben, Founder of 350.org</p>
        </div>
      </div>
      <img :src="splash" class="w-full" style="object-fit:cover; height:85vh" />
    </div>
    <div id="intro" class="w-screen flex justify-center items-center">
      <div class="container mx-auto w-full p-4 md:w-3/4 sm:w-1/2">
        <div
          class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl divide-y divide-gray-400"
        >
          <div class="prod-title">
            <p class="text-2xl uppercase text-gray-900 font-bold">Let's Talk Divestment</p>
            <!-- <p class="uppercase text-sm text-gray-400">a brief description</p> -->
          </div>
          <p
            class="font-medium p-4"
          >For decades, the fossil fuel industry has knowingly polluted our atmosphere and jeopardized our future with impunity. This has always been catastrophic for our ecosystems, but now we have reached a tipping point. As of 2019, the global fossil fuel industry has 2,798 gigatons of coal, oil, and gas currently in its reserves, ready to be burned into our atmosphere. However, this number is five times higher than scientists’ carbon budget for remaining below the goal of 2-degrees-celsius rise in global average temperature.</p>
          <p class="font-medium p-4">
            Climate Action Carleton (CAC) and
            <a
              class="underline text-blue-700"
              href="https://linktr.ee/cjcuottawa"
            >Climate Justice Climatique UOttawa (CJCUO)</a> are calling on Carleton University and the University of Ottawa to hold the fossil fuel industry accountable for its actions by divesting our university endowment funds from the fossil fuel industry by 2025. This includes divesting from coal, oil, and natural gas companies that emit harmful greenhouse gases into the atmosphere through their business practices. We are calling for divestment in order to send a simple, powerful message: profiting from the destruction of our planet is ecologically disastrous, financially unfeasible, and morally unacceptable.
          </p>
        </div>
      </div>
    </div>
    <div id="whatis" class="w-screen flex justify-center items-center">
      <div class="container mx-auto w-full p-4 md:w-3/4 sm:w-1/2">
        <div
          class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl divide-y divide-gray-400"
        >
          <div class="prod-title">
            <p class="text-2xl uppercase text-gray-900 font-bold">What is Divestment?</p>
            <!-- <p class="uppercase text-sm text-gray-400">a brief description</p> -->
          </div>
          <p
            class="font-medium p-4"
          >Put simply, divestment is the opposite of investment. A person or organization divests from businesses when they sell their stocks, bonds, or other financial holdings, essentially withdrawing their financial support from the organization. A catalyst for divestment can be the devaluation of an asset that makes holding onto it financially unfeasible, or the unethical implications of supporting a company or industry that causes social injury.</p>
          <div>
            <div>
              <p class="text-4xl uppercase text-gray-900 font-bold">
                An informative video by
                <a
                  class="underline text-center"
                  href="https://gofossilfree.org/"
                >GoFossileFree.org</a>
              </p>
            </div>
            <div class="flex justify-center text-center p-4">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_dApzI9jN04"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="why" class="w-screen flex justify-center items-center">
      <div class="container mx-auto w-full p-4 md:w-3/4 sm:w-1/2">
        <div
          class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl divide-y divide-gray-400"
        >
          <div class="prod-title">
            <p class="text-2xl uppercase text-gray-900 font-bold">Why Should we Divest?</p>
            <!-- <p class="uppercase text-sm text-gray-400">a brief description</p> -->
          </div>
          <p
            class="font-medium p-4"
          >For decades, the fossil fuel industry has knowingly polluted our atmosphere and jeopardized our future with impunity. This has always been catastrophic for our ecosystems, but now we have reached a tipping point. As of 2019, the global fossil fuel industry has 2,798 gigatons of coal, oil, and gas currently in its reserves, ready to be burned into our atmosphere. However, this number is five times higher than scientists’ carbon budget for remaining below the goal of 2-degrees-celsius rise in global average temperature.</p>
          <p class="font-medium p-4">
            Universities are a key layer in the fabric of civil society. Their reputation for knowledge, wisdom, and innovation have established them as institutions of high intellectual authority. For generations, university and college campuses have been drivers of social change, demanding racial, social, and now environmental, justice.
            By divesting from the fossil fuel industry, Carleton University and the University of Ottawa have an important opportunity to take a powerful stand against this industry and its catastrophic impacts.
          </p>
        </div>
      </div>
    </div>
    <div class="d-block h-64"></div>
    <div class="d-block h-64"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      splash: require('../assets/imgs/img-28.JPG'),
      table: true,
      contents: [
        { id: 'intro', highlighted: false },
        { id: 'whatis', highlighted: false },
        { id: 'why', highlighted: false },
      ],
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    TOCLen() {
      return this.contents.length
    },
  },
  methods: {
    scrollTo(id) {
      if (id == null || id == '') {
        console.log('id is null')
        return
      }
      let ele = document.getElementById(id)
      if (ele == null || ele == '') {
        console.log('element was not found')
        return
      }
      ele.scrollIntoView()
    },
    setHighlight(index) {
      //manually unhighlight everything else because im too lazy to find a more efficient solution to this FUCK PERFORMANCE
      for (let j = 0; j < this.TOCLen; j++) {
        this.contents[j].highlighted = false
      }
      //highlight this element tho
      this.contents[index].highlighted = true
      return
    },
    handleScroll() {
      var isAtTop = (id) => {
        var ele = document.getElementById(id)
        var rect = ele.getBoundingClientRect()
        if (rect.top <= 50) {
          return true
        } else {
          return false
        }
      }

      for (let i = this.TOCLen - 1; i >= 0; i--) {
        if (isAtTop(this.contents[i].id)) {
          if (this.contents[i].highlighted) {
            return
          }
          this.setHighlight(i)
          return
        }
      }
    },
  },
}
</script>

<style scoped>
/* .quote-card-lg {
  top: 45vh;
  left: 20vw;
} */
</style>