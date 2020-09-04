<template>
  <div class="mt-20 divide-y divide-gray-400" style="padding:10px;">
    <!-- component -->
    <div class="flex justify-center p-4">
      <div class="card flex flex-col md:w-1/2 justify-center p-2 bg-white rounded-lg text-center">
        <div class="prod-title">
          <p class="text-2xl uppercase text-gray-900 font-bold">Send us an Email</p>
        </div>
      </div>
    </div>

    <form class="w-full max-w-lg p-4 mx-auto">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >First Name</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >Last Name</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >Subject</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="subject"
            type="subject"
          />
          <!-- <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p> -->
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >Message</label>
          <textarea
            class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
          ></textarea>
          <p class="text-gray-600 text-xs italic">Please enter a body for your email</p>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="sendEmail"
          >Send</button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
    <div class="flex justify-center p-4">
      <div
        class="card flex flex-col md:w-1/2 justify-center p-2 bg-white rounded-lg  text-center"
      >
        <div class="prod-title">
          <p class="text-2xl uppercase text-gray-900 font-bold">Join our Team!</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center text-center p-4">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdpdpIjhpTaV0m5GBcYAOgKcrpi7VWseBG8LbzggkuykZ0gIw/viewform?embedded=true"
        width="640px"
        height="3450px"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    sendEmail() {
      var first = document.getElementById('grid-first-name').value
      var last = document.getElementById('grid-last-name').value
      var subjt = ''
      subjt = document.getElementById('subject').value
      var bdy = ''
      bdy = document.getElementById('message').value
      bdy = bdy.replaceAll('\n', '%0D%0A')
      window.open(
        'mailto:climateactioncarleton@gmail.com?subject=' +
          subjt +
          '&body=' +
          bdy +
          '%0D%0A' +
          first +
          ' ' +
          last
      )
    },
  },
}
</script>