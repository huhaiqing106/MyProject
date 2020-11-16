import Loadable from 'react-loadable';
import { Loading } from 'yss-biz';

export default (opts = {}) => {
  try {
    let xx = opts.loader().then
    return Loadable(
      Object.assign(
        opts,
        {
          loading: Loading,
          delay: 300,
          timeout: 6000
        }
      )
    )
  } catch{
    return opts.loader
  }
};
