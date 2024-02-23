<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"  aria-label="Account Information"
    >
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-left">
          <h6 class="text-gray-dark text-xl font-bold font-roboto">My account</h6>
        </div>
      </div>
      <div class="flex-auto px-8 lg:px-10 py-10 pt-0">
        <form aria-label="User Information">
          <div class="flex justify-between">
          <h6 class="text-gray-dark font-roboto text-sm mt-3 mb-6 font-bold uppercase">
            User Information
          </h6>
          <!-- Edit Button -->
          <button class="bg-none border-none cursor-pointer flex justify-center items-center" aria-label="Edit User Information">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[20px] h-[20px]" aria-label="Edit icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>

          </button>
        </div>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 py-[20px]">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-dark text-xs font-bold mb-2 font-roboto"
                  htmlFor="grid-password"
                >
                  First name
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-dark bg-white rounded text-sm shadow focus:outline-light-purple-bg  w-full "
                  value="Stephanie" disabled
                  aria-label="First Name"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4 py-[20px]">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-dark text-xs font-bold font-roboto mb-2"
                  htmlFor="grid-password"
                >
                  Surname
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-dark bg-white rounded text-sm shadow focus:outline-light-purple-bg w-full "
                  value="Fabian" disabled
                  aria-label="Surname"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4 py-[20px]">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-dark text-xs font-bold font-roboto mb-2"
                  htmlFor="grid-password" disabled
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-dark bg-white rounded text-sm shadow focus:outline-light-purple-bg w-full"
                  value="stephaniefabian@gmail.com" disabled
                  aria-label="Email Address"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4 py-[20px]">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-dark font-roboto text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Matric Number
                </label>
                <input
                  type="number"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-bgray-dark font-roboto bg-white rounded text-sm shadow focus:outline-light-purple-bg w-full "
                  value="1708094789" disabled
                  aria-label="Matric Number"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  