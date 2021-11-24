import regexp from './regexp';
import moment from 'moment';

/**
 * 类型判断函数
 *
 * @param {*} v
 */
const getType = (v) =>
  Object.prototype.toString
    .call(v)
    .replace(/\[object\s(\w+)\]/, '$1')
    .toLowerCase();

/**
 * 判断数组
 *
 * @param {*} v
 */
export const isArray = (v) => getType(v) === 'array';

/**
 * 判断对象
 *
 * @param {*} v
 */
export const isObject = (v) => getType(v) === 'object';

/**
 * 判断字符
 *
 * @param {*} v
 */
export const isString = (v) => getType(v) === 'string';

/**
 * 判断方法
 *
 * @param {*} v
 */
export const isFunc = (v) => getType(v) === 'function';

/**
 * 判断html
 *
 * @param {*} v
 */
export const isElem = (v) => getType(v) === 'htmldivelement';

/**
 * 睡眠函数
 *
 * @param {*} time
 */
export const sleep = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

/**
 * 判断数组中是否包含某个字符串
 *
 * @param {*} arr
 * @param {*} str
 */
export const include = (arr, str) => {
  for (let i = 0; i < arr.length; i++) {
    if (str === arr[i]) {
      return true;
    }
  }
  return false;
};

/**
 * 拷贝函数
 *
 * @param  {...any} rest
 */
export const merge = (...rest) => {
  let target = rest[0] || {};
  let src;
  let copy;
  let clone;
  let i = 1;
  let deep = false;
  if (typeof target === 'boolean') {
    deep = target;
    target = rest[1] || {};
    i++;
  }
  for (; i < rest.length; i++) {
    let option = rest[i];
    for (let name in option) {
      src = target[name];
      copy = option[name];
      if (deep && copy && typeof copy === 'object') {
        if (isArray(copy)) {
          clone = src && isArray(src) ? src : [];
        } else {
          clone = src && isObject(src) ? src : {};
        }
        target[name] = merge(deep, clone, copy);
      } else if (copy !== undefined) {
        target[name] = copy;
      }
    }
  }
  return target;
};

/**
 * 查找祖级元素节点
 *
 * @param {*} el
 * @param {*} nodeStr
 */
export const findFaceLevelNode = (el, nodeStr) => {
  if (!el) return {};
  let type;
  /\./g.test(nodeStr) && (type = 'className');
  /#/g.test(nodeStr) && (type = 'id');
  const findClassName = (node) => {
    if (!node) return {};
    return hasClass(node, nodeStr) ? node : findClassName(node.parentElement);
  };
  const findId = (node) => {
    if (!node) return {};
    return node.id === nodeStr ? node : findId(node.parentElement);
  };
  const findNodeName = (node) => {
    if (!node) return {};
    return node.tagName.toLowerCase() === nodeStr.toLowerCase() ? node : findNodeName(node.parentElement);
  };
  switch (type) {
    case 'className':
      return findClassName(el.parentElement);
    case 'id':
      return findId(el.parentElement);
    default:
      return findNodeName(el.parentElement);
  }
};

/**
 * 检测是否有该class
 *
 * @param {*} el
 * @param {*} cls
 */
export const hasClass = (el, cls) => {
  if (!el || !cls) {
    return false;
  }
  if (cls.indexOf(' ') !== -1) {
    throw new Error('className should not contain space.');
  }
  cls = cls.replace(/\./g, '');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/**
 * 从当前节点向上遍历是否存在某个class
 *
 * @param {*} dom
 * @param {*} className
 */
export const domTreeHasClass = (dom, className) => {
  return hasClass(dom, className) ? true : Object.keys(findFaceLevelNode(dom, className)).length > 0 ? true : false;
};

/**
 * 移除class
 *
 * @param {*} el
 * @param {*} cls
 */
export const removeClass = (el, cls) => {
  if (!el || !cls) {
    return;
  }
  const classes = cls.split(' ');
  let curClass = ' ' + el.className + ' ';

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) {
      continue;
    }

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = (curClass || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
  }
};

/**
 * 添加class
 *
 * @param {*} el
 * @param {*} cls
 */
export const addClass = (el, cls) => {
  if (!el) {
    return;
  }
  let curClass = el.className;
  const classes = (cls || '').split(' ');
  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) {
      continue;
    }

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/**
 * setStyle
 *
 * @param {*} dom
 * @param {*} obj
 */
