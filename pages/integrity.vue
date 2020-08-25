<template>
  <div class="mt-20">
    <!-- <div class="text-3xl font-medium text-gray-800 pt-8 pl-8">Bill &amp; Linda's Project</div> -->

    <!-- <div class="flex justify-between pb-1">
      <h3
        class="flex items-center pt-1 px-8 text-3xl font-semibold capitalize dark:text-gray-300 pt-3 pl-6"
      >
        <span>Bill's Project</span>
        <button class="ml-2">
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
      <div class="pt-5 pr-4">
        <button
          class="bg-transparent text-blue-700 hover:text-white py-2 px-4 border-gray-500 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
            />
          </svg>
        </button>
      </div>
    </div>-->

    <div class="grid mb-6 md:grid-cols-1 xl:grid-cols-2 pl-1 pr-1 pt-2">
      <div class="grid md:grid-cols-1 xl:grid-cols-1 p-2">
        <div class="grid gap-4 mb-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2">
          <!-- Card -->
          <div
            class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-black border border-green-200 transition duration-300 ease-in-out hover:bg-green-100 transform hover:-translate-y-1 hover:scale-101"
            style="max-height:100px;"
          >
            <div
              class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
            >
              <svg fill="currentColor" viewBox="0 0 20 20" width="28px" height="28px">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p class="mb-2 text-md font-medium text-gray-600 dark:text-gray-400 pl-1">Amount Paid</p>
              <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">$ 46,760.89</p>
            </div>
          </div>
          <!-- Card -->
          <div
            class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-red-200 transition duration-300 ease-in-out hover:bg-red-100 transform hover:-translate-y-1 hover:scale-101"
            style="max-height:100px"
          >
            <div
              class="p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500"
            >
              <!-- <svg fill="currentColor" viewBox="0 0 20 20" width="18px" height="18px">
              <path
                d="M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20 M12,22c5.52,0,10-4.48,10-10c0-5.52-4.48-10-10-10 C6.48,2,2,6.48,2,12C2,17.52,6.48,22,12,22L12,22z M11,12l0,4h2l0-4h3l-4-4l-4,4H11z"
              />
              </svg>-->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 0 24 24"
                width="28"
                fill="currentColor"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
                />
              </svg>
            </div>
            <div>
              <p class="mb-2 text-md font-medium text-gray-600 dark:text-gray-400 pl-1">Amount Owed</p>
              <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">- $ 145,760.89</p>
            </div>
          </div>
          <!-- Card -->
          <div
            class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-black border border-teal-200 transition duration-300 ease-in-out hover:bg-teal-100 transform hover:-translate-y-1 hover:scale-101"
            style="max-height:100px;"
          >
            <div
              class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="28"
                viewBox="0 0 24 24"
                width="28"
                fill='currentColor'
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                  <path
                    d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M13,12l0-4h-2l0,4H8l4,4l4-4H13z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <p class="mb-2 text-md font-medium text-gray-600 dark:text-gray-400 pl-1">Stuff</p>
              <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">${stuff.thing}</p>
            </div>
          </div>
          <!-- Card -->
          <div
            class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-black border border-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-101"
            style="max-height:100px;"
          >
            <div
              class="p-3 mr-4 text-gray-500 bg-gray-100 rounded-full dark:text-teal-100 dark:bg-gray-500"
            >
              <svg fill="currentColor" viewBox="0 0 20 20" width="28px" height="28px">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p class="mb-2 text-md font-medium text-gray-600 dark:text-gray-400 pl-1">New</p>
              <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">${new.thing}</p>
            </div>
          </div>
        </div>

        <div
          class="flex p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-indigo-100"
          style="min-height:190px;"
        >
          <div
            class="p-3 mr-4 text-indigo-500 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-500 hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 24 24"
              width="28px"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </div>
          <div class="mx-auto">
            <p
              class="mb-2 text-xl text-gray-800 dark:text-gray-800 pl-1 uppercase text-bold"
              style="border-bottom: 3px double; max-width:130px"
            >Actions</p>
          </div>
        </div>

        <div
          class="flex p-4 mt-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-indigo-100"
          style="min-height:400px;"
        >
          <div
            class="p-3 mr-4 text-gray-500 bg-gray-100 rounded-full dark:text-indigo-100 dark:bg-gray-500 hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
              width="28"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
              <circle class="bg-color" cx="8" cy="14" r="2" />
              <circle cx="12" cy="8" r="2" />
              <circle cx="16" cy="14" r="2" />
            </svg>
          </div>
          <div class="mx-auto">
            <p
              class="mb-2 text-xl text-gray-800 dark:text-gray-800 pl-1 uppercase text-bold"
              style="border-bottom: 3px double; max-width:190px"
            >Change Orders</p>
          </div>
        </div>
      </div>

      <div
        class="flex p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 m-2"
        style="min-height:700px;"
      >
        <div
          class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500 hidden md:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="28px"
            height="28px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" />
          </svg>
        </div>
        <div class="mx-auto w-full">
          <div class="text-center">
            <p
              class="mb-2 text-xl text-gray-800 dark:text-gray-800 pl-1 uppercase mx-auto"
              style="border-bottom: 3px double; max-width:130px"
            >Daily Logs</p>
          </div>

          <div
            class="grid gap-4 mb-8 pt-2 md:grid-cols-1 xl:grid-cols-1 w-full overflow-scroll"
            style="max-height:700px;"
          >
            <!-- Card -->
            <!-- <div
              class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-gray-400 transition duration-300 ease-in-out hover:border-orange-300 hover:bg-orange-100 transform hover:-translate-y-1 hover:scale-95 cursor-pointer"
              style="min-height:100px"
            >
              <div
                class="p-3 mr-4 text-gray-500 hover:text-orange-300 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  viewBox="0 0 24 24"
                  width="28"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"
                  />
                </svg>
              </div>
              <div>
                <p class="mb-2 text-md font-medium text-gray-900 font-bold dark:text-gray-400 pl-1">
                  <span class="text-gray-600 font-normal">07/05/2020 -</span>Faze 3: Finishing
                </p>
                <p
                  class="pl-1 pr-1 text-md text-gray-700 dark:text-gray-200"
                >Finishing touches were put on, drywall, trim. Baseboards still need to go on. That will be done in next faze</p>
              </div>
            </div>-->

            <!-- <div class="p-1">
              <div
                class="flex bg-white shadow-xs rounded-lg overflow-hidden border border-gray-400 transition duration-300 ease-in-out hover:border-orange-300 hover:bg-orange-100 transform hover:-translate-y-1 hover:scale-95 cursor-pointer"
              >
                <div
                  class="w-1/3 bg-cover"
                  style="background-image: url('https://source.unsplash.com/random')"
                ></div>
                <div class="w-2/3 p-4">
                  <h1 class="text-gray-800 font-bold text-xl">Faze 1: Foundation</h1>
                  <p
                    class="mt-2 text-gray-600 text-sm"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elidvsdvsvsdvdssdfsdsdfdsgds vsdvdst In odit exercitationem fuga id nam quia</p>
                  <div class="flex item-center justify-between mt-3">
                    <h1 class="text-gray-600 font-bold text-xl">05/30/2020</h1>

                    <h2 class="font-semi-bold text-gray-600">${something.whatever}</h2>
                  </div>
                </div>
              </div>
            </div>-->

            <!-- component - 2 -->
            <div
              class="px-8 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-gray-400 transition duration-300 ease-in-out hover:border-gray-300 hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-95 cursor-pointer"
            >
              <div class="flex justify-between items-center">
                <span class="font-light text-gray-600">mar 10, 2019</span>
                <a
                  class="px-2 py-1 bg-white text-gray-700 border border-grey-300 font-bold rounded hover:text-teal-600"
                  href="#"
                >Design</a>
              </div>
              <div class="mt-2">
                <a
                  class="text-xl text-gray-700 font-bold hover:text-gray-600"
                  href="#"
                >Build - Foundation Finished</a>
                <p
                  class="mt-2 text-gray-600"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
              </div>
              <div class="flex justify-between items-center mt-4">
                <a
                  class="text-gray-900 font-bold underline transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  href="#"
                >View Photos</a>
                <div>
                  <a class="flex items-center" href="#">
                    <div
                      class="p-3 mr-4 text-gray-500 hover:text-orange-300 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="28"
                        viewBox="0 0 24 24"
                        width="28"
                        fill="currentColor"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"
                        />
                      </svg>
                    </div>
                    <h1 class="text-gray-700 font-bold">Gerald</h1>
                  </a>
                </div>
              </div>
            </div>

            <!-- component - 2 -->
            <div
              class="px-8 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-gray-400 transition duration-300 ease-in-out hover:border-gray-300 hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-95 cursor-pointer"
            >
              <div class="flex justify-between items-center">
                <span class="font-light text-gray-600">jan 21, 2020</span>
                <a
                  class="px-2 py-1 bg-white text-gray-700 border border-grey-300 font-bold rounded hover:text-teal-600"
                  href="#"
                >Design</a>
              </div>
              <div class="mt-2">
                <a
                  class="text-xl text-gray-700 font-bold hover:text-gray-600"
                  href="#"
                >Finish - Exterior Trim</a>
                <p class="mt-2 text-gray-600">Excepturi iste iusto eos enim reprehenderit nisi?</p>
              </div>
              <div class="flex justify-between items-center mt-4">
                <a
                  class="text-gray-900 font-bold underline transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  href="#"
                >View Photos</a>
                <div>
                  <a class="flex items-center" href="#">
                    <div
                      class="p-3 mr-4 text-gray-500 hover:text-orange-300 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="28"
                        viewBox="0 0 24 24"
                        width="28"
                        fill="currentColor"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"
                        />
                      </svg>
                    </div>
                    <h1 class="text-gray-700 font-bold">Gerald</h1>
                  </a>
                </div>
              </div>
            </div>

            <!-- Card -->
            <div
              class="flex items-center p-4 bg-gray-800 rounded-lg shadow-xs dark:bg-gray-800 border border-gray-400 transition duration-300 ease-in-out hover:border-gray-300 hover:bg-gray-700 transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
              style="min-height:80px"
            >
              <div
                class="p-3 mr-4 text-gray-600 bg-gray-300 rounded-full dark:text-gray-100 dark:bg-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="28"
                  viewBox="0 0 24 24"
                  width="28"
                  fill="currentColor"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path
                        d="M17.66,17.66l-1.06,1.06l-0.71-0.71l1.06-1.06l-1.94-1.94l-1.06,1.06l-0.71-0.71l1.06-1.06l-1.94-1.94l-1.06,1.06 l-0.71-0.71l1.06-1.06L9.7,9.7l-1.06,1.06l-0.71-0.71l1.06-1.06L7.05,7.05L5.99,8.11L5.28,7.4l1.06-1.06L4,4v14c0,1.1,0.9,2,2,2 h14L17.66,17.66z M7,17v-5.76L12.76,17H7z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div class="mx-auto pr-8">
                <!-- <p class="mb-2 text-md font-medium text-gray-900 font-bold dark:text-gray-400 pl-1">
                  <span class="text-gray-600 font-normal">03/10/2020 -</span>Faze 2: Utilities
                </p>-->
                <p
                  class="mx-auto pl-1 pr-1 text-md text-gray-100 dark:text-gray-200 text-2xl uppercase font-bold"
                >Faze - 4</p>
              </div>
            </div>

            <!-- component - 2 -->
            <div
              class="px-8 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-gray-400 transition duration-300 ease-in-out hover:border-gray-300 hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-95 cursor-pointer"
            >
              <div class="flex justify-between items-center">
                <span class="font-light text-gray-600">jan 21, 2020</span>
                <a
                  class="px-2 py-1 bg-white text-gray-700 border border-grey-300 font-bold rounded hover:text-teal-600"
                  href="#"
                >Design</a>
              </div>
              <div class="mt-2">
                <a
                  class="text-xl text-gray-700 font-bold hover:text-gray-600"
                  href="#"
                >Develop - Structure</a>
                <p class="mt-2 text-gray-600">Big time</p>
              </div>
              <div class="flex justify-between items-center mt-4">
                <a
                  class="text-gray-900 font-bold underline transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  href="#"
                >View Files</a>
                <div>
                  <a class="flex items-center" href="#">
                    <div
                      class="p-3 mr-4 text-gray-500 hover:text-orange-300 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="28"
                        viewBox="0 0 24 24"
                        width="28"
                        fill="currentColor"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"
                        />
                      </svg>
                    </div>
                    <h1 class="text-gray-700 font-bold">Billy</h1>
                  </a>
                </div>
              </div>
            </div>

            <!-- Card -->
            <div
              class="flex items-center p-4 bg-gray-800 rounded-lg shadow-xs dark:bg-gray-800 border border-gray-400 transition duration-300 ease-in-out hover:border-gray-300 hover:bg-gray-700 transform hover:-translate-y-1 hover:scale-100 cursor-pointer"
              style="min-height:80px"
            >
              <div
                class="p-3 mr-4 text-gray-600 bg-gray-300 rounded-full dark:text-gray-100 dark:bg-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="28"
                  viewBox="0 0 24 24"
                  width="28"
                  fill="currentColor"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path
                        d="M17.66,17.66l-1.06,1.06l-0.71-0.71l1.06-1.06l-1.94-1.94l-1.06,1.06l-0.71-0.71l1.06-1.06l-1.94-1.94l-1.06,1.06 l-0.71-0.71l1.06-1.06L9.7,9.7l-1.06,1.06l-0.71-0.71l1.06-1.06L7.05,7.05L5.99,8.11L5.28,7.4l1.06-1.06L4,4v14c0,1.1,0.9,2,2,2 h14L17.66,17.66z M7,17v-5.76L12.76,17H7z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div class="mx-auto pr-8">
                <!-- <p class="mb-2 text-md font-medium text-gray-900 font-bold dark:text-gray-400 pl-1">
                  <span class="text-gray-600 font-normal">03/10/2020 -</span>Faze 2: Utilities
                </p>-->
                <p
                  class="mx-auto pl-1 pr-1 text-md text-gray-100 dark:text-gray-200 text-2xl uppercase font-bold"
                >Faze - 2</p>
              </div>
            </div>
            <!-- Card -->
            <div
              class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-gray-400 transition duration-300 ease-in-out hover:border-gray-300 hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-95 cursor-pointer"
              style="min-height:100px"
            >
              <div
                class="p-3 mr-4 text-gray-500 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="28"
                  viewBox="0 0 24 24"
                  width="28"
                  fill="currentColor"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path
                        d="M17.66,17.66l-1.06,1.06l-0.71-0.71l1.06-1.06l-1.94-1.94l-1.06,1.06l-0.71-0.71l1.06-1.06l-1.94-1.94l-1.06,1.06 l-0.71-0.71l1.06-1.06L9.7,9.7l-1.06,1.06l-0.71-0.71l1.06-1.06L7.05,7.05L5.99,8.11L5.28,7.4l1.06-1.06L4,4v14c0,1.1,0.9,2,2,2 h14L17.66,17.66z M7,17v-5.76L12.76,17H7z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <p class="mb-2 text-md font-medium text-gray-900 font-bold dark:text-gray-400 pl-1">
                  <span class="text-gray-600 font-normal">03/10/2020 -</span>Faze 2: Utilities
                </p>
                <p class="pl-1 pr-1 text-md text-gray-700 dark:text-gray-200">Utilities installed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 600)
    })
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
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
