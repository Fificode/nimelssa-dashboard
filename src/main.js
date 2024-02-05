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
import Tables from '@/views/TablesPage.vue'


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
   
   
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  createApp(App).use(router).mount("#app");
  

