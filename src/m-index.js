import Toast from '../packages/mobile/toast/index.js';

const commponents = [

];

const install = (Vue) => {
  commponents.forEach(commponent => {
    Vue.component(component.name, commponent);
  });
  Vue.prototype.$toast = Toast;
};

export default {
  install
}
