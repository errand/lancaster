/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/deepmerge/index.js":
/*!*****************************************!*\
  !*** ./node_modules/deepmerge/index.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(this, function () {\n\nreturn function deepmerge(target, src) {\n    var array = Array.isArray(src);\n    var dst = array && [] || {};\n\n    if (array) {\n        target = target || [];\n        dst = dst.concat(target);\n        src.forEach(function(e, i) {\n            if (typeof dst[i] === 'undefined') {\n                dst[i] = e;\n            } else if (typeof e === 'object') {\n                dst[i] = deepmerge(target[i], e);\n            } else {\n                if (target.indexOf(e) === -1) {\n                    dst.push(e);\n                }\n            }\n        });\n    } else {\n        if (target && typeof target === 'object') {\n            Object.keys(target).forEach(function (key) {\n                dst[key] = target[key];\n            })\n        }\n        Object.keys(src).forEach(function (key) {\n            if (typeof src[key] !== 'object' || !src[key]) {\n                dst[key] = src[key];\n            }\n            else {\n                if (!target[key]) {\n                    dst[key] = src[key];\n                } else {\n                    dst[key] = deepmerge(target[key], src[key]);\n                }\n            }\n        });\n    }\n\n    return dst;\n}\n\n}));\n\n\n//# sourceURL=webpack://lancaster/./node_modules/deepmerge/index.js?");

/***/ }),

