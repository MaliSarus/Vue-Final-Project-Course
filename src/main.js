import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes/routes';
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueResource );
Vue.http.options.root = 'https://final-vue-8a0b4.firebaseio.com/';

Vue.filter('currency', (value)=>{
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
