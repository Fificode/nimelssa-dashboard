import { createApp } from 'vue'
// import Vue from 'vue'
import { createWebHistory, createRouter } from "vue-router"
import App from './App.vue'
import store from './store'
import './index.css'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Overview from '@/views/OverviewPage.vue'
import Quiz from '@/views/QuizPage.vue'
import Result from '@/views/ResultPage.vue'
import LeaderBoard from '@/views/LeaderBoardPage.vue'
import Settings from '@/views/SettingsPage.vue'
import Tables from '@/views/TablesPage.vue'
import ExternalQuiz from '@/layouts/ExternalQuizPage.vue'

// Vue.config.productionTip = false

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
        {
          path: "/dashboard/tables",
          component: Tables,
        },
       
      ],
    },
    {
     
      name: 'ExternalQuiz',
      path: "/dashboard/quiz/startquiz",
      component: ExternalQuiz,
    },
   
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
 
  const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
  // createApp(App).use(router).mount("#app");
  

