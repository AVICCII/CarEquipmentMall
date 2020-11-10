// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'

Vue.use(router);
Vue.use(Element);

new Vue({
  el: '#app',
  router,
  render:h => h(app)
})
