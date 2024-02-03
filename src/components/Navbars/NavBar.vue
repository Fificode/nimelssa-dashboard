<template>
    <!-- Navbar -->
    <nav class="w-full z-10 bg-white md:flex-row md:flex-nowrap md:justify-start flex items-center p-[11px] shadow-sm">
      <div
        class="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
      >
        <!-- Brand -->
        <p
          class="text-gray-dark text-[19px] font-roboto  hidden lg:inline-block font-[500]"
        >
          Overview
        </p>
        <!-- Form -->
        <form
          class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
        >
          <div class="relative flex w-full flex-wrap items-stretch">
            <span
              class="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
            >
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search here..."
              class="border-[2px] rounded-[5px] border-gray-light px-3 py-3 placeholder-gray-dark text-gray relative bg-white text-sm outline-none focus:border-[2px] focus:outline-none focus:border-light-purple-bg w-full pl-10"
            />
          </div>
        </form>
        <!-- User -->
        <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
          <user-dropdown />
        </ul>
      </div>
    </nav>
    <!-- End Navbar -->
  </template>
  
  <script>
  import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
  
  export default {
    components: {
      UserDropdown,
    },
  };
  </script>
  