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
            <tr>
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 text-left flex items-center font-roboto"
              >
               
                <span
                  class=" font-bold"
                  :class="[
                  color === 'light' ? 'text-gray-dark' : 'text-white',
                ]"
                >
               1
                </span>
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                12/04/2023
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
               50%
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto font-[600]"
              >
              <a href="#" class="text-purple"> view</a> 
              </td>
            
            </tr>
           
            <!-- <tr>
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 text-left flex items-center font-roboto"
              >
               
                <span
                  class=" font-bold"
                  :class="[
                  color === 'light' ? 'text-gray-dark' : 'text-white',
                ]"
                >
                  2
                </span>
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                14/05/2023
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
               60%
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto font-[600]"
              >
              <a href="#" class="text-purple"> view</a> 
              </td>
            
            </tr> -->
            <!-- <tr>
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto text-left flex items-center"
              >
               
                <span
                  class=" font-bold"
                  :class="[
                  color === 'light' ? 'text-gray-dark' : 'text-white',
                ]"
                >
                  3
                </span>
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                18/06/2023
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
               70%
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto font-[600]"
              >
              <a href="#" class="text-purple"> view</a> 
              </td>
            
            </tr> -->
            <!-- <tr>
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 text-left flex items-center font-roboto"
              >
               
                <span
                  class=" font-bold"
                  :class="[
                  color === 'light' ? 'text-gray-dark' : 'text-white',
                ]"
                >
                  4
                </span>
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                22/07/2023
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
               70%
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto font-[600]"
              >
              <a href="#" class="text-purple"> view</a> 
              </td>
            
            </tr> -->
            <!-- <tr>
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 text-left flex items-center font-roboto"
              >
               
                <span
                  class=" font-bold"
                  :class="[
                  color === 'light' ? 'text-gray-dark' : 'text-white',
                ]"
                >
                  5
                </span>
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                18/08/2023
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
               80%
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"
              >
                
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto font-[600]"
              >
               <a href="#" class="text-purple "> view</a> 
              </td>
            
            </tr> -->
           
          
          </tbody>
        </table>
        <div class="p-[20px]"><a href='#' class="text-purple font-roboto font-[600] text-[14px]">See more results</a></div> 
      </div>
    </div>
  </template>
  <script>

import axios from 'axios';
  
  export default {
    data() {
      return {
     results: [],
     result: [],
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
        this.result = this.results.map(res => {
        return {
          id: res.id,
          date: res.date,
          score: res.score 
        };
        
      });
       console.log("Fetched Results", this.results);
       console.log("Mapped Results", this.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    }
  };
  </script>
  