import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import LifeCycle from '@/components/vue2.0Demo/LifeCycle'
import ElementIndex from '@/components/elemDemo/Index'
import HelloWorld from '@/components/elemDemo/HelloWorld'
import Dialog from '@/components/elemDemo/Dialog'
import Tooltip from '@/components/elemDemo/Tooltip'
import Table from '@/components/elemDemo/Table'
import Pagination from '@/components/elemDemo/Pagination'
import Tree from '@/components/elemDemo/Tree'
import PropParent from '@/components/vue2.0Demo//prop/parent'

Vue.use(Router)

let elementSubRoutes = [
  {path: 'HelloWorld', component: HelloWorld},
  {path: 'Dialog', component: Dialog},
  {path: 'Tooltip', component: Tooltip},
  {path: 'Table', component: Table},
  {path: 'Pagination', component: Pagination},
  {path: 'Tree', component: Tree}
]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: PropParent
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
