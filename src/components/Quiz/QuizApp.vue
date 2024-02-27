<template>
    <div class="flex flex-col justify-center items-center bg-[#bbb] min-h-[100vh] py-[30px]" v-if="!showResult">
      <div class="mt-4 mb-[16px] mx-[5px]">
        <p class="text-[20px] font-roboto text-black font-[600] text-center">Total Time Remaining: {{ displayTime(totalTime) }}</p>
        </div>
      <div class="rounded-[10px] py-[30px] px-[20px] w-[90%] mx-[20px] md:w-[50%] lg:w-[30%] h-auto bg-white-bg flex flex-col items-center shadow-xl" >
        <h1 class="text-[23px] font-roboto text-gray-dark font-[600] py-[5px] ">
          Question {{ currentQuestion }}/{{ questions.length }}
        </h1>
      <div class="border-[2px] rounded-[50%] w-[50px] py-[5px] px-[10px] bg-[#fff] flex justify-center items-center">
        <h3 :class="countDown < 5 && 'text-red'" class="text-[16px] font-roboto text-gray-dark font-[600] m-[5px]">
          {{ countDown }}
        </h3>
    </div>
        <p class="text-[17px] font-roboto text-gray-dark font-[500] py-[8px] text-center">
          {{ questions[currentQuestion - 1]?.question }} 
        </p>
        <div v-if="questions[currentQuestion - 1]?.image">
  <!-- Display the image using an img tag -->
  <img :src="questions[currentQuestion - 1]?.image" alt="Question Image" class="max-w-[300px] mx-auto my-4">
</div>
        <div class="mt-4 flex flex-col">
          <button
          class="border-[1px] text-[17px] font-roboto font-[500] border-gray-dark mt-[10px] p-2 cursor-pointer rounded-[5px] w-[250px] hover:bg-light-purple-bg  "
          :class="{'focus:bg-green': item.isCorrect, 'focus:bg-red': !item.isCorrect}"
            type="button"
            v-for="(item, index) in options"
            :key="index"
            @click="correctAnswer(item.isCorrect, item.answer)"
          >
            {{ item.answer }}
          </button>
        </div>
        <div class="">
          
      <button
            class="text-[16px] text-center font-roboto border-none bg-badge-purple text-white mt-[10px] mb-[5px] p-2  cursor-pointer rounded-[5px] w-[250px] hover:bg-gray"
            v-show="currentQuestion < questions.length"
            @click="handleNextQuestion()"
          >
            Next
          </button>
          <button
            class="text-[16px] text-center font-roboto border-none bg-badge-purple text-white mt-[10px] mb-[5px] p-2  cursor-pointer rounded-[5px] w-[250px] hover:bg-gray"
            v-show="currentQuestion === questions.length"
            @click="displayResult()"
          >
            Submit
          </button>
        </div>
      </div>
     
        </div> 
        <TotalPoints
        v-show="showResult"
        :totalPoints="points"
        :totalQuestions="questions.length"
      />
   
</template>
<script>
 import { shuffle } from 'lodash';
import TotalPoints from './TotalPoints.vue';
import axios from 'axios';
    export default {
        props: ["totalPoints", "totalQuestions", "countDownTimerFn"],
    data() {
        return {
            currentQuestion: 1,
      points: null,
      answersArray: [],
      arr: new Set(),
      quiz: null,
      countDown: 10,
      timer: null,
      startQuiz: false,
      showResult: false,
      totalTime: 100,
      questions: [],
      options: [],
     
        };
    },
    created() {
    this.fetchData();
  },
  components: {
TotalPoints,
  },
    methods: {
      async fetchData() {
      try {
        const response = await axios.get('/static/data.json');
        this.quiz = response.data.quiz;
      //  console.log("Quiz:", this.quiz);
      if (Array.isArray(this.quiz) && this.quiz.length > 0) {
        this.questions = this.quiz.map(question => {
        // Create a new object for each question including the question text and image
        return {
          question: question.question,
          image: question.image,
          options: question.options // Assuming options are already included in your quiz data
        };
      });
        // Shuffle options for the first question
        this.shuffleOptions();
    } else {
      console.error('Quiz data is empty or not in the correct format.');
    }
        //  // Start quiz automatically after data is fetched
         this.startQuiz = true;
        this.countDownTimer();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    handleStartQuiz() {
      this.startQuiz = true;
      this.countDownTimer();
    },
    correctAnswer(isCorrect, answer) {
      if (isCorrect) {
        this.answersArray.push(answer);
        this.arr = new Set(this.answersArray);
        // console.log('Correct answer numbers', this.arr.size);
      }
    },

    countDownTimer() {
      if (this.countDown > 0) {
        this.timer = setTimeout(() => {
          this.countDown--;
          this.totalTime--;
          this.countDownTimer();
        }, 1000);
      } else if (this.countDown === 0) {
        if (this.currentQuestion === this.questions.length) {
          this.displayResult();
        } else {
          this.handleNextQuestion();
        }
      }
    },

    handleNextQuestion() {
      clearTimeout(this.timer);
  // Increment currentQuestion to move to the next question
  this.currentQuestion++;
  // Check if there are more questions available
  if (this.currentQuestion <= this.questions.length) {
    // Fetch options for the next question
    this.shuffleOptions();
    // Reset countdown timer
    this.countDown = 10;
    // Restart the countdown timer for the next question
    this.countDownTimer();
  } else {
    // If there are no more questions, display the result
    this.displayResult();
  }
     
    },
    shuffleOptions() {
    // Shuffle options for the current question
    this.options = shuffle(this.quiz[this.currentQuestion - 1].options);
  },

    displayResult() {
      this.showResult = true;
      this.countDown = 1;
      this.totalTime = 1;
      this.points = this.arr.size;

    },
    displayTime(totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
    },
    
   
  },
 
}
</script>
