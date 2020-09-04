<template>
  <div class="pt-20">
    <div class="p-4 w-128 fixed right-0">
      <!--light mode - wide side navigation-->
      <div
        class="w-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left capitalize font-medium shadow-lg"
      >
        <span
          class="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5"
        >
          <i class="w-8 fas fa-stream p-2 bg-gray-200 rounded-full"></i>
          <span class="mx-2">Introduction</span>
        </span>
        <span
          class="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5"
        >
          <i class="w-8 fas fa-search p-2 bg-gray-200 rounded-full"></i>
          <span class="mx-2">What is Divestment?</span>
        </span>
        <span
          class="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5"
        >
          <span class="w-8 mb-5 relative">
            <i class="w-8 fas fa-user p-2 bg-gray-200 rounded-full"></i>
          </span>
          <span class="mx-2">Video</span>
        </span>
        <span
          class="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5"
        >
          <i class="w-8 fas fa-th p-2 bg-gray-200 rounded-full"></i>
          <span class="mx-2">Why should we Divest?</span>
        </span>
      </div>
    </div>
    <div class="w-auto h-auto justify-center">
      <div
        class="card flex absolute flex-col justify-center p-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-lg divide-y divide-gray-400 xs:mx-32 md:mx-64 my-64"
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
    <div class="justify-center items-center mt-20">
      <div class="mx-auto flex flex-col justify-center text-center p-10 divide-y">
        <div class="p-4">
          <p class="text-4xl uppercase text-gray-900 font-bold">Let's Talk Divestment</p>
        </div>
        <div class>
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
        <div class="p-4">
          <p class="text-4xl uppercase text-gray-900 font-bold">What is Divestment?</p>
        </div>
        <div>
          <p
            class="font-medium p-4"
          >Put simply, divestment is the opposite of investment. A person or organization divests from businesses when they sell their stocks, bonds, or other financial holdings, essentially withdrawing their financial support from the organization. A catalyst for divestment can be the devaluation of an asset that makes holding onto it financially unfeasible, or the unethical implications of supporting a company or industry that causes social injury.</p>
        </div>
        <div class="p-4">
          <div>
            <p class="text-4xl uppercase text-gray-900 font-bold">
              An informative video by
              <a
                class="underline"
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
        <div class="p-4">
          <p class="text-4xl uppercase text-gray-900 font-bold">Why Should we Divest?</p>
        </div>
        <div>
          <p class="font-medium p-4">
            Universities are a key layer in the fabric of civil society. Their reputation for knowledge, wisdom, and innovation have established them as institutions of high intellectual authority. For generations, university and college campuses have been drivers of social change, demanding racial, social, and now environmental, justice.
            By divesting from the fossil fuel industry, Carleton University and the University of Ottawa have an important opportunity to take a powerful stand against this industry and its catastrophic impacts.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      splash: require('../assets/imgs/img-28.JPG'),
    }
  },
}
</script>

<style scoped>
/* .quote-card-lg {
  top: 45vh;
  left: 20vw;
} */
</style>