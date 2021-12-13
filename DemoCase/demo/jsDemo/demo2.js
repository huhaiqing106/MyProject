function foo(strings, ...values) {
  console.log(strings);
  console.log(values);
  return strings.reduce(function (s, v, idx) {
    console.log(v, idx);
    return s + (idx > 0 ? values[idx - 1] : "") + v
  }, "")
}

var desc = "awesome";
var text = "123";
console.log(foo`11 ${text} Everything is ${desc}!`);


console.log(`Hello\nword`);
console.log(String.raw`Hello\nword`);

var re = /foo/m;

console.log(re.flags);

var testa = 42;
console.log(testa.toString(16));
console.log(Number("0x2a"));

var snowman = "\u{2603}";
console.log(snowman);

console.log(snowman.normalize());

var testo = {
  foo: 42,
  [Symbol("bat")]: "hello word",
  baz: true
};
console.log(Object.getOwnPropertyNames(testo));
console.log(Object.getOwnPropertySymbols(testo));