/***/ "./static/src/scss/main.scss":
/*!***********************************!*\
  !*** ./static/src/scss/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lancaster/./static/src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/button.js":
/*!******************************************************!*\
  !*** ./node_modules/social-likes-next/lib/button.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _deepmerge = __webpack_require__(/*! deepmerge */ \"./node_modules/deepmerge/index.js\");\n\nvar _deepmerge2 = _interopRequireDefault(_deepmerge);\n\nvar _config = __webpack_require__(/*! ./config */ \"./node_modules/social-likes-next/lib/config.js\");\n\nvar _util = __webpack_require__(/*! ./util */ \"./node_modules/social-likes-next/lib/util.js\");\n\nvar _services = __webpack_require__(/*! ./services */ \"./node_modules/social-likes-next/lib/services/index.js\");\n\nvar baseServices = _interopRequireWildcard(_services);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Merge base services with user services\nvar services = window.socialLikesButtons ? (0, _deepmerge2.default)(baseServices, window.socialLikesButtons) : baseServices;\n\n/**\n * A button.\n *\n * @param {HTMLElement} widget\n * @param {Object} options\n */\n\nvar Button = function () {\n\tfunction Button(widget, options) {\n\t\t_classCallCheck(this, Button);\n\n\t\tthis.widget = widget;\n\t\tthis.data = (0, _util.dataset)(widget);\n\t\tthis.options = (0, _deepmerge2.default)(options, this.data);\n\n\t\tthis.initService();\n\t\tif (this.service) {\n\t\t\tthis.initHtml();\n\t\t\tthis.initEvents();\n\t\t}\n\t\tif (!this.service && \"development\" === 'development') {\n\t\t\t/* eslint-disable no-console */\n\t\t\tconsole.error('Social Likes: service for widget \"' + (widget.className || this.options.service) + '\" not found.');\n\t\t\t/* eslint-enable no-console */\n\t\t}\n\t}\n\n\t/**\n  * Update options.\n  *\n  * @param {Object} options New options.\n  */\n\n\n\t_createClass(Button, [{\n\t\tkey: 'update',\n\t\tvalue: function update(options) {\n\t\t\tthis.options = (0, _deepmerge2.default)(this.options, options);\n\t\t}\n\n\t\t/**\n   * Read service name and apply its options.\n   * Service can be a class on the widget (.facebook) or `service` option.\n   */\n\n\t}, {\n\t\tkey: 'initService',\n\t\tvalue: function initService() {\n\t\t\tvar service = this.options.service;\n\t\t\tif (!service) {\n\t\t\t\t// class=\"facebook\"\n\t\t\t\tservice = (0, _util.toArray)(this.widget.classList).reduce(function (_, cls) {\n\t\t\t\t\tif (services[cls]) {\n\t\t\t\t\t\treturn cls;\n\t\t\t\t\t}\n\t\t\t\t}, null);\n\t\t\t\tif (!service) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t}\n\t\t\tthis.service = service;\n\t\t\tif (services[service]) {\n\t\t\t\tthis.options = (0, _deepmerge2.default)(this.options, services[service]);\n\t\t\t} else {\n\t\t\t\tthis.service = null;\n\t\t\t}\n\t\t}\n\n\t\t/**\n   * Initialize markup of a button.\n   */\n\n\t}, {\n\t\tkey: 'initHtml',\n\t\tvalue: function initHtml() {\n\t\t\tvar _this = this;\n\n\t\t\tvar cx = function cx(name) {\n\t\t\t\treturn (0, _util.className)(name, _this.service);\n\t\t\t};\n\t\t\tvar widget = this.widget;\n\t\t\tvar options = this.options;\n\n\t\t\t// Remove existing class (.facebook) with a proper one\n\t\t\twidget.classList.remove(this.service);\n\t\t\tcx('widget').split(' ').forEach(function (cls) {\n\t\t\t\treturn widget.classList.add(cls);\n\t\t\t});\n\n\t\t\t// Button:\n\t\t\t// 1. Normal button with <button> tag.\n\t\t\t// 2. Link <a> if the service has the clickUrl option.\n\t\t\t// 3. Link <a> with .social-likes__invisible-button class if has clickUrl option but widget markup has no text.\n\t\t\t// 4. No button if there’s no text in the markup and no clickUrl option.\n\t\t\tvar buttonHtml = '';\n\t\t\tvar oldHtml = widget.innerHTML.trim();\n\t\t\tif (options.clickUrl || oldHtml) {\n\t\t\t\tvar buttonTag = 'div';\n\t\t\t\tvar buttonHref = '';\n\t\t\t\tvar buttonClasses = cx('button');\n\t\t\t\tif (options.clickUrl) {\n\t\t\t\t\tvar url = this.makeUrl(options.clickUrl);\n\t\t\t\t\tbuttonTag = 'a';\n\t\t\t\t\tbuttonHref = 'href=\"' + url + '\"';\n\t\t\t\t\tif (!oldHtml) {\n\t\t\t\t\t\tbuttonClasses = cx('invisible-button');\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tbuttonHtml = '\\n\\t\\t\\t\\t<' + buttonTag + ' ' + buttonHref + ' class=\"' + buttonClasses + '\">\\n\\t\\t\\t\\t\\t' + oldHtml + '\\n\\t\\t\\t\\t</' + buttonTag + '>\\n\\t\\t\\t';\n\t\t\t} else {\n\t\t\t\twidget.classList.add((0, _util.className)('widget_notext'));\n\t\t\t}\n\n\t\t\t// Icon\n\t\t\tvar svgHtml = (0, _util.svg)(this.options.icon, cx('icon'));\n\n\t\t\twidget.innerHTML = svgHtml + buttonHtml;\n\t\t}\n\n\t\t/**\n   * Attach event handlers.\n   */\n\n\t}, {\n\t\tkey: 'initEvents',\n\t\tvalue: function initEvents() {\n\t\t\tif (!this.options.clickUrl) {\n\t\t\t\tthis.widget.addEventListener('click', this.onClick.bind(this));\n\t\t\t\tthis.widget.addEventListener('keydown', this.onKeyDown.bind(this));\n\t\t\t\tthis.widget.setAttribute('tabindex', '0');\n\t\t\t\tthis.widget.setAttribute('role', 'button');\n\t\t\t}\n\t\t}\n\n\t\t/**\n   * Replace URL and title in an URL template.\n   *\n   * @param {string} urlTemplate URL template.\n   * @return {string}\n   */\n\n\t}, {\n\t\tkey: 'makeUrl',\n\t\tvalue: function makeUrl(urlTemplate) {\n\t\t\treturn (0, _util.makeUrl)(urlTemplate, {\n\t\t\t\turl: this.options.url,\n\t\t\t\ttitle: this.options.title\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'makeUrlWithParams',\n\t\tvalue: function makeUrlWithParams(urlTemplate) {\n\t\t\tvar url = this.makeUrl(urlTemplate);\n\t\t\tvar params = (0, _deepmerge2.default)(this.data, this.options.data || {});\n\t\t\treturn (0, _util.addParamsToUrl)(url, params, ['service', 'title', 'url']);\n\t\t}\n\n\t\t/**\n   * Button click handler.\n   *\n   * @param {Event} event Event.\n   */\n\n\t}, {\n\t\tkey: 'onClick',\n\t\tvalue: function onClick(event) {\n\t\t\tvar options = this.options;\n\t\t\tvar ok = true;\n\t\t\tif (typeof options.click === 'function') {\n\t\t\t\tok = options.click.call(this, event);\n\t\t\t}\n\t\t\tif (ok) {\n\t\t\t\tvar url = this.makeUrlWithParams(options.popupUrl);\n\t\t\t\t(0, _util.openPopup)(url, {\n\t\t\t\t\twidth: options.popupWidth,\n\t\t\t\t\theight: options.popupHeight,\n\t\t\t\t\tname: _config.prefix + '_' + this.service\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'onKeyDown',\n\t\tvalue: function onKeyDown(event) {\n\t\t\tif (event.which === 13 || event.which === 32) {\n\t\t\t\tevent.preventDefault();\n\t\t\t\tthis.onClick(event);\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn Button;\n}();\n\nexports.default = Button;\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/button.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/config.js":
