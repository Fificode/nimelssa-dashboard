<template>
    <div class="flex flex-col justify-center items-center bg-[#bbb] min-h-[100vh] py-[30px]" v-if="!showResult">
      <button @click="handleBackNavigation()" class="p-[10px] border-[2px] border-[#000] rounded-[50%]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

      </button>
      <div class="mt-4 mb-[16px] mx-[5px]">
        <p class="text-[20px] font-roboto text-black font-[600] text-center">Total Time Remaining: {{ displayTime(totalTime) }}</p>
        </div>
      <div class="rounded-[10px] py-[30px] px-[20px] w-[90%] mx-[20px] sm:w-[60%] md:w-[40%] lg:w-[35%] h-auto bg-white-bg flex flex-col items-center shadow-xl" >
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
    export default {
        props: ["totalPoints", "totalQuestions", "countDownTimerFn"],
    data() {
        return {
          currentQuestion: localStorage.getItem('currentQuestion') || 1,
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
      savedQuizResult: null,
      selectedOptions: {},
        };
    },
    created() {
    this.loadCurrentQuestion();
    this.fetchData();
    this.loadQuizProgress();
  
  },
  mounted() {
   
    window.addEventListener('beforeunload', this.confirmLeave);
    window.addEventListener('popstate', this.handlePopstate);
  },
  beforeUnmount() {
    window.removeEventListener('beforeunload', this.confirmLeave);
    window.removeEventListener('popstate', this.handlePopstate);
  },
  
  components: {
TotalPoints,
  },
    methods: {
      handleBackNavigation() {
      if (this.showResult) {
        this.navigateToPreviousPage();
      } else {
        const confirmation = window.confirm("Are you sure you want to go back? Your quiz progress will be lost.");
        if (confirmation) {
          this.navigateToPreviousPage();
        } else {
          return;
        }
      }
    },

    navigateToPreviousPage() {
      window.history.back();
    },
    handlePopstate(event) {
      if (!this.showResult) {
        const confirmation = window.confirm("Are you sure you want to leave? If you leave, your quiz progress will be lost.");
        if (!confirmation) {
          history.pushState(null, null, window.location.href);
          event.preventDefault();
        }
      }
    },
      saveQuizProgress() {
      localStorage.setItem('quizProgress', JSON.stringify({
        currentQuestion: this.currentQuestion,
        points: this.points,
        answersArray: Array.from(this.answersArray),
        arr: Array.from(this.arr),
        showResult: this.showResult
      }));
    },
    loadQuizProgress() {
      const savedProgress = localStorage.getItem('quizProgress');
      if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        this.currentQuestion = progress.currentQuestion;
        this.points = progress.points;
        this.answersArray = new Set(progress.answersArray);
        this.arr = new Set(progress.arr);
        this.showResult = progress.showResult;
      }
    },
   
    saveCurrentQuestion() {
      localStorage.setItem('currentQuestion', this.currentQuestion);
    },
   
    loadCurrentQuestion() {
      const savedQuestion = localStorage.getItem('currentQuestion');
      if (savedQuestion) {
        this.currentQuestion = parseInt(savedQuestion);
      } else {
        this.currentQuestion = 1; 
      }
    },
   
    async fetchData() {
  try {
    const response = await axios.get('/static/data.json');
    this.quiz = response.data.quiz;
    if (Array.isArray(this.quiz) && this.quiz.length > 0) {
      this.questions = this.quiz.map(question => {
        const id = question.id;
        return {
          id: id,
          question: question.question,
          image: question.image,
          options: question.options 
        };
      });
      
      this.shuffleOptions();
    } else {
      console.error('Quiz data is empty or not in the correct format.');
    }

    // Start quiz automatically after data is fetched
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
      const questionId = this.questions[this.currentQuestion - 1].id;
      this.answersArray.push({ questionId, answer, isCorrect });
      this.selectedOptions[questionId] = answer;
        if (isCorrect) {
        this.arr.add(answer);
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
  this.currentQuestion++;
  if (this.currentQuestion <= this.questions.length) {
    this.shuffleOptions();
    this.countDown = 10;
    this.countDownTimer();
  } else {
    this.displayResult();
  }},
    shuffleOptions() {
    this.options = shuffle(this.quiz[this.currentQuestion - 1].options);
  },


calculateScore() {
  let correctAnswers = 0;
  this.questions.forEach(question => {
    const questionId = question.id;
    const selectedAnswer = this.selectedOptions[questionId];
    const correctAnswer = question.options.find(option => option.isCorrect);

    if (selectedAnswer === correctAnswer.answer) {
      correctAnswers++;
    }
  });

  const totalQuestions = this.questions.length;
  const percentage = (correctAnswers / totalQuestions) * 100;
  const roundedPercentage = Math.ceil(percentage);

  return roundedPercentage;
},


    displayResult() {
      this.showResult = true;
      this.countDown = 1;
      this.totalTime = 1;
      this.points = this.calculateScore();
      this.saveQuizResult();
    },

    displayTime(totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
    },

    confirmLeave(event) {
      if (!this.showResult) {
        const confirmationMessage = "Are you sure you want to leave? If you leave, your quiz progress will be lost.";
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    },

    saveQuizResult() {
  let quizResults = JSON.parse(localStorage.getItem('quizResults')) || [];

  const quizResult = {
    date: new Date(),
    questionsAnswered: this.questions.map(question => {
      const selectedAnswer = this.selectedOptions[question.id];
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
  console.log("Quiz Results", quizResults);
},
 },
  
  
}
</script>
