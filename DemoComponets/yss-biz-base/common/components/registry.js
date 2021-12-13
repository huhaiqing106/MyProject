import { Input, TreeSelect, InputNumber, DatePicker, TimePicker, Rate, Radio, Checkbox, Switch, Slider } from 'antd';
import Select from './select-normal';
import SelectMapDics from './select-map-dics';
import SelectRequest from './select-request';
import TreeSelectRequest from './tree-select-request';
import InputPart from './input-part';
import InputRange from './input-range';
import CheckboxGroup from './checkbox-group';
import RadioGroup from './radio-group';

const { TextArea, Password } = Input;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const itemList = {
  Input,
  InputPart,
  InputNumber,
  InputRange,
  Password,
  SelectMapDics,
  Select,
  SelectRequest,
  TreeSelect,
  TreeSelectRequest,
  TextArea,
  DatePicker,
  MonthPicker,
  RangePicker,
  WeekPicker,
  TimePicker,
  Rate,
  Radio,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Switch,
  Slider,
};

export default itemList;
