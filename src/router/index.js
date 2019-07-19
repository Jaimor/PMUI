import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ButtonTest from '@/components/mobile/ButtonTest'
import CellTest from '@/components/mobile/CellTest'
import CheckboxTest from '@/components/mobile/CheckboxTest'
import DatetimePickerTest from '@/components/mobile/DatetimePickerTest'
import IconTest from '@/components/mobile/IconTest'
import InputTest from '@/components/mobile/InputTest'
import KeyboardTest from '@/components/mobile/KeyboardTest'
import LoadingTest from '@/components/mobile/LoadingTest'
import NavbarTest from '@/components/mobile/NavbarTest'
import CodeBoxTest from '@/components/mobile/CodeBoxTest'
import PickerTest from '@/components/mobile/PickerTest'
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
      path: '/input',
      name: 'InputTest',
      component: InputTest
    },
    {
      path: '/keyboard',
      name: 'KeyboardTest',
      component: KeyboardTest
    },
    {
      path: '/loading',
      name: 'LoadingTest',
      component: LoadingTest
    },
    {
      path: '/navbar',
      name: 'NavbarTest',
      component: NavbarTest
    },
    {
      path: '/code-box',
      name: 'CodeBoxTest',
      component: CodeBoxTest
    },
    {
      path: '/picker',
      name: 'PickerTest',
      component: PickerTest
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
