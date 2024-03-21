import { createStore } from 'vuex';



export default createStore({
  state: {
   quizStarted: false,
    startCountdown: 5,
    startCountdownInterval: null,
    currentQuestion: 1,
    points: null,
    answersArray: [],
    arr: new Set(),
    quiz: null,
    quizCountdown: 10,
    timer: null,
    startQuiz: false,
    showResult: false,
    totalTime: 100,
    questions: [],
    options: [],
    selectedOptions: {},
    quizResultSaved: false
  },
  mutations: {
    setCountdownStartTime(state, startTime) {
      state.countdownStartTime = startTime;
    },
    resetQuiz(state) {
      state.currentQuestion = 1;
      state.showResult = false;
      state.quizCountdown = 0; // Reset countdown timer if necessary
      // Reset other relevant state variables
    },
    startQuiz(state) {
      state.quizStarted = true; 
    },
    startCountdown(state) {
      state.startCountdownInterval = setInterval(() => {
        if (state.startCountdown > 0) {
          state.startCountdown--; 
        } else {
          clearInterval(state.startCountdownInterval); 
          state.quizStarted = true;
        }
      }, 1000); 
      localStorage.setItem('countdownStartTime', Math.floor(Date.now() / 1000));
    },
    
    
    resetCountdown(state) {
      clearInterval(state.startCountdownInterval); 
      state.startCountdown = 5; 
      localStorage.removeItem('countdownStartTime');
    },
    setCurrentQuestion(state, value) {
      state.currentQuestion = value;
      localStorage.setItem('currentQuestion', value); 
    },
    
    setPoints(state, value) {
        state.points = value;
      },
      setAnswersArray(state, value) {
        state.answersArray = value;
      },
      setArr(state, value) {
        state.arr = value;
      },
      setQuiz(state, value) {
        state.quiz = value;
      },
      setCountDown(state, value) {
        state.quizCountdown= value;
      },
      setTimer(state, value) {
        state.timer = value;
      },
      setStartQuiz(state, value) {
        state.startQuiz = value;
      },
      setShowResult(state, value) {
        state.showResult = value;
      },
      setTotalTime(state, value) {
        state.totalTime = value;
      },
      setQuestions(state, value) {
        state.questions = value;
      },
      setOptions(state, value) {
        state.options = value;
      },
      setSelectedOptions(state, value) {
        state.selectedOptions = value;
      },
      setQuizResultSaved(state, value) {
        state.quizResultSaved = value;
      },
   
  },
  actions: {
  
  },
  getters: {
   
  }
});
