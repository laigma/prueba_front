import Vue from 'vue'
import VueRouter from 'vue-router'
// import { requireAuth, requireGuest } from "@/services/Auth";

Vue.use(VueRouter)

// const authPages = {
//   path: '/',
//   component: () => import(/* webpackChunkName: "about" */ '@/views/Auth/AuthLayout.vue'),
//   name: 'Authentication',
//   beforeEnter: requireGuest,
//   children: [
//     {
//       path: '/login',
//       name: '',
//       component: () => import(/* webpackChunkName: "about" */ '@/views/Auth/Login.vue')
//     },
//     {
//       path: '/register',
//       name: '',
//       component: () => import(/* webpackChunkName: "about" */ '@/views/Auth/Register.vue')
//     },
//     {
//       path: '/confirmationcode',
//       name: '',
//       component: () => import(/* webpackChunkName: "about" */ '@/views/Auth/ConfirmationCode.vue')
//     },
//     {
//       path: '/forgotPassword',
//       name: '',
//       component: () => import(/* webpackChunkName: "about" */ '@/views/Auth/ForgotPassword.vue')
//     },
//     {
//       path: '/forgotPasswordSubmit',
//       name: '',
//       component: () => import(/* webpackChunkName: "about" */ '@/views/Auth/ForgotPasswordSubmit.vue')
//     }
//   ]
// };

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Layout/DashboardLayout.vue'),
    // beforeEnter: requireAuth,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
      }
    ]
  },
  // authPages
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
