import Button from '../packages/mobile/button/index.js';
import Cell from '../packages/mobile/cell/index.js';
import CellGroup from '../packages/mobile/cell-group/index.js';
import Checkbox from '../packages/mobile/checkbox/index.js';
import CheckboxGroup from '../packages/mobile/checkbox-group/index.js';
import Col from '../packages/mobile/col/index.js';
import DatetimePicker from '../packages/mobile/datetime-picker/index.js';
import Icon from '../packages/mobile/icon/index.js';
import Input from '../packages/mobile/input/index.js';
import Keyboard from '../packages/mobile/keyboard/index.js';
import Loading from '../packages/mobile/loading/index.js';
import Navbar from '../packages/mobile/navbar/index.js';
import CodeBox from '../packages/mobile/code-box/index.js';
import Picker from '../packages/mobile/picker/index.js';
import Popup from '../packages/mobile/popup/index.js';
import Radio from '../packages/mobile/radio/index.js';
import RadioGroup from '../packages/mobile/radio-group/index.js';
import Rate from '../packages/mobile/rate/index.js';
import Row from '../packages/mobile/row/index.js';
import Textarea from '../packages/mobile/textarea/index.js';
import Toast from '../packages/mobile/toast/index.js';

const components = [
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  DatetimePicker,
  Icon,
  Input,
  Keyboard,
  Loading,
  Navbar,
  CodeBox,
  Picker,
  Popup,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Textarea
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
