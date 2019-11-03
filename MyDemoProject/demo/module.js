/* var MyModules = (function Manager() {
    var modules = {};
    function define(name, deps, impl) {
        for (var index = 0; index < deps.length; index++) {
            deps[index] = modules[deps[index]];
        }
        modules[name] = impl.apply(impl, deps);
    }
    function get(name) {
        return modules[name];
    }
    return {
        define: define,
        get: get
    };
})();

MyModules.define("bar", [], function () {
    function hello(who) {
        return "Let me introduce: " + who;
    }
    return {
        hello: hello
    };
});

MyModules.define("test", [], function () {
    function haha() {
        console.log("Test");
    }
    return {
        haha: haha
    };
});

debugger
MyModules.define("foo", ["test","bar"], function (bar) {
    var hungry = "hippo";
    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }
    return {
        awesome: awesome
    };
});

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");

console.log(bar.hello("hippo"));
foo.awesome(); */

/* function test(a1,a2){
    console.log(arguments);
    console.log(a1,a2);
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
test.apply(this,a); */

function foo(a1, a2, a3) {
    this.val = a1 + a2 + a3;
}

var bar = foo.bind(null, 1);
console.log(bar);

var baz = bar.bind(null, 2);
// console.log(baz.val)

var bac = new baz(3);
console.log(bac.val)




