import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import menuOne from '@/components/menu/menuOne'
import menuTwo from '@/components/menu/menuTwo'
import menuThree from '@/components/menu/menuThree'
import UserAdd from '@/components/user/UserAdd'
import Userlist from '@/components/user/Userlist'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/menuOne',
      name: 'menuOne',
      component: menuOne
    },{
      path: '/menuTwo',
      name: 'menuTwo',
      component: menuTwo,
      children:[
      { path: '/UserAdd',name: 'UserAdd', component: UserAdd },

      { path: '/Userlist',name: 'Userlist', component: Userlist }

    ]
    },{
      path: '/menuThree',
      name: 'menuThree',
      component: menuThree
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
