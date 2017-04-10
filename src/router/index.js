import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import LifeCycle from '@/components/LifeCycle'
import ElementIndex from '@/components/elemDemo/Index'
import HelloWorld from '@/components/elemDemo/HelloWorld'

Vue.use(Router)

let elementSubRoutes = [
  {path: 'HelloWorld', component: HelloWorld}
]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/LifeCycle',
      name: 'LifeCycle',
      component: LifeCycle
    },
    {
      path: '/Element',
      name: 'Element',
      component: ElementIndex,
      children: elementSubRoutes
    }
  ]
})
