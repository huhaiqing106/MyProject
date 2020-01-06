
    (function(modules) {
      function require(id) {
        const module = { exports: {} }
        modules[id](module, module.exports, require)
        return module.exports;
      }
      require('F:/MyProject/MyDemoProject/demo/demo1.js')
    })('F:/MyProject/MyDemoProject/demo/demo1.js':(
      function (module, exports, require) { "use strict";

require("./demo2.js");

bar();
var a = 2;

function foo() {
  console.log(a);
}
function bar() {
  var a = 3;
  foo();
}

function foo1() {
  console.log(this.b);
}

function foo() {
  console.log(this.a);
  var b = 3;
  foo.foo1();
}
var a = 2;
foo();

var defaults = {
  options: {
    remove: true,
    enable: false,
    instance: {}
  },
  log: {
    warn: true,
    error: true
  }
};

var config = {
  options: {
    remove: false,
    instance: null
  }
};

// config.options = config.options || {};
// config.log = config.log || {};
{
  var _config$options = config.options;
  _config$options = _config$options === undefined ? {} : _config$options;
  var _config$options$remov = _config$options.remove,
      remove = _config$options$remov === undefined ? defaults.options.remove : _config$options$remov,
      _config$options$enabl = _config$options.enable,
      enable = _config$options$enabl === undefined ? defaults.options.enable : _config$options$enabl,
      _config$options$insta = _config$options.instance,
      instance = _config$options$insta === undefined ? defaults.options.instance : _config$options$insta,
      _config$log = config.log;
  _config$log = _config$log === undefined ? {} : _config$log;
  var _config$log$warn = _config$log.warn,
      warn = _config$log$warn === undefined ? defaults.log.warn : _config$log$warn,
      _config$log$error = _config$log.error,
      error = _config$log$error === undefined ? defaults.log.error : _config$log$error;

  /* config = {
      options: { remove, enable, instance },
      log: { warn, error }
  } */

  console.log(remove, enable, instance);
  console.log(warn, error);
} }
    ),'./demo2.js':(
      function (module, exports, require) { "use strict";

var _testo;

var _templateObject = _taggedTemplateLiteral(["11 ", " Everything is ", "!"], ["11 ", " Everything is ", "!"]),
    _templateObject2 = _taggedTemplateLiteral(["Hello\nword"], ["Hello\\nword"]);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function foo(strings) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  console.log(strings);
  console.log(values);
  return strings.reduce(function (s, v, idx) {
    console.log(v, idx);
    return s + (idx > 0 ? values[idx - 1] : "") + v;
  }, "");
}

var desc = "awesome";
var text = "123";
console.log(foo(_templateObject, text, desc));

console.log("Hello\nword");
console.log(String.raw(_templateObject2));

var re = /foo/m;

console.log(re.flags);

var testa = 42;
console.log(testa.toString(16));
console.log(Number("0x2a"));

var snowman = "\u2603";
console.log(snowman);

console.log(snowman.normalize());

var testo = (_testo = {
  foo: 42
}, _defineProperty(_testo, Symbol("bat"), "hello word"), _defineProperty(_testo, "baz", true), _testo);
console.log(Object.getOwnPropertyNames(testo));
console.log(Object.getOwnPropertySymbols(testo)); }
    ),)
  

  