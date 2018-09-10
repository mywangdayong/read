import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import menuOne from '@/components/menu/menuOne'
import menuTwo from '@/components/menu/menuTwo'
import menuThree from '@/components/menu/menuThree'

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
      component: menuTwo
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
