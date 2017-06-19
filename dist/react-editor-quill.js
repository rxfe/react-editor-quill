(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("quill"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "quill", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactEditorQuill"] = factory(require("react"), require("quill"), require("react-dom"));
	else
		root["ReactEditorQuill"] = factory(root["React"], root["Quill"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EditorPluginCount = exports.EditorPluginMention = undefined;

	var _mention = __webpack_require__(1);

	Object.defineProperty(exports, 'EditorPluginMention', {
	  enumerable: true,
	  get: function get() {
	    return _mention.EditorPluginMention;
	  }
	});

	var _count = __webpack_require__(9);

	Object.defineProperty(exports, 'EditorPluginCount', {
	  enumerable: true,
	  get: function get() {
	    return _count.EditorPluginCount;
	  }
	});

	var _quill = __webpack_require__(4);

	var _quill2 = _interopRequireDefault(_quill);

	var _Editor = __webpack_require__(10);

	var _Editor2 = _interopRequireDefault(_Editor);

	var _CursorFiexd = __webpack_require__(15);

	var _CursorFiexd2 = _interopRequireDefault(_CursorFiexd);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Parchment = _quill2.default.import('parchment');

	_quill2.default.register({ 'blots/cursor': _CursorFiexd2.default }, true);
	Parchment.register(_CursorFiexd2.default);
	var QuillStyle = Parchment.Attributor.Style;
	var styleOptions = { scope: Parchment.Scope.INLINE };
	_quill2.default.register(new QuillStyle('size', 'font-size', styleOptions), true);
	_quill2.default.register(new QuillStyle('font', 'font-family', styleOptions), true);

	exports.default = _Editor2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mention = __webpack_require__(2);

	var _mention2 = _interopRequireDefault(_mention);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _mention2.default;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _quill = __webpack_require__(4);

	var _quill2 = _interopRequireDefault(_quill);

	var _hasModule = __webpack_require__(5);

	var _hasModule2 = _interopRequireDefault(_hasModule);

	var _Panel = __webpack_require__(6);

	var _Panel2 = _interopRequireDefault(_Panel);

	var _ButtonBlot = __webpack_require__(8);

	var _ButtonBlot2 = _interopRequireDefault(_ButtonBlot);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Delta = _quill2.default.import('delta');

	var KEYCODE = {
	  DOWN: 40,
	  UP: 38,
	  ESC: 27,
	  TAB: 9,
	  ENTER: 13,
	  CTRL: 17,
	  BACKSPACE: 8,
	  DELETE: 46
	};
	function parseStrByDelimiter() {
	  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '@';

	  var idx = str.lastIndexOf(delimiter);
	  var ret = void 0;
	  if (idx !== -1) {
	    ret = str.substring(idx + 1);
	  } else {
	    ret = false;
	  }
	  return ret;
	}

	var QuillMention = function (_Component) {
	  _inherits(QuillMention, _Component);

	  function QuillMention(props) {
	    _classCallCheck(this, QuillMention);

	    var _this = _possibleConstructorReturn(this, (QuillMention.__proto__ || Object.getPrototypeOf(QuillMention)).call(this, props));

	    _this.state = {
	      mentionList: [],
	      cursorPosition: {
	        x: 0,
	        y: 0
	      },
	      panelVisible: false,
	      panelIdx: 0
	    };
	    _this.selectItem = _this.selectItem.bind(_this);
	    return _this;
	  }

	  _createClass(QuillMention, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      if (!(0, _hasModule2.default)(_quill2.default, 'formats/mention')) {
	        _quill2.default.register({ 'formats/mention': _ButtonBlot2.default });
	      }
	      if ((0, _hasModule2.default)(_quill2.default, 'modules/mentions')) {
	        return;
	      }
	      this.quill = this.props.quill;
	      this.quill.on('selection-change', this.handleDefaultKeyup.bind(this));
	      this.quill.root.addEventListener('blur', this.hidePanel.bind(this));
	      this.quill.root.addEventListener('keydown', this.onKeydown.bind(this));
	      this.quill.keyboard.bindings[13].unshift({ key: 13, shiftKey: null, handler: this.handleEnter.bind(this) });
	      this.quill.root.addEventListener('keyup', function (e) {
	        _this2.onKeyup(e);
	        // this.onPanelKeyup(e)
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.STORE = {};
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (prevState.mentionList.length !== this.state.mentionList.length) {
	        this.setState({ // eslint-disable-line
	          panelVisible: this.state.mentionList.length > 0
	        });
	      }
	      if (!prevState.panelVisible && this.state.panelVisible) {
	        this.setState({ // eslint-disable-line
	          panelIdx: 0
	        });
	      }
	    }
	  }, {
	    key: 'onPanelKeyup',
	    value: function onPanelKeyup(e) {
	      var _state = this.state,
	          panelVisible = _state.panelVisible,
	          panelIdx = _state.panelIdx,
	          mentionList = _state.mentionList;

	      if (panelVisible) {
	        var count = mentionList.length;
	        switch (e.keyCode) {
	          case KEYCODE.UP:
	            this.setState({
	              panelIdx: panelIdx === 0 ? count - 1 : panelIdx - 1
	            });
	            break;
	          case KEYCODE.DOWN:
	            this.setState({
	              panelIdx: panelIdx === count - 1 ? 0 : panelIdx + 1
	            });
	            break;
	          case KEYCODE.ENTER:
	            // this.selectItem(mentionList[panelIdx]);
	            break;
	          default:
	            this.setState({
	              mentionList: []
	            });
	            break;
	        }
	      }
	    }
	  }, {
	    key: 'onKeydown',
	    value: function onKeydown(e) {
	      var panelVisible = this.state.panelVisible;

	      this.onPanelKeyup(e);
	      switch (e.keyCode) {
	        case KEYCODE.UP:
	        case KEYCODE.DOWN:
	          if (panelVisible) {
	            e.stopPropagation();
	            e.preventDefault();
	          }
	          break;
	        case KEYCODE.ENTER:
	          if (panelVisible) {
	            e.stopPropagation();
	            e.preventDefault();
	          }
	          break;
	        default:
	          break;
	      }
	    }
	  }, {
	    key: 'onKeyup',
	    value: function onKeyup(e) {
	      var panelVisible = this.state.panelVisible;

	      switch (e.keyCode) {
	        case KEYCODE.UP:
	        case KEYCODE.DOWN:
	          if (panelVisible) {
	            e.preventDefault();
	          }
	          break;
	        case KEYCODE.ENTER:
	          break;
	        default:
	          this.handleDefaultKeyup(e);
	          break;
	      }
	    }
	  }, {
	    key: 'setPanelPos',
	    value: function setPanelPos(pos) {
	      var client = this.quill.container.parentNode.getBoundingClientRect();
	      var position = {
	        x: pos.left - client.left,
	        y: pos.top - client.top + 20
	      };
	      this.setState({
	        cursorPosition: position
	      });
	    }
	  }, {
	    key: 'handleEnter',
	    value: function handleEnter() {
	      var _state2 = this.state,
	          panelVisible = _state2.panelVisible,
	          panelIdx = _state2.panelIdx,
	          mentionList = _state2.mentionList;

	      if (panelVisible) {
	        this.selectItem(mentionList[panelIdx]);
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'matcher',
	    value: function matcher(str) {
	      var _props = this.props,
	          source = _props.source,
	          matchRange = _props.matchRange;

	      this.setState({
	        panelVisible: false,
	        mentionList: []
	      });
	      if (str.length >= matchRange[0] && str.length <= matchRange[1]) {
	        if (Array.isArray(source)) {
	          this.next(source.filter(function (item) {
	            return item.indexOf(str) !== -1;
	          }));
	        } else {
	          source(str, this.next.bind(this));
	        }
	      }
	    }
	  }, {
	    key: 'next',
	    value: function next(matchResult) {
	      var result = matchResult;
	      if (this.props.formatter) {
	        result = this.props.formatter(result);
	      }
	      this.setState({
	        mentionList: result
	      });
	    }
	  }, {
	    key: 'runMatcher',
	    value: function runMatcher(str) {
	      var _this3 = this;

	      if (this.matchTimer) {
	        clearTimeout(this.matchTimer);
	      }
	      this.matchTimer = setTimeout(function () {
	        _this3.matcher(str);
	      }, this.props.delay);
	    }
	  }, {
	    key: 'hidePanel',
	    value: function hidePanel() {
	      var _this4 = this;

	      setTimeout(function () {
	        _this4.setState({
	          panelVisible: false
	        });
	      }, 200);
	    }
	  }, {
	    key: 'handleDefaultKeyup',
	    value: function handleDefaultKeyup(e) {
	      if (!e) {
	        this.hidePanel();
	        return;
	      }
	      var delimiter = this.props.delimiter;

	      var sel = this.quill.selection;
	      var quillRange = this.quill.getSelection(true);
	      if (quillRange.length > 0) {
	        return;
	      }
	      var nativeRange = sel.getNativeRange();
	      if (!nativeRange || !nativeRange.native) {
	        return;
	      }
	      var range = nativeRange.native;
	      if (range.commonAncestorContainer.nodeType === 3) {
	        var cloneRange = range.cloneRange();
	        cloneRange.setStart(range.commonAncestorContainer, 0);
	        var originStr = cloneRange.toString();
	        var str = parseStrByDelimiter(originStr, delimiter);
	        this.runMatcher(str);
	        if (str !== false) {
	          var theRange = sel.lastRange;
	          var bound = sel.getBounds(theRange.index);
	          this.setPanelPos(bound);
	          var length = str.length + 1;
	          this.STORE.bookmark = { index: sel.lastRange.index - length, length: length };
	        }
	      }
	    }
	  }, {
	    key: 'insertWithElementNode',
	    value: function insertWithElementNode(mentionContent) {
	      this.quill.off('selection-change');
	      if (this.STORE.bookmark) {
	        this.quill.selection.setRange(this.STORE.bookmark);
	      }
	      this.quill.on('selection-change', this.handleDefaultKeyup.bind(this));
	      var range = this.quill.getSelection(true);
	      this.quill.updateContents(new Delta().retain(range.index).delete(range.length).insert({ mention: mentionContent }).insert(' '));
	      this.quill.setSelection(range.index + 2, 0);
	    }
	  }, {
	    key: 'insertWithTextNode',
	    value: function insertWithTextNode(mentionContent) {
	      this.quill.off('selection-change');
	      if (this.STORE.bookmark) {
	        this.quill.selection.setRange(this.STORE.bookmark);
	      }
	      this.quill.on('selection-change', this.handleDefaultKeyup.bind(this));
	      var range = this.quill.getSelection(true);
	      this.quill.updateContents(new Delta().retain(range.index).delete(range.length).insert(mentionContent).insert(' '));
	      this.quill.setSelection(range.index + mentionContent.length + 1, 0);
	    }
	  }, {
	    key: 'insert',
	    value: function insert(mentionContent) {
	      var insertMode = this.props.insertMode;

	      switch (insertMode) {
	        case 'TEXT_NODE':
	          this.insertWithTextNode(mentionContent);
	          break;
	        case 'ELEMENT_NODE':
	        default:
	          this.insertWithElementNode(mentionContent);
	          break;
	      }
	    }
	  }, {
	    key: 'insertMentionData',
	    value: function insertMentionData(mentionData) {
	      var _props2 = this.props,
	          mentionFormatter = _props2.mentionFormatter,
	          onAdd = _props2.onAdd;

	      var insertContent = mentionFormatter(mentionData);
	      this.insert(insertContent);
	      onAdd(insertContent, mentionData);
	    }
	  }, {
	    key: 'selectItem',
	    value: function selectItem(data) {
	      this.insertMentionData(data);
	      this.setState({
	        mentionList: []
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      var panelPosition = {
	        left: this.state.cursorPosition.x,
	        top: this.state.cursorPosition.y
	      };
	      var _props3 = this.props,
	          prefixCls = _props3.prefixCls,
	          panelFormatter = _props3.panelFormatter;

	      return _react2.default.createElement('div', { ref: function ref(target) {
	          return _this5.targetEl = target;
	        } }, _react2.default.createElement(_Panel2.default, {
	        prefixCls: prefixCls,
	        visible: this.state.panelVisible,
	        idx: this.state.panelIdx,
	        list: this.state.mentionList,
	        onSelect: this.selectItem,
	        formatter: panelFormatter,
	        style: panelPosition,
	        ref: function ref(panel) {
	          return _this5.panel = panel;
	        }
	      }));
	    }
	  }]);

	  return QuillMention;
	}(_react.Component);

	QuillMention.displayName = 'QuillMention';
	/* eslint-disable */
	QuillMention.propTypes = {
	  delimiter: _react2.default.PropTypes.string,
	  /**
	   * @i18n {zh-CN} class前缀
	   * @i18n {en-US} class prefix
	   */
	  prefixCls: _react2.default.PropTypes.string,
	  /**
	   * @i18n {zh-CN} 定义数据源
	   * @i18n {en-US} data source for mention content
	   */
	  source: _react.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.func]),
	  /**
	   * @i18n {zh-CN} 数据源查询延时
	   * @i18n {en-US} debounce of the request to data source
	   */
	  delay: _react.PropTypes.number,
	  /**
	   * @i18n {zh-CN} 匹配字符区间
	   * @i18n {en-US} only match the string after delimiter which the length in this range
	   */
	  matchRange: _react.PropTypes.arrayOf(_react.PropTypes.number),
	  /**
	   * @i18n {zh-CN} 数据源格式化匹配
	   * @i18n {en-US} format the data form source
	   */
	  formatter: _react.PropTypes.func,
	  /**
	   * @i18n {zh-CN} 自定义插入的mention内容
	   * @i18n {en-US} customize the insert content with this function | function
	   */
	  mentionFormatter: _react.PropTypes.func,
	  /**
	   * @i18n {zh-CN} 自定义选择列表
	   * @i18n {en-US} customize the panel display
	   */
	  panelFormatter: _react.PropTypes.func,
	  /**
	   * @i18n {zh-CN} 发生变化后的触发
	   * @i18n {en-US} trigger when editor content change
	   * @param {data} xxxxxx
	   */
	  onChange: _react.PropTypes.func,
	  /**
	   * @i18n {zh-CN} 添加mention后触发
	   * @i18n {en-US} Callback invoked when a mention has been added
	   */
	  onAdd: _react.PropTypes.func,
	  /**
	   * @i18n {zh-CN} `ELEMENT_NODE` 插入button, `TEXT_NODE` 插入纯字符串
	   * @i18n {en-US} `ELEMENT_NODE`
	   * will insert mention content with a button, `TEXT_NODE` will insert with a text node
	   */
	  insertMode: _react.PropTypes.oneOf(['ELEMENT_NODE', 'TEXT_NODE']),
	  quill: _react.PropTypes.objectOf(_react.PropTypes.any)
	};
	QuillMention.defaultProps = {
	  delimiter: '@',
	  prefixCls: 'quill-mention',
	  source: [],
	  delay: 100,
	  matchRange: [0, 20],
	  formatter: function formatter(data) {
	    return data;
	  },
	  mentionFormatter: function mentionFormatter(data) {
	    return '@' + data.text;
	  },
	  panelFormatter: function panelFormatter(data) {
	    return '' + data.text;
	  },
	  onChange: function onChange() {},
	  onAdd: function onAdd() {},
	  insertMode: 'ELEMENT_NODE'
	};
	exports.default = QuillMention;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (quill, modulePath) {
	  var result = void 0;
	  try {
	    result = quill.imports[modulePath];
	  } catch (err) {
	    result = null;
	  }
	  return !!result;
	};

	module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);

	  function Panel() {
	    _classCallCheck(this, Panel);

	    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
	  }

	  _createClass(Panel, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.idx !== prevProps.idx) {
	        this.maybeScrollItemIntoView();
	      }
	    }
	  }, {
	    key: 'maybeScrollItemIntoView',
	    value: function maybeScrollItemIntoView() {
	      var panel = this.panel;
	      var current = this['item-' + this.props.idx];
	      if (panel && current) {
	        var clientHeight = panel.clientHeight;
	        var curClientHeight = current.clientHeight;
	        var offsetTop = current.offsetTop;
	        var scrollTop = panel.scrollTop;
	        var range = Math.abs(offsetTop - scrollTop) + curClientHeight;
	        if (range > clientHeight || scrollTop > offsetTop) {
	          panel.scrollTop = offsetTop;
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          onSelect = _props.onSelect,
	          list = _props.list,
	          style = _props.style,
	          visible = _props.visible,
	          idx = _props.idx,
	          formatter = _props.formatter,
	          prefixCls = _props.prefixCls;

	      var clsObj = {};
	      clsObj[prefixCls + '-panel'] = true;
	      clsObj[prefixCls + '-panel-visible'] = visible;
	      var cls = (0, _classnames2.default)(clsObj);
	      return _react2.default.createElement('ul', { className: cls, style: style, ref: function ref(e) {
	          return _this2.panel = e;
	        } }, list.map(function (item, index) {
	        var itemClsObj = {};
	        itemClsObj[prefixCls + '-panel-item'] = true;
	        itemClsObj[prefixCls + '-panel-item-current'] = idx === index;
	        var itemCls = (0, _classnames2.default)(itemClsObj);
	        return _react2.default.createElement('li', { // eslint-disable-line
	          className: itemCls,
	          key: item.id || index,
	          ref: function ref(e) {
	            return _this2['item-' + index] = e;
	          },
	          onClick: function onClick() {
	            return onSelect(item);
	          }
	        }, _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: formatter(item) } }));
	      }));
	    }
	  }]);

	  return Panel;
	}(_react2.default.Component);

	Panel.propTypes = {
	  prefixCls: _react.PropTypes.string,
	  list: _react.PropTypes.arrayOf(_react.PropTypes.any),
	  style: _react.PropTypes.objectOf(_react.PropTypes.any),
	  idx: _react.PropTypes.number,
	  visible: _react.PropTypes.bool.isRequired,
	  onSelect: _react.PropTypes.func,
	  formatter: _react.PropTypes.func
	};
	Panel.defaultProps = {
	  prefixCls: '',
	  list: [],
	  style: {},
	  idx: 0,
	  onSelect: function onSelect() {},
	  formatter: ''
	};
	exports.default = Panel;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};

	var _quill = __webpack_require__(4);

	var _quill2 = _interopRequireDefault(_quill);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Embed = _quill2.default.import('blots/embed');

	var ButtonBlot = function (_Embed) {
	  _inherits(ButtonBlot, _Embed);

	  function ButtonBlot() {
	    _classCallCheck(this, ButtonBlot);

	    return _possibleConstructorReturn(this, (ButtonBlot.__proto__ || Object.getPrototypeOf(ButtonBlot)).apply(this, arguments));
	  }

	  _createClass(ButtonBlot, [{
	    key: 'format',
	    value: function format(name, value) {
	      if (name === 'mention' && value) {
	        this.domNode.dataset.value = value;
	      } else {
	        _get(ButtonBlot.prototype.__proto__ || Object.getPrototypeOf(ButtonBlot.prototype), 'format', this).call(this, name, value);
	      }
	    }
	  }], [{
	    key: 'create',
	    value: function create(value) {
	      var node = _get(ButtonBlot.__proto__ || Object.getPrototypeOf(ButtonBlot), 'create', this).call(this, value);
	      node.value = value;
	      node.setAttribute('type', 'button');
	      node.setAttribute('tabindex', '-1');
	      return node;
	    }
	    // static formats(domNode) {
	    //   return ATTRIBUTES.reduce(function(formats, attribute) {
	    //     if (domNode.hasAttribute(attribute)) {
	    //       formats[attribute] = domNode.getAttribute(attribute);
	    //     }
	    //     return formats;
	    //   }, {})
	    // }

	  }, {
	    key: 'value',
	    value: function value(domNode) {
	      return domNode.value;
	    }
	  }]);

	  return ButtonBlot;
	}(Embed);

	ButtonBlot.blotName = 'mention';
	ButtonBlot.tagName = 'input';
	ButtonBlot.className = 'quill-mention-node';
	exports.default = ButtonBlot;
	module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function getLength() {
	  var ops = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	  var length = 0;
	  ops.forEach(function (delta) {
	    if (delta.insert && typeof delta.insert === 'string') {
	      length += delta.insert.replace(/\s/g, '').length;
	    } else {
	      length += 1;
	    }
	  });
	  return length;
	}

	var Label = function Label(_ref) {
	  var count = _ref.count,
	      limit = _ref.limit;

	  var overCount = limit - count;
	  return _react2.default.createElement('span', null, "\u5DF2\u7ECF\u8F93\u5165" + count + "\u4E2A\u5B57\u7B26,\n        " + (overCount < 0 ? "\u8D85\u51FA\u4E86" + Math.abs(overCount) : "\u8FD8\u80FD\u8F93\u5165" + overCount) + "\n      \u4E2A\u5B57\u7B26");
	};
	Label.propTypes = {
	  count: _react.PropTypes.number.isRequired,
	  limit: _react.PropTypes.number.isRequired
	};

	var Count = function (_Component) {
	  _inherits(Count, _Component);

	  function Count(props) {
	    _classCallCheck(this, Count);

	    var _this = _possibleConstructorReturn(this, (Count.__proto__ || Object.getPrototypeOf(Count)).call(this, props));

	    _this.state = {
	      count: 0
	    };
	    return _this;
	  }

	  _createClass(Count, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      this.props.quill.on('text-change', function () {
	        var count = getLength(_this2.props.quill.getContents());
	        _this2.setState({
	          count: count
	        });
	      });
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var count = this.state.count;
	      var limit = this.props.limit;

	      var child = this.props.children || _react2.default.createElement(Label, { count: count, limit: limit });
	      var cp = {
	        limit: limit,
	        count: count
	      };
	      return _react2.default.cloneElement(child, cp);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', null, this.renderChildren());
	    }
	  }]);

	  return Count;
	}(_react.Component);

	Count.propTypes = {
	  quill: _react.PropTypes.objectOf(_react.PropTypes.any),
	  limit: _react.PropTypes.number,
	  children: _react.PropTypes.element
	};
	exports.default = Count;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _lodash = __webpack_require__(12);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _BaseEditor2 = __webpack_require__(14);

	var _BaseEditor3 = _interopRequireDefault(_BaseEditor2);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Editor = function (_BaseEditor) {
	  _inherits(Editor, _BaseEditor);

	  /*
	  Changing one of these props should cause a regular update.
	  */
	  function Editor(props) {
	    _classCallCheck(this, Editor);

	    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

	    var value = _this.isControlled() ? _this.props.value : _this.props.defaultValue;
	    _this.state = {
	      generation: 0,
	      value: value
	    };
	    return _this;
	  }

	  _createClass(Editor, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps, nextState) {
	      var editor = this.editor;

	      // If the component is unmounted and mounted too quickly
	      // an error is thrown in setEditorContents since editor is
	      // still undefined. Must check if editor is undefined
	      // before performing this call.
	      if (!editor) return false;

	      // Update only if we've been passed a new `value`.
	      // This leaves components using `defaultValue` alone.
	      if ('value' in nextProps) {
	        // NOTE: Seeing that Quill is missing a way to prevent
	        //       edits, we have to settle for a hybrid between
	        //       controlled and uncontrolled mode. We can't prevent
	        //       the change, but we'll still override content
	        //       whenever `value` differs from current state.
	        debugger;
	        if (!(0, _lodash2.default)(nextProps.value, this.getEditorContents())) {
	          this.setEditorContents(editor, nextProps.value);
	        }
	      }

	      // We can update readOnly state in-place.
	      if ('readOnly' in nextProps) {
	        if (nextProps.readOnly !== this.props.readOnly) {
	          this.setEditorReadOnly(editor, nextProps.readOnly);
	        }
	      }

	      // If we need to regenerate the component, we can avoid a detailed
	      // in-place update step, and just let everything rerender.
	      if (this.shouldComponentRegenerate(nextProps, nextState)) {
	        return this.regenerate();
	      }
	      return false;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig());
	      if (this.props.plugins) {
	        this.renderPlugins(this.editor);
	      }
	      // Restore editor from Quill's native formats in regeneration scenario
	      if (this.quillDelta) {
	        this.editor.setContents(this.quillDelta);
	        this.editor.setSelection(this.quillSelection);
	        this.editor.focus();
	        this.quillDelta = null;
	        this.quillSelection = null;
	        return;
	      }
	      if (this.state.value) {
	        this.setEditorContents(this.editor, this.state.value);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var editor = this.getEditor();
	      if (editor) {
	        this.unhookEditor(editor);
	        this.editor = null;
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var _this2 = this;

	      // If the component has been regenerated, we already know we should update.
	      if (this.state.generation !== nextState.generation) {
	        return true;
	      }

	      // Compare props that require React updating the DOM.
	      return Editor.cleanProps.some(function (prop) {
	        return (
	          // Note that `isEqual` compares deeply, making it safe to perform
	          // non-immutable updates, at the cost of performance.
	          !(0, _lodash2.default)(nextProps[prop], _this2.props[prop])
	        );
	      });
	    }
	  }, {
	    key: 'shouldComponentRegenerate',
	    value: function shouldComponentRegenerate(nextProps) {
	      var _this3 = this;

	      // Whenever a `dirtyProp` changes, the editor needs reinstantiation.
	      return Editor.dirtyProps.some(function (prop) {
	        return (
	          // Note that `isEqual` compares deeply, making it safe to perform
	          // non-immutable updates, at the cost of performance.
	          !(0, _lodash2.default)(nextProps[prop], _this3.props[prop])
	        );
	      });
	    }

	    /*
	    If we could not update settings from the new props in-place, we have to tear
	    down everything and re-render from scratch.
	    */

	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      if (this.state.generation !== nextState.generation) {
	        this.componentWillUnmount();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.state.generation !== prevState.generation) {
	        this.componentDidMount();
	      }
	    }
	  }, {
	    key: 'getEditorConfig',
	    value: function getEditorConfig() {
	      return {
	        bounds: this.props.bounds,
	        formats: this.props.formats,
	        modules: this.props.modules,
	        placeholder: this.props.placeholder,
	        readOnly: this.props.readOnly,
	        theme: this.props.theme
	      };
	    }
	  }, {
	    key: 'getEditor',
	    value: function getEditor() {
	      return this.editor;
	    }
	  }, {
	    key: 'getEditingArea',
	    value: function getEditingArea() {
	      return _reactDom2.default.findDOMNode(this.editingArea); // eslint-disable-line
	    }
	  }, {
	    key: 'getEditorContents',
	    value: function getEditorContents() {
	      return this.state.value;
	    }
	  }, {
	    key: 'getEditorSelection',
	    value: function getEditorSelection() {
	      return this.state.selection;
	    }
	  }, {
	    key: 'convertHtml',
	    value: function convertHtml(html) {
	      if (Array.isArray(html)) return html;
	      return this.editor.clipboard.convert('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
	    }
	  }, {
	    key: 'renderPlugins',
	    value: function renderPlugins(quill) {
	      if (!this.pluginsTarget) return;
	      _reactDom2.default.render(_react2.default.createElement('div', null, _react2.default.Children.map(this.props.plugins, function (plugin) {
	        var cp = {
	          quill: quill
	        };
	        return _react2.default.cloneElement(plugin, cp);
	      })), this.pluginsTarget);
	    }
	    /*
	    Regenerating the editor will cause the whole tree, including the container,
	    to be cleaned up and re-rendered from scratch.
	    */

	  }, {
	    key: 'regenerate',
	    value: function regenerate() {
	      // Cache selection and contents in Quill's native format to be restored later
	      this.quillDelta = this.editor.getContents();
	      this.quillSelection = this.editor.getSelection();
	      this.setState({
	        generation: this.state.generation + 1
	      });
	    }
	    /*
	      We consider the component to be controlled if `value` is being sent in props.
	    */

	  }, {
	    key: 'isControlled',
	    value: function isControlled() {
	      return 'value' in this.props;
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      this.editor.focus();
	    }
	  }, {
	    key: 'onEditorChangeText',
	    value: function onEditorChangeText(value, delta, source, editor) {
	      var _this4 = this;

	      debugger;
	      if (delta.ops !== this.getEditorContents()) {
	        this.setState({ value: delta.ops }, function () {
	          if (_this4.props.onChange) {
	            _this4.props.onChange(value, delta, source, editor);
	          }
	        });
	      }
	    }
	  }, {
	    key: 'onEditorChangeSelection',
	    value: function onEditorChangeSelection(range, source, editor) {
	      var s = this.getEditorSelection() || {};
	      var r = range || {};
	      if (r.length !== s.length || r.index !== s.index) {
	        this.setState({ selection: range });
	        if (this.props.onChangeSelection) {
	          this.props.onChangeSelection(range, source, editor);
	        }
	      }
	    }
	    /*
	    Renders an editor area, unless it has been provided one to clone.
	    */

	  }, {
	    key: 'renderEditingArea',
	    value: function renderEditingArea() {
	      var self = this;
	      var children = this.props.children;

	      var properties = {
	        key: this.state.generation,
	        ref: function ref(element) {
	          self.editingArea = element;
	        }
	      };

	      var customElement = _react2.default.Children.count(children) ? _react2.default.Children.only(children) : null;

	      var editingArea = customElement ? _react2.default.cloneElement(customElement, properties) : _react2.default.DOM.div(properties);

	      return editingArea;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      return _react2.default.createElement('div', {
	        id: this.props.id,
	        style: _extends({ position: 'relative' }, this.props.style),
	        key: this.state.generation,
	        className: ['quill'].concat(this.props.className).join(' ')
	      }, this.renderEditingArea(), _react2.default.createElement('div', { ref: function ref(target) {
	          return _this5.pluginsTarget = target;
	        } }));
	    }
	  }]);

	  return Editor;
	}(_BaseEditor3.default);

	Editor.propTypes = {
	  id: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  theme: _react.PropTypes.string,
	  style: _react.PropTypes.objectOf(_react.PropTypes.any),
	  readOnly: _react.PropTypes.bool,
	  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
	  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
	  placeholder: _react.PropTypes.string,
	  bounds: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  onKeyPress: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func,
	  onKeyUp: _react.PropTypes.func,
	  onChange: _react.PropTypes.func,
	  onChangeSelection: _react.PropTypes.func,
	  modules: _react.PropTypes.objectOf(_react.PropTypes.any),
	  formats: _react.PropTypes.arrayOf(_react.PropTypes.any),
	  plugins: _react.PropTypes.arrayOf(_react.PropTypes.any),
	  children: _react.PropTypes.element
	};
	Editor.dirtyProps = ['modules', 'formats', 'bounds', 'theme', 'children', 'plugins'];
	Editor.cleanProps = ['id', 'className', 'style', 'placeholder', 'onKeyPress', 'onKeyDown', 'onKeyUp', 'onChange', 'onChangeSelection'];
	Editor.defaultProps = {
	  theme: 'snow',
	  modules: {}
	};
	exports.default = Editor;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    asyncTag = '[object AsyncFunction]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    nullTag = '[object Null]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    proxyTag = '[object Proxy]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    undefinedTag = '[object Undefined]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice,
	    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = isEqual;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(13)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _quill = __webpack_require__(4);

	var _quill2 = _interopRequireDefault(_quill);

	var _lodash = __webpack_require__(12);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var BaseEditor = function (_React$Component) {
	  _inherits(BaseEditor, _React$Component);

	  function BaseEditor() {
	    _classCallCheck(this, BaseEditor);

	    return _possibleConstructorReturn(this, (BaseEditor.__proto__ || Object.getPrototypeOf(BaseEditor)).apply(this, arguments));
	  }

	  _createClass(BaseEditor, [{
	    key: 'setEditorSelection',
	    value: function setEditorSelection(editor, r) {
	      var range = r;
	      if (range) {
	        // Validate bounds before applying.
	        var length = editor.getLength();
	        range.index = Math.max(0, Math.min(range.index, length - 1));
	        range.length = Math.max(0, Math.min(range.length, length - 1 - range.index));
	      }
	      editor.setSelection(range);
	    }
	    /*
	    Replace the contents of the editor, but keep
	    the previous selection hanging around so that
	    the cursor won't move.
	    */

	  }, {
	    key: 'setEditorContents',
	    value: function setEditorContents(editor, value) {
	      var delta = this.convertHtml(value);
	      if ((0, _lodash2.default)(delta, editor.getContents())) return;
	      var sel = editor.getSelection();
	      editor.setContents(delta || []);
	      if (sel) this.setEditorSelection(editor, sel);
	    }
	  }, {
	    key: 'setEditorReadOnly',
	    value: function setEditorReadOnly(editor, value) {
	      if (value) {
	        editor.disable();
	      } else {
	        editor.enable();
	      }
	    }
	  }, {
	    key: 'createEditor',
	    value: function createEditor($el, config) {
	      var editor = new _quill2.default($el, config);
	      this.hookEditor(editor);
	      return editor;
	    }
	  }, {
	    key: 'hookEditor',
	    value: function hookEditor(editor) {
	      var _this2 = this;

	      // Expose the editor on change events via a weaker,
	      // unprivileged proxy object that does not allow
	      // accidentally modifying editor state.
	      var unprivilegedEditor = this.makeUnprivilegedEditor(editor);

	      this.handleTextChange = function (delta, oldDelta, source) {
	        if (_this2.onEditorChangeText) {
	          _this2.onEditorChangeText(editor.root.innerHTML, delta, source, unprivilegedEditor);
	          _this2.onEditorChangeSelection(editor.getSelection(), source, unprivilegedEditor);
	        }
	      };

	      this.handleSelectionChange = function (range, oldRange, source) {
	        if (this.onEditorChangeSelection) {
	          this.onEditorChangeSelection(range, source, unprivilegedEditor);
	        }
	      }.bind(this);

	      editor.on('text-change', this.handleTextChange);
	      editor.on('selection-change', this.handleSelectionChange);
	    }
	  }, {
	    key: 'unhookEditor',
	    value: function unhookEditor(editor) {
	      editor.off('selection-change');
	      editor.off('editor-change');
	    }

	    /*
	    Returns an weaker, unprivileged proxy object that only
	    exposes read-only accessors found on the editor instance,
	    without any state-modificating methods.
	    */

	  }, {
	    key: 'makeUnprivilegedEditor',
	    value: function makeUnprivilegedEditor(editor) {
	      var _getLength = editor.getLength,
	          _getText = editor.getText,
	          _getContents = editor.getContents,
	          _getSelection = editor.getSelection,
	          _getBounds = editor.getBounds;

	      return {
	        getLength: function getLength() {
	          for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
	            arg[_key] = arguments[_key];
	          }

	          return _getLength.apply(editor, arg);
	        },
	        getText: function getText() {
	          for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            arg[_key2] = arguments[_key2];
	          }

	          return _getText.apply(editor, arg);
	        },
	        getContents: function getContents() {
	          for (var _len3 = arguments.length, arg = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            arg[_key3] = arguments[_key3];
	          }

	          return _getContents.apply(editor, arg);
	        },
	        getSelection: function getSelection() {
	          for (var _len4 = arguments.length, arg = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	            arg[_key4] = arguments[_key4];
	          }

	          return _getSelection.apply(editor, arg);
	        },
	        getBounds: function getBounds() {
	          for (var _len5 = arguments.length, arg = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	            arg[_key5] = arguments[_key5];
	          }

	          return _getBounds.apply(editor, arg);
	        }
	      };
	    }
	  }]);

	  return BaseEditor;
	}(_react2.default.Component);

	exports.default = BaseEditor;
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _quill = __webpack_require__(4);

	var _quill2 = _interopRequireDefault(_quill);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Cursor = _quill2.default.import('blots/cursor');
	var restore = Cursor.prototype.restore;
	Cursor.prototype.restore = function () {
	  // if (this.selection.composing) return
	  try {
	    var tempComposing = this.selection.composing;
	    this.selection.composing = false;
	    restore.call(this);
	    this.selection.composing = tempComposing;
	  } catch (err) {
	    console.log(err);
	    return; // eslint-disable-line
	  }
	};

	exports.default = Cursor;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;