import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import EmployeDashBoard from '@/components/EmployeDashBoard'
import AdminDashBoard from '@/components/AdminDashBoard'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
      {
          path: '/',
          name: 'login',
          component: Login,
          meta: { 
            guest: true
          }
      },
      {
          path: '/register',
          name: 'register',
          component: Register,
          meta: {
            role: 'HR' || "Director",
            guest: true
          }
      },
      {
          path: '/dashboard',
          name: 'employedashboard',
          component: EmployeDashBoard,
        //   children: [
        //         {
        //             path: 'profile',
        //             name: 'profile',
        //             component: UserProfile
        //         }
        //   ],
          meta: { 
              requiresAuth: true
          }
      },
      {
          path: '/admin',
          name: 'admindashboard',
          component: AdminDashBoard,
          meta: { 
              requiresAuth: true,
          }
      },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
          next({
              name: 'login',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.role)) {
            console.log(user.role)  
            if(user.role == 'HR' || 'Director'){
                console.log(user.role)
                next({ name: 'admindashboard'})
            }
            else{
                next({ name: 'employedashboard'})
            }
          }
          else {
              next()
          }
      }
  } 
  else {
      next() 
  }
})

export default router