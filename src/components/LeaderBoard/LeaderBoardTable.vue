<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
      :class="[color === 'light' ? 'bg-white' : 'bg-purple text-white']"  aria-label="Leader Board"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex justify-between flex-col sm:flex-row">
            <h3
              class="font-semibold text-lg font-roboto py-[5px]"
              :class="[color === 'light' ? 'text-gray-dark' : 'text-white']"
            >
              Leader Board
            </h3>
              <!-- Search -->
        <form
          class="flex  flex-wrap items-center mr-[5px] mt-[10px] md:mt-0" aria-label="Search Form"
        >
          <div class="relative flex w-full flex-wrap items-stretch">
            <span
              class="z-10 h-full leading-snug font-normal text-center text-gray-dark absolute bg-transparent rounded text-base items-center justify-center w-8 pl-[10px] py-[8px]" aria-hidden="true"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#717171" class="m-[3px] w-[16px] h-[16px] -z-50" aria-label="Search icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            </span>
            <input
              type="text"
              placeholder="Search here..."
              class="border-[2px] rounded-[5px] border-gray-light px-3 py-2 placeholder-gray-dark text-gray-dark relative bg-white text-sm outline-none focus:border-[2px] focus:outline-none focus:border-light-purple-bg w-full pl-[35px]"
              aria-label="Search Input" 
              v-model="searchQuery"
            />
          </div>
        </form>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse" aria-label="Leader Board Table">
          <thead>
            <tr>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left font-roboto"
                :class="[
                color === 'light'
                  ? 'bg-white-bg text-light-grey border-white-bg'
                  : 'bg-purple text-white border-purple',
              ]"
              aria-label="Serial Number"
              >
                S/N
              </th>
              
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left font-roboto"
                :class="[
                color === 'light'
                  ? 'bg-white-bg text-light-grey border-white-bg'
                  : 'bg-purple text-white border-purple',
              ]"
               aria-label="Name"
              >
                NAME
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left font-roboto"
                :class="[
                color === 'light'
                  ? 'bg-white-bg text-light-grey border-white-bg'
                  : 'bg-purple text-white border-purple',
              ]"
              >
              
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left font-roboto"
                :class="[
                color === 'light'
                  ? 'bg-white-bg text-light-grey border-white-bg'
                  : 'bg-purple text-white border-purple',
              ]"
               aria-label="Level"
              >
                LEVEL
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left font-roboto"
                :class="[
                color === 'light'
                  ? 'bg-white-bg text-light-grey border-white-bg'
                  : 'bg-purple text-white border-purple',
              ]"
              >
              
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left font-roboto"
                :class="[
                color === 'light'
                  ? 'bg-white-bg text-light-grey border-white-bg'
                  : 'bg-purple text-white border-purple',
              ]"
               aria-label="Score"
              >
                SCORE
              </th>
             
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left font-roboto"
                :class="[
                color === 'light'
                  ? 'bg-white-bg text-light-grey border-white-bg'
                  : 'bg-purple text-white border-purple',
              ]"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in displayedLeaders" :key="index">
    <!-- Serial Number -->
    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 text-left flex items-center font-roboto">
      <span class="font-bold" :class="[color === 'light' ? 'text-gray-dark' : 'text-white']">{{ index + 1 }}</span>
    </th>
    <!-- Name -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto">{{ item.name }}</td>
    <!-- Empty Column -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"></td>
    <!-- Level -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto">{{ item.level }}</td>
    <!-- Empty Column -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"></td>
    <!-- Score -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto font-[600]">
      {{ item.score }}
    </td>
  </tr>
          </tbody>
        </table>
        <div class="p-[20px]">
          <button v-if="showSeeMoreButton" @click="seeMoreParticipants" class="text-purple font-roboto font-[600] text-[15px] ">See more participants</button>
        </div>
      </div>
    </div>
  </template>
  <script>

import axios from 'axios';
  
  export default {
    data() {
      return {
        leaders: [],
     displayedLeaders: [],
     currentPage: 1,
      itemsPerPage: 5,
      searchQuery: ''
      };
    },
    components: {
  
    },
    created() {
    this.fetchData();
  },
    props: {
      color: {
        default: "light",
        validator: function (value) {
          // The value must match one of these strings
          return ["light", "dark"].indexOf(value) !== -1;
        },
      },
    },
    methods: {
      async fetchData() {
      try {
        const response = await axios.get('/static/data.json');
        this.leaders = response.data.leaders;
        this.filterLeaders();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    seeMoreParticipants() {
      const nextPageStartIndex = this.currentPage * this.itemsPerPage;
      const nextPageEndIndex = nextPageStartIndex + this.itemsPerPage;
      
      // Add 5 more results to displayedLeaders
      this.displayedLeaders = this.displayedLeaders.concat(this.leaders.slice(nextPageStartIndex, nextPageEndIndex));
      
      // Increment current page number
      this.currentPage++;
    },
    filterLeaders() {
      const query = this.searchQuery.toLowerCase();
      this.displayedLeaders = this.leaders.filter(leader => {
        return (
          leader.name.toLowerCase().includes(query) ||
          leader.level.toLowerCase().includes(query) || leader.score.toLowerCase().includes(query)
        );
      }).slice(0, this.itemsPerPage);
      
    },
    },
    computed: {
      showSeeMoreButton() {
      return this.currentPage * this.itemsPerPage < this.leaders.length;
    },
  },
  watch: {
    searchQuery() {
      this.filterLeaders();
      this.currentPage = 1; // Reset current page when search query changes
    },
  },

  };
  </script>
  