/*!******************************************************!*\
  !*** ./node_modules/social-likes-next/lib/config.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n/**\n * Prefix that is used to generate CSS class names, etc.\n *\n * @type {string}\n */\nvar prefix = exports.prefix = 'social-likes';\n\n/**\n * Delimiter that is used to separate element.\n *\n * @type {string}\n */\nvar elemDelimiter = exports.elemDelimiter = '__';\n\n/**\n * Delimiter that is used to separate modifier.\n *\n * @type {string}\n */\nvar modDelimiter = exports.modDelimiter = '_';\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/config.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/social-likes-next/lib/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\nexports.default = init;\nexports.autoInit = autoInit;\n\nvar _config = __webpack_require__(/*! ./config */ \"./node_modules/social-likes-next/lib/config.js\");\n\nvar _util = __webpack_require__(/*! ./util */ \"./node_modules/social-likes-next/lib/util.js\");\n\nvar _socialLikes = __webpack_require__(/*! ./social-likes */ \"./node_modules/social-likes-next/lib/social-likes.js\");\n\nvar _socialLikes2 = _interopRequireDefault(_socialLikes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Symbol to store an instance reference in a DOM node\nvar symbol = 'socialLikes';\n\n/**\n * Initialize or update Social Likes on a DOM element.\n *\n * @param {HTMLElement} elem DOM element.\n * @param {Object} [options] Options.\n * @return {SocialLikes}\n */\nfunction init(elem) {\n\tvar options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n\tvar instance = elem[symbol];\n\tif (instance) {\n\t\tinstance.update(options);\n\t} else {\n\t\tinstance = elem[symbol] = new _socialLikes2.default(elem, options);\n\t}\n\treturn instance;\n}\n\n/**\n * Init Social Likes on all elements with class .social-likes.\n *\n * @param {boolean} wait Wait for DOM ready if no elements found.\n */\nfunction autoInit() {\n\tvar wait = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];\n\n\tvar elements = document.querySelectorAll('.' + _config.prefix);\n\tif (elements) {\n\t\t(0, _util.toArray)(elements).forEach(function (elem) {\n\t\t\treturn init(elem);\n\t\t});\n\t} else if (wait) {\n\t\t// No elements found. Wait for DOM content loaded to try again in case the script was included in the <head>\n\t\tdocument.addEventListener('DOMContentLoaded', autoInit);\n\t}\n}\n\n// Auto initialization\nautoInit(true);\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/index.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/services/facebook.js":
/*!*****************************************************************!*\
  !*** ./node_modules/social-likes-next/lib/services/facebook.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\nexports.default = {\n\ticon: 'M13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h5V9H6V7h2V5c0-2 2-2 2-2h3v2h-3v2h3l-.5 2H10v7h3c2 0 3-1 3-3V3c0-2-1-3-3-3z',\n\tpopupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',\n\tpopupWidth: 600,\n\tpopupHeight: 500\n};\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/services/facebook.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/services/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/social-likes-next/lib/services/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _facebook = __webpack_require__(/*! ./facebook */ \"./node_modules/social-likes-next/lib/services/facebook.js\");\n\nObject.defineProperty(exports, \"facebook\", ({\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_facebook).default;\n  }\n}));\n\nvar _odnoklassniki = __webpack_require__(/*! ./odnoklassniki */ \"./node_modules/social-likes-next/lib/services/odnoklassniki.js\");\n\nObject.defineProperty(exports, \"odnoklassniki\", ({\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_odnoklassniki).default;\n  }\n}));\n\nvar _pinterest = __webpack_require__(/*! ./pinterest */ \"./node_modules/social-likes-next/lib/services/pinterest.js\");\n\nObject.defineProperty(exports, \"pinterest\", ({\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_pinterest).default;\n  }\n}));\n\nvar _plusone = __webpack_require__(/*! ./plusone */ \"./node_modules/social-likes-next/lib/services/plusone.js\");\n\nObject.defineProperty(exports, \"plusone\", ({\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_plusone).default;\n  }\n}));\n\nvar _twitter = __webpack_require__(/*! ./twitter */ \"./node_modules/social-likes-next/lib/services/twitter.js\");\n\nObject.defineProperty(exports, \"twitter\", ({\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_twitter).default;\n  }\n}));\n\nvar _vkontakte = __webpack_require__(/*! ./vkontakte */ \"./node_modules/social-likes-next/lib/services/vkontakte.js\");\n\nObject.defineProperty(exports, \"vkontakte\", ({\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_vkontakte).default;\n  }\n}));\n\nvar _telegram = __webpack_require__(/*! ./telegram */ \"./node_modules/social-likes-next/lib/services/telegram.js\");\n\nObject.defineProperty(exports, \"telegram\", ({\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_telegram).default;\n  }\n}));\n\nvar _linkedin = __webpack_require__(/*! ./linkedin */ \"./node_modules/social-likes-next/lib/services/linkedin.js\");\n\nObject.defineProperty(exports, \"linkedin\", ({\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_linkedin).default;\n  }\n}));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/services/index.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/services/linkedin.js":
/*!*****************************************************************!*\
  !*** ./node_modules/social-likes-next/lib/services/linkedin.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\n/* eslint-disable max-len */\n\nexports.default = {\n\ticon: 'M14.4,0H1.6C0.7,0,0,0.7,0,1.6v12.7C0,15.3,0.7,16,1.6,16h12.7c0.9,0,1.6-0.7,1.6-1.6V1.6C16,0.7,15.3,0,14.4,0zM3.4,1.9C4.3,1.9,5,2.5,5,3.3c0,0.8-0.7,1.5-1.6,1.5S1.8,4.1,1.8,3.3C1.8,2.5,2.6,1.9,3.4,1.9z M5.2,14.1H1.7V5.9h3.5V14.1z M14.1,14.1h-2.7V9.7c0-0.9-0.6-1.6-1.5-1.6C9,8.1,8.7,8.8,8.7,9.5c0,0.9,0,4.7,0,4.7H6V5.9h2.7v1.2c0.4-0.5,1.4-1.2,2.4-1.2c1.3,0,1.6,0.3,2.1,0.8c1,1,0.9,2.4,0.9,2.9h0L14.1,14.1z',\n\tpopupUrl: 'https://www.linkedin.com/shareArticle?url={url}',\n\tpopupWidth: 600,\n\tpopupHeight: 500\n};\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/services/linkedin.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/services/odnoklassniki.js":
/*!**********************************************************************!*\
  !*** ./node_modules/social-likes-next/lib/services/odnoklassniki.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\n/* eslint-disable max-len */\n\nexports.default = {\n\ticon: 'M8 6.107c.888 0 1.607-.72 1.607-1.607 0-.888-.72-1.607-1.607-1.607s-1.607.72-1.607 1.607c0 .888.72 1.607 1.607 1.607zM13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zM8 .75c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75S4.25 6.57 4.25 4.5C4.25 2.43 5.93.75 8 .75zm3.826 12.634c.42.42.42 1.097 0 1.515-.21.208-.483.313-.758.313-.274 0-.548-.105-.758-.314L8 12.59 5.69 14.9c-.42.418-1.098.418-1.516 0s-.42-1.098 0-1.516L6.357 11.2c-1.303-.386-2.288-1.073-2.337-1.11-.473-.354-.57-1.025-.214-1.5.354-.47 1.022-.567 1.496-.216.03.022 1.4.946 2.698.946 1.31 0 2.682-.934 2.693-.943.474-.355 1.146-.258 1.5.213.355.474.26 1.146-.214 1.5-.05.036-1.035.723-2.338 1.11l2.184 2.184z',\n\tpopupUrl: 'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}',\n\tpopupWidth: 550,\n\tpopupHeight: 360\n};\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/services/odnoklassniki.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/services/pinterest.js":
/*!******************************************************************!*\
  !*** ./node_modules/social-likes-next/lib/services/pinterest.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\n/* eslint-disable max-len */\n\nexports.default = {\n\ticon: 'M7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8z',\n\tpopupUrl: 'https://www.pinterest.com/pin/create/button/?url={url}&description={title}',\n\tpopupWidth: 750,\n\tpopupHeight: 550\n};\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/services/pinterest.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/services/plusone.js":
/*!****************************************************************!*\
  !*** ./node_modules/social-likes-next/lib/services/plusone.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\n/* eslint-disable max-len */\n\nexports.default = {\n\ticon: 'M8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8z',\n\tpopupUrl: 'https://plus.google.com/share?url={url}',\n\tpopupWidth: 500,\n\tpopupHeight: 500\n};\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/services/plusone.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/services/telegram.js":
/*!*****************************************************************!*\
  !*** ./node_modules/social-likes-next/lib/services/telegram.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\n/* eslint-disable max-len */\n\nexports.default = {\n\ticon: 'M6,11L5,8l11-8L0.622,5.914c0,0-0.672,0.23-0.619,0.655c0.053,0.425,0.602,0.619,0.602,0.619l3.575,1.203L5.8,13.545l2.742-2.411l-0.007-0.005l3.607,2.766c0.973,0.425,1.327-0.46,1.327-0.46L16,0L6,11z',\n\tpopupUrl: 'https://telegram.me/share/url?url={url}&title={title}',\n\tpopupWidth: 600,\n\tpopupHeight: 500\n};\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/services/telegram.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/services/twitter.js":
/*!****************************************************************!*\
  !*** ./node_modules/social-likes-next/lib/services/twitter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\n/* eslint-disable max-len */\n\nexports.default = {\n\ticon: 'M15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353z',\n\tpopupUrl: 'https://twitter.com/intent/tweet?url={url}&text={title}',\n\tpopupWidth: 600,\n\tpopupHeight: 450,\n\tclick: function click() {\n\t\t// Add a colon to improve readability\n\t\tif (!/[.?!:\\-–—]\\s*$/.test(this.options.title)) {\n\t\t\tthis.options.title += ':';\n\t\t}\n\t\treturn true;\n\t}\n};\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/services/twitter.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/services/vkontakte.js":
/*!******************************************************************!*\
  !*** ./node_modules/social-likes-next/lib/services/vkontakte.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\n/* eslint-disable max-len */\n\nexports.default = {\n\ticon: 'M13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zm.452 11.394l-1.603.022s-.345.068-.8-.243c-.598-.41-1.164-1.48-1.604-1.342-.446.144-.432 1.106-.432 1.106s.003.206-.1.315c-.11.12-.326.144-.326.144H7.87s-1.582.095-2.975-1.356c-1.52-1.583-2.862-4.723-2.862-4.723s-.078-.206.006-.305c.094-.112.35-.12.35-.12l1.716-.01s.162.026.277.11c.095.07.15.202.15.202s.276.7.643 1.335c.716 1.238 1.05 1.508 1.293 1.376.353-.193.247-1.75.247-1.75s.006-.565-.178-.817c-.145-.194-.415-.25-.534-.267-.096-.014.062-.238.267-.338.31-.15.853-.16 1.497-.153.502.004.646.035.842.083.59.143.39.694.39 2.016 0 .422-.075 1.018.23 1.215.13.085.453.013 1.256-1.352.38-.647.666-1.407.666-1.407s.062-.136.16-.194c.098-.06.232-.04.232-.04l1.804-.012s.542-.065.63.18c.092.257-.203.857-.94 1.84-1.21 1.612-1.345 1.46-.34 2.394.96.89 1.16 1.325 1.192 1.38.4.66-.44.71-.44.71z',\n\tpopupUrl: 'https://vk.com/share.php?url={url}',\n\tpopupWidth: 550,\n\tpopupHeight: 330\n};\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/services/vkontakte.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/social-likes.js":
/*!************************************************************!*\
  !*** ./node_modules/social-likes-next/lib/social-likes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _deepmerge = __webpack_require__(/*! deepmerge */ \"./node_modules/deepmerge/index.js\");\n\nvar _deepmerge2 = _interopRequireDefault(_deepmerge);\n\nvar _button = __webpack_require__(/*! ./button */ \"./node_modules/social-likes-next/lib/button.js\");\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _util = __webpack_require__(/*! ./util */ \"./node_modules/social-likes-next/lib/util.js\");\n\nvar _config = __webpack_require__(/*! ./config */ \"./node_modules/social-likes-next/lib/config.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Default options\nvar defaults = {\n\turl: window.location.href.replace(window.location.hash, ''),\n\ttitle: document.title\n};\n\n/**\n * Social Likes.\n *\n * @param {HTMLElement} container HTML container element.\n * @param {Object} [options] Options.\n */\n\nvar SocialLikes = function () {\n\tfunction SocialLikes(container) {\n\t\tvar options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n\t\t_classCallCheck(this, SocialLikes);\n\n\t\tcontainer.classList.add(_config.prefix);\n\n\t\t// Options: default < constructor < container data-attributes\n\t\toptions = (0, _deepmerge2.default)((0, _deepmerge2.default)(defaults, options), (0, _util.dataset)(container));\n\t\tthis.url = options.url;\n\n\t\tthis.buttons = (0, _util.toArray)(container.children).map(function (elem) {\n\t\t\treturn new _button2.default(elem, options);\n\t\t});\n\n\t\tcontainer.classList.add(_config.prefix + '_visible');\n\t}\n\n\t/**\n  * Update options.\n  *\n  * @param {Object} options New options.\n  */\n\n\n\t_createClass(SocialLikes, [{\n\t\tkey: 'update',\n\t\tvalue: function update(options) {\n\t\t\tif (options.url === this.url) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Update each button\n\t\t\tthis.buttons.forEach(function (button) {\n\t\t\t\treturn button.update(options);\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn SocialLikes;\n}();\n\nexports.default = SocialLikes;\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/social-likes.js?");

/***/ }),