export const setStyle = (dom, obj) => {
  if (!dom || !isObject(obj)) return false;
  Object.keys(obj).forEach((key) => {
    dom.style[key] = obj[key];
  });
};

/**
 * removeStyle
 *
 * @param {*} dom
 * @param {*} array
 */
export const removeStyle = (dom, array) => {
  if (!dom || !Array.isArray(array)) return false;
  array.forEach((key) => {
    dom.style[key] = '';
  });
};

/**
 * 添加事件
 *
 * @param {*} dom
 * @param {*} event
 * @param {*} fn
 */
export const addEvent = (dom, event, fn) => {
  dom.addEventListener(event, fn);
};

/**
 * 去除事件
 *
 * @param {*} dom
 * @param {*} event
 * @param {*} fn
 */
export const removeEvent = (dom, event, fn) => {
  dom.removeEventListener(event, fn);
};

/**
 * 对象解析为请求字符串
 *
 * @param {*} param
 */
export const createGetGinseng = (param) => {
  let ret = '?';
  Object.keys(param).forEach((item) => {
    if (item) {
      let val = Array.isArray(param[item]) ? param[item].join() : isObject(param[item]) ? JSON.stringify(param[item]) : param[item];
      ret += encodeURIComponent(item) + '=' + encodeURIComponent(val) + '&';
    }
  });
  return ret.slice(0, ret.length - 1);
};

/**
 * 节流函数
 *
 * @param {*} fn
 * @param {*} delay
 */
export const throttle = (fn, delay = 1000) => {
  return function (...args) {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

/**
 * 设备判断
 *
 */
export const isMobile = () => {
  let userAgentInfo = navigator.userAgent;
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) return Agents[v];
  }
};

/**
 * 判断浏览器版本
 *
 */
export const browser = () => {
  const userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
  const browsers = ['compatible', 'Opera', 'Edge', 'Firefox', 'Safari', 'Chrome'];
  const getIe = () => {
    let reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    let fIEVersion = parseFloat(RegExp['$1']);
    reIE.test(userAgent);
    switch (fIEVersion) {
      case 7:
        return 'IE7';
      case 8:
        return 'IE8';
      case 9:
        return 'IE9';
      case 10:
        return 'IE10';
      default:
        return 0;
    }
  };
  for (let i = 0, len = browsers.length; i < len; i++) {
    if (userAgent.indexOf(browsers[i])) {
      return browsers[i] !== 'compatible' ? browsers[i] : getIe();
    }
  }
};

/**
 * 获取 cookie
 *
 * @param {*} name
 */
export const getCookie = (name) => {
  let arr = document.cookie.split(';');
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split('=');
    if (temp[0].trim() === name) {
      return unescape(temp[1]);
    }
  }
};

/**
 * 验证
 *
 * @param {*} val
 * @param {*} name
 */
export const validate = (val, name) => regexp[name].test(val);

/**
 * 格式化日期
 *
 * @param {*} val
 * @param {*} type
 */
export const formatDate = (val, type) => {
  let date = new Date(val);
  let seperator = '-';
  if (type === 'year') {
    return date.getFullYear() + '';
  } else if (val === 'month') {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month >= 1 && month <= 9) {
      month = '0' + month;
    }
    let currentdate = year + seperator + month;
    return currentdate;
  } else if (type === 'date') {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
    }
    let currentdate = year + seperator + month + seperator + strDate;
    return currentdate;
  }
};

/**
 * 当前日期
 *
 * @param {*} type
 */
export const getNowFormatDate = (type) => {
  let date = new Date();
  return formatDate(date, type);
};

/**
 * 格式化时间
 *
 * @param {*} time
 * @param {*} formatStr
 */
export const momentToDateStr = (time, formatStr = 'YYYY-MM-DD hh:mm:ss') => {
  if (Array.isArray(time)) {
    return time.map((item) => moment(item).format(formatStr));
  } else {
    return !!time ? moment(time).format(formatStr) : undefined;
  }
};

/**
 * 字符串日期格式化成moment
 *
 * @param {*} time
 * @param {*} formatStr
 */
export const dateStrToMoment = (time, formatStr) => {
  if (Array.isArray(time)) {
    return time.map((item) => moment(item, formatStr));
  } else {
    return !!time ? moment(time, formatStr) : undefined;
  }
};

