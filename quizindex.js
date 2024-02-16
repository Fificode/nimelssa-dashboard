
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import ProgressBar from 'primevue/progressbar'; 

import Quiz from './QuizApp.vue'

const quizApp = createApp(Quiz); // Creating app instance for the Quiz component
const piniaStore = createPinia();

quizApp.component('ProgressBar', ProgressBar); 

quizApp.use(piniaStore).use(PrimeVue).mount('#app'); // Mounting the Quiz component 
