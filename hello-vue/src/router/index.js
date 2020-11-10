import Vue from 'vue'
import Router from 'vue-router'

import Main from  '../views/Main'
import Login from  '../views/Login'

Vue.use(Router);

export default new Router({
  routes:[
    {
      path: '/main',
      components:Main
    },
    {
      path: '/login',
      components:Login
    },
  ]
})
