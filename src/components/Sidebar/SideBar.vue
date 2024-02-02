<template>
    <nav
      class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative  md:w-64 z-10 py-4 px-6"
    >
      <div
        class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
      >
        <!-- Toggler -->
        <button
          class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
        >
          <i class="fas fa-bars"></i>
        </button>
        <!-- NIMELSSA Home -->
        <router-link
          class="md:block text-left md:pb-2 "
          to="/"
        >
        <div class="flex flex-row justify-center items-center">
        <!-- <img
                alt="Home of NIMELSSA"
                :src="nimelssalogo"
                class="md:block md:w-16 md:h-16 w-8 h-8 "
              /> -->
          <p class="text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">NIMELSSA DASHBOARD </p>
        </div>
        </router-link>
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
          class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
          v-bind:class="collapseShow"
        >
          <!-- Collapse header -->
          <div
            class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
          >
            <div class="flex flex-wrap">
              <div class="w-6/12">
                <router-link
                  class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  to="/"
                >
                <div class="flex flex-row justify-center items-center">
        <!-- <img
                alt="Home of NIMELSSA"
                :src="nimelssalogo"
                class="w-8 h-8 md:w-16 md:h-16"
              /> -->
          <p class="text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">NIMELSSA DASHBOARD </p>
        </div>
                </router-link>
              </div>
              <div class="w-6/12 flex justify-end">
                <button
                  type="button"
                  class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  v-on:click="toggleCollapseShow('hidden')"
                >
                  <i class="fas fa-times"></i>
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
                class="border-0 px-3 py-2 h-12 border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
              />
            </div>
          </form>
  
          <!-- Divider -->
          <hr class="my-2 md:min-w-full" />
          <!-- Heading -->
          <!-- <h6
            class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
          >
            Admin Layout Pages
          </h6> -->
          <!-- Navigation -->
  
          <ul class="md:flex-col md:min-w-full flex flex-col list-none">
            <li class="items-center">
              <router-link
                to="/dashboard"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-emerald-500 hover:text-emerald-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                  <i
                    class="fas fa-tv mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  Overview
                </a>
              </router-link>
            </li>
             <!-- Divider -->
          <hr class="my-2 md:min-w-full" />
            <li class="items-center">
              <router-link
                to="/dashboard/quiz"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-emerald-500 hover:text-emerald-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
  
                  <i
                    class="fas fa-tv mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  Quiz
                </a>
              </router-link>
            </li>
            <!-- Divider -->
          <hr class="my-2 md:min-w-full" />
            <li class="items-center">
              <router-link
                to="/dashboard/result"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-emerald-500 hover:text-emerald-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                  <i
                    class="fas fa-tv mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  Result
                </a>
              </router-link>
            </li>
            <!-- Divider -->
          <hr class="my-2 md:min-w-full" />
            <li class="items-center">
              <router-link
                to="/dashboard/leaderboard"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-emerald-500 hover:text-emerald-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1 h-1  mr-2 text-sm" 
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
  </svg> -->
  
                  <i
                    class="fas fa-tv mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  Leader Board
                </a>
              </router-link>
            </li>
  <!-- Divider -->
  <hr class="my-2 md:min-w-full" />
            <li class="items-center">
              <router-link
                to="/dashboard/settings"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-emerald-500 hover:text-emerald-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                  <i
                    class="fas fa-tools mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  Settings
                </a>
              </router-link>
            </li>
            <!-- Divider -->
          <hr class="my-2 md:min-w-full" />
            <li class="items-center">
              <router-link
                to="/dashboard/settings"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-emerald-500 hover:text-emerald-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                  <i
                    class="fas fa-tools mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  Log Out
                </a>
              </router-link>
            </li>
  <!-- Divider -->
  <hr class="my-2 md:min-w-full" />
            <li class="items-center">
              <router-link
                to="/dashboard/tables"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-emerald-500 hover:text-emerald-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                  <i
                    class="fas fa-table mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  Tables
                </a>
              </router-link>
            </li>
            <!-- Divider -->
          <hr class="my-2 md:min-w-full" />
          </ul> 
        </div>
      </div>
    </nav>
  </template>
  ); }
  
  <script>
  import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
  import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
  // import nimelssalogo from "@/assets/img/nimelssaLogo.png";
  
  export default {
    data() {
      return {
        collapseShow: "hidden",
        // nimelssalogo
      };
    },
    methods: {
      toggleCollapseShow: function (classes) {
        this.collapseShow = classes;
      },
    },
    components: {
      NotificationDropdown,
      UserDropdown,
    },
  };
  </script>
  