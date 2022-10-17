import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCourse from '../views/Course/AddCourse.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/course',
      name: 'course',
      children:[
        {
          path:"add-course",
          component: () => import('../views/Course/AddCourse.vue'),
        }
        
      ],
    }
  ],
  linkActiveClass:"bg-rc text-themeColor-white shadow-xl"
})

export default router