/***/ "./node_modules/social-likes-next/lib/util.js":
/*!****************************************************!*\
  !*** ./node_modules/social-likes-next/lib/util.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\nexports.dataset = dataset;\nexports.addParamsToUrl = addParamsToUrl;\nexports.objectToQueryString = objectToQueryString;\nexports.openPopup = openPopup;\nexports.makeUrl = makeUrl;\nexports.template = template;\nexports.className = className;\nexports.toArray = toArray;\nexports.svg = svg;\n\nvar _config = __webpack_require__(/*! ./config */ \"./node_modules/social-likes-next/lib/config.js\");\n\n/**\n * Return node.dataset as an object\n *\n * @param {Node} node DOM node.\n * @return {Object}\n */\nfunction dataset(node) {\n\tvar data = {};\n\tfor (var key in node.dataset) {\n\t\tdata[key] = node.dataset[key];\n\t}\n\treturn data;\n}\n\n/**\n * Append params to the URL.\n *\n * @param {string} url Base URL.\n * @param {Object} params Params to append.\n * @param {string[]} [ignore] List of keys to ignore.\n * @return {string}\n */\nfunction addParamsToUrl(url, params) {\n\tvar ignore = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];\n\n\tparams = objectToQueryString(params, ignore);\n\tif (!params) {\n\t\treturn url;\n\t}\n\n\tvar glue = url.indexOf('?') === -1 ? '?' : '&';\n\treturn url + glue + params;\n}\n\n/**\n * Convert object to a query string: a=1&b=2.\n *\n * @param {Object} params Parameters.\n * @param {string[]} [ignore] List of keys to ignore.\n * @return {string}\n */\nfunction objectToQueryString(params) {\n\tvar ignore = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];\n\n\treturn Object.keys(params).reduce(function (pairs, key) {\n\t\tvar value = params[key];\n\t\tif (value !== null && value !== '' && ignore.indexOf(key) === -1) {\n\t\t\tpairs.push(key + '=' + encodeURIComponent(value));\n\t\t}\n\t\treturn pairs;\n\t}, []).join('&');\n}\n\n/**\n * Open popup window.\n *\n * @param {String} url URL.\n * @param {Number} options.width Width.\n * @param {Number} options.height Height.\n * @param {String} options.name Window name.\n * @return {Object}\n */\nfunction openPopup(url, _ref) {\n\tvar width = _ref.width;\n\tvar height = _ref.height;\n\tvar name = _ref.name;\n\n\tvar left = Math.round(screen.width / 2 - width / 2);\n\tvar top = 0;\n\tif (screen.height > height) {\n\t\ttop = Math.round(screen.height / 3 - height / 2);\n\t}\n\n\tvar win = window.open(url, name, '\\n\\t\\tleft=' + left + ',\\n\\t\\ttop=' + top + ',\\n\\t\\twidth=' + width + ',\\n\\t\\theight=' + height + ',\\n\\t\\tpersonalbar=0,\\n\\t\\ttoolbar=0,\\n\\t\\tscrollbars=1,\\n\\t\\tresizable=1\\n\\t');\n\tif (win) {\n\t\twin.focus();\n\t\treturn win;\n\t}\n\tlocation.href = url;\n\treturn null;\n}\n\n/**\n * Template with encodeURIComponent for URLs.\n *\n * @param {String} url URL template.\n * @param {Object} context Replacements object.\n * @return {String}\n */\nfunction makeUrl(url, context) {\n\treturn template(url, context, encodeURIComponent);\n}\n\n/**\n * Simple template.\n *\n * @param {string} tmpl Template.\n * @param {Object} context Replacements object.\n * @param {Function} [filter] Value filter function.\n * @return {string}\n */\nfunction template(tmpl, context, filter) {\n\treturn tmpl.replace(/\\{([^}]+)}/g, function (m, key) {\n\t\tvar value = filter ? filter(context[key]) : context[key];\n\t\treturn value || '';\n\t});\n}\n\n/**\n * Generate BEM class names for a block or element.\n * Block name is fixed to the ${prefix} value.\n *\n * @param {string} [elem] Element name.\n * @param {string} [mod] Modifier.\n * @return {string}\n */\nfunction className(elem, mod) {\n\tvar base = _config.prefix + (elem ? '' + _config.elemDelimiter + elem : '');\n\treturn base + (mod ? ' ' + base + _config.modDelimiter + mod : '');\n}\n\n/**\n * Convert array like object to array.\n *\n * @param {Object} list Array like object.\n * @returns {Array}\n */\nfunction toArray(list) {\n\treturn Array.prototype.slice.call(list);\n}\n\n/**\n * Return SVG code of an icon.\n *\n * @param {string|string[]} paths SVG path of an icon.\n * @param {string} cls CSS class name.\n * @return {string}\n */\nfunction svg(paths, cls) {\n\tif (!Array.isArray(paths)) {\n\t\tpaths = [paths];\n\t}\n\tpaths = paths.map(function (p) {\n\t\treturn '<path d=\"' + p + '\"/>';\n\t});\n\treturn '\\n\\t\\t<svg class=\"' + cls + '\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\\n\\t\\t\\t' + paths.join('\\n') + '\\n\\t\\t</svg>\\n\\t';\n}\n\n//# sourceURL=webpack://lancaster/./node_modules/social-likes-next/lib/util.js?");

