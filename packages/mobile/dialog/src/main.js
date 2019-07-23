import Vue from 'vue';
import Main from './main.vue';

const DialogConstructor = Vue.extend(Main);
let instance;

const Dialog = function (options) {
  if (Vue.prototype.$isServer) return;

  options = options || { content: '' };
  instance = new DialogConstructor({
    el: document.createElement("div"),
    propsData: options
  });
  document.body.appendChild(instance.$el);
  instance.show = true;

  return instance;
};

Dialog.alert = options => {
  options = options || { content: '' };
  if (typeof options === 'string') options = { content: options };
  return Dialog(options);
};
Dialog.confirm = options => {
  options = options || { content: '' };
  if (typeof options === 'string') options = { content: options };
  options.cancelBtn = true;
  return Dialog(options);
};

export default Dialog;
