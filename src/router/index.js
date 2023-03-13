import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "@/pages/main-page.vue";
import SelectGroupPage from "@/pages/select-group-page.vue";
import SelectClassroomPage from "@/pages/select-classroom-page.vue";
import SelectTeacherPage from "@/pages/select-teacher-page.vue";
import usersPage from "@/pages/users-page.vue";
import scheduleEditPage from "@/pages/schedule-edit-page";
import profilePage from "@/pages/profile-page.vue";
import authorizationPage from "@/pages/authorization-page.vue";
import registraionPage from "@/pages/registraion-page.vue";


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
    path: '/edit',
    component: scheduleEditPage
  },
  {
    path: '/profile',
    component: profilePage
  },
  {
    path: '/authorization',
    component: authorizationPage
  },
  {
    path: '/registration',
    component: registraionPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
