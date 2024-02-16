<template>
   
    
        <div class="flex justify-center items-center animate-fade bg-[#bbb] h-[100vh]" >
      <div class="rounded-[10px] p-[20px] w-[30%] h-auto bg-white-bg flex flex-col items-center shadow-xl">
        <h1 class="text-[23px] font-roboto text-gray-dark font-[600] py-[5px]">
          Question {{ currentQuestion }}/<span class="text-[17px]"> {{ questions.length }}</span>
        </h1>
        <div class="border-[2px] rounded-[50%] py-[7px] px-[10px] bg-[#fff]">
        <h3 :class="countDown < 10 ? 'text-red' : 'count-down'" class="text-[16px] font-roboto text-gray-dark font-[600] m-[5px]">
          {{ countDown }}
        </h3>
    </div>
        <p class="text-[17px] font-roboto text-gray-dark font-[500] py-[8px] text-center">
          {{ questions[currentQuestion - 1].question }}
        </p>
        <div class="mt-4 flex flex-col">
          <button
          class="border-[1px] text-[17px] font-roboto font-[500] border-gray-dark mt-[10px] p-2 cursor-pointer rounded-[5px] w-[250px] hover:bg-light-purple-bg hover:border-none"
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
            class="text-[16px] text-center font-roboto border-none bg-badge-purple text-white mt-[10px] mb-[5px] p-2  cursor-pointer rounded-[5px] w-[250px]"
            v-show="currentQuestion < questions.length"
            @click="handleNextQuestion()"
          >
            Next
          </button>
          <button
            class="text-[16px] text-center font-roboto border-none bg-badge-purple text-white mt-[10px] mb-[5px] p-2  cursor-pointer rounded-[5px] w-[250px] "
            v-show="currentQuestion === questions.length"
            @click="displayResult()"
          >
            Submit
          </button>
        </div>
      </div>
     
       
        <TotalPoints
        v-show="showResult"
        :totalPoints="points"
        :totalQuestions="questions.length"
      />
    </div>
        <!-- <QuizQuestions/> -->
        <!-- <div v-if="quizFinished" class="p-2 flex flex-col items-center">
            <h1 class="text-6xl font-mont font-bold capitalize">
                <span>finished</span>
            </h1>
            <h2 class="text-3xl font-ssp font-bold capitalize mt-2">
                <span class="px-2">score: {{ score }} / 5</span>
            </h2>
            <div class="mt-4 px-2">
                <ul>
                    <li class="mt-8" v-for="(row, index) in result" :key="index">
                        <h1 class="text-4xl font-mont font-bold">{{ row.body }}</h1>
                        <div class="text-2xl font-ssp capitalize mt-4">
                            <div class="feedback flex items-center">
                                <span>{{ row.userAnswer.body }}</span>
                                <span class="px-3.5 py-3 m-2 bg-black text-white rounded-full flex justify-center items-center max-w-[3rem]"><i :class="['pi', row.answerisRight?'pi-check':'pi-times']"></i></span>
                            </div>
                            <div v-if="!row.answerisRight">
                                <span class="font-bold">right answer is </span>
                                <span class="font-regular">{{ row.rightAnswer.body }}</span> 
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mt-4">
                <button class="text-4xl font-ssp font-bold bg-black text-white capitalize px-4 py-2" @click="restartQuiz">restart quiz</button>
            </div>
        </div>
        <div v-else id="question-box" class="relative overflow-hidden">
            <template v-for="question of quiz.items" :key="question.id">
                <transition name="fade" mode="out-in">
                    <Question 
                        :content="question" 
                        v-if="question.id === currentQuestionId" 
                        @answerPicked="loadNextQuestion"
                        @noAnswerPicked="loadNextQuestion"
                    />
                </transition>
            </template>
        </div> -->
 
</template>
<script >
 import QuizQuestions from './QuizQuestions.json';
 import { shuffle } from 'lodash';

    export default {
        props: ["totalPoints", "totalQuestions", "countDownTimerFn"],
    data() {
        return {
            currentQuestion: 1,
      points: null,
      answersArray: [],
      arr: null,
      countDown: 30,
      timer: null,
      startQuiz: false,
      showResult: false,
      questions: QuizQuestions,
      options: shuffle(QuizQuestions[0].options)
        };
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
}
</script>

