<template>
    <div>
      <div v-if="countdown > 0" class="flex flex-col justify-center items-center mt-[100px]" >
        <h1 class="text-gray-dark text-[40px] md:text-[70px]">GET READY !</h1>
        <h1 class="text-gray-dark text-[40px] md:text-[70px]"> {{ countdown }}</h1>
      </div>
      <div v-else>
      <h1 class="text-gray-dark text-[40px]">Quiz Questions</h1> 
       
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        countdown: 5, // Initial countdown value
      };
    },
    mounted() {
      this.startCountdown();
    },
    methods: {
      startCountdown() {
        setInterval(() => {
          if (this.countdown > 0) {
            this.countdown--; // Decrement countdown value
          } else {
            clearInterval(); // Stop the interval when countdown reaches 0
          }
        }, 1000); // Update countdown every second (1000 milliseconds)
      },
    },
  };
  </script>
  