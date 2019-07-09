import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ButtonTest from '@/components/mobile/ButtonTest'
import CellTest from '@/components/mobile/CellTest'
import IconTest from '@/components/mobile/IconTest'
import LoadingTest from '@/components/mobile/LoadingTest'
import RowColTest from '@/components/mobile/RowColTest'
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
      path: '/cell',
      name: 'CellTest',
      component: CellTest
    },
    {
      path: '/icon',
      name: 'IconTest',
      component: IconTest
    },
    {
      path: '/loading',
      name: 'LoadingTest',
      component: LoadingTest
    },
    {
      path: '/rowcol',
      name: 'RowColTest',
      component: RowColTest
    },
    {
      path: '/toast',
      name: 'ToastTest',
      component: ToastTest
    }
  ]
})