/**
 * 获前（后）N 天
 *
 * @param {*} date
 * @param {*} days
 * @param {*} direction
 */
export const getSomeDate = (date, days = 1, direction = 'pev') => {
  var day1 = new Date(date);
  var calcDate = +days * 24 * 60 * 60 * 1000;
  calcDate = direction === 'pev' ? 0 - calcDate : calcDate;
  day1.setTime(day1.getTime() + calcDate);
  let month = day1.getMonth() + 1;
  let day = day1.getDate();
  month < 10 && (month = '0' + month);
  day < 10 && (day = '0' + day);
  return day1.getFullYear() + '-' + month + '-' + day;
};

/**
 * 判断闰月
 * 
 * @param {*} ym 
 */
export const getCountDays = (ym) => {
  let curDate = new Date(ym);
  /* 获取当前月份 */
  let curMonth = curDate.getMonth();
  /* 生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
  curDate.setMonth(curMonth + 1);
  /* 将日期设置为0 */
  curDate.setDate(0);
  /* 返回当月的天数 */
  return curDate.getDate();
};

/**
 * 获取星期几
 * 
 * @param {*} days 
 */
export const getDay = (days) => {
  const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return weeks[new Date().getDay()];
};

class _BASE64 {
  constructor() {
    this._keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  }
  encode(input) {
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var output = '';
    var i = 0;
    input = this._utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }
    return output;
  }
  decode(input) {
    var output = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 !== 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 !== 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = this._utf8_decode(output);
    return output;
  }
  _utf8_encode(string) {
    string = string.replace(/\r\n/g, '\n');
    var utftext = '';
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  }
  _utf8_decode(utftext) {
    var string = '';
    var i = 0;
    var c, c2, c3;
    c = c2 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
}
/**
 * base64 解码
 */
export const BASE64 = new _BASE64();

/**
 * 处理时间集合
 *
 * @param {*} dateObj
 */
const returnAutoX = (dateObj) => {
  if (isObject(dateObj)) {
    let { type, tagDate, interval = 1 } = dateObj;
    switch (type) {
      case 'minus':
        let minLen = 1440 / interval;
        let hour = 0;
        let minute = 0;
        let change = 60 / interval;
        let minuArr = ['00:00'];
        for (var i = 1; i < minLen; i++) {
          if (!(i % change)) {
            hour++;
            minute = 0;
          } else {
            minute += interval;
          }
          minuArr.push((hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute));
        }
        return minuArr;
      case 'hours':
        let hourArr = [];
        let hLen = 24 / interval;
        for (i = 0; i < hLen; i++) {
          let currentHour = i * interval;
          hourArr[i] = (currentHour < 10 ? '0' + currentHour : '' + currentHour) + ':00';
        }
        return hourArr;
      case 'days':
        let newMonth = tagDate.split('-')[1];
        let days = getCountDays(tagDate);
        let dLen = days / interval;
        let dayArr = [];
        for (i = 0; i < dLen; i++) {
          let currentDay = i * interval + 1;
          dayArr[i] = newMonth + '-' + (currentDay < 10 ? '0' + currentDay : '' + currentDay);
        }
        return dayArr;
      case 'months':
        let monthArr = [];
        let monLen = 12 / interval;
        for (i = 0; i < monLen; i++) {
          let currentMonth = i * interval + 1;
          monthArr[i] = currentMonth < 10 ? '0' + currentMonth : '' + currentMonth;
        }
        return monthArr;
      case 'years':
        return [];
      default:
    }
    return [];
  }
};

/**
 * 格式化图表数据
 *
 * @param {*} option
 * @param {*} params
 */
