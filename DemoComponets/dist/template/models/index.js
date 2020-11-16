import {createGuid} from 'yss-biz'
import lugiax from '@lugia/lugiax';
import paramsOv from './paramsOv'
import async from '../controller/async'
import sync from '../controller/sync'
export default lugiax.register({
  model: 'model' + createGuid(),
  state: {
    ...paramsOv
  },
  mutations: {
    sync,
    async
  }
});