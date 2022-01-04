import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import inscription from '@/components/inscription'
/*import formations from '@/components/formations'*/


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',                 name: 'home',                       component: home },
    { path: '/inscription',      name: 'inscription',                component: inscription }
    //{ path: '/formations',      name: 'formations',                component: formation }


  ]
})
