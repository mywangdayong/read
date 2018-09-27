import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import menuOne from '@/components/menu/menuOne'
import menuTwo from '@/components/menu/menuTwo'
import menuThree from '@/components/menu/menuThree'
import UserAdd from '@/components/user/UserAdd'
import UserList from '@/components/user/UserList'
import content from '@/components/user/content'
import todolist from '@/components/todolist/todolist'
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
      component: menuThree,
      children:[
      { path: 'UserAdd', name: 'UserAdd', component: UserAdd },
      { path: 'Userlist', name: 'UserList', component: UserList}

    ]
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/content/:aid',
      name: 'content',
      component: content
    },
    ,{
      path: '/todolist',
      name: 'todolist',
      component: todolist
    },
  ]
})
