void (function () {
  function FooF() {
    this.x = 2;
    this.y = 3;
  }

  FooF.prototype.getTestFun = function () {
    console.log("this father fun");
    return this.x - this.y;
  }

  function Foo(a, b) {
    this.x = a;
    this.y = b;
  }

  Foo.prototype.gimmeXY = function () {
    return this.x * this.y;
  }

  // Foo.prototype = FooF.prototype;
  Foo.prototype = Object.create(FooF.prototype)

  let f = new Foo(2, 2);
  let fA = new Foo(3, 3);

  console.log(f.getTestFun.call(new FooF()));
  console.log(f.prototype === fA.prototype);

  let fooObjA = {
    a: 1
  };
  let fooObjB = {
    b: 1,
    testA: function () {
      console.log(this.a + this.b);
    }
  }

  Object.setPrototypeOf(fooObjB, fooObjA)
  fooObjB.testA();

  console.log(fooObjB.__proto__, fooObjA.__proto__);
})();

void (function () {
  console.log("\t");
  class ParentA {
    constructor() { this.id = "a"; }
    foo() { console.log(`ParentA: ${this.id}`); }
  }
  class ParentB {
    constructor() { this.id = "b"; }
    foo() { console.log(`ParentB: ${this.id}`); }
  }

  class ChildA extends ParentA {
    foo() {
      super.foo();
      console.log(`ChildA: ${this.id}`);
    }
  }

  class ChildB extends ParentB {
    foo() {
      super.foo();
      console.log(`ChildB: ${this.id}`);
    }
  }

  let a = new ChildA();
  a.foo();

  let b = new ChildB();
  b.foo();

  b.foo.call(a)
  b.foo.apply(a)
  b.foo.bind(a).call()
})();

void (function () {
  console.log('\t');
  class Foo {
    static get [Symbol.species]() {
      console.log("this is foo");
      return this;
    }
    spawn() {
      console.log("this is spawn");
      return new this.constructor[Symbol.species]();
    }
  }

  class Bar extends Foo {
    static get [Symbol.species]() {
      console.log("this is bar");
      return Foo;
    }
  }

  let a = new Foo();
  let b = a.spawn();
  console.log(a);
  // console.log(b instanceof Foo);
  // console.log(a instanceof Foo);

  let x = new Bar();
  let y = x.spawn();
  // console.log(y instanceof Bar);
  // console.log(y instanceof Foo);
  // console.log(x instanceof Foo);
})();

void (function () {
  console.log('\t');
  let th = {
    then: function thener() {
      console.log(123);
    }
  };

  let p = Promise.resolve(th);
  console.log(p);
  p.then(r => {
    console.log(r);
  })

  Promise.all([1]).then(([res]) => {
    console.log(res);
  })
})();