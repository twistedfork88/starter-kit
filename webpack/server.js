/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DynamicImportComponent = __webpack_require__(9);

var _DynamicImportComponent2 = _interopRequireDefault(_DynamicImportComponent);

var _BComponent = __webpack_require__(10);

var _BComponent2 = _interopRequireDefault(_BComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AComponentLoader = function AComponentLoader(props) {
    return _react2.default.createElement(
        _DynamicImportComponent2.default,
        { load: function load() {
                return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 14));
            } },
        function (Component) {
            return Component ? _react2.default.createElement(Component, props) : _react2.default.createElement(
                'h2',
                null,
                'loading...'
            );
        }
    );
};

var routes = [{
    path: '/',
    exact: true,
    component: AComponentLoader
}, {
    path: '/b',
    component: _BComponent2.default
}];

exports.default = routes;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(6);

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _expressHandlebars = __webpack_require__(12);

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _path = __webpack_require__(13);

var _path2 = _interopRequireDefault(_path);

var _nonce = __webpack_require__(18);

var _nonce2 = _interopRequireDefault(_nonce);

var _csp = __webpack_require__(39);

var _csp2 = _interopRequireDefault(_csp);

var _helmetCsp = __webpack_require__(19);

var _helmetCsp2 = _interopRequireDefault(_helmetCsp);

var _cookieParser = __webpack_require__(46);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cookieParser2.default)());

app.set('views', _path2.default.join(process.cwd(), 'src', 'server'));
app.engine('.hbs', (0, _expressHandlebars2.default)({
  extname: '.hbs',
  defaultView: 'default',
  layoutsDir: '/src/server'
}));
app.set('view engine', '.hbs');
app.use((0, _cors2.default)());

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(_express2.default.static("webpack/public"));

app.use(_nonce2.default);
app.use((0, _helmetCsp2.default)(_csp2.default));

app.get("*", function (req, res, next) {

  var sheet = new _styledComponents.ServerStyleSheet();

  var markup = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: {} },
    _react2.default.createElement(_App2.default, null)
  )));

  var styles = sheet.getStyleTags();

  // testing sample data
  var data = JSON.stringify({ a: 1 });

  res.render('index', { data: data, styles: styles, markup: markup });
});

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Hello World',
        _react2.default.createElement(
          'div',
          null,
          _routes2.default.map(function (_ref) {
            var path = _ref.path,
                exact = _ref.exact,
                C = _ref.component,
                rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);

            return _react2.default.createElement(_reactRouterDom.Route, {
              key: path,
              path: path,
              exact: exact,
              render: function render(props) {
                return _react2.default.createElement(C, _extends({}, props, rest));
              }
            });
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsyncLoader = function (_Component) {
    _inherits(AsyncLoader, _Component);

    function AsyncLoader(props) {
        _classCallCheck(this, AsyncLoader);

        var _this = _possibleConstructorReturn(this, (AsyncLoader.__proto__ || Object.getPrototypeOf(AsyncLoader)).call(this, props));

        _this.state = {
            c: null
        };
        return _this;
    }

    _createClass(AsyncLoader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.load().then(function (c) {
                if (c && c.default) {
                    _this2.setState({
                        c: c.default
                    });
                } else {
                    throw new Error('No default found on import module!');
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children(this.state.c);
        }
    }]);

    return AsyncLoader;
}(_react.Component);

exports.default = AsyncLoader;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: magenta;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: magenta;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _wa = __webpack_require__(11);

var _wa2 = _interopRequireDefault(_wa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AppContainer = _styledComponents2.default.div(_templateObject);

var BComponent = function BComponent() {
    return _react2.default.createElement(
        AppContainer,
        null,
        _react2.default.createElement(
            'p',
            { onClick: function onClick() {
                    alert('hey');
                } },
            'This is Page B ',
            _react2.default.createElement('img', { src: _wa2.default, style: { width: '40px' } })
        ),
        _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/' },
            'Go to A'
        )
    );
};

exports.default = BComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/63aa021247db37b06c05368bb1e74c77-wa.png";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-handlebars");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isFunction(value) {
  return value instanceof Function;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  directives: {
    'base-uri': { type: 'sourceList' },
    'block-all-mixed-content': { type: 'boolean' },
    'child-src': { type: 'sourceList' },
    'connect-src': { type: 'sourceList' },
    'default-src': {
      type: 'sourceList',
      hasStrictDynamic: true
    },
    'font-src': { type: 'sourceList' },
    'form-action': { type: 'sourceList' },
    'frame-ancestors': { type: 'sourceList' },
    'frame-src': { type: 'sourceList' },
    'img-src': { type: 'sourceList' },
    'manifest-src': { type: 'sourceList' },
    'media-src': { type: 'sourceList' },
    'object-src': { type: 'sourceList' },
    'script-src': {
      type: 'sourceList',
      hasUnsafes: true,
      hasStrictDynamic: true
    },
    'style-src': {
      type: 'sourceList',
      hasUnsafes: true
    },
    'prefetch-src': { type: 'sourceList' },
    'plugin-types': { type: 'pluginTypes' },
    'sandbox': { type: 'sandbox' },
    'report-to': { type: 'reportUri' },
    'report-uri': { type: 'reportUri' },
    'require-sri-for': { type: 'requireSriFor' },
    'upgrade-insecure-requests': { type: 'boolean' },
    'worker-src': {
      type: 'sourceList',
      hasUnsafes: true
    }
  },
  allHeaders: ['Content-Security-Policy', 'X-Content-Security-Policy', 'X-WebKit-CSP'],
  mustQuote: ['none', 'self', 'unsafe-inline', 'unsafe-eval', 'strict-dynamic'],
  unsafes: ["'unsafe-inline'", 'unsafe-inline', "'unsafe-eval'", 'unsafe-eval'],
  strictDynamics: ["'strict-dynamic'", 'strict-dynamic'],
  requireSriForValues: ['script', 'style'],
  sandboxDirectives: ['allow-forms', 'allow-modals', 'allow-orientation-lock', 'allow-pointer-lock', 'allow-popups', 'allow-popups-to-escape-sandbox', 'allow-presentation', 'allow-same-origin', 'allow-scripts', 'allow-top-navigation']
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});

var _xxhashjs = __webpack_require__(41);

