function onWatch(obj, setBind, getLogger) {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property);
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      setBind(target, property, value);
      return Reflect.set(target, property, value, receiver);
    },
  };

  return new Proxy(obj, handler);
}

let obj = { a: 1 };

let newObj = onWatch(
  obj,
  (target, property, v) => {
    console.log(`监听到属性${property}改变为${v}`);
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`);
  }
);

newObj.a = 2;
newObj.a;
