import Vue from 'vue'
import Router from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent'
import GridComponent from '@/components/GridComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HeaderComponent',
      component: HeaderComponent
    },
    {
      path: '/',
      name: 'GridComponent',
      component: GridComponent
    }
  ]
})
