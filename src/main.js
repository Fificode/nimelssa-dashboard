import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router"
import App from './App.vue'
import './index.css'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Overview from '@/views/OverviewPage.vue'
import Quiz from '@/views/QuizPage.vue'
import Result from '@/views/ResultPage.vue'
import LeaderBoard from '@/views/LeaderBoardPage.vue'
import Settings from '@/views/SettingsPage.vue'
import ExternalQuiz from '@/views/ExternalQuizPage.vue'
import CountdownQuiz from '@/components/Quiz/CountdownQuiz.vue'



const routes = [
    {
      path: "/dashboard",
      // redirect: "/",
      component: DashboardLayout,
      children: [
        {
          path: "/dashboard",
          component: Overview,
        },
        {
          path: "/dashboard/quiz",
          component: Quiz,
         
        },
        {
          path: "/dashboard/result",
          component: Result,
        },
        {
          path: "/dashboard/leaderboard",
          component: LeaderBoard,
        },
        {
          path: "/dashboard/settings",
          component: Settings,
        },
      ],
    },
    {
     
      name: 'ExternalQuiz',
      path: "/dashboard/quiz/startquiz",
      component: ExternalQuiz,
    },
    {
     
      name: 'CountdownQuiz',
      path: "/dashboard/quiz/startquiz/one",
      component: CountdownQuiz,
    },
   
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
 
  const app = createApp(App)

app.use(router)
app.mount('#app');

  

