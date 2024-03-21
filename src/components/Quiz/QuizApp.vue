<template>
    <div class="flex flex-col justify-center items-center bg-[#bbb] min-h-[100vh] py-[30px]" v-if="!showResult">
      <!-- <button @click="handleBackNavigation()" class="p-[10px] border-[2px] border-[#000] rounded-[50%]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

      </button> -->
      <div class="mt-4 mb-[16px] mx-[5px]">
        <p class="text-[20px] font-roboto text-black font-[600] text-center">Total Time Remaining: {{ displayTime(totalTime) }}</p>
        </div>
      <div class="rounded-[10px] py-[30px] px-[20px] w-[90%] mx-[20px] sm:w-[60%] md:w-[40%] lg:w-[35%] h-auto bg-white-bg flex flex-col items-center shadow-xl" >
        <h1 class="text-[23px] font-roboto text-gray-dark font-[600] py-[5px] ">
          Question {{ currentQuestion }}/{{ questions.length }}
        </h1>
      <div class="border-[2px] rounded-[50%] w-[50px] py-[5px] px-[10px] bg-[#fff] flex justify-center items-center">
        <h3 :class="quizCountdown < 5 && 'text-red'" class="text-[16px] font-roboto text-gray-dark font-[600] m-[5px]">
          {{ $store.state.quizCountdown }}
        </h3>
    </div>
        <p class="text-[17px] font-roboto text-gray-dark font-[500] py-[8px] text-center">
          {{ questions[currentQuestion - 1]?.question }} 
        </p>
        <div v-if="questions[currentQuestion - 1]?.image" class="flex justify-center items-center">
  <!-- Display the image using an img tag -->
  <img :src="questions[currentQuestion - 1]?.image" alt="Question Image" class="max-w-[300px] h-[200px] mx-2 my-4">
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
import store from '../../store.js';
import { mapState } from 'vuex';


    export default {
        props: ["totalPoints", "totalQuestions", "countDownTimerFn"],

    created() {
      this.startCountdown();
      this.loadCurrentQuestion();
      window.addEventListener('beforeunload', this.confirmLeave);
    
  
  },
  mounted() {
    this.fetchData();
    
  },
  beforeUnmount() {
    window.removeEventListener('beforeunload', this.confirmLeave);
    this.saveCurrentQuestion();
   
    },
 
  
  components: {
TotalPoints,
  },

  computed: {
    ...mapState([ 'quizCountdown', 'points', 'options']),
    countdown() {
      return this.$store.state.startCountdown;
    },
    showResult() {
      return this.$store.state.showResult;
    },
    currentQuestion(){
return this.$store.state.currentQuestion;
    },

    totalTime(){
      return this.$store.state.totalTime;
    },
   questions(){
return this.$store.state.questions;
   },
   countDown(){
    return this.$store.state.quizCountdown;
   },
   
   points(){
    return this.$store.state.points;
   },
   options(){
    return this.$store.state.options;
   }
  },
    methods: {
      startCountdown() {
      this.$store.commit('startCountdown');
    },
  //   clearTimer() {
  //   clearTimeout(this.$store.state.timer);
  // },
  
    saveQuizProgress() {
      localStorage.setItem('quizProgress', JSON.stringify(this.$store.state));
    },

    loadQuizProgress() {
      const savedProgress = localStorage.getItem('quizProgress');
      if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        Object.keys(progress).forEach((key) => {
          this.$store.commit(key, progress[key]);
        });
      }
    },
    
   
   
    saveCurrentQuestion() {
      localStorage.setItem('currentQuestion', this.currentQuestion);
     
    },
   
    loadCurrentQuestion() {
  const savedQuestion = localStorage.getItem('currentQuestion');
  console.log("Saved Question:", savedQuestion);

  if (savedQuestion) {
    store.commit('setCurrentQuestion', parseInt(savedQuestion));
  } else {
    store.commit('setCurrentQuestion', 1); 
  }
},

 

async fetchData() {
        try {
          const response = await axios.get('/static/data.json');
          store.commit('setQuiz', response.data.quiz);
          if (Array.isArray(store.state.quiz) && store.state.quiz.length > 0) {
            store.commit('setQuestions', store.state.quiz.map(question => {
              const id = question.id;
              return {
                id: id,
                question: question.question,
                image: question.image,
                options: question.options 
              };
            }));
        
            this.shuffleOptions();
          } else {
            console.error('Quiz data is empty or not in the correct format.');
          }
          // Start quiz automatically after data is fetched
          store.commit('setStartQuiz', true);
          this.countDownTimer();
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },


   

    handleStartQuiz() {
        store.commit('setStartQuiz', true);
        this.countDownTimer();
      },
    
  

    correctAnswer(isCorrect, answer) {
        const questionId = store.state.questions[store.state.currentQuestion - 1].id;
        store.state.answersArray.push({ questionId, answer, isCorrect });
        store.state.selectedOptions[questionId] = answer;
        if (isCorrect) {
          store.state.arr.add(answer);
        }
      },




countDownTimer() {
  const updateTimer = () => {
    if (this.$store.state.quizCountdown > 0) {
      // Update countdown timer
      this.$store.commit('setCountDown', this.$store.state.quizCountdown - 1);
      this.$store.commit('setTotalTime', this.$store.state.totalTime - 1);

      store.commit('setTimer', setTimeout(updateTimer, 1000));
    } else {
    
      if (this.$store.state.currentQuestion === this.$store.state.questions.length) {
        this.displayResult();
      } else {
        this.handleNextQuestion();
      }
    }
  };

  updateTimer();
},

  handleNextQuestion() {
        clearTimeout(store.state.timer);
        store.commit('setCurrentQuestion', store.state.currentQuestion + 1);
        if (store.state.currentQuestion <= store.state.questions.length) {
          this.shuffleOptions();
          store.commit('setCountDown', 10);
          this.countDownTimer();
          this.saveCurrentQuestion();
        } else {
          this.displayResult();
        }
      },


  shuffleOptions() {
    const currentQuestionIndex = this.$store.state.currentQuestion - 1;
      const options = shuffle(this.$store.state.questions[currentQuestionIndex].options);
      this.$store.commit('setOptions', options);
      //  console.log(this.$store.state.options);
      },


calculateScore() {
        let correctAnswers = 0;
        store.state.questions.forEach(question => {
          const questionId = question.id;
          const selectedAnswer = store.state.selectedOptions[questionId];
          const correctAnswer = question.options.find(option => option.isCorrect);

          if (selectedAnswer === correctAnswer.answer) {
            correctAnswers++;
          }
        });

        const totalQuestions = store.state.questions.length;
        const percentage = (correctAnswers / totalQuestions) * 100;
        const roundedPercentage = Math.ceil(percentage);

        return roundedPercentage;
      },

 
  displayResult() {
        store.commit('setShowResult', true);
        store.commit('setCountDown', 1);
        store.commit('setTotalTime', 1);
        store.commit('setPoints', this.calculateScore());
        localStorage.removeItem('currentQuestion');
  
        if (!store.state.quizResultSaved) { 
          this.saveQuizResult();
          store.commit('setQuizResultSaved', true); 
        }
      },

  
    displayTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
      },

  
    confirmLeave(event) {
        if (!store.state.showResult) {
          const confirmationMessage = "Are you sure you want to leave? If you leave, your quiz progress will be lost.";
          event.preventDefault();
          event.returnValue = confirmationMessage;
          return confirmationMessage;
        }
      },



saveQuizResult() {
        let quizResults = JSON.parse(localStorage.getItem('quizResults')) || [];

        const quizResult = {
          date: new Date(),
          questionsAnswered: store.state.questions.map(question => {
            const selectedAnswer = store.state.selectedOptions[question.id];
            const correctAnswer = question.options.find(option => option.isCorrect);
            const isAnswerCorrect = selectedAnswer === correctAnswer.answer;

            return {
              id: question.id,
              question: question.question,
              selectedAnswer: selectedAnswer,
              correctAnswer: correctAnswer.answer,
              isAnswerCorrect: isAnswerCorrect
            };
          }),
          score: this.calculateScore() 
        };
        quizResult.totalAttemptedQuestions = quizResult.questionsAnswered.length;
        quizResult.totalCorrectAnswers = quizResult.questionsAnswered.filter(question => question.isAnswerCorrect).length;
        quizResults.push(quizResult);

        localStorage.setItem('quizResults', JSON.stringify(quizResults));
      },
    },
 
  
  
}
</script>
