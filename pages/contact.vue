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
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >Email</label>
          <input
            :class="emailError ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'"
            id="email"
            type="email"
            placeholder="youremail@host.com"
          />
          <p
            class="text-red-500 text-xs italic"
          >We need you to fill out this field, so we can get back to you!</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >First Name</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
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
        <p
          class="text-black text-xs italic mx-3"
        >This field is optional, but makes things a little less awkward.</p>
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
          <p
            class="text-red-500 text-xs italic"
          >Give us a subject so your email does not go to spam!</p>
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
      <div :class="success ? 'flex flex-wrap mx-3 mb-6 mt-3':'hidden'">
        <p class="text-gray-600 text-xs italic">Email sent successfully!</p>
      </div>
    </form>
    <div class="flex justify-center p-4">
      <div class="card flex flex-col md:w-1/2 justify-center p-2 bg-white rounded-lg text-center">
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
    return {
      emailError: false,
      success: false
    }
  },
  methods: {
    async sendEmail() {
      //get the contents of their email. If it is empty, show error message and return
      var email = document.getElementById('email').value
      if (email == '' || email == null) {
        this.emailError = true
        return
      }
      var fname = document.getElementById('grid-first-name').value;
      var lname = document.getElementById('grid-last-name').value;
      var subjt = ''
      subjt = document.getElementById('subject').value
      var bdy = ''
      bdy = document.getElementById('message').value
      var info = { email: email, subject: subjt, body: bdy, fname:fname, lname:lname }
      this.$axios.post('/api/send', info).then((res) => {
        this.emailError = false
        this.success = true
      })
    },
  },
}
</script>