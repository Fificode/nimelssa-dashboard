<template>
    <nav
      class="left-0 w-full md:block fixed top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-md bg-white flex flex-wrap items-center justify-between  md:w-64 z-10 py-3 "
    >
      <div
        class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap flex flex-wrap items-center justify-between w-full mx-auto px-0"
      >
        <!-- Toggler -->
        <button
          class="cursor-pointer md:hidden px-3 py-1  leading-none "
          type="button"
          v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#273444" class="w-[25px] h-[25px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

          
        </button>
        <!-- NIMELSSA Home -->
        <router-link
          class="md:block text-left"
          to="/"
        >
        <div class="flex flex-row items-center px-1">
        <img
                alt="Home of NIMELSSA"
                :src="nimelssalogo"
                class="md:block md:w-[50px] md:h-[50px] hidden"
              />
          <p class="text-gray-dark mr-0 inline-block whitespace-nowrap text-[15px] font-roboto font-[600] p-4 px-0">NIMELSSA DASHBOARD </p>
        </div>
       
        </router-link>
         <!-- Divider -->
         <div class="border-b border-gray md:w-full my-[3px]"></div> 
        <!-- User -->
        <ul class="md:hidden items-center flex flex-wrap list-none">
          <li class="inline-block relative">
            <notification-dropdown />
          </li>
          <li class="inline-block relative">
            <user-dropdown />
          </li>
        </ul>
        <!-- Collapse -->
        <div
          class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded px-6 bg-[#fff] animate-scale_up_tl "
          v-bind:class="collapseShow"
        >
          <!-- Collapse header -->
          <div
            class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-dark "
          >
            <div class="flex flex-wrap">
              <div class="w-6/12">
                <router-link
                  class="md:block text-left md:pb-2 mr-0 inline-block whitespace-nowrap  p-4 px-0"
                  to="/"
                >
                <div class="flex flex-row justify-center items-center ml-[7px]">
        <img
                alt="Home of NIMELSSA"
                :src="nimelssalogo"
                class="w-[50px] h-[50px] "
              />
          <p class="text-gray-dark mr-0 inline-block whitespace-nowrap text-[15px] font-roboto font-[600] p-4 px-0">NIMELSSA DASHBOARD </p>
        </div>
                </router-link>
              </div>
              <div class="w-6/12 flex justify-end">
                <button
                  type="button"
                  class="cursor-pointer  md:hidden px-3 py-1  leading-none"
                  v-on:click="toggleCollapseShow('hidden')"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#273444" class="w-[25px] h-[25px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                
                </button>
              </div>
            </div>
          </div>
          <!-- Form -->
          <form class="mt-6 mb-4 md:hidden">
            <div class="mb-3 pt-0">
              <input
                type="text"
                placeholder="Search"
                class="border-[1px] rounded-[5px] border-gray-dark px-3 py-3 placeholder-gray-dark text-gray-dark relative bg-white text-sm outline-none focus:border-[2px] focus:outline-none focus:border-light-purple-bg w-full pl-[10px]"
              />
            </div>
          </form>
  
          <ul class="md:flex-col md:min-w-full flex flex-col list-none">
    <li v-for="link in links" :key="link.path" class="items-center " >
      <router-link :to="link.path" v-slot="{ href, navigate}">
        <!-- @click="handleLinkClick(link.label, navigate)" -->
        <a
          :href="href"
          @click="navigate"
          :class="{ 'bg-light-purple-bg rounded-[10px] hover:opacity-[0.8]': isActiveLink(link.path) }"
          class="my-2 px-2 py-3 font-roboto flex items-center"
        >
          <svg  :class="iconClasses(link.path)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="iconStrokeColor(link.path)" class="w-[25px] h-[25px] mr-2">
           <path stroke-linecap="round" stroke-linejoin="round"  :d='link.icon'></path> <!-- SVG Path for each link -->
          </svg>
          <span class="text-gray-dark text-[15px] font-[500] ">{{ link.label }}</span>
        </a>
      </router-link>
    </li>
  </ul>
        </div>
      </div>
    </nav>
  </template>
  ); }
  
  <script>
  import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
  import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
  import nimelssalogo from "/img/nimelssaLogo.png";
  
  export default {
    data() {
      return {
        collapseShow: "hidden",
       
        nimelssalogo,
        links: [
        { path: '/dashboard', label: 'Overview', icon: 'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z' },
        { path: '/dashboard/quiz', label: 'Quiz', icon: 'M9.5 10a2.5 2.5 0 1 1 5 .2 2.4 2.4 0 0 1-2.5 2.4V14m0 3h0m9-5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' },
        { path: '/dashboard/result', label: 'Result', icon: 'M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z' },
        { path: '/dashboard/leaderboard', label: 'Leader Board', icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z' },
        { path: '/dashboard/settings', label: 'Settings', icon: 'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z' },
        { path: '/dashboard/logout', label: 'Log Out', icon: 'M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15' },
      ]
      };
    },
  
    methods: {
      toggleCollapseShow: function (classes) {
        this.collapseShow = classes;
      },
      isActiveLink(path) {
      return this.$route.path === path;
    },
    iconClasses() {
      // Return icon classes based on path if needed
      return 'text-gray-dark';
    },
    iconStrokeColor() {
      // Return icon stroke color based on path if needed
      return '#273444';
    },
    handleLinkClick(pageName, navigate) {
      this.$store.commit('setCurrentPage', pageName)
      console.log(this.$store.state.currentPage);
      navigate()
    },
   
    },
    components: {
      NotificationDropdown,
      UserDropdown,
    },
    
  };
  </script>
  