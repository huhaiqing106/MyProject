import lugiax from '@lugia/lugiax';
import paramsOv from './paramsOv';
import async from '../controller/async';
import sync from '../controller/sync';

/**
 * !!! Warning
 * 
 * 此处应为模块名并保证唯一，建议采用模块名的方式，例如 一级模块_二级模块_三级模块
 */

export default lugiax.register({
  model: '此处应为模块名并保证唯一，建议采用模块名的方式，例如 一级模块_二级模块_三级模块',
  state: {
    ...paramsOv,
  },
  mutations: {
    sync,
    async,
  },
});
