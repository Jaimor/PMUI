import Button from '../packages/mobile/button/index.js';
import Loading from '../packages/mobile/loading/index.js';
import Toast from '../packages/mobile/toast/index.js';

const components = [
  Button,
  Loading
];

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$toast = Toast;
};

export default {
  install
}
