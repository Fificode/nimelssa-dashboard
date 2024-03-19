<template>
  <div v-show="!showResultCard">
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
          class="flex flex-row flex-wrap items-center lg:ml-auto mr-[5px] mt-[10px] md:mt-0" aria-label="Search Form"
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
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto">{{ item.date  }}</td>
    <!-- Empty Column -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"></td>
    <!-- Score -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto">{{ item.score }}%</td>
    <!-- Empty Column -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto"></td>
    <!-- View Test -->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4 font-roboto font-[600]">
      <button class="text-purple" @click="toggleResultCard(index)">view </button>
    </td>
  </tr>
          </tbody>
        </table>
        <div class="p-[20px]">
          <button v-if="showSeeMoreButton" @click="seeMoreResults" class="text-purple font-roboto font-[600] text-[15px]">See more results</button>
        </div> 
      </div>
    </div>
  </div>

    <div v-if="showResultCard" >
      <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"  aria-label="Result Card">
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-left">
          <h6 class="text-gray-dark text-xl font-bold font-roboto">Quiz Result</h6>
        </div>
      </div>
      <div class="flex-auto px-8 lg:px-10 py-10 pt-0">
       <h6 class="text-gray-dark font-roboto text-sm mt-3 mb-6 font-bold uppercase">
           You attempted...
          </h6>
         <p v-if="displayedResults[activeIndex]?.question">Question: {{ displayedResults[activeIndex].question }}</p>
      <p v-if="displayedResults[activeIndex]?.pickedAnswer">Answer Picked: {{ displayedResults[activeIndex].pickedAnswer }}</p>
      <p v-if="displayedResults[activeIndex]?.correctAnswer">Correct Answer: {{ displayedResults[activeIndex].correctAnswer }}</p>
      <!-- Other details as needed -->
      <p>Total Attempted Questions: {{ displayedResults[activeIndex].totalAttemptedQuestions }}</p>
      <p>Total Correct Answers: {{ displayedResults[activeIndex].totalCorrectAnswers }}</p>
      </div>
      <button class="text-purple font-roboto font-semibold text-lg mt-6" @click="hideResultCard">Cancel</button>
    </div>
    
    </div>
  </template>
  <script>



  export default {
    data() {
      return {
        savedQuizResult: [],
     displayedResults: [],
     currentPage: 1,
      itemsPerPage: 5,
      searchQuery: '',
      showResultCard: false,
      selectedResult: null,
      activeIndex : -1,
      };
    },

    created() {
      

  this.retrieveSavedQuizResult();

   
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
      toggleResultCard(index) {
    // Ensure that index is within the bounds of displayedResults array
    if (index >= 0 && index < this.displayedResults.length) {
      // Access the quiz result corresponding to the clicked index
      this.selectedResult = this.displayedResults[index];
      this.activeIndex = index;
      // Show the result card
      this.showResultCard = true;
      // console.log("Clicked Index:", index);
      console.log(this.displayedResults[this.activeIndex])

    } else {
      console.error("Invalid index:", index);
    }
  },
    //   toggleResultCard(index) {
    //   // Show the result card and set the selected result
    //   this.showResultCard = true;
    //   this.selectedResult = this.displayedResults[index];
    // },
    
      
    hideResultCard() {
      // Hide the result card and reset selectedResult and activeIndex
      this.showResultCard = false;
      this.selectedResult = null;
      this.activeIndex = -1;
    },
    retrieveSavedQuizResult() {
      const savedResult = localStorage.getItem('quizResults');
      if (savedResult) {
        this.savedQuizResult = JSON.parse(savedResult).map(result => ({
          ...result,
          date: this.formatDate(result.date) // Format date here
        }));
        this.savedQuizResult.sort((a, b) => b.date - a.date);
        this.filterResults();
        // console.log("Saved Quiz Results:", this.savedQuizResult);
      }
      else {
    console.log("No saved result found in local storage"); // Log a message if no data is retrieved
  }
    },
   
    seeMoreResults() {
      const nextPageStartIndex = this.currentPage * this.itemsPerPage;
      const nextPageEndIndex = nextPageStartIndex + this.itemsPerPage;
      
      // No need to slice the savedQuizResult here, just push more items to displayedResults
      this.displayedResults.push(...this.savedQuizResult.slice(nextPageStartIndex, nextPageEndIndex));
      
      // Increment current page number
      this.currentPage++;
    },
    
    filterResults() {
      const query = this.searchQuery.toLowerCase();
      this.displayedResults = this.savedQuizResult.filter(result => {
        return (
          result.date.toLowerCase().includes(query) ||
          result.score.toString().toLowerCase().includes(query) // Convert to string before lowercasing
        );
      }).slice(0, this.itemsPerPage);
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    },

    },
    
    computed: {
      showSeeMoreButton() {
      return this.currentPage * this.itemsPerPage < this.savedQuizResult.length;
    }
    
  },

 

  watch: {
    searchQuery() {
      this.filterResults();
      this.currentPage = 1; // Reset current page when search query changes
    }
   
  },
  };
  </script>
  