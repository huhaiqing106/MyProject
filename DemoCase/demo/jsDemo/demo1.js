/**
 * 你不知道的JavaScript习题
 */

// map set
void (function () {
  var m = new Map([["a", "foo"], ["b", "bar"]])
  console.log(m.get("a"));

  new Set([1, 2])
})();

void (function () {
  var s = new Set();
  var x = { id: 1 },
    y = { id: 2 };
  s.add(x).add(y);
  var keys = [...s.keys()],
    vals = [...s.values()],
    entries = [...s.entries()];
  console.log(keys[0] === x, keys[1] === y);

  console.log(vals[0] === x, vals[1] === y);

  console.log(entries[0][0] === x, entries[0][1] === x);
  console.log(entries[1][0] === y, entries[1][1] === y);
})();

void (function () {
  var a = new Array(3);
  console.log(a);
  console.log(a.length);
  Array.from({ length: 4 })
})();

void (function () {
  console.log("\t");
  // 任何参数为负值，就是当作相对于数组的结束的相对值
  // 4/-2替换1，5/-替换2；[4, 5, 3, 4, 5]
  // [1, 2, 3, 4, 5].copyWithin(0, -2)
  // // 从-2开始复制到-1结束,4/-2替换1；[4, 2, 3, 4, 5]
  // [1, 2, 3, 4, 5].copyWithin(0, -2, -1)
})();

void (function () {
  var arr = [4, 5, 6, 7, 8, 9];
  var a = 2;
  console.log(a ** 4);
})();


void (function () {
  function test(person) {
    person.age = 26
    person = {
      name: 'yyy',
      age: 30
    }

    return person
  }
  const p1 = {
    name: 'yck',
    age: 25
  }
  const p2 = test(p1)
  console.log(p1) // -> ?
  console.log(p2) // -> ?
})();