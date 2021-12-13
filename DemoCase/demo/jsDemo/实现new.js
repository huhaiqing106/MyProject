function _new(func) {
  let obj = Object.create({}, func.prototype);
  const res = func.apply(obj);
  if (res) return res;
  return obj;
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
