<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded "
      :class="[color === 'light' ? 'bg-white' : 'bg-purple text-white']"  aria-label="Quiz Results"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex justify-between flex-col sm:flex-row">
            <h3
              class="font-semibold text-lg font-roboto py-[5px]"
              :class="[color === 'light' ? 'text-gray-dark' : 'text-white']"
            >
              Quiz Results
            </h3>
             <!-- Search -->
        <form
          class="flex flex-row flex-wrap items-center lg:ml-auto mr-[5px]" aria-label="Search Form"
        >
          <div class="relative flex w-full flex-wrap items-stretch">
            <span
              class="z-10 h-full leading-snug font-normal text-center text-gray-dark absolute bg-transparent rounded text-base items-center justify-center w-8 pl-[10px] py-[8px]" aria-hidden="true"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#717171" class="m-[3px] w-[16px] h-[16px]" aria-label="Search icon">
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
        <table class="items-center w-full bg-transparent border-collapse"  aria-label="Quiz Results Table">
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
               aria-label="Date"
              >
                DATE
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
              >
              
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left font-roboto"
                :class="[
                color === 'light'
                  ? 'bg-white-bg text-light-grey border-white-bg'
                  : 'bg-purple text-white border-purple',
              ]"
               aria-label="View Test"
              >
                VIEW TEST 
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
            <tr v-for="(item, index) in displayedResults" :key="index">
    <!-- Serial Number -->
    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 text-left flex items-center font-roboto">
      <span class="font-bold" :class="[color === 'light' ? 'text-gray-dark' : 'text-white']">{{ index + 1 }}</span>
    </th>
    <!-- Date -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto">{{ item.date }}</td>
    <!-- Empty Column -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"></td>
    <!-- Score -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto">{{ item.score }}</td>
    <!-- Empty Column -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"></td>
    <!-- View Test -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto font-[600]">
      <a href="#" class="text-purple">view </a>
    </td>
  </tr>
          </tbody>
        </table>
        <div class="p-[20px]">
          <button v-if="showSeeMoreButton" @click="seeMoreResults" class="text-purple font-roboto font-[600] text-[15px]">See more results</button>
        </div> 
      </div>
    </div>
  </template>
  <script>

import axios from 'axios';
  
  export default {
    data() {
      return {
     results: [],
     displayedResults: [],
     currentPage: 1,
      itemsPerPage: 5,
      searchQuery: ''
      };
    },

    created() {
      
  this.fetchData();
   
  },
    components: {
  
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
        this.results = response.data.results;
        this.filterResults();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    seeMoreResults() {
      const nextPageStartIndex = this.currentPage * this.itemsPerPage;
      const nextPageEndIndex = nextPageStartIndex + this.itemsPerPage;
      
      // Add 5 more results to displayedResults
      this.displayedResults = this.displayedResults.concat(this.results.slice(nextPageStartIndex, nextPageEndIndex));
      
      // Increment current page number
      this.currentPage++;
    },
    filterResults() {
      const query = this.searchQuery.toLowerCase();
      this.displayedResults = this.results.filter(result => {
        return (
          result.date.toLowerCase().includes(query) ||
          result.score.toLowerCase().includes(query)
        );
      }).slice(0, this.itemsPerPage);
     
    },
    },
    
    computed: {
      showSeeMoreButton() {
      return this.currentPage * this.itemsPerPage < this.results.length;
    },
  },
  watch: {
    searchQuery() {
      this.filterResults();
      this.currentPage = 1; // Reset current page when search query changes
    },
  },
  };
  </script>
  