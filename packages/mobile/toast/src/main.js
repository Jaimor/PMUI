import Vue from 'vue';
import Main from './main.vue';
import ZIndex from 'pmui/src/utils/z-index';
import Constant from './constant.js';

const ToastConstructor = Vue.extend(Main);
let instance;

const Toast = function (options) {
  if (Vue.prototype.$isServer) return;

  options = options || {};
  if (typeof options === "string") {
    options = {
      text: options
    }
  }

  instance = new ToastConstructor({
    el: document.createElement("div"),
    propsData: options
  });
  document.body.appendChild(instance.$el);
  instance.visible = true;
  instance.$el.style.zIndex = ZIndex.nextZIndex();
  return instance;
};

Object.keys(Constant.typeMap).forEach(type => {
  Toast[type] = options => {
    if (typeof options === "string") {
      options = {
        text: options
      }
    }
    options.type = type;
    return Toast(options);
  }
});

export default Toast;