export const formatBarAndLineDatas = (option = [], params = {}) => {
  if (!isArray(option) || option.length < 0) {
    return false;
  }
  params = isObject(params) ? params : false;
  const { x, autoX, y, filter, valid } = params;
  let keys = isObject(option[0]) ? Object.keys(option[0]) : [];
  if (!isArray(keys) || keys.length < 0) {
    return false;
  }
  let datas = {};
  let addMonth = '';
  let isMonth = isObject(autoX) && autoX.type === 'days';
  if (isMonth) {
    !autoX.tagDate && (autoX.tagDate = getNowFormatDate('month'));
    addMonth = autoX.tagDate.split('-')[1];
  }
  option.forEach((item, index) => {
    keys.forEach((key) => {
      if (!isArray(datas[key])) {
        datas[key] = [];
      }
      let xVal = isMonth && item[x].length === 2 ? addMonth + '-' + item[x] : item[x];
      datas[key][index] =
        !x && !y
          ? item[key]
          : key === x || key === y
          ? item[key]
          : !y
          ? [xVal, item[key] === 'null' || item[key] === null ? 0 : item[key]]
          : [item[y], xVal, item[key] === 'null' || item[key] == null ? 0 : item[key]];
    });
  });
  if (!filter) {
    !!x && (datas[x] = returnAutoX(autoX) || datas[x]);
    return datas;
  } else if (x) {
    let filters = {};
    let filtersNames = [];
    datas[filter].map((item, index) => {
      filtersNames[index] = item.length === 3 ? item[2] : item[1];
      return filtersNames;
    });
    filtersNames = Array.from(new Set(filtersNames));
    filtersNames.map((item, index) => {
      filters['datas' + index] = { values: [], name: item };
      return filters;
    });
    option.forEach((item) => {
      for (let key in item) {
        let flag = !valid ? key !== filter && key !== x && key !== y : key === valid;
        if (flag) {
          let addMonth = '';
          let isMonth = isObject(autoX) && autoX.type === 'days';
          if (isMonth) {
            !autoX.tagDate && (autoX.tagDate = getNowFormatDate('month'));
            addMonth = autoX.tagDate.split('-')[1];
          }
          let xVal = isMonth && item[x].length === 2 ? addMonth + '-' + item[x] : item[x];
          filters['datas' + filtersNames.indexOf(item[filter])].values.push(
            !y
              ? [xVal, item[key] === 'null' || item[key] == null ? 0 : item[key]]
              : [item[y], xVal, item[key] === 'null' || item[key] == null ? 0 : item[key]]
          );
          return filters;
        }
      }
    });
    filters[x] = Array.from(new Set(datas[x]));
    filters[x] = returnAutoX(autoX) || filters[x];
    !!y && (filters[y] = Array.from(new Set(datas[y])));
    return filters;
  } else {
    return {};
  }
};

/**
 * 把小数前的数分成4位处理
 *
 * @param {*} nums
 */
export const cutNum = (nums) => {
  //判断Number对象是否有cutNum方法
  let num = '' + nums; //this指需要转换的数，然后由number类型转为string类型
  let len = Math.ceil(num.length / 4);
  let arr = [];
  let v_len = num.length;
  while (len > 0) {
    let cut_start = v_len - 4 > 0 ? v_len - 4 : 0;
    let cut_len = v_len - 4 > 0 ? 4 : v_len;
    let v = num.substr(cut_start, cut_len);
    if (v.length !== 4) {
      arr.push(' '.repeat(4 - v.length) + v);
    } else {
      arr.push(v);
    }
    len--;
    v_len -= 4;
  }
  return arr.length !== 1 ? arr.reverse().join(',') : '' + arr;
};

/**
 * 数字转成中文数字
 *
 * @param {*} nums
 */
