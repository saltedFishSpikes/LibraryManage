import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import VueRouter from 'vue-router'
import BookDonate from './components/BookDonate.vue'
import BookRecommanded from './components/BookRecommanded.vue'
import BookBorrow from './components/BookBorrow.vue'
import BookManage from './components/BookManage.vue'
import LibrarySystem from './components/LibrarySystem.vue'
import LibraryLogin from './components/LibraryLogin.vue'
import LibraryRegister from './components/LibraryRegister.vue'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:LibrarySystem,
      children:[
        {path:'/bookManage',component:BookManage},
        {path:'/bookDonate',component:BookDonate},
        {path:'/bookRecommanded',component:BookRecommanded},
        {path:'/bookBorrow',component:BookBorrow}
      ],
      redirect:'/bookManage'
    },
    {
      path:'/librarySystem',
      component:LibrarySystem,
      children:[
        {path:'/bookManage',component:BookManage},
        {path:'/bookDonate',component:BookDonate},
        {path:'/bookRecommanded',component:BookRecommanded},
        {path:'/bookBorrow',component:BookBorrow}
      ],
      redirect:'/bookManage'
    },
    {path:'/libraryLogin',component:LibraryLogin},
    {path:'/libraryRegister',component:LibraryRegister}
  ]
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
