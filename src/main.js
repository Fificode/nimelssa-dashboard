import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router"
import App from './App.vue'
import './index.css'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Dashboard from '@/views/Dashboard.vue'
import Settings from '@/views/Settings.vue'
import Tables from '@/views/Tables.vue'


const routes = [
    {
      path: "/dashboard",
      // redirect: "/",
      component: DashboardLayout,
      children: [
        {
          path: "/dashboard",
          component: Dashboard,
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
  