export const numToChinese = (nums) => {
  //有小数点的分为两部分：小数前的数firstPart和小数后的数secondPart，小数前的数进行cutNum方法处理
  //如果小数前的数不足4位，添0补位
  let $this = '' + nums,
    firstPart = '',
    secondPart = '';
  if (/\./.test($this)) {
    let arrPre = $this.split('.');
    firstPart = arrPre[0];
    if (firstPart.length > 12) {
      return '数字不能超过仟亿';
    }
    secondPart = arrPre[1];
    if (secondPart.length > 2) {
      return '小数点后的数字不能超过2位';
    }
  } else {
    firstPart = $this;
  }
  //第一部分：处理小数前的数
  let firstPartArr = [];
  if (firstPart.length > 4) {
    firstPartArr = cutNum(parseInt(firstPart)).split(','); //firstPart是字符串类型
  } else {
    firstPartArr = firstPartArr.concat(' '.repeat(4 - firstPart.length) + firstPart);
  }
  const arrMap = [
      ['0', '零'],
      ['1', '壹'],
      ['2', '贰'],
      ['3', '叁'],
      ['4', '肆'],
      ['5', '伍'],
      ['6', '陆'],
      ['7', '柒'],
      ['8', '捌'],
      ['9', '玖'],
    ],
    unit = ['仟', '佰', '拾', ''];
  let map = new Map(arrMap), //创建Map对象
    splitAddUnit = [], //存放4位分割后的单位
    returnArr = []; //最终返回的值
  if (firstPartArr.length === 3) {
    splitAddUnit = ['亿', '万'];
  } else if (firstPartArr.length === 2) {
    splitAddUnit = ['万'];
  } else {
    splitAddUnit = [''];
  }
  for (let k = 0; k < firstPartArr.length; k++) {
    for (let j = 0; j < firstPartArr[k].length; j++) {
      if (firstPartArr[k][j] !== 0) {
        //利用Map对象映射相应的值
        let newUnit = [...unit];
        firstPartArr[k][j] === ' ' && (newUnit[j] = '');
        returnArr.push(map.get(firstPartArr[k][j]) + newUnit[j]);
      }
    }
    if (splitAddUnit[k]) {
      returnArr.push(splitAddUnit[k]);
    }
  }
  returnArr.push('元');
  //第二部分：处理小数后的数
  if (secondPart) {
    if (/^0+$/.test(secondPart)) {
      //小数后的数全为0时
      returnArr.push('整');
    } else {
      const pointAfterUnit = ['角', '分'];
      for (let j = 0; j < secondPart.length; j++) {
        let val = map.get(secondPart[j]) + pointAfterUnit[j];
        returnArr.push(val);
      }
    }
  } else {
    returnArr.push('整');
  }
  return returnArr.join('').replace(/undefined/g, '');
};

/**
 * 给空值赋默认值
 *
 * @param {*} values
 * @param {*} defaultValue
 */
export const getValue = (values, defaultValue = {}) => {
  if (!values || values === 'undefine') {
    return defaultValue;
  }
  return values;
};

/**
 * 过滤对象空的属性
 *
 * @param {*} object
 */
export const filterNullElement = (object) => {
  Object.keys(object).forEach((key) => {
    (object[key] === undefined || object[key] === null || object[key] === '') && delete object[key];
  });
  return object;
};

/**
 * 树数据公共方法默认配置
 */
const treeDataConfig = {
  keyField: '',
  titleField: '',
  showValue: false,
  // 指定需要过滤数据的key，用于 formatTreeData 方法
  filterKeys: [],
  // 指定过滤文本条件，用于 filterTreeData 方法
  filterValue: '',
  treeNodeRender: (node) => ({}),
  parKey: '',
  // 指定 keyList 中每一个元素的 key（多个）
  keyList: [],
  parKeyList: [],
};

/**
 * @des flattenTreeData 树数据扁平化
 * @param rows
 * @param config {keyField, treeNodeRender, parKey, keyList}
 * @returns Array[]
 */
export const flattenTreeData = function (rows, config) {
  let newRows = [];
  config = { ...treeDataConfig, ...config };
  const { keyField, treeNodeRender, parKey, keyList, parKeyList } = config;

  rows.forEach((item) => {
    // 自定义节点配置
    const treeNodeConfig = treeNodeRender(item);

    // key取值优先级：已存在key > 自定义事件处理的key > 使用keyField字段
    item.key = item.key || treeNodeConfig.key || item[keyField] || '';

    const nodeKey = parKey ? `${parKey}#${item.key}` : item.key;

    if (keyList.length) {
      const keyInfo = {};
      keyList.forEach((key) => {
        keyInfo[key] = item[key];
      });

      item.fullKeyList = [...parKeyList, keyInfo];
    }

    newRows.push({
      ...item,
      fullKey: nodeKey,
    });

    if (item.children) {
      newRows = [
        ...newRows,
        ...flattenTreeData(item.children, {
          ...config,
          parKey: nodeKey,
          parKeyList: item.fullKeyList || [],
        }),
      ];
    }
  });

  return newRows;
};

/**
 * @des formatTreeData 格式化数组为 treeData
 * @param rows
 * @param config {keyField, titleField, showValue, treeNodeRender, filterKeys}
 * @returns {rows, keys}
 */
