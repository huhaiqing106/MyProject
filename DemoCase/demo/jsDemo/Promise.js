void (function () {
  var p = Promise.resolve(21);
  var p2 = p.then(function (v) {
    console.log(v); // 21
    // 用值42填充p2
    return v * 2;
  });
  // 连接p2
  var p3 = p2.then(function (v) {
    console.log(v); // 42
    return v - 1;
  });
  let p4 = p3.then(function (v) {
    console.log(v);
  })
  console.log(p4);
})

void (function () {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  function MyPromise(fn) {
    const that = this;
    that.state = PENDING;
    that.value = null;
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];

    function resolve(value) {
      if (that.state === PENDING) {
        console.log("setp 1");
        that.state = RESOLVED;
        that.value = value;
        that.resolvedCallbacks.map(cb => cb(that.value))
      }
    }

    function reject(value) {
      if (that.state === PENDING) {
        that.state = RESOLVED;
        that.value = value;
        that.resolvedCallbacks.map(cb => cb(that.value))
      }
    }

    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this;
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v;
    onRejected = typeof onRejected === "function" ? onRejected : r => { throw r };
    if (that.state === PENDING) {
      that.resolvedCallbacks.push(onFulfilled);
      that.rejectedCallbacks.push(onRejected);
    }
    if (that.state === RESOLVED) {
      onFulfilled(that.value);
    }
    if (that.state === REJECTED) {
      onRejected(that.value);
    }
  }

  new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 0)
  }).then(value => {
    console.log(value)
  })
})

void (function () {
  class MyPromise {
    PENDING = 'pending';
    RESOLVED = 'resolved';
    REJECTED = 'rejected';
    state = this.PENDING;
    value = null;
    resolvedCallbacks = [];
    rejectedCallbacks = [];

    resolve = this.resolve.bind(this)
    reject = this.reject.bind(this);

    constructor(fn) {
      try {
        fn(this.resolve, this.resolve)
      } catch (e) {
        this.reject(e);
      }
    }

    resolve(value) {
      if (this.state === this.PENDING) {
        this.state = this.RESOLVED;
        this.value = value;
        this.resolvedCallbacks.map(cb => cb(this.value))
      }
    }

    reject(value) {
      if (this.state === this.PENDING) {
        this.state = this.REJECTED;
        this.value = value;
        this.rejectedCallbacks.map(cb => cb(this.value))
      }
    }

    then(onFulfilled, onRejected) {
      onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v;
      onRejected = typeof onRejected === "function" ? onRejected : r => { throw r };
      if (this.state === this.PENDING) {
        this.resolvedCallbacks.push(onFulfilled);
        this.rejectedCallbacks.push(onRejected);
      }
      if (this.state === this.RESOLVED) {
        onFulfilled(this.value);
      }
      if (this.state === this.REJECTED) {
        onRejected(this.value);
      }
    }
  }

  new MyPromise(function (resolve, reject) {
    setTimeout(() => {
      resolve("1111111111");
    }, 0);
  }).then(value => {
    console.log(value);
  })
})

void (function () {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  function MyPromise(fn) {
    const that = this;
    that.state = PENDING;
    that.value = null;
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];

    function resolve(value) {
      if (value instanceof MyPromise) {
        return value.then(resolve, reject);
      }
      setTimeout(() => {
        if (that.state === PENDING) {
          that.state = RESOLVED;
          that.value = value;
          that.resolvedCallbacks.map(cb => cb(that.value))
        }
      }, 0);
    }

    function reject(value) {
      setTimeout(() => {
        if (that.state === PENDING) {
          that.state = RESOLVED;
          that.value = value;
          that.resolvedCallbacks.map(cb => cb(that.value))
        }
      }, 0);
    }

    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this;
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v;
    onRejected = typeof onRejected === "function" ? onRejected : r => { throw r };
    let promise2 = null;
    if (that.state === PENDING) {
      return (promise2 = new MyPromise((resolve, reject) => {
        that.resolvedCallbacks.push(function resolveCallBack() {
          try {
            const x = onFulfilled(that.value);
            resolutionProcedure(promise2, x, resolve, reject);
          } catch (r) {
            reject(r);
          }
        })

        that.rejectedCallbacks.push(function rejectCallBack() {
          try {
            const x = onRejected(that.value);
            resolutionProcedure(promise2, x, resolve, reject);
          } catch (r) {
            reject(r);
          }
        })
      }))
    }
    if (that.state === RESOLVED) {
      return (promise2 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            const x = onFulfilled(that.value)
            resolutionProcedure(promise2, x, resolve, reject)
          } catch (reason) {
            reject(reason)
          }
        });
      }))
    }
    if (that.state === REJECTED) {
      onRejected(that.value);
    }

    function resolutionProcedure(promise2, x, resolve, reject) {
      if (promise2 === x) {
        return reject(new TypeError("error"))
      }

      if (x instanceof MyPromise) {
        x.then(function (value) {
          resolutionProcedure(promise2, value, resolve, reject)
        }, reject)
      }

      let called = false
      if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
          let then = x.then
          if (typeof then === 'function') {
            then.call(
              x,
              y => {
                if (called) return
                called = true
                resolutionProcedure(promise2, y, resolve, reject)
              },
              e => {
                if (called) return
                called = true
                reject(e)
              }
            )
          } else {
            resolve(x)
          }
        } catch (e) {
          if (called) return
          called = true
          reject(e)
        }
      } else {
        resolve(x)
      }
    }
  }

  MyPromise.apply()
  MyPromise.call()
  MyPromise.bind()

  let a = new MyPromise((resolve, reject) => {
    resolve(11)
  }).then(value => {
    return value + "a";
  })
  console.log(a);
  a.then(v => {
    console.log(v);
  });
})()
