<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded "
      :class="[color === 'light' ? 'bg-white' : 'bg-purple text-white']"  aria-label="Quiz Results"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              class="font-semibold text-lg font-roboto"
              :class="[color === 'light' ? 'text-gray-dark' : 'text-white']"
            >
              Quiz Results
            </h3>
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
          <button v-if="showSeeMoreButton" @click="seeMoreResults" class="text-purple font-roboto font-[600] text-[14px]">See more results</button>
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
        this.displayedResults = this.results.slice(0, this.itemsPerPage);
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
    },
    computed: {
      showSeeMoreButton() {
      return this.currentPage * this.itemsPerPage < this.results.length;
    },
  },
  };
  </script>
  