export const formatTreeData = function (rows, config) {
  const newRows = [];
  let keys = [];
  config = { ...treeDataConfig, ...config };
  const { keyField, titleField, showValue, treeNodeRender, filterKeys } = config;

  rows.forEach((item) => {
    // 自定义节点配置
    const treeNodeConfig = treeNodeRender(item);

    const nodeKey = treeNodeConfig.key || item[keyField];
    const nodeTitle = treeNodeConfig.title || item[titleField] || nodeKey;

    if (filterKeys && filterKeys.length && !filterKeys.includes(nodeKey)) {
      return true;
    }

    keys.push(nodeKey);

    const newItem = !Object.keys(treeNodeConfig).length
      ? {
          ...item,
          key: nodeKey,
          value: nodeKey,
          title: showValue ? nodeKey + '-' + nodeTitle : nodeTitle,
          children: null,
        }
      : // 自定义节点模式
        {
          ...item,
          ...treeNodeConfig,
          // 存在titleDom（dom结构的title），则取titleDom
          title: treeNodeConfig.titleDom || treeNodeConfig.title,
          children: null,
        };

    const children = formatTreeData(item.children || [], config);

    // 是否为叶子节点
    newItem.isLeaf = !children.rows.length;

    if (children.rows.length) {
      newItem.children = children.rows;
      keys = [...keys, ...children.keys];
    }

    newRows.push(newItem);
  });

  return {
    rows: newRows,
    keys,
  };
};

/**
 * @des filterTreeData 格式化数组为 treeData，并支持筛选
 * @param rows
 * @param config {keyField, titleField, showValue, filterValue, treeNodeRender}
 * @returns {rows, keys}
 */
export const filterTreeData = function (rows, config) {
  config = { ...treeDataConfig, ...config };
  const { keyField, titleField, filterValue, treeNodeRender } = config;

  let filterKeys = filterValue
    ? flattenTreeData(rows, config)
        .filter((item) => {
          // 自定义节点配置
          const treeNodeConfig = treeNodeRender(item);

          const nodeKey = treeNodeConfig.key || item[keyField] || '';
          const nodeTitle = item[titleField] || treeNodeConfig.title || '';

          return nodeKey.includes(filterValue) || nodeTitle.includes(filterValue);
        })
        .map((item) => {
          return item.fullKey;
        })
        .join('#')
        .split('#')
    : [];

  return formatTreeData(rows, {
    ...config,
    filterKeys: Array.from(new Set(filterKeys)),
  });
};

/**
 * @des formatTreeTableData 格式化数组为“树形表格数据”
 * @param rows
 * @param config {parKey, filterKeys}
 * @param parKey 父级的key
 * @returns Array[]
 */
export const formatTreeTableData = (rows, config) => {
  config = { ...treeDataConfig, ...config };
  const { keyField, parKey, filterKeys } = config;
  const newRows = [];
  let keys = [];

  rows.forEach((item, index) => {
    let nodeKey = item[keyField];

    if (!nodeKey) {
      nodeKey = parKey ? `${parKey}-${index + 1}` : index + 1 + '';
    }

    const newItem = {
      ...item,
      key: nodeKey,
      children: null,
    };

    if (filterKeys && filterKeys.length && !filterKeys.includes(newItem.key)) {
      return true;
    }

    keys.push(newItem.key);

    if (!parKey) {
      newItem.rowIndex = index + 1;
    }

    if (item.children && item.children.length) {
      const children = formatTreeTableData(item.children, {
        ...config,
        parKey: newItem.key,
      });

      newItem.children = children.rows;
      keys = [...keys, ...children.keys];
    }

    newRows.push(newItem);
  });

  return {
    rows: newRows,
    keys,
  };
};
/**
 * 通过子节点找到该节点的所有的父节点的名称
 * @param param : menuCode 子节点菜单代码  treeData 树形扁平数据
 */
export const findParentMenu = (param) =>{
  const {treeData, menuCode} = param;
  let menuName = [];
  let nowNode = treeData.filter(item => item.menuCode === menuCode);
  if(nowNode.length !== 0){
      nowNode = nowNode[0];
      menuName.push(nowNode.menuName);
      // 不是顶级节点 那么就继续寻找父节点
      if(nowNode.parentMenuCode !== '0' && nowNode.parentMenuCode !== undefined){
          let parentNode = treeData.filter(item => item.menuCode === nowNode.parentMenuCode);
          if(parentNode.length !== 0){
              parentNode = parentNode[0];
              menuName = [...findParentMenu({menuCode:parentNode.menuCode,treeData: treeData}), ...menuName];
          }
       
      }
  }
  return menuName;
}
/**
 * 数字转英文
 *
 * @param {*} s
 */
