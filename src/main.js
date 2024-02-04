import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router"
import App from './App.vue'
import './index.css'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Overview from '@/views/OverviewPage.vue'
import Result from '@/views/ResultPage.vue'
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
          path: "/dashboard/result",
          component: Result,
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
  

