/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _history = __webpack_require__(4);
	
	var _reactDom = __webpack_require__(5);
	
	var _routes = __webpack_require__(6);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	process.APP_STATE = window.APP_STATE || {};
	
	(0, _reactDom.render)(_react2['default'].createElement(
	    _reactRouter.Router,
	    { history: (0, _history.createHistory)() },
	    _routes2['default']
	), document.querySelectorAll('[data-ui-role="content"]')[0]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = History;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _componentsApp = __webpack_require__(7);
	
	var _componentsApp2 = _interopRequireDefault(_componentsApp);
	
	var _componentsCommonNoMatch = __webpack_require__(10);
	
	var _componentsCommonNoMatch2 = _interopRequireDefault(_componentsCommonNoMatch);
	
	var _componentsDashboardDashboard = __webpack_require__(11);
	
	var _componentsDashboardDashboard2 = _interopRequireDefault(_componentsDashboardDashboard);
	
	var _componentsBillLatestBills = __webpack_require__(12);
	
	var _componentsBillLatestBills2 = _interopRequireDefault(_componentsBillLatestBills);
	
	exports['default'] = _react2['default'].createElement(
	    _reactRouter.Route,
	    { path: '/', component: _componentsApp2['default'] },
	    _react2['default'].createElement(
	        _reactRouter.Route,
	        { component: _componentsDashboardDashboard2['default'] },
	        _react2['default'].createElement(_reactRouter.IndexRoute, { component: _componentsBillLatestBills2['default'] })
	    ),
	    _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _componentsCommonNoMatch2['default'] })
	);
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _layoutDashboard = __webpack_require__(8);
	
	var _layoutDashboard2 = _interopRequireDefault(_layoutDashboard);
	
	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(_layoutDashboard2['default'], { props: this.props, children: this.props.children });
	        }
	    }]);
	
	    return App;
	})(_react2['default'].Component);
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Nav = __webpack_require__(9);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var Dashboard = (function (_React$Component) {
	    _inherits(Dashboard, _React$Component);
	
	    function Dashboard() {
	        _classCallCheck(this, Dashboard);
	
	        _get(Object.getPrototypeOf(Dashboard.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Dashboard, [{
	        key: 'render',
	        value: function render() {
	            var containerStyle = {
	                marginTop: '60px'
	            };
	            return _react2['default'].createElement(
	                'div',
	                { className: 'Layout' },
	                _react2['default'].createElement(_Nav2['default'], { location: this.props.location }),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'Layout-Header' },
	                    _react2['default'].createElement(
	                        'h1',
	                        null,
	                        ' Panopticon'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'container', style: containerStyle },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'col-lg-12' },
	                            this.props.children
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Dashboard;
	})(_react2['default'].Component);
	
	exports['default'] = Dashboard;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var Nav = (function (_React$Component) {
	    _inherits(Nav, _React$Component);
	
	    function Nav() {
	        _classCallCheck(this, Nav);
	
	        _get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).call(this);
	        this.state = {
	            collapsed: true
	        };
	    }
	
	    _createClass(Nav, [{
	        key: 'toggleCollapse',
	        value: function toggleCollapse() {
	            var collapsed = !this.state.collapsed;
	            this.setState({ collapsed: collapsed });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // const {location} = this.props;
	            var collapsed = this.state.collapsed;
	
	            // const featuredClass = location.pathname === '/' ? 'active' : '';
	            // const archivesClass = location.pathname.match(/^\/archives/) ? 'active' : '';
	            // const settingsClass = location.pathname.match(/^\/settings/) ? 'active' : '';
	            // const robotHudClass = location.pathname.match(/^\/robotHUD/) ? 'active' : '';
	            var navClass = collapsed ? 'collapse' : '';
	
	            return _react2['default'].createElement(
	                'div',
	                { className: 'navbar navbar-toggleable-md', role: 'navigation' },
	                _react2['default'].createElement(
	                    'button',
	                    { type: 'button', className: 'navbar-toggle',
	                        onClick: this.toggleCollapse.bind(this) },
	                    _react2['default'].createElement(
	                        'span',
	                        { className: 'sr-only' },
	                        'Toggle navigation'
	                    ),
	                    _react2['default'].createElement('span', { className: 'icon-bar' }),
	                    _react2['default'].createElement('span', { className: 'icon-bar' }),
	                    _react2['default'].createElement('span', { className: 'icon-bar' })
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'navbar-header' },
	                    _react2['default'].createElement(
	                        'a',
	                        { className: 'navbar-brand', href: '#' },
	                        'Tesla Panopticon'
	                    ),
	                    '`'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'navbar-collapse ' + navClass,
	                        id: 'bs-example-navbar-collapse-1' },
	                    _react2['default'].createElement(
	                        'ul',
	                        { className: 'nav navbar-nav' },
	                        _react2['default'].createElement(
	                            'li',
	                            { activeClassName: 'active', onlyActiveOnIndex: true },
	                            _react2['default'].createElement(
	                                _reactRouter.IndexLink,
	                                { to: '/', onClick: this.toggleCollapse.bind(this) },
	                                'Featured'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            { activeClassName: 'active' },
	                            _react2['default'].createElement(
	                                _reactRouter.Link,
	                                { to: 'archives', onClick: this.toggleCollapse.bind(this) },
	                                'Archives'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            { activeClassName: 'active' },
	                            _react2['default'].createElement(
	                                _reactRouter.Link,
	                                { to: 'settings', onClick: this.toggleCollapse.bind(this) },
	                                'Settings'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            { activeClassName: 'active' },
	                            _react2['default'].createElement(
	                                _reactRouter.Link,
	                                { to: 'robotHUD', onClick: this.toggleCollapse.bind(this) },
	                                'RobotHUD'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Nav;
	})(_react2['default'].Component);
	
	exports['default'] = Nav;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NoMatch = (function (_React$Component) {
	    _inherits(NoMatch, _React$Component);
	
	    function NoMatch() {
	        _classCallCheck(this, NoMatch);
	
	        _get(Object.getPrototypeOf(NoMatch.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(NoMatch, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "section",
	                { className: "app-content" },
	                _react2["default"].createElement(
	                    "header",
	                    { className: "section-header" },
	                    _react2["default"].createElement(
	                        "h3",
	                        { className: "title" },
	                        "Not Found"
	                    )
	                )
	            );
	        }
	    }]);
	
	    return NoMatch;
	})(_react2["default"].Component);
	
	exports["default"] = NoMatch;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Dashboard = (function (_React$Component) {
	    _inherits(Dashboard, _React$Component);
	
	    function Dashboard() {
	        _classCallCheck(this, Dashboard);
	
	        _get(Object.getPrototypeOf(Dashboard.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Dashboard, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "main",
	                { className: "app-content dashboard" },
	                this.props.children
	            );
	        }
	    }]);
	
	    return Dashboard;
	})(_react2["default"].Component);
	
	exports["default"] = Dashboard;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _commonList = __webpack_require__(13);
	
	var _commonList2 = _interopRequireDefault(_commonList);
	
	var _CompactBill = __webpack_require__(14);
	
	var _CompactBill2 = _interopRequireDefault(_CompactBill);
	
	var LatestBills = (function (_React$Component) {
	    _inherits(LatestBills, _React$Component);
	
	    function LatestBills(props) {
	        _classCallCheck(this, LatestBills);
	
	        _get(Object.getPrototypeOf(LatestBills.prototype), 'constructor', this).call(this, props);
	        this.state = this.props.context || window.APP_STATE || { items: [] };
	    }
	
	    _createClass(LatestBills, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'section',
	                { className: 'latest-bills' },
	                _react2['default'].createElement(
	                    'header',
	                    { className: 'section-header' },
	                    _react2['default'].createElement(
	                        'h3',
	                        { className: 'title' },
	                        'Latest Bills'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'section',
	                    { className: 'section-content' },
	                    _react2['default'].createElement(_commonList2['default'], { items: this.state.items, itemType: _CompactBill2['default'] })
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this = this;
	
	            fetch('/api/latest-bills').then(function (response) {
	                return response.json();
	            }).then(function (data) {
	                _this.setState({ items: data.items });
	            })['catch'](function (err) {
	                throw new Error(err);
	            });
	        }
	    }]);
	
	    return LatestBills;
	})(_react2['default'].Component);
	
	exports['default'] = LatestBills;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var List = (function (_React$Component) {
	    _inherits(List, _React$Component);
	
	    function List() {
	        _classCallCheck(this, List);
	
	        _get(Object.getPrototypeOf(List.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(List, [{
	        key: "render",
	        value: function render() {
	            var ItemType = this.props.itemType;
	            var items = this.props.items || [];
	            var markupItems = this.createItemsMarkup(items, ItemType);
	
	            return _react2["default"].createElement(
	                "ul",
	                { className: "ui-list" },
	                markupItems
	            );
	        }
	    }, {
	        key: "createItemsMarkup",
	        value: function createItemsMarkup(items, Type) {
	            var markupItems = items.map(function (item) {
	                return _react2["default"].createElement(
	                    "li",
	                    { className: "ui-list-item", key: item.id },
	                    _react2["default"].createElement(Type, { data: item })
	                );
	            });
	
	            return markupItems;
	        }
	    }]);
	
	    return List;
	})(_react2["default"].Component);
	
	exports["default"] = List;
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var CompactBill = (function (_React$Component) {
	    _inherits(CompactBill, _React$Component);
	
	    function CompactBill() {
	        _classCallCheck(this, CompactBill);
	
	        _get(Object.getPrototypeOf(CompactBill.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(CompactBill, [{
	        key: "render",
	        value: function render() {
	            var data = this.props.data;
	            var amount = "$" + data.amount;
	
	            return _react2["default"].createElement(
	                "div",
	                { className: "bill compact-bill" },
	                _react2["default"].createElement("img", { className: "icon", src: data.icon }),
	                _react2["default"].createElement(
	                    "div",
	                    { className: "info-container" },
	                    _react2["default"].createElement(
	                        "h4",
	                        { className: "title" },
	                        data.vendor
	                    ),
	                    _react2["default"].createElement(
	                        "span",
	                        { className: "period" },
	                        data.period
	                    )
	                ),
	                _react2["default"].createElement(
	                    "span",
	                    { className: "amount" },
	                    amount
	                )
	            );
	        }
	    }]);
	
	    return CompactBill;
	})(_react2["default"].Component);
	
	exports["default"] = CompactBill;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGI0NjVmOTFkNWQ1N2NmMjRmMWIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0Um91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiSGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbGF5b3V0L0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9sYXlvdXQvTmF2LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NvbW1vbi9Ob01hdGNoLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYmlsbC9MYXRlc3RCaWxscy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb21tb24vTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9iaWxsL0NvbXBhY3RCaWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztrQ0N0Q2tCLENBQU87Ozs7d0NBQ0osQ0FBYzs7b0NBQ1AsQ0FBUzs7cUNBQ2hCLENBQVc7O21DQUViLENBQVU7Ozs7QUFFN0IsUUFBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQzs7QUFFM0MsdUJBQ0k7O09BQVEsT0FBTyxFQUFFLDZCQUFnQjs7RUFFeEIsRUFDVixRQUFRLENBQUMsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDOzs7Ozs7O0FDYjVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVU7Ozs7Ozs7QUNuTHRDLHdCOzs7Ozs7QUNBQSw4Qjs7Ozs7O0FDQUEsMEI7Ozs7OztBQ0FBLDJCOzs7Ozs7Ozs7Ozs7OztrQ0NBa0IsQ0FBTzs7Ozt3Q0FDTyxDQUFjOzswQ0FFOUIsQ0FBa0I7Ozs7b0RBQ2QsRUFBNkI7Ozs7eURBRTNCLEVBQWtDOzs7O3NEQUNoQyxFQUErQjs7OztzQkFHbkQ7O09BQU8sSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLDRCQUFNO0tBQzNCOztXQUFPLFNBQVMsMkNBQVk7U0FDeEIsNERBQVksU0FBUyx3Q0FBYyxHQUFFO01BQ2pDO0tBQ1IsdURBQU8sSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLHNDQUFVLEdBQUU7RUFDakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2ZNLENBQU87Ozs7NENBRUgsQ0FBb0I7Ozs7S0FFckIsR0FBRztlQUFILEdBQUc7O2NBQUgsR0FBRzsrQkFBSCxHQUFHOztvQ0FBSCxHQUFHOzs7a0JBQUgsR0FBRzs7Z0JBQ2Qsa0JBQUc7QUFDTCxvQkFDSSxpRUFBVyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQU0sRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTLEdBQUUsQ0FDaEU7VUFDTDs7O1lBTGdCLEdBQUc7SUFBUyxtQkFBTSxTQUFTOztzQkFBM0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDSk4sQ0FBTzs7OztnQ0FDVCxDQUFPOzs7O0tBRUYsU0FBUztlQUFULFNBQVM7O2NBQVQsU0FBUzsrQkFBVCxTQUFTOztvQ0FBVCxTQUFTOzs7a0JBQVQsU0FBUzs7Z0JBQ3BCLGtCQUFHO0FBQ0wsaUJBQU0sY0FBYyxHQUFHO0FBQ25CLDBCQUFTLEVBQUUsTUFBTTtjQUNwQixDQUFDO0FBQ0Ysb0JBQ0k7O21CQUFLLFNBQVMsRUFBQyxRQUFRO2lCQUNuQixxREFBSyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTLEdBQUU7aUJBQ3JDOzt1QkFBSyxTQUFTLEVBQUMsZUFBZTtxQkFDMUI7Ozs7c0JBQW9CO2tCQUNsQjtpQkFDTjs7dUJBQUssU0FBUyxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUUsY0FBZTtxQkFDN0M7OzJCQUFLLFNBQVMsRUFBQyxLQUFLO3lCQUNoQjs7K0JBQUssU0FBUyxFQUFDLFdBQVc7NkJBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTswQkFDbEI7c0JBQ0o7a0JBQ0o7Y0FDSixDQUNSO1VBQ0w7OztZQXBCZ0IsU0FBUztJQUFTLG1CQUFNLFNBQVM7O3NCQUFqQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NIWixDQUFPOzs7O3dDQUNLLENBQWM7O0tBRXZCLEdBQUc7ZUFBSCxHQUFHOztBQUNULGNBRE0sR0FBRyxHQUNOOytCQURHLEdBQUc7O0FBRWhCLG9DQUZhLEdBQUcsNkNBRVI7QUFDUixhQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1Qsc0JBQVMsRUFBRSxJQUFJO1VBQ2xCLENBQUM7TUFDTDs7a0JBTmdCLEdBQUc7O2dCQVFOLDBCQUFHO0FBQ2IsaUJBQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDeEMsaUJBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxTQUFTLEVBQVQsU0FBUyxFQUFDLENBQUMsQ0FBQztVQUM5Qjs7O2dCQUVLLGtCQUFHOztpQkFFRSxTQUFTLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBdkIsU0FBUzs7Ozs7O0FBS2hCLGlCQUFNLFFBQVEsR0FBRyxTQUFTLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFHN0Msb0JBQ0k7O21CQUFLLFNBQVMsRUFBQyw2QkFBNkIsRUFBQyxJQUFJLEVBQUMsWUFBWTtpQkFDMUQ7O3VCQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGVBQWU7QUFDdkMsZ0NBQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7cUJBQzVDOzsyQkFBTSxTQUFTLEVBQUMsU0FBUzs7c0JBQXlCO3FCQUNsRCwyQ0FBTSxTQUFTLEVBQUMsVUFBVSxHQUFRO3FCQUNsQywyQ0FBTSxTQUFTLEVBQUMsVUFBVSxHQUFRO3FCQUNsQywyQ0FBTSxTQUFTLEVBQUMsVUFBVSxHQUFRO2tCQUM3QjtpQkFDVDs7dUJBQUssU0FBUyxFQUFDLGVBQWU7cUJBQzFCOzsyQkFBRyxTQUFTLEVBQUMsY0FBYyxNQUFJLEVBQUMsR0FBRzs7c0JBRS9COztrQkFDRjtpQkFDTjs7dUJBQUssU0FBUyxFQUFFLGtCQUFrQixHQUFHLFFBQVM7QUFDekMsMkJBQUUsRUFBQyw4QkFBOEI7cUJBQ2xDOzsyQkFBSSxTQUFTLEVBQUMsZ0JBQWdCO3lCQUMxQjs7K0JBQUksZUFBZSxFQUFDLFFBQVEsRUFBQyxpQkFBaUIsRUFBRSxJQUFLOzZCQUNqRDs7bUNBQVcsRUFBRSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFOzs4QkFDbEM7MEJBQ3ZCO3lCQUNMOzsrQkFBSSxlQUFlLEVBQUMsUUFBUTs2QkFDeEI7O21DQUFNLEVBQUUsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTs7OEJBQ3pDOzBCQUNsQjt5QkFDTDs7K0JBQUksZUFBZSxFQUFDLFFBQVE7NkJBQ3hCOzttQ0FBTSxFQUFFLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7OzhCQUN6QzswQkFDbEI7eUJBQ0w7OytCQUFJLGVBQWUsRUFBQyxRQUFROzZCQUN4Qjs7bUNBQU0sRUFBRSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFOzs4QkFDekM7MEJBQ2xCO3NCQUNKO2tCQUNIO2NBQ0osQ0FDUjtVQUNMOzs7WUE1RGdCLEdBQUc7SUFBUyxtQkFBTSxTQUFTOztzQkFBM0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDSE4sQ0FBTzs7OztLQUVKLE9BQU87ZUFBUCxPQUFPOztjQUFQLE9BQU87K0JBQVAsT0FBTzs7b0NBQVAsT0FBTzs7O2tCQUFQLE9BQU87O2dCQUNsQixrQkFBRztBQUNMLG9CQUNJOzttQkFBUyxTQUFTLEVBQUMsYUFBYTtpQkFDNUI7O3VCQUFRLFNBQVMsRUFBQyxnQkFBZ0I7cUJBQzlCOzsyQkFBSSxTQUFTLEVBQUMsT0FBTzs7c0JBQWU7a0JBQy9CO2NBQ0gsQ0FDWjtVQUNMOzs7WUFUZ0IsT0FBTztJQUFTLG1CQUFNLFNBQVM7O3NCQUEvQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NGVixDQUFPOzs7O0tBRUosU0FBUztlQUFULFNBQVM7O2NBQVQsU0FBUzsrQkFBVCxTQUFTOztvQ0FBVCxTQUFTOzs7a0JBQVQsU0FBUzs7Z0JBQ3BCLGtCQUFHO0FBQ0wsb0JBQ0k7O21CQUFNLFNBQVMsRUFBQyx1QkFBdUI7aUJBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtjQUNqQixDQUNUO1VBQ0w7OztZQVBnQixTQUFTO0lBQVMsbUJBQU0sU0FBUzs7c0JBQWpDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0ZaLENBQU87Ozs7dUNBRVIsRUFBZ0I7Ozs7d0NBQ1QsRUFBZTs7OztLQUVsQixXQUFXO2VBQVgsV0FBVzs7QUFDakIsY0FETSxXQUFXLENBQ2hCLEtBQUssRUFBRTsrQkFERixXQUFXOztBQUV4QixvQ0FGYSxXQUFXLDZDQUVsQixLQUFLLEVBQUU7QUFDYixhQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFDLENBQUM7TUFDdEU7O2tCQUpnQixXQUFXOztnQkFNdEIsa0JBQUc7QUFDTCxvQkFDSTs7bUJBQVMsU0FBUyxFQUFDLGNBQWM7aUJBQzdCOzt1QkFBUSxTQUFTLEVBQUMsZ0JBQWdCO3FCQUM5Qjs7MkJBQUksU0FBUyxFQUFDLE9BQU87O3NCQUFrQjtrQkFDbEM7aUJBQ1Q7O3VCQUFTLFNBQVMsRUFBQyxpQkFBaUI7cUJBQ2hDLDREQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU0sRUFBQyxRQUFRLDBCQUFjLEdBQUU7a0JBQ2pEO2NBQ0osQ0FDWjtVQUNMOzs7Z0JBRWdCLDZCQUFHOzs7QUFDaEIsa0JBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVEsRUFBSztBQUMxQyx3QkFBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Y0FDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksRUFBSztBQUNkLHVCQUFLLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztjQUN0QyxDQUFDLFNBQU0sQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUNkLHVCQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBQ3hCLENBQUMsQ0FBQztVQUNOOzs7WUEzQmdCLFdBQVc7SUFBUyxtQkFBTSxTQUFTOztzQkFBbkMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDTGQsQ0FBTzs7OztLQUVKLElBQUk7ZUFBSixJQUFJOztjQUFKLElBQUk7K0JBQUosSUFBSTs7b0NBQUosSUFBSTs7O2tCQUFKLElBQUk7O2dCQUVmLGtCQUFHO0FBQ0wsaUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0FBQ3JDLGlCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7QUFDckMsaUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBRTVELG9CQUFROzttQkFBSSxTQUFTLEVBQUMsU0FBUztpQkFBRSxXQUFXO2NBQU0sQ0FBRTtVQUN2RDs7O2dCQUVnQiwyQkFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQzNCLGlCQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ3BDLHdCQUNJOzt1QkFBSSxTQUFTLEVBQUMsY0FBYyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRztxQkFDdEMsaUNBQUMsSUFBSSxJQUFDLElBQUksRUFBRSxJQUFLLEdBQUU7a0JBQ2xCLENBQ1A7Y0FDTCxDQUFDLENBQUM7O0FBRUgsb0JBQU8sV0FBVyxDQUFDO1VBQ3RCOzs7WUFwQmdCLElBQUk7SUFBUyxtQkFBTSxTQUFTOztzQkFBNUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDRlAsQ0FBTzs7OztLQUVKLFdBQVc7ZUFBWCxXQUFXOztjQUFYLFdBQVc7K0JBQVgsV0FBVzs7b0NBQVgsV0FBVzs7O2tCQUFYLFdBQVc7O2dCQUN0QixrQkFBRztBQUNMLGlCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUM3QixpQkFBTSxNQUFNLFNBQU8sSUFBSSxDQUFDLE1BQVEsQ0FBQzs7QUFFakMsb0JBQ0k7O21CQUFLLFNBQVMsRUFBQyxtQkFBbUI7aUJBQzlCLDBDQUFLLFNBQVMsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFLLEdBQUU7aUJBQ3ZDOzt1QkFBSyxTQUFTLEVBQUMsZ0JBQWdCO3FCQUMzQjs7MkJBQUksU0FBUyxFQUFDLE9BQU87eUJBQUUsSUFBSSxDQUFDLE1BQU07c0JBQU07cUJBQ3hDOzsyQkFBTSxTQUFTLEVBQUMsUUFBUTt5QkFBRSxJQUFJLENBQUMsTUFBTTtzQkFBUTtrQkFDM0M7aUJBQ047O3VCQUFNLFNBQVMsRUFBQyxRQUFRO3FCQUFFLE1BQU07a0JBQVE7Y0FDdEMsQ0FDUjtVQUNMOzs7WUFmZ0IsV0FBVztJQUFTLG1CQUFNLFNBQVM7O3NCQUFuQyxXQUFXIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYjQ2NWY5MWQ1ZDU3Y2YyNGYxYiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQge2NyZWF0ZUhpc3Rvcnl9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxucHJvY2Vzcy5BUFBfU1RBVEUgPSB3aW5kb3cuQVBQX1NUQVRFIHx8IHt9O1xyXG5cclxucmVuZGVyKChcclxuICAgIDxSb3V0ZXIgaGlzdG9yeT17Y3JlYXRlSGlzdG9yeSgpfT5cclxuICAgICAgICB7cm91dGVzfVxyXG4gICAgPC9Sb3V0ZXI+XHJcbiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXVpLXJvbGU9XCJjb250ZW50XCJdJylbMF0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY2xpZW50LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJvdXRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0Um91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiSGlzdG9yeVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7SW5kZXhSb3V0ZSwgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xyXG5pbXBvcnQgTm9NYXRjaCBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9uL05vTWF0Y2gnO1xyXG5cclxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBMYXRlc3RCaWxscyBmcm9tICcuL2NvbXBvbmVudHMvYmlsbC9MYXRlc3RCaWxscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XHJcbiAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17RGFzaGJvYXJkfT5cclxuICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtMYXRlc3RCaWxsc30vPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb01hdGNofS8+XHJcbiAgICA8L1JvdXRlPlxyXG4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcm91dGVzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9sYXlvdXQvRGFzaGJvYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPERhc2hib2FyZCBwcm9wcz17dGhpcy5wcm9wc30gY2hpbGRyZW49e3RoaXMucHJvcHMuY2hpbGRyZW59Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2FwcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnNjBweCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2IGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxheW91dC1IZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+IFBhbm9wdGljb248L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtjb250YWluZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2xheW91dC9EYXNoYm9hcmQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0luZGV4TGluaywgTGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29sbGFwc2UoKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGFwc2VkID0gIXRoaXMuc3RhdGUuY29sbGFwc2VkO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbGxhcHNlZH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zdCB7bG9jYXRpb259ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7Y29sbGFwc2VkfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgLy8gY29uc3QgZmVhdHVyZWRDbGFzcyA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSAnLycgPyAnYWN0aXZlJyA6ICcnO1xyXG4gICAgICAgIC8vIGNvbnN0IGFyY2hpdmVzQ2xhc3MgPSBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvXlxcL2FyY2hpdmVzLykgPyAnYWN0aXZlJyA6ICcnO1xyXG4gICAgICAgIC8vIGNvbnN0IHNldHRpbmdzQ2xhc3MgPSBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvXlxcL3NldHRpbmdzLykgPyAnYWN0aXZlJyA6ICcnO1xyXG4gICAgICAgIC8vIGNvbnN0IHJvYm90SHVkQ2xhc3MgPSBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvXlxcL3JvYm90SFVELykgPyAnYWN0aXZlJyA6ICcnO1xyXG4gICAgICAgIGNvbnN0IG5hdkNsYXNzID0gY29sbGFwc2VkID8gJ2NvbGxhcHNlJyA6ICcnO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItdG9nZ2xlYWJsZS1tZCcgcm9sZT0nbmF2aWdhdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J25hdmJhci1icmFuZCdocmVmPScjJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGVzbGEgUGFub3B0aWNvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbmF2YmFyLWNvbGxhcHNlICcgKyBuYXZDbGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgaWQ9J2JzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25hdiBuYXZiYXItbmF2Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJyBvbmx5QWN0aXZlT25JbmRleD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5kZXhMaW5rIHRvPScvJyBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlYXR1cmVkPC9JbmRleExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nYXJjaGl2ZXMnIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJjaGl2ZXM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nc2V0dGluZ3MnIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3M8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0ncm9ib3RIVUQnIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9ib3RIVUQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2xheW91dC9OYXYuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9NYXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXBwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5Ob3QgRm91bmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2NvbW1vbi9Ob01hdGNoLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYXBwLWNvbnRlbnQgZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21tb24vTGlzdCc7XHJcbmltcG9ydCBDb21wYWN0QmlsbCBmcm9tICcuL0NvbXBhY3RCaWxsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdGVzdEJpbGxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnByb3BzLmNvbnRleHQgfHwgd2luZG93LkFQUF9TVEFURSB8fCB7aXRlbXM6IFtdfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGF0ZXN0LWJpbGxzXCI+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+TGF0ZXN0IEJpbGxzPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QgaXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9IGl0ZW1UeXBlPXtDb21wYWN0QmlsbH0vPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBmZXRjaCgnL2FwaS9sYXRlc3QtYmlsbHMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXRlbXM6IGRhdGEuaXRlbXN9KTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2JpbGwvTGF0ZXN0QmlsbHMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IEl0ZW1UeXBlID0gdGhpcy5wcm9wcy5pdGVtVHlwZTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuaXRlbXMgfHwgW107XHJcbiAgICAgICAgY29uc3QgbWFya3VwSXRlbXMgPSB0aGlzLmNyZWF0ZUl0ZW1zTWFya3VwKGl0ZW1zLCBJdGVtVHlwZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPHVsIGNsYXNzTmFtZT1cInVpLWxpc3RcIj57bWFya3VwSXRlbXN9PC91bD4pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUl0ZW1zTWFya3VwKGl0ZW1zLCBUeXBlKSB7XHJcbiAgICAgICAgY29uc3QgbWFya3VwSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ1aS1saXN0LWl0ZW1cIiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBlIGRhdGE9e2l0ZW19Lz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYXJrdXBJdGVtcztcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9jb21tb24vTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYWN0QmlsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcclxuICAgICAgICBjb25zdCBhbW91bnQgPSBgJCR7ZGF0YS5hbW91bnR9YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWxsIGNvbXBhY3QtYmlsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtkYXRhLmljb259Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS52ZW5kb3J9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwZXJpb2RcIj57ZGF0YS5wZXJpb2R9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbW91bnRcIj57YW1vdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9iaWxsL0NvbXBhY3RCaWxsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==