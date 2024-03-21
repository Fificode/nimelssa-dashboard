<template>
    <div>
      <div v-if="startCountdown > 0" class="flex flex-col justify-center items-center  bg-[#bbb] h-[100vh]" >
        <h1 class="text-gray-dark text-[40px] md:text-[70px]">GET READY !</h1>
        <h1 class="text-gray-dark text-[40px] md:text-[70px]"> {{ startCountdown }}</h1>
      </div>
      <div v-else>
    <QuizApp v-if="quizStarted"/>
      </div>
    </div>
  </template>
  
  <script>
  import QuizApp from './QuizApp.vue';
  import { mapState } from 'vuex';


  export default {
    computed: {
      ...mapState(['startCountdown', 'quizStarted'])
  
    },
    created() { 
        this.startCountdownTimer();
   
  },
    methods: {
  
      startCountdownTimer() {
      this.$store.commit('startCountdown'); // Call the mutation to start the countdown
    }

  
  },
   
    components: { QuizApp }
};
  </script>
  