/***/ }),

/***/ "./static/src/index.js":
/*!*****************************!*\
  !*** ./static/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_openSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/openSearch.js */ \"./static/src/js/openSearch.js\");\n/* harmony import */ var _js_openSearch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_openSearch_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var social_likes_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! social-likes-next */ \"./node_modules/social-likes-next/lib/index.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/main.scss */ \"./static/src/scss/main.scss\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://lancaster/./static/src/index.js?");

/***/ }),

/***/ "./static/src/js/openSearch.js":
/*!*************************************!*\
  !*** ./static/src/js/openSearch.js ***!
  \*************************************/
/***/ (() => {

"use strict";
eval("\r\n\r\nwindow.onload = () => {\r\n// Писать код отсюда\r\n\r\n  const buttonOpen = document.querySelector('.search-block .icon-search'),\r\n        searchRow = document.querySelector('.search-row');\r\n\r\n  window.addEventListener('click', (e) => {\r\n    console.log(e.target);\r\n\r\n    if (e.target ===  buttonOpen) {\r\n      searchRow.classList.add('open-search');\r\n      //TODO Add focus\r\n    } else if(!e.target.closest('.search-row')) {\r\n      searchRow.classList.remove('open-search');\r\n    }\r\n\r\n  });\r\n\r\n\r\n\r\n\r\n\r\n  document.querySelector('.header .menu').addEventListener('click', function () {\r\n    document.querySelector('.menu-bar').classList.toggle('open-menu-bar');\r\n  })\r\n\r\n  document.querySelector('.menu-bar .btn-close').addEventListener('click', function () {\r\n    document.querySelector('.menu-bar').classList.remove('open-menu-bar');\r\n  })\r\n\r\n// Писать код до сюда\r\n}\r\n\n\n//# sourceURL=webpack://lancaster/./static/src/js/openSearch.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./static/src/index.js");
/******/ 	
/******/ })()
;