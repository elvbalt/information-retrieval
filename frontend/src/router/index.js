import { createRouter, createWebHistory } from 'vue-router'

import SearchComponent from "@/components/SearchComponent.vue"
import MenusPage from "@/components/MenusPage.vue"
import TopicPage from '@/components/TopicPage.vue'; 


const routes = [
    {
        path: '/search',
        name: 'Search',
        component: SearchComponent
      },
      {
        path: '/menus', 
        name: 'Menus',
        component: MenusPage
    },
    {
      path: '/topic/:topic',
      name: 'TopicPage',
      component: TopicPage
    }

]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  
  export default router