var _xxhashjs2 = _interopRequireDefault(_xxhashjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleNonce = function handleNonce(req, res, next) {
			// We are identifying if the request originated from Firefox.
			// If it did and the request is 304 we do not attach the nonce
			// This is done to avoid the issue with FF where in a 304 request
			// a new nonce is returned but since the shell is cahced it still has
			// the old nonce and hence it fails.
			// Nonce from cookie is stripped off everyting except numbers.
			// This is to take care of an issue raised by appsec (SECBUG-698)

			// we need to find a way of generating new nonce or re-using
			var RID = 'abcdef';

			var cookieNonce = (req.cookies && req.cookies.nonce || '').replace(/\D/g, '');
			var nonce = _xxhashjs2.default.h32(req.requestId || RID, 0xabeabecd).toString();
			req.nonce = cookieNonce ? cookieNonce : nonce;

			if (!req.cookies) {
						res.cookie('nonce', req.nonce, { maxAge: 13434242443, httpOnly: true });
			}

			next();
};

exports.default = handleNonce;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var camelize = __webpack_require__(20);
var cspBuilder = __webpack_require__(21);
var isFunction = __webpack_require__(15);
var platform = __webpack_require__(22);
var checkOptions = __webpack_require__(24);
var containsFunction = __webpack_require__(35);
var getHeaderKeysForBrowser = __webpack_require__(36);
var transformDirectivesForBrowser = __webpack_require__(37);
var parseDynamicDirectives = __webpack_require__(38);
var config = __webpack_require__(16);

module.exports = function csp(options) {
  checkOptions(options);

  var originalDirectives = camelize(options.directives || {});
  var directivesAreDynamic = containsFunction(originalDirectives);
  var shouldBrowserSniff = options.browserSniff !== false;
  var reportOnlyIsFunction = isFunction(options.reportOnly);

  if (shouldBrowserSniff) {
    return function csp(req, res, next) {
      var userAgent = req.headers['user-agent'];

      var browser;
      if (userAgent) {
        browser = platform.parse(userAgent);
      } else {
        browser = {};
      }

      var headerKeys;
      if (options.setAllHeaders || !userAgent) {
        headerKeys = config.allHeaders;
      } else {
        headerKeys = getHeaderKeysForBrowser(browser, options);
      }

      if (headerKeys.length === 0) {
        next();
        return;
      }

      var directives = transformDirectivesForBrowser(browser, originalDirectives);

      if (directivesAreDynamic) {
        directives = parseDynamicDirectives(directives, [req, res]);
      }

      var policyString = cspBuilder({ directives: directives });

      headerKeys.forEach(function (headerKey) {
        if (reportOnlyIsFunction && options.reportOnly(req, res) || !reportOnlyIsFunction && options.reportOnly) {
          headerKey += '-Report-Only';
        }
        res.setHeader(headerKey, policyString);
      });

      next();
    };
  } else {
    var headerKeys;
    if (options.setAllHeaders) {
      headerKeys = config.allHeaders;
    } else {
      headerKeys = ['Content-Security-Policy'];
    }

    return function csp(req, res, next) {
      var directives = parseDynamicDirectives(originalDirectives, [req, res]);
      var policyString = cspBuilder({ directives: directives });

      if (reportOnlyIsFunction && options.reportOnly(req, res) || !reportOnlyIsFunction && options.reportOnly) {
        headerKeys.forEach(function (headerKey) {
          res.setHeader(headerKey + '-Report-Only', policyString);
        });
      } else {
        headerKeys.forEach(function (headerKey) {
          res.setHeader(headerKey, policyString);
        });
      }

      next();
    };
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("camelize");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
  var directives = options.directives;

  var keysSeen = {};

  return Object.keys(directives).reduce(function (result, originalKey) {
    var directive = dashify(originalKey);

    if (keysSeen[directive]) {
      throw new Error(originalKey + ' is specified more than once');
    }
    keysSeen[directive] = true;

    var value = directives[originalKey];
    if (Array.isArray(value)) {
      value = value.join(' ');
    } else if (value === true) {
      value = '';
    } else if (value === false) {
      return result;
    }

    if (value) {
      return result.concat(directive + ' ' + value);
    } else {
      return result.concat(directive);
    }
  }, []).join('; ');
};

function dashify(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
;(function () {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */

  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object. */
  var root = objectTypes[typeof window === 'undefined' ? 'undefined' : _typeof(window)] && window || this;

  /** Backup possible global object. */
  var oldRoot = root;

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[ false ? 'undefined' : _typeof(exports)] && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[ false ? 'undefined' : _typeof(module)] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;

  /** Possible global object. */
  var thisBinding = this;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4': '10 Technical Preview',
      '6.3': '8.1',
      '6.2': '8',
      '6.1': 'Server 2008 R2 / 7',
      '6.0': 'Server 2008 / Vista',
      '5.2': 'Server 2003 / XP 64-bit',
      '5.1': 'XP',
      '5.01': '2000 SP1',
      '5.0': '2000',
      '4.0': 'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) && (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(os.replace(/ ce$/i, ' CE').replace(/\bhpw/i, 'web').replace(/\bMacintosh\b/, 'Mac OS').replace(/_PowerPC\b/i, ' OS').replace(/\b(OS X) [^ \d]+/i, '$1').replace(/\bMac (OS X)\b/, '$1').replace(/\/(\d)/, ' $1').replace(/_/g, '.').replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '').replace(/\bx86\.64\b/gi, 'x86_64').replace(/\b(Windows Phone) OS\b/, '$1').replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1').split(' on ')[0]);

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return (/^(?:webOS|i(?:OS|P))/.test(string) ? string : capitalize(string)
    );
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null ? capitalize(value) : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? _typeof(object[property]) : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) && (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function (value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object. */
    var context = root;

    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && (typeof ua === 'undefined' ? 'undefined' : _typeof(ua)) == 'object' && getClassOf(ua) != 'String';

    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object. */
    var nav = context.navigator || {};

    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext ? !!nav.likeChrome : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = isCustomContext && context.java ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03B1';

    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03B2';

    /** Browser document object. */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = isCustomContext && opera ? opera['[[Class]]'] : getClassOf(opera)) ? operaClass : opera = null;

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */
    var data;

    /** The CPU architecture. */
    var arch = ua;

    /** Platform description array. */
    var description = [];

    /** Platform alpha/beta indicator. */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;

    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important). */
    var layout = getLayout([{ 'label': 'EdgeHTML', 'pattern': 'Edge' }, 'Trident', { 'label': 'WebKit', 'pattern': 'AppleWebKit' }, 'iCab', 'Presto', 'NetFront', 'Tasman', 'KHTML', 'Gecko']);

    /* Detectable browser names (order is important). */
    var name = getName(['Adobe AIR', 'Arora', 'Avant Browser', 'Breach', 'Camino', 'Electron', 'Epiphany', 'Fennec', 'Flock', 'Galeon', 'GreenBrowser', 'iCab', 'Iceweasel', 'K-Meleon', 'Konqueror', 'Lunascape', 'Maxthon', { 'label': 'Microsoft Edge', 'pattern': 'Edge' }, 'Midori', 'Nook Browser', 'PaleMoon', 'PhantomJS', 'Raven', 'Rekonq', 'RockMelt', { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' }, 'SeaMonkey', { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' }, 'Sleipnir', 'SlimBrowser', { 'label': 'SRWare Iron', 'pattern': 'Iron' }, 'Sunrise', 'Swiftfox', 'Waterfox', 'WebPositive', 'Opera Mini', { 'label': 'Opera Mini', 'pattern': 'OPiOS' }, 'Opera', { 'label': 'Opera', 'pattern': 'OPR' }, 'Chrome', { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' }, { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' }, { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' }, { 'label': 'IE', 'pattern': 'IEMobile' }, { 'label': 'IE', 'pattern': 'MSIE' }, 'Safari']);

    /* Detectable products (order is important). */
    var product = getProduct([{ 'label': 'BlackBerry', 'pattern': 'BB10' }, 'BlackBerry', { 'label': 'Galaxy S', 'pattern': 'GT-I9000' }, { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' }, { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' }, { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' }, { 'label': 'Galaxy S5', 'pattern': 'SM-G900' }, { 'label': 'Galaxy S6', 'pattern': 'SM-G920' }, { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' }, { 'label': 'Galaxy S7', 'pattern': 'SM-G930' }, { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' }, 'Google TV', 'Lumia', 'iPad', 'iPod', 'iPhone', 'Kindle', { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' }, 'Nexus', 'Nook', 'PlayBook', 'PlayStation Vita', 'PlayStation', 'TouchPad', 'Transformer', { 'label': 'Wii U', 'pattern': 'WiiU' }, 'Wii', 'Xbox One', { 'label': 'Xbox 360', 'pattern': 'Xbox' }, 'Xoom']);

    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Archos': {},
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1, 'Nexus': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1, 'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 }
    });

    /* Detectable operating systems (order is important). */
    var os = getOS(['Windows Phone', 'Android', 'CentOS', { 'label': 'Chrome OS', 'pattern': 'CrOS' }, 'Debian', 'Fedora', 'FreeBSD', 'Gentoo', 'Haiku', 'Kubuntu', 'Linux Mint', 'OpenBSD', 'Red Hat', 'SuSE', 'Ubuntu', 'Xubuntu', 'Cygwin', 'Symbian OS', 'hpwOS', 'webOS ', 'webOS', 'Tablet OS', 'Tizen', 'Linux', 'Mac OS X', 'Macintosh', 'Mac', 'Windows 98;', 'Windows ']);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function (result, guess) {
        return result || RegExp('\\b' + (guess.pattern || qualify(guess)) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function (result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (value[product] || value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] || RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function (result, guess) {
        return result || RegExp('\\b' + (guess.pattern || qualify(guess)) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function (result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result = RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua))) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function (result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result = RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) || RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) || RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua))) {
          // Split by forward slash and append product version if needed.
          if ((result = String(guess.label && !RegExp(pattern, 'i').test(guess.label) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0].replace(RegExp(pattern, 'i'), guess).replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ').replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function (result, pattern) {
        return result || (RegExp(pattern + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);

    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    }
    // Clean up Google TV.
    if (data = /\bGoogle TV\b/.exec(product)) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
        name || (name = 'Safari');
        os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua)) ? ' ' + data[1].replace(/_/g, '.') : '');
      }
      // Detect Kubuntu.
      else if (name == 'Konqueror' && !/buntu/i.test(os)) {
          os = 'Kubuntu';
        }
        // Detect Android browsers.
        else if (manufacturer && manufacturer != 'Google' && (/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua) || /\bVita\b/.test(product)) || /\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua)) {
            name = 'Android Browser';
            os = /\bAndroid\b/.test(os) ? os : 'Android';
          }
          // Detect Silk desktop/accelerated modes.
          else if (name == 'Silk') {
              if (!/\bMobi/i.test(ua)) {
                os = 'Android';
                description.unshift('desktop mode');
              }
              if (/Accelerated *= *true/i.test(ua)) {
                description.unshift('accelerated');
              }
            }
            // Detect PaleMoon identifying as Firefox.
            else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
                description.push('identifying as Firefox ' + data[1]);
              }
              // Detect Firefox OS and products running Firefox.
              else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
                  os || (os = 'Firefox OS');
                  product || (product = data[1]);
                }
                // Detect false positives for Firefox/Safari.
                else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
                    // Escape the `/` for Firefox 1.
                    if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
                      // Clear name of false positives.
                      name = null;
                    }
                    // Reassign a generic name.
                    if ((data = product || manufacturer || os) && (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
                      name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
                    }
                  }
                  // Add Chrome version to description for Electron.
                  else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
                      description.push('Chromium ' + data);
                    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion(['(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))', 'Version', qualify(name), '(?:Firefox|Minefield|NetFront)']);
    }
    // Detect stubborn layout engines.
    if (data = layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' || /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') || /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' || !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') || layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront') {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
        name = 'IE Mobile';
        os = 'Windows Phone 8.x';
        description.unshift('desktop mode');
        version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
      }
      // Detect IE 11 identifying as other browsers.
      else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
          if (name) {
            description.push('identifying as ' + name + (version ? ' ' + version : ''));
          }
          name = 'IE';
          version = data[1];
        }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (rhino) {
          try {
            version = context.require('ringo/engine').version.join('.');
            name = 'RingoJS';
          } catch (e) {
            if ((data = context.system) && data.global.system == context.system) {
              name = 'Narwhal';
              os || (os = data[0].os || null);
            }
          }
          if (!name) {
            name = 'Rhino';
          }
        } else if (_typeof(context.process) == 'object' && !context.process.browser && (data = context.process)) {
          if (_typeof(data.versions) == 'object') {
            if (typeof data.versions.electron == 'string') {
              description.push('Node ' + data.versions.node);
              name = 'Electron';
              version = data.versions.electron;
            } else if (typeof data.versions.nw == 'string') {
              description.push('Chromium ' + version, 'Node ' + data.versions.node);
              name = 'NW.js';
              version = data.versions.nw;
            }
          }
          if (!name) {
            name = 'Node.js';
            arch = data.arch;
            os = data.platform;
            version = /[\d.]+/.exec(data.version);
            version = version ? version[0] : null;
          }
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf(data = context.runtime) == airRuntimeClass) {
          name = 'Adobe AIR';
          os = data.flash.system.Capabilities.os;
        }
        // Detect PhantomJS.
        else if (getClassOf(data = context.phantom) == phantomClass) {
            name = 'PhantomJS';
            version = (data = data.version || null) && data.major + '.' + data.minor + '.' + data.patch;
          }
          // Detect IE compatibility modes.
          else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
              // We're in compatibility mode when the Trident version + 4 doesn't
              // equal the document mode.
              version = [version, doc.documentMode];
              if ((data = +data[1] + 4) != version[1]) {
                description.push('IE ' + version[1] + ' mode');
                layout && (layout[1] = '');
                version[1] = data;
              }
              version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
            }
            // Detect IE 11 masking as other browsers.
            else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
                description.push('masking as ' + name + ' ' + version);
                name = 'IE';
                version = '11.0';
                layout = ['Trident'];
                os = 'Windows';
              }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) || /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) || /\bMinefield\b/i.test(ua) && 'a')) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') + (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
        version = version.replace(/\.[\d.]+/, '.x');
      }
      // Detect Xbox 360 and Xbox One.
      else if (/\bXbox\b/i.test(product)) {
          if (product == 'Xbox 360') {
            os = null;
          }
          if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
            description.unshift('mobile mode');
          }
        }
        // Add mobile postfix.
        else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) && (os == 'Windows CE' || /Mobi/i.test(ua))) {
            name += ' Mobile';
          }
          // Detect IE platform preview.
          else if (name == 'IE' && useFeatures) {
              try {
                if (context.external === null) {
                  description.unshift('platform preview');
                }
              } catch (e) {
                description.unshift('embedded');
              }
            }
            // Detect BlackBerry OS version.
            // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
            else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data = (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] || version)) {
                data = [data, /BB10/.test(ua)];
                os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
                version = null;
              }
              // Detect Opera identifying/masking itself as another browser.
              // http://www.opera.com/support/kb/view/843/
              else if (this != forOwn && product != 'Wii' && (useFeatures && opera || /Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua) || name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os) || name == 'IE' && (os && !/^Win/.test(os) && version > 5.5 || /\bWindows XP\b/.test(os) && version > 8 || version == 8 && !/\bTrident\b/.test(ua))) && !reOpera.test(data = parse.call(forOwn, ua.replace(reOpera, '') + ';')) && data.name) {
                  // When "identifying", the UA contains both Opera and the other browser's name.
                  data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
                  if (reOpera.test(name)) {
                    if (/\bIE\b/.test(data) && os == 'Mac OS') {
                      os = null;
                    }
                    data = 'identify' + data;
                  }
                  // When "masking", the UA contains only the other browser's name.
                  else {
                      data = 'mask' + data;
                      if (operaClass) {
                        name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
                      } else {
                        name = 'Opera';
                      }
                      if (/\bIE\b/.test(data)) {
                        os = null;
                      }
                      if (!useFeatures) {
                        version = null;
                      }
                    }
                  layout = ['Presto'];
                  description.push(data);
                }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if (data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1]) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] || version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
          version = null;
        }
      // Use the full Chrome version when available.
      data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || !likeChrome && !data[1]) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' && (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
        description.unshift('desktop mode');
        name = 'Chrome Mobile';
        version = null;

        if (/\bOS X\b/.test(os)) {
          manufacturer = 'Apple';
          os = 'iOS 4.3+';
        } else {
          os = null;
        }
      }
    // Strip incorrect OS versions.
    if (version && version.indexOf(data = /[\d.]+$/.exec(os)) == 0 && ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (/Browser|Lunascape|Maxthon/.test(name) || name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': data && !isSpecialCasedOS ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function toString() {
          var version = this.version;
          return this.family + (version && !isSpecialCasedOS ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (name && (/\bWOW64\b/i.test(ua) || useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua))) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (os && /^OS X/.test(os.family) && name == 'Chrome' && parseFloat(version) >= 39) {
        os.architecture = 64;
      }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * The list of common layout engines include:
     * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * The list of manufacturers include:
     * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
     * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
     * "Nokia", "Samsung" and "Sony"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * The list of common browser names include:
     * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
     * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
     * "Opera Mini" and "Opera"
     *
     * Mobile versions of some browsers have "Mobile" appended to their name:
     * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * The list of common products include:
     *
     * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
     * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
       * "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function toString() {
        return 'null';
      }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // Export platform.
  var platform = parse();

  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if ("function" == 'function' && _typeof(__webpack_require__(17)) == 'object' && __webpack_require__(17)) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;

    // Define as an anonymous module so platform can be aliased through path mapping.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return platform;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
      // Export for CommonJS support.
      forOwn(platform, function (value, key) {
        freeExports[key] = value;
      });
    } else {
      // Export to the global object.
      root.platform = platform;
    }
}).call(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var checkDirective = __webpack_require__(25);
var dasherize = __webpack_require__(34);

module.exports = function (options) {
  if (!isObject(options)) {
    throw new Error('csp must be called with an object argument. See the documentation.');
  }

  var directives = options.directives;

  var directivesExist = isObject(directives);
  if (!directivesExist || Object.keys(directives).length === 0) {
    throw new Error('csp must have at least one directive under the "directives" key. See the documentation.');
  }

  Object.keys(directives).forEach(function (directiveKey) {
    checkDirective(dasherize(directiveKey), directives[directiveKey], options);
  });
};

function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = __webpack_require__(16);
var checkers = {
  sourceList: __webpack_require__(26),
  pluginTypes: __webpack_require__(27),
  sandbox: __webpack_require__(28),
  reportUri: __webpack_require__(29),
  requireSriFor: __webpack_require__(31),
  boolean: __webpack_require__(32)
};

module.exports = function (key, value, options) {
  if (options.loose) {
    return;
  }

  if (!config.directives.hasOwnProperty(key)) {
    throw new Error('"' + key + '" is an invalid directive. See the documentation for the supported list. Force this by enabling loose mode.');
  }

  var directiveType = config.directives[key].type;
  checkers[directiveType](key, value, options);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(15);
var config = __webpack_require__(16);

module.exports = function sourceListCheck(key, value, options) {
  var directiveInfo = config.directives[key];

  if (value === false) {
    return;
  }

  if (!Array.isArray(value)) {
    throw new Error('"' + value + '" is not a valid value for ' + key + '. Use an array of strings.');
  }

  if (value.length === 0) {
    throw new Error(key + ' must have at least one value. To block everything, set ' + key + ' to ["\'none\'"].');
  }

  value.forEach(function (sourceExpression) {
    if (!sourceExpression) {
      throw new Error('"' + sourceExpression + '" is not a valid source expression. Only non-empty strings are allowed.');
    }

    if (isFunction(sourceExpression)) {
      return;
    }

    sourceExpression = sourceExpression.valueOf();

    if (typeof sourceExpression !== 'string' || sourceExpression.length === 0) {
      throw new Error('"' + sourceExpression + '" is not a valid source expression. Only non-empty strings are allowed.');
    }

    if (!directiveInfo.hasUnsafes && config.unsafes.indexOf(sourceExpression) !== -1 || !directiveInfo.hasStrictDynamic && config.strictDynamics.indexOf(sourceExpression) !== -1) {
      throw new Error('"' + sourceExpression + '" does not make sense in ' + key + '. Remove it.');
    }

    if (config.mustQuote.indexOf(sourceExpression) !== -1) {
      throw new Error('"' + sourceExpression + '" must be quoted in ' + key + '. Change it to "\'' + sourceExpression + '\'" in your source list. Force this by enabling loose mode.');
    }
  });
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = __webpack_require__(16);
var isFunction = __webpack_require__(15);

var notAllowed = ['self', "'self'"].concat(config.unsafes);

module.exports = function pluginTypesCheck(key, value, options) {
  if (!Array.isArray(value) && value !== false) {
    throw new Error('"' + value + '" is not a valid value for ' + key + '. Use an array of strings.');
  }

  if (value.length === 0) {
    throw new Error(key + ' must have at least one value. To block everything, set ' + key + ' to ["\'none\'"].');
  }

  value.forEach(function (pluginType) {
    if (!pluginType) {
      throw new Error('"' + pluginType + '" is not a valid plugin type. Only non-empty strings are allowed.');
    }

    if (isFunction(pluginType)) {
      return;
    }

    pluginType = pluginType.valueOf();

    if (typeof pluginType !== 'string' || pluginType.length === 0) {
      throw new Error('"' + pluginType + '" is not a valid plugin type. Only non-empty strings are allowed.');
    }

    if (notAllowed.indexOf(pluginType) !== -1) {
      throw new Error('"' + pluginType + '" does not make sense in ' + key + '. Remove it.');
    }

    if (config.mustQuote.indexOf(pluginType) !== -1) {
      throw new Error('"' + pluginType + '" must be quoted in ' + key + '. Change it to "\'' + pluginType + '\'" in your source list. Force this by enabling loose mode.');
    }
  });
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(15);
var config = __webpack_require__(16);

module.exports = function sandboxCheck(key, value) {
  if (value === false) {
    return;
  }
  if (value === true) {
    return;
  }

  if (!Array.isArray(value)) {
    throw new Error('"' + value + '" is not a valid value for ' + key + '. Use an array of strings or `true`.');
  }

  if (value.length === 0) {
    throw new Error(key + ' must have at least one value. To block everything, set ' + key + ' to `true`.');
  }

  value.forEach(function (expression) {
    if (isFunction(expression)) {
      return;
    }

    if (config.sandboxDirectives.indexOf(expression) === -1) {
      throw new Error('"' + expression + '" is not a valid ' + key + ' directive. Remove it.');
    }
  });
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(15);
var isString = __webpack_require__(30);

module.exports = function (key, value) {
  if (value === false) {
    return;
  }
  if (isFunction(value)) {
    return;
  }

  if (!isString(value) || value.length === 0) {
    throw new Error('"' + value + '" is not a valid value for ' + key + '. Use a non-empty string.');
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(15);
var config = __webpack_require__(16);

module.exports = function requireSriForCheck(key, value) {
  if (!Array.isArray(value)) {
    throw new Error('"' + value + '" is not a valid value for ' + key + '. Use an array of strings.');
  }

  if (value.length === 0) {
    throw new Error(key + ' must have at least one value. To require nothing, omit the directive.');
  }

  value.forEach(function (expression) {
    if (isFunction(expression)) {
      return;
    }

    if (config.requireSriForValues.indexOf(expression) === -1) {
      throw new Error('"' + expression + '" is not a valid ' + key + ' value. Remove it.');
    }
  });
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isBoolean = __webpack_require__(33);

module.exports = function (key, value) {
  if (!isBoolean(value)) {
    throw new Error('"' + value + '" is not a valid value for ' + key + '. Use `true` or `false`.');
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isBoolean(value) {
  return Object.prototype.toString.call(value) === '[object Boolean]';
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isArray = Array.isArray || function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

var isDate = function isDate(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]';
};

var isRegex = function isRegex(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var has = Object.prototype.hasOwnProperty;
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
};

function dashCase(str) {
  return str.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g, function (s, i) {
    return (i > 0 ? '-' : '') + s.toLowerCase();
  });
}

function map(xs, f) {
  if (xs.map) {
    return xs.map(f);
  }
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

function reduce(xs, f, acc) {
  if (xs.reduce) {
    return xs.reduce(f, acc);
  }
  for (var i = 0; i < xs.length; i++) {
    acc = f(acc, xs[i], i);
  }
  return acc;
}

function walk(obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return obj;
  }
  if (isDate(obj) || isRegex(obj)) {
    return obj;
  }
  if (isArray(obj)) {
    return map(obj, walk);
  }
  return reduce(objectKeys(obj), function (acc, key) {
    var camel = dashCase(key);
    acc[camel] = walk(obj[key]);
    return acc;
  }, {});
}

module.exports = function (obj) {
  if (typeof obj === 'string') {
    return dashCase(obj);
  }
  return walk(obj);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(15);

module.exports = function containsFunction(obj) {
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    var value = obj[key];

    if (!Array.isArray(value)) {
      value = [value];
    }

    if (value.some(isFunction)) {
      return true;
    }
  }

  return false;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = __webpack_require__(16);

function goodBrowser() {
  return ['Content-Security-Policy'];
}

var handlers = {
  'Android Browser': function AndroidBrowser(browser, options) {
    if (parseFloat(browser.os.version) < 4.4 || options.disableAndroid) {
      return [];
    } else {
      return ['Content-Security-Policy'];
    }
  },

  Chrome: function Chrome(browser) {
    var version = parseFloat(browser.version);

    if (version >= 14 && version < 25) {
      return ['X-WebKit-CSP'];
    } else if (version >= 25) {
      return ['Content-Security-Policy'];
    } else {
      return [];
    }
  },

  'Chrome Mobile': function ChromeMobile(browser) {
    if (browser.os.family === 'iOS') {
      return ['Content-Security-Policy'];
    } else {
      return handlers['Android Browser'].apply(this, arguments);
    }
  },

  Firefox: function Firefox(browser) {
    var version = parseFloat(browser.version);

    if (version >= 23) {
      return ['Content-Security-Policy'];
    } else if (version >= 4 && version < 23) {
      return ['X-Content-Security-Policy'];
    } else {
      return [];
    }
  },

  'Firefox Mobile': function FirefoxMobile(browser) {
    // Handles both Firefox for Android and Firefox OS
    var family = browser.os.family;
    var version = parseFloat(browser.version);

    if (family === 'Firefox OS') {
      if (version >= 32) {
        return ['Content-Security-Policy'];
      } else {
        return ['X-Content-Security-Policy'];
      }
    } else if (family === 'Android') {
      if (version >= 25) {
        return ['Content-Security-Policy'];
      } else {
        return ['X-Content-Security-Policy'];
      }
    }

    return [];
  },

  'Firefox for iOS': goodBrowser,

  IE: function IE(browser) {
    var version = parseFloat(browser.version);
    var header = version < 12 ? 'X-Content-Security-Policy' : 'Content-Security-Policy';

    return [header];
  },

  'Microsoft Edge': goodBrowser,

  'Microsoft Edge Mobile': goodBrowser,

  Opera: function Opera(browser) {
    if (parseFloat(browser.version) >= 15) {
      return ['Content-Security-Policy'];
    } else {
      return [];
    }
  },

  Safari: function Safari(browser) {
    var version = parseFloat(browser.version);

    if (version >= 7) {
      return ['Content-Security-Policy'];
    } else if (version >= 6) {
      return ['X-WebKit-CSP'];
    } else {
      return [];
    }
  }
};

handlers['IE Mobile'] = handlers.IE;

module.exports = function getHeaderKeysForBrowser(browser, options) {
  var handler = handlers[browser.name];

  if (handler) {
    return handler(browser, options);
  } else {
    return config.allHeaders;
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createFirefoxPreCSP10Directives(directives, basePolicy) {
  var result = Object.assign({}, basePolicy);

  Object.keys(directives).forEach(function (key) {
    var value = directives[key];

    if (key === 'connectSrc') {
      result.xhrSrc = value;
    } else {
      result[key] = value;
    }

    if (key === 'scriptSrc') {
      var optionsValues = [];

      if (value.indexOf("'unsafe-inline'") !== -1) {
        optionsValues.push('inline-script');
      }
      if (value.indexOf("'unsafe-eval'") !== -1) {
        optionsValues.push('eval-script');
      }

      if (optionsValues.length !== 0) {
        result.options = optionsValues;
      }
    }
  });

  return result;
}

var handlers = {
  Firefox: function Firefox(browser, directives) {
    var version = parseFloat(browser.version);

    if (version >= 4 && version < 23) {
      var basePolicy = {};
      if (version < 5) {
        basePolicy.allow = ['*'];

        if (directives.defaultSrc) {
          basePolicy.allow = directives.defaultSrc;
          delete directives.defaultSrc;
        }
      } else {
        basePolicy.defaultSrc = ['*'];
      }

      return createFirefoxPreCSP10Directives(directives, basePolicy);
    } else {
      return directives;
    }
  },

  'Firefox Mobile': function FirefoxMobile(browser, directives) {
    // Handles both Firefox for Android and Firefox OS
    var family = browser.os.family;
    var version = parseFloat(browser.version);

    if (family === 'Firefox OS' && version < 32 || family === 'Android' && version < 25) {
      return createFirefoxPreCSP10Directives(directives, { defaultSrc: ['*'] });
    } else {
      return directives;
    }
  }
};

module.exports = function transformDirectivesForBrowser(browser, directives) {
  var handler = handlers[browser.name];

  if (handler) {
    return handler(browser, directives);
  } else {
    return directives;
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(15);

module.exports = function parseDynamicDirectives(directives, functionArgs) {
  var result = {};

  Object.keys(directives).forEach(function (key) {
    var value = directives[key];

    if (Array.isArray(value)) {
      result[key] = value.map(function (element) {
        if (isFunction(element)) {
          return element.apply(null, functionArgs);
        } else {
          return element;
        }
      });
    } else if (isFunction(value)) {
      result[key] = value.apply(null, functionArgs);
    } else if (value !== false) {
      result[key] = value;
    }
  });

  return result;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

/**
 * Content-Security-Policy directive definition for:
 * 1. script
 * 2. styles
 * 3. images
 * 4. external deps
*/

exports.default = {
	directives: {
		'default-src': ["'self'", 'https://*.flipkart.com', 'https://*.flixcart.com'],
		'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://cdn.ravenjs.com', 'https://*.flixcart.com', 'blob:', function (req) {
			return req.nonce ? '\'nonce-' + req.nonce + '\'' : '';
		}],
		'style-src': ["'self'", "'unsafe-inline'", 'https://*.flixcart.com'],
		'img-src': ["'self'", '*', 'data:', 'blob:'],
		'font-src': ["'self'", 'https://*.flixcart.com', 'data:'],
		'frame-src': ["'self'", 'https://*.flipkart.com', 'http://*.flipkart.com', 'blob:'],
		'worker-src': ["'self'", 'https://*.flipkart.com', 'blob:'],
		'connect-src': ["'self'", '*'],
		'base-uri': ["'self'"]
		// reportUri: 'https://csp.flipkart.com/csp'
	},
	browserSniff: false
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.UINT32 = __webpack_require__(43);
exports.UINT64 = __webpack_require__(44);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	h32: __webpack_require__(42),
	h64: __webpack_require__(45)
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
xxHash implementation in pure Javascript

Copyright (C) 2013, Pierre Curto
MIT license
*/
var UINT32 = __webpack_require__(40).UINT32;

/*
	Merged this sequence of method calls as it speeds up
	the calculations by a factor of 2
 */
// this.v1.add( other.multiply(PRIME32_2) ).rotl(13).multiply(PRIME32_1);
UINT32.prototype.xxh_update = function (low, high) {
	var b00 = PRIME32_2._low;
	var b16 = PRIME32_2._high;

	var c16, c00;
	c00 = low * b00;
	c16 = c00 >>> 16;

	c16 += high * b00;
	c16 &= 0xFFFF; // Not required but improves performance
	c16 += low * b16;

	var a00 = this._low + (c00 & 0xFFFF);
	var a16 = a00 >>> 16;

	a16 += this._high + (c16 & 0xFFFF);

	var v = a16 << 16 | a00 & 0xFFFF;
	v = v << 13 | v >>> 19;

	a00 = v & 0xFFFF;
	a16 = v >>> 16;

	b00 = PRIME32_1._low;
	b16 = PRIME32_1._high;

	c00 = a00 * b00;
	c16 = c00 >>> 16;

	c16 += a16 * b00;
	c16 &= 0xFFFF; // Not required but improves performance
	c16 += a00 * b16;

	this._low = c00 & 0xFFFF;
	this._high = c16 & 0xFFFF;
};

/*
 * Constants
 */
var PRIME32_1 = UINT32('2654435761');
var PRIME32_2 = UINT32('2246822519');
var PRIME32_3 = UINT32('3266489917');
var PRIME32_4 = UINT32('668265263');
var PRIME32_5 = UINT32('374761393');

/**
* Convert string to proper UTF-8 array
* @param str Input string
* @returns {Uint8Array} UTF8 array is returned as uint8 array
*/
function toUTF8Array(str) {
	var utf8 = [];
	for (var i = 0, n = str.length; i < n; i++) {
		var charcode = str.charCodeAt(i);
		if (charcode < 0x80) utf8.push(charcode);else if (charcode < 0x800) {
			utf8.push(0xc0 | charcode >> 6, 0x80 | charcode & 0x3f);
		} else if (charcode < 0xd800 || charcode >= 0xe000) {
			utf8.push(0xe0 | charcode >> 12, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
		}
		// surrogate pair
		else {
				i++;
				// UTF-16 encodes 0x10000-0x10FFFF by
				// subtracting 0x10000 and splitting the
				// 20 bits of 0x0-0xFFFFF into two halves
				charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
				utf8.push(0xf0 | charcode >> 18, 0x80 | charcode >> 12 & 0x3f, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
			}
	}

	return new Uint8Array(utf8);
}

/**
 * XXH object used as a constructor or a function
 * @constructor
 * or
 * @param {Object|String} input data
 * @param {Number|UINT32} seed
 * @return ThisExpression
 * or
 * @return {UINT32} xxHash
 */
function XXH() {
	if (arguments.length == 2) return new XXH(arguments[1]).update(arguments[0]).digest();

	if (!(this instanceof XXH)) return new XXH(arguments[0]);

	init.call(this, arguments[0]);
}

/**
 * Initialize the XXH instance with the given seed
 * @method init
 * @param {Number|Object} seed as a number or an unsigned 32 bits integer
 * @return ThisExpression
 */
function init(seed) {
	this.seed = seed instanceof UINT32 ? seed.clone() : UINT32(seed);
	this.v1 = this.seed.clone().add(PRIME32_1).add(PRIME32_2);
	this.v2 = this.seed.clone().add(PRIME32_2);
	this.v3 = this.seed.clone();
	this.v4 = this.seed.clone().subtract(PRIME32_1);
	this.total_len = 0;
	this.memsize = 0;
	this.memory = null;

	return this;
}
XXH.prototype.init = init;

/**
 * Add data to be computed for the XXH hash
 * @method update
 * @param {String|Buffer|ArrayBuffer} input as a string or nodejs Buffer or ArrayBuffer
 * @return ThisExpression
 */
XXH.prototype.update = function (input) {
	var isString = typeof input == 'string';
	var isArrayBuffer;

	// Convert all strings to utf-8 first (issue #5)
	if (isString) {
		input = toUTF8Array(input);
		isString = false;
		isArrayBuffer = true;
	}

	if (typeof ArrayBuffer !== "undefined" && input instanceof ArrayBuffer) {
		isArrayBuffer = true;
		input = new Uint8Array(input);
	}

	var p = 0;
	var len = input.length;
	var bEnd = p + len;

	if (len == 0) return this;

	this.total_len += len;

	if (this.memsize == 0) {
		if (isString) {
			this.memory = '';
		} else if (isArrayBuffer) {
			this.memory = new Uint8Array(16);
		} else {
			this.memory = new Buffer(16);
		}
	}

	if (this.memsize + len < 16) // fill in tmp buffer
		{
			// XXH_memcpy(this.memory + this.memsize, input, len)
			if (isString) {
				this.memory += input;
			} else if (isArrayBuffer) {
				this.memory.set(input.subarray(0, len), this.memsize);
			} else {
				input.copy(this.memory, this.memsize, 0, len);
			}

			this.memsize += len;
			return this;
		}

	if (this.memsize > 0) // some data left from previous update
		{
			// XXH_memcpy(this.memory + this.memsize, input, 16-this.memsize);
			if (isString) {
				this.memory += input.slice(0, 16 - this.memsize);
			} else if (isArrayBuffer) {
				this.memory.set(input.subarray(0, 16 - this.memsize), this.memsize);
			} else {
				input.copy(this.memory, this.memsize, 0, 16 - this.memsize);
			}

			var p32 = 0;
			if (isString) {
				this.v1.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
				p32 += 4;
				this.v2.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
				p32 += 4;
				this.v3.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
				p32 += 4;
				this.v4.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
			} else {
				this.v1.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
				p32 += 4;
				this.v2.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
				p32 += 4;
				this.v3.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
				p32 += 4;
				this.v4.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
			}

			p += 16 - this.memsize;
			this.memsize = 0;
			if (isString) this.memory = '';
		}

	if (p <= bEnd - 16) {
		var limit = bEnd - 16;

		do {
			if (isString) {
				this.v1.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
				p += 4;
				this.v2.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
				p += 4;
				this.v3.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
				p += 4;
				this.v4.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
			} else {
				this.v1.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
				p += 4;
				this.v2.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
				p += 4;
				this.v3.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
				p += 4;
				this.v4.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
			}
			p += 4;
		} while (p <= limit);
	}

	if (p < bEnd) {
		// XXH_memcpy(this.memory, p, bEnd-p);
		if (isString) {
			this.memory += input.slice(p);
		} else if (isArrayBuffer) {
			this.memory.set(input.subarray(p, bEnd), this.memsize);
		} else {
			input.copy(this.memory, this.memsize, p, bEnd);
		}

		this.memsize = bEnd - p;
	}

	return this;
};

/**
 * Finalize the XXH computation. The XXH instance is ready for reuse for the given seed
 * @method digest
 * @return {UINT32} xxHash
 */
XXH.prototype.digest = function () {
	var input = this.memory;
	var isString = typeof input == 'string';
	var p = 0;
	var bEnd = this.memsize;
	var h32, h;
	var u = new UINT32();

	if (this.total_len >= 16) {
		h32 = this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18))));
	} else {
		h32 = this.seed.clone().add(PRIME32_5);
	}

	h32.add(u.fromNumber(this.total_len));

	while (p <= bEnd - 4) {
		if (isString) {
			u.fromBits(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
		} else {
			u.fromBits(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
		}
		h32.add(u.multiply(PRIME32_3)).rotl(17).multiply(PRIME32_4);
		p += 4;
	}

	while (p < bEnd) {
		u.fromBits(isString ? input.charCodeAt(p++) : input[p++], 0);
		h32.add(u.multiply(PRIME32_5)).rotl(11).multiply(PRIME32_1);
	}

	h = h32.clone().shiftRight(15);
	h32.xor(h).multiply(PRIME32_2);

	h = h32.clone().shiftRight(13);
	h32.xor(h).multiply(PRIME32_3);

	h = h32.clone().shiftRight(16);
	h32.xor(h);

	// Reset the state
	this.init(this.seed);

	return h32;
};

module.exports = XXH;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
	C-like unsigned 32 bits integers in Javascript
	Copyright (C) 2013, Pierre Curto
	MIT license
 */
;(function (root) {

	// Local cache for typical radices
	var radixPowerCache = {
		36: UINT32(Math.pow(36, 5)),
		16: UINT32(Math.pow(16, 7)),
		10: UINT32(Math.pow(10, 9)),
		2: UINT32(Math.pow(2, 30))
	};
	var radixCache = {
		36: UINT32(36),
		16: UINT32(16),
		10: UINT32(10),
		2: UINT32(2)

		/**
   *	Represents an unsigned 32 bits integer
   * @constructor
   * @param {Number|String|Number} low bits     | integer as a string 		 | integer as a number
   * @param {Number|Number|Undefined} high bits | radix (optional, default=10)
   * @return 
   */
	};function UINT32(l, h) {
		if (!(this instanceof UINT32)) return new UINT32(l, h);

		this._low = 0;
		this._high = 0;
		this.remainder = null;
		if (typeof h == 'undefined') return fromNumber.call(this, l);

		if (typeof l == 'string') return fromString.call(this, l, h);

		fromBits.call(this, l, h);
	}

	/**
  * Set the current _UINT32_ object with its low and high bits
  * @method fromBits
  * @param {Number} low bits
  * @param {Number} high bits
  * @return ThisExpression
  */
	function fromBits(l, h) {
		this._low = l | 0;
		this._high = h | 0;

		return this;
	}
	UINT32.prototype.fromBits = fromBits;

	/**
  * Set the current _UINT32_ object from a number
  * @method fromNumber
  * @param {Number} number
  * @return ThisExpression
  */
	function fromNumber(value) {
		this._low = value & 0xFFFF;
		this._high = value >>> 16;

		return this;
	}
	UINT32.prototype.fromNumber = fromNumber;

	/**
  * Set the current _UINT32_ object from a string
  * @method fromString
  * @param {String} integer as a string
  * @param {Number} radix (optional, default=10)
  * @return ThisExpression
  */
	function fromString(s, radix) {
		var value = parseInt(s, radix || 10);

		this._low = value & 0xFFFF;
		this._high = value >>> 16;

		return this;
	}
	UINT32.prototype.fromString = fromString;

	/**
  * Convert this _UINT32_ to a number
  * @method toNumber
  * @return {Number} the converted UINT32
  */
	UINT32.prototype.toNumber = function () {
		return this._high * 65536 + this._low;
	};

	/**
  * Convert this _UINT32_ to a string
  * @method toString
  * @param {Number} radix (optional, default=10)
  * @return {String} the converted UINT32
  */
	UINT32.prototype.toString = function (radix) {
		return this.toNumber().toString(radix || 10);
	};

	/**
  * Add two _UINT32_. The current _UINT32_ stores the result
  * @method add
  * @param {Object} other UINT32
  * @return ThisExpression
  */
	UINT32.prototype.add = function (other) {
		var a00 = this._low + other._low;
		var a16 = a00 >>> 16;

		a16 += this._high + other._high;

		this._low = a00 & 0xFFFF;
		this._high = a16 & 0xFFFF;

		return this;
	};

	/**
  * Subtract two _UINT32_. The current _UINT32_ stores the result
  * @method subtract
  * @param {Object} other UINT32
  * @return ThisExpression
  */
	UINT32.prototype.subtract = function (other) {
		//TODO inline
		return this.add(other.clone().negate());
	};

	/**
  * Multiply two _UINT32_. The current _UINT32_ stores the result
  * @method multiply
  * @param {Object} other UINT32
  * @return ThisExpression
  */
	UINT32.prototype.multiply = function (other) {
		/*
  	a = a00 + a16
  	b = b00 + b16
  	a*b = (a00 + a16)(b00 + b16)
  		= a00b00 + a00b16 + a16b00 + a16b16
  		a16b16 overflows the 32bits
   */
		var a16 = this._high;
		var a00 = this._low;
		var b16 = other._high;
		var b00 = other._low;

		/* Removed to increase speed under normal circumstances (i.e. not multiplying by 0 or 1)
  		// this == 0 or other == 1: nothing to do
  		if ((a00 == 0 && a16 == 0) || (b00 == 1 && b16 == 0)) return this
  
  		// other == 0 or this == 1: this = other
  		if ((b00 == 0 && b16 == 0) || (a00 == 1 && a16 == 0)) {
  			this._low = other._low
  			this._high = other._high
  			return this
  		}
  */

		var c16, c00;
		c00 = a00 * b00;
		c16 = c00 >>> 16;

		c16 += a16 * b00;
		c16 &= 0xFFFF; // Not required but improves performance
		c16 += a00 * b16;

		this._low = c00 & 0xFFFF;
		this._high = c16 & 0xFFFF;

		return this;
	};

	/**
  * Divide two _UINT32_. The current _UINT32_ stores the result.
  * The remainder is made available as the _remainder_ property on
  * the _UINT32_ object. It can be null, meaning there are no remainder.
  * @method div
  * @param {Object} other UINT32
  * @return ThisExpression
  */
	UINT32.prototype.div = function (other) {
		if (other._low == 0 && other._high == 0) throw Error('division by zero');

		// other == 1
		if (other._high == 0 && other._low == 1) {
			this.remainder = new UINT32(0);
			return this;
		}

		// other > this: 0
		if (other.gt(this)) {
			this.remainder = this.clone();
			this._low = 0;
			this._high = 0;
			return this;
		}
		// other == this: 1
		if (this.eq(other)) {
			this.remainder = new UINT32(0);
			this._low = 1;
			this._high = 0;
			return this;
		}

		// Shift the divisor left until it is higher than the dividend
		var _other = other.clone();
		var i = -1;
		while (!this.lt(_other)) {
			// High bit can overflow the default 16bits
			// Its ok since we right shift after this loop
			// The overflown bit must be kept though
			_other.shiftLeft(1, true);
			i++;
		}

		// Set the remainder
		this.remainder = this.clone();
		// Initialize the current result to 0
		this._low = 0;
		this._high = 0;
		for (; i >= 0; i--) {
			_other.shiftRight(1);
			// If shifted divisor is smaller than the dividend
			// then subtract it from the dividend
			if (!this.remainder.lt(_other)) {
				this.remainder.subtract(_other);
				// Update the current result
				if (i >= 16) {
					this._high |= 1 << i - 16;
				} else {
					this._low |= 1 << i;
				}
			}
		}

		return this;
	};

	/**
  * Negate the current _UINT32_
  * @method negate
  * @return ThisExpression
  */
	UINT32.prototype.negate = function () {
		var v = (~this._low & 0xFFFF) + 1;
		this._low = v & 0xFFFF;
		this._high = ~this._high + (v >>> 16) & 0xFFFF;

		return this;
	};

	/**
  * Equals
  * @method eq
  * @param {Object} other UINT32
  * @return {Boolean}
  */
	UINT32.prototype.equals = UINT32.prototype.eq = function (other) {
		return this._low == other._low && this._high == other._high;
	};

	/**
  * Greater than (strict)
  * @method gt
  * @param {Object} other UINT32
  * @return {Boolean}
  */
	UINT32.prototype.greaterThan = UINT32.prototype.gt = function (other) {
		if (this._high > other._high) return true;
		if (this._high < other._high) return false;
		return this._low > other._low;
	};

	/**
  * Less than (strict)
  * @method lt
  * @param {Object} other UINT32
  * @return {Boolean}
  */
	UINT32.prototype.lessThan = UINT32.prototype.lt = function (other) {
		if (this._high < other._high) return true;
		if (this._high > other._high) return false;
		return this._low < other._low;
	};

	/**
  * Bitwise OR
  * @method or
  * @param {Object} other UINT32
  * @return ThisExpression
  */
	UINT32.prototype.or = function (other) {
		this._low |= other._low;
		this._high |= other._high;

		return this;
	};

	/**
  * Bitwise AND
  * @method and
  * @param {Object} other UINT32
  * @return ThisExpression
  */
	UINT32.prototype.and = function (other) {
		this._low &= other._low;
		this._high &= other._high;

		return this;
	};

	/**
  * Bitwise NOT
  * @method not
  * @return ThisExpression
  */
	UINT32.prototype.not = function () {
		this._low = ~this._low & 0xFFFF;
		this._high = ~this._high & 0xFFFF;

		return this;
	};

	/**
  * Bitwise XOR
  * @method xor
  * @param {Object} other UINT32
  * @return ThisExpression
  */
	UINT32.prototype.xor = function (other) {
		this._low ^= other._low;
		this._high ^= other._high;

		return this;
	};

	/**
  * Bitwise shift right
  * @method shiftRight
  * @param {Number} number of bits to shift
  * @return ThisExpression
  */
	UINT32.prototype.shiftRight = UINT32.prototype.shiftr = function (n) {
		if (n > 16) {
			this._low = this._high >> n - 16;
			this._high = 0;
		} else if (n == 16) {
			this._low = this._high;
			this._high = 0;
		} else {
			this._low = this._low >> n | this._high << 16 - n & 0xFFFF;
			this._high >>= n;
		}

		return this;
	};

	/**
  * Bitwise shift left
  * @method shiftLeft
  * @param {Number} number of bits to shift
  * @param {Boolean} allow overflow
  * @return ThisExpression
  */
	UINT32.prototype.shiftLeft = UINT32.prototype.shiftl = function (n, allowOverflow) {
		if (n > 16) {
			this._high = this._low << n - 16;
			this._low = 0;
			if (!allowOverflow) {
				this._high &= 0xFFFF;
			}
		} else if (n == 16) {
			this._high = this._low;
			this._low = 0;
		} else {
			this._high = this._high << n | this._low >> 16 - n;
			this._low = this._low << n & 0xFFFF;
			if (!allowOverflow) {
				// Overflow only allowed on the high bits...
				this._high &= 0xFFFF;
			}
		}

		return this;
	};

	/**
  * Bitwise rotate left
  * @method rotl
  * @param {Number} number of bits to rotate
  * @return ThisExpression
  */
	UINT32.prototype.rotateLeft = UINT32.prototype.rotl = function (n) {
		var v = this._high << 16 | this._low;
		v = v << n | v >>> 32 - n;
		this._low = v & 0xFFFF;
		this._high = v >>> 16;

		return this;
	};

	/**
  * Bitwise rotate right
  * @method rotr
  * @param {Number} number of bits to rotate
  * @return ThisExpression
  */
	UINT32.prototype.rotateRight = UINT32.prototype.rotr = function (n) {
		var v = this._high << 16 | this._low;
		v = v >>> n | v << 32 - n;
		this._low = v & 0xFFFF;
		this._high = v >>> 16;

		return this;
	};

	/**
  * Clone the current _UINT32_
  * @method clone
  * @return {Object} cloned UINT32
  */
	UINT32.prototype.clone = function () {
		return new UINT32(this._low, this._high);
	};

	if (true) {
		// AMD / RequireJS
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return UINT32;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
		// Node.js
		module.exports = UINT32;
	} else {
		// Browser
		root['UINT32'] = UINT32;
	}
})(undefined);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
	C-like unsigned 64 bits integers in Javascript
	Copyright (C) 2013, Pierre Curto
	MIT license
 */
;(function (root) {

	// Local cache for typical radices
	var radixPowerCache = {
		16: UINT64(Math.pow(16, 5)),
		10: UINT64(Math.pow(10, 5)),
		2: UINT64(Math.pow(2, 5))
	};
	var radixCache = {
		16: UINT64(16),
		10: UINT64(10),
		2: UINT64(2)

		/**
   *	Represents an unsigned 64 bits integer
   * @constructor
   * @param {Number} first low bits (8)
   * @param {Number} second low bits (8)
   * @param {Number} first high bits (8)
   * @param {Number} second high bits (8)
   * or
   * @param {Number} low bits (32)
   * @param {Number} high bits (32)
   * or
   * @param {String|Number} integer as a string 		 | integer as a number
   * @param {Number|Undefined} radix (optional, default=10)
   * @return 
   */
	};function UINT64(a00, a16, a32, a48) {
		if (!(this instanceof UINT64)) return new UINT64(a00, a16, a32, a48);

		this.remainder = null;
		if (typeof a00 == 'string') return fromString.call(this, a00, a16);

		if (typeof a16 == 'undefined') return fromNumber.call(this, a00);

		fromBits.apply(this, arguments);
	}

	/**
  * Set the current _UINT64_ object with its low and high bits
  * @method fromBits
  * @param {Number} first low bits (8)
  * @param {Number} second low bits (8)
  * @param {Number} first high bits (8)
  * @param {Number} second high bits (8)
  * or
  * @param {Number} low bits (32)
  * @param {Number} high bits (32)
  * @return ThisExpression
  */
	function fromBits(a00, a16, a32, a48) {
		if (typeof a32 == 'undefined') {
			this._a00 = a00 & 0xFFFF;
			this._a16 = a00 >>> 16;
			this._a32 = a16 & 0xFFFF;
			this._a48 = a16 >>> 16;
			return this;
		}

		this._a00 = a00 | 0;
		this._a16 = a16 | 0;
		this._a32 = a32 | 0;
		this._a48 = a48 | 0;

		return this;
	}
	UINT64.prototype.fromBits = fromBits;

	/**
  * Set the current _UINT64_ object from a number
  * @method fromNumber
  * @param {Number} number
  * @return ThisExpression
  */
	function fromNumber(value) {
		this._a00 = value & 0xFFFF;
		this._a16 = value >>> 16;
		this._a32 = 0;
		this._a48 = 0;

		return this;
	}
	UINT64.prototype.fromNumber = fromNumber;

	/**
  * Set the current _UINT64_ object from a string
  * @method fromString
  * @param {String} integer as a string
  * @param {Number} radix (optional, default=10)
  * @return ThisExpression
  */
	function fromString(s, radix) {
		radix = radix || 10;

		this._a00 = 0;
		this._a16 = 0;
		this._a32 = 0;
		this._a48 = 0;

		/*
  	In Javascript, bitwise operators only operate on the first 32 bits 
  	of a number, even though parseInt() encodes numbers with a 53 bits 
  	mantissa.
  	Therefore UINT64(<Number>) can only work on 32 bits.
  	The radix maximum value is 36 (as per ECMA specs) (26 letters + 10 digits)
  	maximum input value is m = 32bits as 1 = 2^32 - 1
  	So the maximum substring length n is:
  	36^(n+1) - 1 = 2^32 - 1
  	36^(n+1) = 2^32
  	(n+1)ln(36) = 32ln(2)
  	n = 32ln(2)/ln(36) - 1
  	n = 5.189644915687692
  	n = 5
   */
		var radixUint = radixPowerCache[radix] || new UINT64(Math.pow(radix, 5));

		for (var i = 0, len = s.length; i < len; i += 5) {
			var size = Math.min(5, len - i);
			var value = parseInt(s.slice(i, i + size), radix);
			this.multiply(size < 5 ? new UINT64(Math.pow(radix, size)) : radixUint).add(new UINT64(value));
		}

		return this;
	}
	UINT64.prototype.fromString = fromString;

	/**
  * Convert this _UINT64_ to a number (last 32 bits are dropped)
  * @method toNumber
  * @return {Number} the converted UINT64
  */
	UINT64.prototype.toNumber = function () {
		return this._a16 * 65536 + this._a00;
	};

	/**
  * Convert this _UINT64_ to a string
  * @method toString
  * @param {Number} radix (optional, default=10)
  * @return {String} the converted UINT64
  */
	UINT64.prototype.toString = function (radix) {
		radix = radix || 10;
		var radixUint = radixCache[radix] || new UINT64(radix);

		if (!this.gt(radixUint)) return this.toNumber().toString(radix);

		var self = this.clone();
		var res = new Array(64);
		for (var i = 63; i >= 0; i--) {
			self.div(radixUint);
			res[i] = self.remainder.toNumber().toString(radix);
			if (!self.gt(radixUint)) break;
		}
		res[i - 1] = self.toNumber().toString(radix);

		return res.join('');
	};

	/**
  * Add two _UINT64_. The current _UINT64_ stores the result
  * @method add
  * @param {Object} other UINT64
  * @return ThisExpression
  */
	UINT64.prototype.add = function (other) {
		var a00 = this._a00 + other._a00;

		var a16 = a00 >>> 16;
		a16 += this._a16 + other._a16;

		var a32 = a16 >>> 16;
		a32 += this._a32 + other._a32;

		var a48 = a32 >>> 16;
		a48 += this._a48 + other._a48;

		this._a00 = a00 & 0xFFFF;
		this._a16 = a16 & 0xFFFF;
		this._a32 = a32 & 0xFFFF;
		this._a48 = a48 & 0xFFFF;

		return this;
	};

	/**
  * Subtract two _UINT64_. The current _UINT64_ stores the result
  * @method subtract
  * @param {Object} other UINT64
  * @return ThisExpression
  */
	UINT64.prototype.subtract = function (other) {
		return this.add(other.clone().negate());
	};

	/**
  * Multiply two _UINT64_. The current _UINT64_ stores the result
  * @method multiply
  * @param {Object} other UINT64
  * @return ThisExpression
  */
	UINT64.prototype.multiply = function (other) {
		/*
  	a = a00 + a16 + a32 + a48
  	b = b00 + b16 + b32 + b48
  	a*b = (a00 + a16 + a32 + a48)(b00 + b16 + b32 + b48)
  		= a00b00 + a00b16 + a00b32 + a00b48
  		+ a16b00 + a16b16 + a16b32 + a16b48
  		+ a32b00 + a32b16 + a32b32 + a32b48
  		+ a48b00 + a48b16 + a48b32 + a48b48
  		a16b48, a32b32, a48b16, a48b32 and a48b48 overflow the 64 bits
  	so it comes down to:
  	a*b	= a00b00 + a00b16 + a00b32 + a00b48
  		+ a16b00 + a16b16 + a16b32
  		+ a32b00 + a32b16
  		+ a48b00
  		= a00b00
  		+ a00b16 + a16b00
  		+ a00b32 + a16b16 + a32b00
  		+ a00b48 + a16b32 + a32b16 + a48b00
   */
		var a00 = this._a00;
		var a16 = this._a16;
		var a32 = this._a32;
		var a48 = this._a48;
		var b00 = other._a00;
		var b16 = other._a16;
		var b32 = other._a32;
		var b48 = other._a48;

		var c00 = a00 * b00;

		var c16 = c00 >>> 16;
		c16 += a00 * b16;
		var c32 = c16 >>> 16;
		c16 &= 0xFFFF;
		c16 += a16 * b00;

		c32 += c16 >>> 16;
		c32 += a00 * b32;
		var c48 = c32 >>> 16;
		c32 &= 0xFFFF;
		c32 += a16 * b16;
		c48 += c32 >>> 16;
		c32 &= 0xFFFF;
		c32 += a32 * b00;

		c48 += c32 >>> 16;
		c48 += a00 * b48;
		c48 &= 0xFFFF;
		c48 += a16 * b32;
		c48 &= 0xFFFF;
		c48 += a32 * b16;
		c48 &= 0xFFFF;
		c48 += a48 * b00;

		this._a00 = c00 & 0xFFFF;
		this._a16 = c16 & 0xFFFF;
		this._a32 = c32 & 0xFFFF;
		this._a48 = c48 & 0xFFFF;

		return this;
	};

	/**
  * Divide two _UINT64_. The current _UINT64_ stores the result.
  * The remainder is made available as the _remainder_ property on
  * the _UINT64_ object. It can be null, meaning there are no remainder.
  * @method div
  * @param {Object} other UINT64
  * @return ThisExpression
  */
	UINT64.prototype.div = function (other) {
		if (other._a16 == 0 && other._a32 == 0 && other._a48 == 0) {
			if (other._a00 == 0) throw Error('division by zero');

			// other == 1: this
			if (other._a00 == 1) {
				this.remainder = new UINT64(0);
				return this;
			}
		}

		// other > this: 0
		if (other.gt(this)) {
			this.remainder = this.clone();
			this._a00 = 0;
			this._a16 = 0;
			this._a32 = 0;
			this._a48 = 0;
			return this;
		}
		// other == this: 1
		if (this.eq(other)) {
			this.remainder = new UINT64(0);
			this._a00 = 1;
			this._a16 = 0;
			this._a32 = 0;
			this._a48 = 0;
			return this;
		}

		// Shift the divisor left until it is higher than the dividend
		var _other = other.clone();
		var i = -1;
		while (!this.lt(_other)) {
			// High bit can overflow the default 16bits
			// Its ok since we right shift after this loop
			// The overflown bit must be kept though
			_other.shiftLeft(1, true);
			i++;
		}

		// Set the remainder
		this.remainder = this.clone();
		// Initialize the current result to 0
		this._a00 = 0;
		this._a16 = 0;
		this._a32 = 0;
		this._a48 = 0;
		for (; i >= 0; i--) {
			_other.shiftRight(1);
			// If shifted divisor is smaller than the dividend
			// then subtract it from the dividend
			if (!this.remainder.lt(_other)) {
				this.remainder.subtract(_other);
				// Update the current result
				if (i >= 48) {
					this._a48 |= 1 << i - 48;
				} else if (i >= 32) {
					this._a32 |= 1 << i - 32;
				} else if (i >= 16) {
					this._a16 |= 1 << i - 16;
				} else {
					this._a00 |= 1 << i;
				}
			}
		}

		return this;
	};

	/**
  * Negate the current _UINT64_
  * @method negate
  * @return ThisExpression
  */
	UINT64.prototype.negate = function () {
		var v = (~this._a00 & 0xFFFF) + 1;
		this._a00 = v & 0xFFFF;
		v = (~this._a16 & 0xFFFF) + (v >>> 16);
		this._a16 = v & 0xFFFF;
		v = (~this._a32 & 0xFFFF) + (v >>> 16);
		this._a32 = v & 0xFFFF;
		this._a48 = ~this._a48 + (v >>> 16) & 0xFFFF;

		return this;
	};

	/**
 	 * @method eq
  * @param {Object} other UINT64
  * @return {Boolean}
  */
	UINT64.prototype.equals = UINT64.prototype.eq = function (other) {
		return this._a48 == other._a48 && this._a00 == other._a00 && this._a32 == other._a32 && this._a16 == other._a16;
	};

	/**
  * Greater than (strict)
  * @method gt
  * @param {Object} other UINT64
  * @return {Boolean}
  */
	UINT64.prototype.greaterThan = UINT64.prototype.gt = function (other) {
		if (this._a48 > other._a48) return true;
		if (this._a48 < other._a48) return false;
		if (this._a32 > other._a32) return true;
		if (this._a32 < other._a32) return false;
		if (this._a16 > other._a16) return true;
		if (this._a16 < other._a16) return false;
		return this._a00 > other._a00;
	};

	/**
  * Less than (strict)
  * @method lt
  * @param {Object} other UINT64
  * @return {Boolean}
  */
	UINT64.prototype.lessThan = UINT64.prototype.lt = function (other) {
		if (this._a48 < other._a48) return true;
		if (this._a48 > other._a48) return false;
		if (this._a32 < other._a32) return true;
		if (this._a32 > other._a32) return false;
		if (this._a16 < other._a16) return true;
		if (this._a16 > other._a16) return false;
		return this._a00 < other._a00;
	};

	/**
  * Bitwise OR
  * @method or
  * @param {Object} other UINT64
  * @return ThisExpression
  */
	UINT64.prototype.or = function (other) {
		this._a00 |= other._a00;
		this._a16 |= other._a16;
		this._a32 |= other._a32;
		this._a48 |= other._a48;

		return this;
	};

	/**
  * Bitwise AND
  * @method and
  * @param {Object} other UINT64
  * @return ThisExpression
  */
	UINT64.prototype.and = function (other) {
		this._a00 &= other._a00;
		this._a16 &= other._a16;
		this._a32 &= other._a32;
		this._a48 &= other._a48;

		return this;
	};

	/**
  * Bitwise XOR
  * @method xor
  * @param {Object} other UINT64
  * @return ThisExpression
  */
	UINT64.prototype.xor = function (other) {
		this._a00 ^= other._a00;
		this._a16 ^= other._a16;
		this._a32 ^= other._a32;
		this._a48 ^= other._a48;

		return this;
	};

	/**
  * Bitwise NOT
  * @method not
  * @return ThisExpression
  */
	UINT64.prototype.not = function () {
		this._a00 = ~this._a00 & 0xFFFF;
		this._a16 = ~this._a16 & 0xFFFF;
		this._a32 = ~this._a32 & 0xFFFF;
		this._a48 = ~this._a48 & 0xFFFF;

		return this;
	};

	/**
  * Bitwise shift right
  * @method shiftRight
  * @param {Number} number of bits to shift
  * @return ThisExpression
  */
	UINT64.prototype.shiftRight = UINT64.prototype.shiftr = function (n) {
		n %= 64;
		if (n >= 48) {
			this._a00 = this._a48 >> n - 48;
			this._a16 = 0;
			this._a32 = 0;
			this._a48 = 0;
		} else if (n >= 32) {
			n -= 32;
			this._a00 = (this._a32 >> n | this._a48 << 16 - n) & 0xFFFF;
			this._a16 = this._a48 >> n & 0xFFFF;
			this._a32 = 0;
			this._a48 = 0;
		} else if (n >= 16) {
			n -= 16;
			this._a00 = (this._a16 >> n | this._a32 << 16 - n) & 0xFFFF;
			this._a16 = (this._a32 >> n | this._a48 << 16 - n) & 0xFFFF;
			this._a32 = this._a48 >> n & 0xFFFF;
			this._a48 = 0;
		} else {
			this._a00 = (this._a00 >> n | this._a16 << 16 - n) & 0xFFFF;
			this._a16 = (this._a16 >> n | this._a32 << 16 - n) & 0xFFFF;
			this._a32 = (this._a32 >> n | this._a48 << 16 - n) & 0xFFFF;
			this._a48 = this._a48 >> n & 0xFFFF;
		}

		return this;
	};

	/**
  * Bitwise shift left
  * @method shiftLeft
  * @param {Number} number of bits to shift
  * @param {Boolean} allow overflow
  * @return ThisExpression
  */
	UINT64.prototype.shiftLeft = UINT64.prototype.shiftl = function (n, allowOverflow) {
		n %= 64;
		if (n >= 48) {
			this._a48 = this._a00 << n - 48;
			this._a32 = 0;
			this._a16 = 0;
			this._a00 = 0;
		} else if (n >= 32) {
			n -= 32;
			this._a48 = this._a16 << n | this._a00 >> 16 - n;
			this._a32 = this._a00 << n & 0xFFFF;
			this._a16 = 0;
			this._a00 = 0;
		} else if (n >= 16) {
			n -= 16;
			this._a48 = this._a32 << n | this._a16 >> 16 - n;
			this._a32 = (this._a16 << n | this._a00 >> 16 - n) & 0xFFFF;
			this._a16 = this._a00 << n & 0xFFFF;
			this._a00 = 0;
		} else {
			this._a48 = this._a48 << n | this._a32 >> 16 - n;
			this._a32 = (this._a32 << n | this._a16 >> 16 - n) & 0xFFFF;
			this._a16 = (this._a16 << n | this._a00 >> 16 - n) & 0xFFFF;
			this._a00 = this._a00 << n & 0xFFFF;
		}
		if (!allowOverflow) {
			this._a48 &= 0xFFFF;
		}

		return this;
	};

	/**
  * Bitwise rotate left
  * @method rotl
  * @param {Number} number of bits to rotate
  * @return ThisExpression
  */
	UINT64.prototype.rotateLeft = UINT64.prototype.rotl = function (n) {
		n %= 64;
		if (n == 0) return this;
		if (n >= 32) {
			// A.B.C.D
			// B.C.D.A rotl(16)
			// C.D.A.B rotl(32)
			var v = this._a00;
			this._a00 = this._a32;
			this._a32 = v;
			v = this._a48;
			this._a48 = this._a16;
			this._a16 = v;
			if (n == 32) return this;
			n -= 32;
		}

		var high = this._a48 << 16 | this._a32;
		var low = this._a16 << 16 | this._a00;

		var _high = high << n | low >>> 32 - n;
		var _low = low << n | high >>> 32 - n;

		this._a00 = _low & 0xFFFF;
		this._a16 = _low >>> 16;
		this._a32 = _high & 0xFFFF;
		this._a48 = _high >>> 16;

		return this;
	};

	/**
  * Bitwise rotate right
  * @method rotr
  * @param {Number} number of bits to rotate
  * @return ThisExpression
  */
	UINT64.prototype.rotateRight = UINT64.prototype.rotr = function (n) {
		n %= 64;
		if (n == 0) return this;
		if (n >= 32) {
			// A.B.C.D
			// D.A.B.C rotr(16)
			// C.D.A.B rotr(32)
			var v = this._a00;
			this._a00 = this._a32;
			this._a32 = v;
			v = this._a48;
			this._a48 = this._a16;
			this._a16 = v;
			if (n == 32) return this;
			n -= 32;
		}

		var high = this._a48 << 16 | this._a32;
		var low = this._a16 << 16 | this._a00;

		var _high = high >>> n | low << 32 - n;
		var _low = low >>> n | high << 32 - n;

		this._a00 = _low & 0xFFFF;
		this._a16 = _low >>> 16;
		this._a32 = _high & 0xFFFF;
		this._a48 = _high >>> 16;

		return this;
	};

	/**
  * Clone the current _UINT64_
  * @method clone
  * @return {Object} cloned UINT64
  */
	UINT64.prototype.clone = function () {
		return new UINT64(this._a00, this._a16, this._a32, this._a48);
	};

	if (true) {
		// AMD / RequireJS
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return UINT64;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
		// Node.js
		module.exports = UINT64;
	} else {
		// Browser
		root['UINT64'] = UINT64;
	}
})(undefined);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
xxHash64 implementation in pure Javascript

Copyright (C) 2016, Pierre Curto
MIT license
*/
var UINT64 = __webpack_require__(40).UINT64;

/*
 * Constants
 */
var PRIME64_1 = UINT64('11400714785074694791');
var PRIME64_2 = UINT64('14029467366897019727');
var PRIME64_3 = UINT64('1609587929392839161');
var PRIME64_4 = UINT64('9650029242287828579');
var PRIME64_5 = UINT64('2870177450012600261');

/**
* Convert string to proper UTF-8 array
* @param str Input string
* @returns {Uint8Array} UTF8 array is returned as uint8 array
*/
function toUTF8Array(str) {
	var utf8 = [];
	for (var i = 0, n = str.length; i < n; i++) {
		var charcode = str.charCodeAt(i);
		if (charcode < 0x80) utf8.push(charcode);else if (charcode < 0x800) {
			utf8.push(0xc0 | charcode >> 6, 0x80 | charcode & 0x3f);
		} else if (charcode < 0xd800 || charcode >= 0xe000) {
			utf8.push(0xe0 | charcode >> 12, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
		}
		// surrogate pair
		else {
				i++;
				// UTF-16 encodes 0x10000-0x10FFFF by
				// subtracting 0x10000 and splitting the
				// 20 bits of 0x0-0xFFFFF into two halves
				charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
				utf8.push(0xf0 | charcode >> 18, 0x80 | charcode >> 12 & 0x3f, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
			}
	}

	return new Uint8Array(utf8);
}

/**
 * XXH64 object used as a constructor or a function
 * @constructor
 * or
 * @param {Object|String} input data
 * @param {Number|UINT64} seed
 * @return ThisExpression
 * or
 * @return {UINT64} xxHash
 */
function XXH64() {
	if (arguments.length == 2) return new XXH64(arguments[1]).update(arguments[0]).digest();

	if (!(this instanceof XXH64)) return new XXH64(arguments[0]);

	init.call(this, arguments[0]);
}

/**
 * Initialize the XXH64 instance with the given seed
 * @method init
 * @param {Number|Object} seed as a number or an unsigned 32 bits integer
 * @return ThisExpression
 */
function init(seed) {
	this.seed = seed instanceof UINT64 ? seed.clone() : UINT64(seed);
	this.v1 = this.seed.clone().add(PRIME64_1).add(PRIME64_2);
	this.v2 = this.seed.clone().add(PRIME64_2);
	this.v3 = this.seed.clone();
	this.v4 = this.seed.clone().subtract(PRIME64_1);
	this.total_len = 0;
	this.memsize = 0;
	this.memory = null;

	return this;
}
XXH64.prototype.init = init;

/**
 * Add data to be computed for the XXH64 hash
 * @method update
 * @param {String|Buffer|ArrayBuffer} input as a string or nodejs Buffer or ArrayBuffer
 * @return ThisExpression
 */
XXH64.prototype.update = function (input) {
	var isString = typeof input == 'string';
	var isArrayBuffer;

	// Convert all strings to utf-8 first (issue #5)
	if (isString) {
		input = toUTF8Array(input);
		isString = false;
		isArrayBuffer = true;
	}

	if (typeof ArrayBuffer !== "undefined" && input instanceof ArrayBuffer) {
		isArrayBuffer = true;
		input = new Uint8Array(input);
	}

	var p = 0;
	var len = input.length;
	var bEnd = p + len;

	if (len == 0) return this;

	this.total_len += len;

	if (this.memsize == 0) {
		if (isString) {
			this.memory = '';
		} else if (isArrayBuffer) {
			this.memory = new Uint8Array(32);
		} else {
			this.memory = new Buffer(32);
		}
	}

	if (this.memsize + len < 32) // fill in tmp buffer
		{
			// XXH64_memcpy(this.memory + this.memsize, input, len)
			if (isString) {
				this.memory += input;
			} else if (isArrayBuffer) {
				this.memory.set(input.subarray(0, len), this.memsize);
			} else {
				input.copy(this.memory, this.memsize, 0, len);
			}

			this.memsize += len;
			return this;
		}

	if (this.memsize > 0) // some data left from previous update
		{
			// XXH64_memcpy(this.memory + this.memsize, input, 16-this.memsize);
			if (isString) {
				this.memory += input.slice(0, 32 - this.memsize);
			} else if (isArrayBuffer) {
				this.memory.set(input.subarray(0, 32 - this.memsize), this.memsize);
			} else {
				input.copy(this.memory, this.memsize, 0, 32 - this.memsize);
			}

			var p64 = 0;
			if (isString) {
				var other;
				other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
				this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p64 += 8;
				other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
				this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p64 += 8;
				other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
				this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p64 += 8;
				other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
				this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
			} else {
				var other;
				other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
				this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p64 += 8;
				other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
				this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p64 += 8;
				other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
				this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p64 += 8;
				other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
				this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
			}

			p += 32 - this.memsize;
			this.memsize = 0;
			if (isString) this.memory = '';
		}

	if (p <= bEnd - 32) {
		var limit = bEnd - 32;

		do {
			if (isString) {
				var other;
				other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
				this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p += 8;
				other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
				this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p += 8;
				other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
				this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p += 8;
				other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
				this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
			} else {
				var other;
				other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
				this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p += 8;
				other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
				this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p += 8;
				other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
				this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
				p += 8;
				other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
				this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
			}
			p += 8;
		} while (p <= limit);
	}

	if (p < bEnd) {
		// XXH64_memcpy(this.memory, p, bEnd-p);
		if (isString) {
			this.memory += input.slice(p);
		} else if (isArrayBuffer) {
			this.memory.set(input.subarray(p, bEnd), this.memsize);
		} else {
			input.copy(this.memory, this.memsize, p, bEnd);
		}

		this.memsize = bEnd - p;
	}

	return this;
};

/**
 * Finalize the XXH64 computation. The XXH64 instance is ready for reuse for the given seed
 * @method digest
 * @return {UINT64} xxHash
 */
XXH64.prototype.digest = function () {
	var input = this.memory;
	var isString = typeof input == 'string';
	var p = 0;
	var bEnd = this.memsize;
	var h64, h;
	var u = new UINT64();

	if (this.total_len >= 32) {
		h64 = this.v1.clone().rotl(1);
		h64.add(this.v2.clone().rotl(7));
		h64.add(this.v3.clone().rotl(12));
		h64.add(this.v4.clone().rotl(18));

		h64.xor(this.v1.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
		h64.multiply(PRIME64_1).add(PRIME64_4);

		h64.xor(this.v2.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
		h64.multiply(PRIME64_1).add(PRIME64_4);

		h64.xor(this.v3.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
		h64.multiply(PRIME64_1).add(PRIME64_4);

		h64.xor(this.v4.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
		h64.multiply(PRIME64_1).add(PRIME64_4);
	} else {
		h64 = this.seed.clone().add(PRIME64_5);
	}

	h64.add(u.fromNumber(this.total_len));

	while (p <= bEnd - 8) {
		if (isString) {
			u.fromBits(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
		} else {
			u.fromBits(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
		}
		u.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1);
		h64.xor(u).rotl(27).multiply(PRIME64_1).add(PRIME64_4);
		p += 8;
	}

	if (p + 4 <= bEnd) {
		if (isString) {
			u.fromBits(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), 0, 0);
		} else {
			u.fromBits(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], 0, 0);
		}
		h64.xor(u.multiply(PRIME64_1)).rotl(23).multiply(PRIME64_2).add(PRIME64_3);
		p += 4;
	}

	while (p < bEnd) {
		u.fromBits(isString ? input.charCodeAt(p++) : input[p++], 0, 0, 0);
		h64.xor(u.multiply(PRIME64_5)).rotl(11).multiply(PRIME64_1);
	}

	h = h64.clone().shiftRight(33);
	h64.xor(h).multiply(PRIME64_2);

	h = h64.clone().shiftRight(29);
	h64.xor(h).multiply(PRIME64_3);

	h = h64.clone().shiftRight(32);
	h64.xor(h);

	// Reset the state
	this.init(this.seed);

	return h64;
};

module.exports = XXH64;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie-parser
 * Copyright(c) 2014 TJ Holowaychuk
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var cookie = __webpack_require__(47);
var signature = __webpack_require__(48);

/**
 * Module exports.
 * @public
 */

module.exports = cookieParser;
module.exports.JSONCookie = JSONCookie;
module.exports.JSONCookies = JSONCookies;
module.exports.signedCookie = signedCookie;
module.exports.signedCookies = signedCookies;

/**
 * Parse Cookie header and populate `req.cookies`
 * with an object keyed by the cookie names.
 *
 * @param {string|array} [secret] A string (or array of strings) representing cookie signing secret(s).
 * @param {Object} [options]
 * @return {Function}
 * @public
 */

function cookieParser(secret, options) {
  var secrets = !secret || Array.isArray(secret) ? secret || [] : [secret];

  return function cookieParser(req, res, next) {
    if (req.cookies) {
      return next();
    }

    var cookies = req.headers.cookie;

    req.secret = secrets[0];
    req.cookies = Object.create(null);
    req.signedCookies = Object.create(null);

    // no cookies
    if (!cookies) {
      return next();
    }

    req.cookies = cookie.parse(cookies, options);

    // parse signed cookies
    if (secrets.length !== 0) {
      req.signedCookies = signedCookies(req.cookies, secrets);
      req.signedCookies = JSONCookies(req.signedCookies);
    }

    // parse JSON cookies
    req.cookies = JSONCookies(req.cookies);

    next();
  };
}

/**
 * Parse JSON cookie string.
 *
 * @param {String} str
 * @return {Object} Parsed object or undefined if not json cookie
 * @public
 */

function JSONCookie(str) {
  if (typeof str !== 'string' || str.substr(0, 2) !== 'j:') {
    return undefined;
  }

  try {
    return JSON.parse(str.slice(2));
  } catch (err) {
    return undefined;
  }
}

/**
 * Parse JSON cookies.
 *
 * @param {Object} obj
 * @return {Object}
 * @public
 */

function JSONCookies(obj) {
  var cookies = Object.keys(obj);
  var key;
  var val;

  for (var i = 0; i < cookies.length; i++) {
    key = cookies[i];
    val = JSONCookie(obj[key]);

    if (val) {
      obj[key] = val;
    }
  }

  return obj;
}

/**
 * Parse a signed cookie string, return the decoded value.
 *
 * @param {String} str signed cookie string
 * @param {string|array} secret
 * @return {String} decoded value
 * @public
 */

function signedCookie(str, secret) {
  if (typeof str !== 'string') {
    return undefined;
  }

  if (str.substr(0, 2) !== 's:') {
    return str;
  }

  var secrets = !secret || Array.isArray(secret) ? secret || [] : [secret];

  for (var i = 0; i < secrets.length; i++) {
    var val = signature.unsign(str.slice(2), secrets[i]);

    if (val !== false) {
      return val;
    }
  }

  return false;
}

/**
 * Parse signed cookies, returning an object containing the decoded key/value
 * pairs, while removing the signed key from obj.
 *
 * @param {Object} obj
 * @param {string|array} secret
 * @return {Object}
 * @public
 */

function signedCookies(obj, secret) {
  var cookies = Object.keys(obj);
  var dec;
  var key;
  var ret = Object.create(null);
  var val;

  for (var i = 0; i < cookies.length; i++) {
    key = cookies[i];
    val = obj[key];
    dec = signedCookie(val, secret);

    if (val !== dec) {
      ret[key] = dec;
      delete obj[key];
    }
  }

  return ret;
}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("cookie-signature");

/***/ })
/******/ ]);