import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
          name: 'HelloWorld',
          component: HelloWorld
      },
      {
          path: '/login',
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
            role: 'HR' || "Director" 
            //   guest: true
          }
      },
      {
          path: '/dashboard',
          name: 'employedashboard',
          component: EmployeDashBoard,
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
              role: 'HR' || "Director"
          }
      },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.role)) {
              if(user.role == 'HR'||'Director'){
                  next({ name: 'register'})
              }
              else{
                  next({ name: 'employedashboard'})
              }
          }else {
              next()
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
          next()
      }
      else{
          next({ name: 'employedashboard'})
      }
  }else {
      next() 
  }
})

export default router