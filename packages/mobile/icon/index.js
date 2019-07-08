import Icon from './src/main.vue';

Icon.install = Vue => {
  Vue.component(Vue.name, Vue);
};

export default Icon;
