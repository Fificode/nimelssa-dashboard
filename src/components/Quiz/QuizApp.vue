<template>
    <div class="flex justify-center items-center bg-[#bbb] min-h-[100vh] py-[30px]" v-if="!showResult">
      <div class="rounded-[10px] py-[30px] px-[20px] w-[100%] mx-[20px] md:w-[50%] lg:w-[30%] h-auto bg-white-bg flex flex-col items-center shadow-xl" >
        <h1 class="text-[23px] font-roboto text-gray-dark font-[600] py-[5px] ">
          Question {{ currentQuestion }}/{{ questions.length }}
        </h1>
      <div class="border-[2px] rounded-[50%] w-[50px] py-[5px] px-[10px] bg-[#fff] flex justify-center items-center">
        <h3 :class="countDown < 10 && 'text-red'" class="text-[16px] font-roboto text-gray-dark font-[600] m-[5px]">
          {{ countDown }}
        </h3>
    </div>
        <p class="text-[17px] font-roboto text-gray-dark font-[500] py-[8px] text-center">
          {{ questions[currentQuestion - 1].question }}
        </p>
        <div v-if="questions[currentQuestion - 1].image">
  <!-- Display the image using an img tag -->
  <img :src="questions[currentQuestion - 1].image" alt="Question Image" class="max-w-[300px] mx-auto my-4">
</div>
        <div class="mt-4 flex flex-col">
          <button
          class="border-[1px] text-[17px] font-roboto font-[500] border-gray-dark mt-[10px] p-2 cursor-pointer rounded-[5px] w-[250px] hover:bg-light-purple-bg  focus:bg-red"
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
<script >
 import QuizQuestions from './QuizQuestions.json';
 import { shuffle } from 'lodash';
import TotalPoints from './TotalPoints.vue';
    export default {
        props: ["totalPoints", "totalQuestions", "countDownTimerFn"],
    data() {
        return {
            currentQuestion: 1,
      points: null,
      answersArray: [],
      arr: new Set(),
      countDown: 30,
      timer: null,
      startQuiz: false,
      showResult: false,
      questions: QuizQuestions,
      options: shuffle(QuizQuestions[0].options)
        };
    },
  components: {
TotalPoints,
  },
    methods: {
    handleStartQuiz() {
      this.startQuiz = true;
      this.countDownTimer();
    },
    correctAnswer(isCorrect, answer) {
      if (isCorrect) {
        this.answersArray.push(answer);
        this.arr = new Set(this.answersArray);
        console.log('Correct answer numbers', this.arr.size);
      }
    },

    countDownTimer() {
      if (this.countDown > 0) {
        this.timer = setTimeout(() => {
          this.countDown--;
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
      this.options = this.questions[this.currentQuestion].options;
      this.options = shuffle(this.options);
      this.currentQuestion += 1;
      this.countDown = 30;
      this.countDownTimer();
    },

    displayResult() {
      this.showResult = true;
      this.countDown = 1;
      this.points = this.arr.size;

    },
  },
  mounted() {
    // Start the countdown timer when the component is mounted
    this.countDownTimer();
  },
}
</script>
