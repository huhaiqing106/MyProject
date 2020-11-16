/**
 * 前端面试之道测试题
 */
void (function () {
  console.log(typeof 1);
  console.log(typeof "1");
  console.log(typeof true);
  console.log(typeof undefined);
  console.log(typeof {});
  console.log(typeof Symbol("111"));
  console.log(typeof null);
})();

void (function () {
  console.log("\t");
  console.log(Boolean(1));
  console.log(Boolean("123"));
  var a = { 1: 1 };
  console.log(Boolean(a));
  console.log(String(Symbol(123)));
  console.log(String(function a() { }));
  console.log(a > 1);
  // console.log(a.));
})();

/**
 * 原生数据类型：number/boolean/string/undefined/null/symbol
 */

void (function () {
  console.log("\t");
  // [] == ![] //![]转boolean
  // [] == [] 比较对象地址
  // {} == {} 比较对象地址

  for (var index = 0; index < 5; index++) {
    setTimeout((index) => {
      // console.log(index);
    }, 100, index);
  }

  function Parent(value) {
    console.log(this, "123");
    this.val = value
  }
  Parent.prototype.getValue = function () {
    console.log(this.val)
  }

  function Child(value) {
    console.log(111);
    Parent.call(this, value)
  }
  Child.prototype = Object.create(Parent.prototype, {
    constructor: {
      value: Child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })

  const child = new Child(1)
  child.getValue() // 1
})()