export const numToEnglish = (s) => {
  //参数
  var NumtoEnglish = {},
    n = '',
    xiao = '',
    zheng = '',
    regxinteger = /^([0-9]{1,}([.][0-9]*)?)$/;
  //数字英文写法
  NumtoEnglish.tally = {
    arr1: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    arr2: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    arr3: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    arr4: ['hundred', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'],
  };
  //转换整数部分
  NumtoEnglish.Convert_integer = function (n) {
    try {
      let fenge = this.toThousands(n).split(',');
      let result = '';
      for (var i = 0; i < fenge.length; i++) {
        if (fenge[i].length == 3) {
          result += this.tally.arr1[fenge[i].substring(0, 1)] + ' '; //百位
          result += this.tally.arr4[0];
          if (this.doubledight(fenge[i].substring(1)) != '') {
            result += ' and ' + this.doubledight(fenge[i].substring(1));
          }
        } else if (fenge[i].length == 2) {
          result += this.doubledight(fenge[i]); //十位
        } else if (fenge[i].length == 1) {
          result += this.tally.arr1[fenge[i]]; //个位
        }
        //添加千分位单位（数字超过1000，每三位数字分配一个单位）
        if (i < fenge.length - 1) {
          result += ' ' + this.tally.arr4[fenge.length - 1 - i] + ' ';
        }
      }
      return result;
    } catch (ex) {
      console.error(ex);
    }
  };
  //转换小数部分
  NumtoEnglish.Convert_decimal = function (n) {
    var d = n.split('');
    var result = '';
    if (d.length > 0) {
      d.forEach((a) => {
        result += this.Convert_integer(a) + ' ';
      });
    }
    return result;
  };
  //组合两位数
  NumtoEnglish.doubledight = function (n) {
    var result = '';
    if (parseInt(n) != 0) {
      var dd = n.split('');
      if (dd[0] < 1) {
        result = this.tally.arr1[dd[1]];
      } else if (dd[0] == 1) {
        result = this.tally.arr2[dd[1]];
      } else {
        result = this.tally.arr3[dd[0] - 2] + '-' + this.tally.arr1[dd[1]];
      }
    }
    return result;
  };

  //转换千分位显示，例：1000000 = 1,000,000
  NumtoEnglish.toThousands = function (num) {
    var num = (num || 0).toString(),
      result = '';
    while (num.length > 3) {
      result = ',' + num.slice(-3) + result;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    return result;
  };

  //扩展String方法
  s.prototype.toEnglish = function () {
    n = this;
    if (!regxinteger.test(parseInt(n))) {
      return 'Error：Must in digital format';
    }

    //分割整数和小数（如果有小数的话）
    var NumList = n.toString().split('.'),
      zheng = NumtoEnglish.Convert_integer(NumList[0]); //整数部分
    //如果分割长度是2，说明是小数
    if (NumList.length == 2) {
      if (NumList[1].length <= 2) {
        xiao = NumtoEnglish.Convert_decimal(NumList[1]);
      } else {
        //如果小数超过2位，不转换，返回原数据
        return n;
      }
    }
    //返回转换结果
    return zheng + (xiao == '' ? '' : ' point ' + xiao);
  };
};

/**
 * 数字千分位
 *
 * @param {*} num
 * @param {*} defaultValue
 */
export const formatNumber = (num, defaultValue = '--') => {
  if (isNaN(Number(num))) {
    return defaultValue;
  }
  return ('' + Number(num)).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
};

/**
 * 判断对象是否为空
 *
 * @param {*} obj
 */
export const isNullObject = (obj) => {
  return Object.keys(obj).length ? false : true;
};

/**
 * 格式化 Immutable 数据
 *
 * @param {*} state
 * @param {*} key
 * @returns
 */
export const formatImmutable = (state, key) => {
  let val = state?.get(key);
  return val?.toJS ? val.toJS() : val;
};

/**
 * 克隆
 *
 * @param {*} getState
 * @param {string} [key='']
 * @param {*} [target=[]]
 * @returns
 */
export const cloneState = (getState, key = '', target = []) => {
  if (isFunc(getState) && typeof key === 'string') {
    let value = formatImmutable(getState(), key);
    return merge(true, target, value);
  }
};
