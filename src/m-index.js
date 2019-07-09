import Button from '../packages/mobile/button/index.js';
import Cell from '../packages/mobile/cell/index.js';
import CellGroup from '../packages/mobile/cell-group/index.js';
import Col from '../packages/mobile/col/index.js';
import Icon from '../packages/mobile/Icon/index.js';
import Loading from '../packages/mobile/loading/index.js';
import Popup from '../packages/mobile/popup/index.js';
import Row from '../packages/mobile/row/index.js';
import Toast from '../packages/mobile/toast/index.js';

const components = [
  Button,
  Cell,
  CellGroup,
  Col,
  Icon,
  Loading,
  Popup,
  Row
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
