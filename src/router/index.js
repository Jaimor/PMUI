import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ButtonTest from '@/components/mobile/ButtonTest'
import CellTest from '@/components/mobile/CellTest'
import CheckboxTest from '@/components/mobile/CheckboxTest'
import DatetimePickerTest from '@/components/mobile/DatetimePickerTest'
import IconTest from '@/components/mobile/IconTest'
import LoadingTest from '@/components/mobile/LoadingTest'
import PopupTest from '@/components/mobile/PopupTest'
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
      path: '/checkbox',
      name: 'CheckboxTest',
      component: CheckboxTest
    },
    {
      path: '/datetime-picker',
      name: 'DatetimePickerTest',
      component: DatetimePickerTest
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
      path: '/popup',
      name: 'PopupTest',
      component: PopupTest
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
