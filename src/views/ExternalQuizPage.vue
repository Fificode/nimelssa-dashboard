<template>
  <div>
    <div class="bg-gradient-to-t from-white-bg to-light-purple-bg min-h-[100vh] flex flex-col justify-center items-center py-[20px]" aria-label="Quiz Landing Page"  v-if="!quizStarted">
       <div class=""> <img :src='nimelssaQuizTime' alt='Illustration of Quiz Time on Screen' className='w-[250px] h-[350px] md:w-[300px] md:h-[370px]' /></div>
        <div class="mb-[40px] animate-bounce" aria-label="Indicator of Start Quiz Button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-[50px] h-[50px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
</svg>
</div>
        <div class="py-[10px]">
   
<button @click="startQuiz" class="text-white-bg font-roboto text-[14px] bg-purple border-none py-[12px] px-[30px] rounded-[5px] hover:bg-[#cd9cf2]">
  Start Quiz
</button>
</div>
    </div>
    <div v-else>
<CountdownQuiz/>
    </div>
  
    </div>
</template>
<script>
import CountdownQuiz from '@/components/Quiz/CountdownQuiz.vue';
import nimelssaQuizTime from '/img/nimelssaQuizTime.png'
import { mapState } from 'vuex';


export default{
    data(){
        return{
            nimelssaQuizTime
        }
    },
    computed: {
    ...mapState([ 'quizStarted']),
   
  },
  created() {
   
    
  },
  methods: {
    startQuiz() {
     
      this.$store.commit('startQuiz');
    }
  },
    components: {
      CountdownQuiz,
      
    },
    
   
}
</script>