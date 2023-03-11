import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "@/pages/main-page.vue";
import SelectGroupPage from "@/pages/select-group-page.vue";
import SelectClassroomPage from "@/pages/select-classroom-page.vue";
import SelectTeacherPage from "@/pages/select-teacher-page.vue";
import usersPage from "@/pages/users-page.vue";
import schedulePage from "@/pages/schedule-page.vue";

const routes = [
  {
    path: '/',
    component: mainPage
  },
  {
    path: '/groups',
    component: SelectGroupPage
  },
  {
    path: '/classroom',
    component: SelectClassroomPage
  },
  {
    path: '/teacher',
    component: SelectTeacherPage
  },
  {
    path: '/users',
    component: usersPage
  },
  {
    path: '/raspinie',
    component: schedulePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
