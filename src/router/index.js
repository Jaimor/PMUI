import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ButtonTest from '@/components/mobile/ButtonTest'
import LoadingTest from '@/components/mobile/LoadingTest'
import ToastTest from '@/components/mobile/ToastTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/button',
      name: 'ButtonTest',
      component: ButtonTest
    },
    {
      path: '/loading',
      name: 'LoadingTest',
      component: LoadingTest
    },
    {
      path: '/toast',
      name: 'ToastTest',
      component: ToastTest
    }
  ]
})
