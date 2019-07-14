// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';

import App from './App'


import AddMovie from './components/AddMovie.vue'
//import EditMovie from './components/EditMovie.vue'
import ListMovie from './components/ListMovie.vue'
import SearchMovie from './components/SearchMovie.vue'

import '../node_modules/nprogress/nprogress.css'
/*import firebase from 'firebase'
//import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'*/
Vue.use(firestorePlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/search', alias: '/', component: SearchMovie },
  { path: '/Add', component: AddMovie },
  //{ path: '/edit/:id', component: EditMovie },
  { path: '/index', component: ListMovie }
]
/*const routes = [
  {
    name: 'Search',
    path: '/',
    component: SearchMovie
  },
  {
        name: 'Add',
        path: '/add',
        component: AddMovie
  },
  {
      name: 'Edit',
      path: '/edit/:id',
      component: EditMovie
  },
  {
      name: 'List',
      path: '/index',
      component: ListMovie
  },
];*/

//const router = new VueRouter({ mode: 'history', routes: routes });
// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
// Initialize Firebase
/*var firebaseConfig = {
  apiKey: "AIzaSyB8umpTMygOgsLKIzDIBjxFsopXuMmYgf8",
  authDomain: "fav-movies-63d08.firebaseapp.com",
  databaseURL: "https://fav-movies-63d08.firebaseio.com",
  projectId: "fav-movies-63d08",
  storageBucket: "",
  messagingSenderId: "443706078687",
  appId: "1:443706078687:web:0226e88ebbb0795d"
};
firebase.initializeApp(firebaseConfig);

window.firebase=firebase;*/
/* eslint-disable no-new */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
