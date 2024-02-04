<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"
    >
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-left">
          <h6 class="text-gray-dark text-xl font-bold font-roboto">My account</h6>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 class="text-gray-dark font-roboto text-sm mt-3 mb-6 font-bold uppercase">
            User Information
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4">
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
                  value="Stephanie"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
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
                  value="Fabian"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-dark text-xs font-bold font-roboto mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-dark bg-white rounded text-sm shadow focus:outline-light-purple-bg w-full"
                  value="stephaniefabian@gmail.com"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
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
                  value="1708094789"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  