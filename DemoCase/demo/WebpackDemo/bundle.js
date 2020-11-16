
    (function(modules) {
      function require(id) {
        const module = { exports: {} }
        modules[id](module, module.exports, require)
        return module.exports;
      }
      require('./demo/WebpackDemo/demo1.js')
    })(
        './demo/WebpackDemo/demo1.js':(
            function (module, exports, require) { "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _demo = require("./demo2.js");

            var _demo2 = _interopRequireDefault(_demo);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            var demo1 = "demo1";

            console.log(_demo2.default);

            exports.default = demo1; 
        }
      ),
      './demo2.js':(
        function (module, exports, require) { "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var demo2 = "demo2";

        exports.default = demo2; 
        }
      ),
    )
  