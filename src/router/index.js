import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import inscription from '@/components/inscription'
import bibliotheques from '@/components/bibliotheques'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',                 name: 'home',                       component: home },
    { path: '/inscription',      name: 'inscription',                component: inscription },
    { path: '/bibliotheques',    name: 'bibliotheques',              component: bibliotheques }
    //{ path: '/formations',      name: 'formations',                component: formation }


  ]
})
