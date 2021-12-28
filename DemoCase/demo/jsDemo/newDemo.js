function _new() {
  let obj = null;
  let constructor = Array.prototype.shift.call(arguments);

  if (!typeof constructor === 'function') {
    return;
  }

  obj = Object.create(constructor.prototype);
  const res = constructor.apply(obj, arguments);
  let flag = res && (typeof res === 'object' || typeof res === 'function');

  return flag ? res : obj;
}

function People() {
  this.name = 'paopao';
  this.age = 3;
  // 返回新对象的情况
  //   return {
  //     a: 11,
  //   };
}

const p = _new(People);
console.log(p);
