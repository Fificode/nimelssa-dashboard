<template>
    <!-- Navbar -->
    <nav class="fixed hidden  md:top-0 md:left-[256px] w-[calc(100%_-_256px)] z-10 bg-white md:flex-row md:flex-nowrap md:justify-start md:flex items-center p-[11px] shadow-sm">
      <div
        class="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap"
      >
        <!-- Brand -->
        <p
          class="text-gray-dark text-[19px] font-roboto px-[15px]  hidden md:inline-block font-[500]"
        >
       {{ headerText }}
        </p>
        <!-- Form -->
        <form
          class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto  mr-3"
        >
          <div class="relative flex w-full flex-wrap items-stretch">
            <span
              class="z-10 h-full leading-snug font-normal text-center text-gray-dark absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#717171" class="m-[3px] w-[18px] h-[18px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            </span>
            <input
              type="text"
              placeholder="Search here..."
              class="border-[2px] rounded-[5px] border-gray-light px-3 py-3 placeholder-gray-dark text-gray-dark relative bg-white text-sm outline-none focus:border-[2px] focus:outline-none focus:border-light-purple-bg w-full pl-10"
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
    props: {
    headerText: String,
  },
    components: {
      UserDropdown,
    },
   
  };
  </script>
  