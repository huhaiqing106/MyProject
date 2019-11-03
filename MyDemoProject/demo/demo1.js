/* bar();
var a = 2;

function foo() {
    console.log(a);
}
function bar() {
    var a = 3;
    foo();
} */

/* function foo1() {
    console.log(this.b);
}

function foo() {
    console.log(this.a);
    var b = 3;
    foo.foo1()
}
var a = 2;
foo(); */

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
    let {
        options: {
            remove = defaults.options.remove,
            enable = defaults.options.enable,
            instance = defaults.options.instance
        } = {},
        log: {
            warn = defaults.log.warn,
            error = defaults.log.error
        } = {}
    } = config;

    /* config = {
        options: { remove, enable, instance },
        log: { warn, error }
    } */

    console.log(remove, enable, instance);
    console.log(warn, error);
}

