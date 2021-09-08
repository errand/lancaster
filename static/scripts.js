/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/src/scss/main.scss":
/*!***********************************!*\
  !*** ./static/src/scss/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lancaster/./static/src/scss/main.scss?");

/***/ }),

/***/ "./static/src/index.js":
/*!*****************************!*\
  !*** ./static/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_openSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/openSearch.js */ \"./static/src/js/openSearch.js\");\n/* harmony import */ var _js_openSearch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_openSearch_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_mobileSidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mobileSidebar.js */ \"./static/src/js/mobileSidebar.js\");\n/* harmony import */ var _js_mobileSidebar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_mobileSidebar_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_loadMore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/loadMore.js */ \"./static/src/js/loadMore.js\");\n/* harmony import */ var _js_loadMore_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_loadMore_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_smoothScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/smoothScroll.js */ \"./static/src/js/smoothScroll.js\");\n/* harmony import */ var _js_smoothScroll_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_smoothScroll_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/main.scss */ \"./static/src/scss/main.scss\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://lancaster/./static/src/index.js?");

/***/ }),

/***/ "./static/src/js/loadMore.js":
/*!***********************************!*\
  !*** ./static/src/js/loadMore.js ***!
  \***********************************/
/***/ (() => {

eval("\r\n\r\n(() => {\r\n\r\nif( document.querySelector( '.all-post' )) {\r\n    const container      = document.querySelector('.all-post');\r\n    const loadMoreButton = document.getElementById( 'loadMore' );\r\n    const request        = new XMLHttpRequest();\r\n    const postsPerPage   = container.dataset.postsPerPage;\r\n\r\n    loadMoreButton.addEventListener( 'click', loadMore );\r\n\r\n    function loadMore() {\r\n      let paged  = container.dataset.paged;\r\n      let offset = container.dataset.offset;\r\n      let data   = `paged=${ paged }&offset=${ offset }`;\r\n\r\n      request.open( 'POST', `${ my_ajax_url.ajax_url }?action=loadMorePosts`, true );\r\n      request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );\r\n      request.send( data );\r\n\r\n      request.onprogress = () => {\r\n        console.log( 'The request is in progress' );\r\n      };\r\n      request.onload     = () => {\r\n        if ( request.status != 200 ) {\r\n          console.log( `Error ${ request.status }: ${ request.statusText }` );\r\n        } else {\r\n          let postsArray  = Array.from( container.querySelectorAll('.post-row') );\r\n          let lastPost    = postsArray[ postsArray.length - 1 ];\r\n          let content     = JSON.parse(request.response);\r\n          let total = content[ 'total' ];\r\n            content = content[ 'posts' ].replace( /[\\n\\r\\t]/g, '' );\r\n          \r\n          lastPost.insertAdjacentHTML( 'afterEnd', content );\r\n          container.dataset.paged  = parseInt( paged ) + 1;\r\n          container.dataset.offset = parseInt( offset ) + parseInt( postsPerPage );\r\n          console.log( total - offset ); \r\n          if ( total - offset < postsPerPage ) {\r\n            loadMoreButton.style.display = 'none';\r\n          }\r\n        }\r\n      };\r\n      request.onerror = () => {\r\n        console.log( 'The request failed' );\r\n      };\r\n    }\r\n  } \r\n\r\n})();\n\n//# sourceURL=webpack://lancaster/./static/src/js/loadMore.js?");

/***/ }),

/***/ "./static/src/js/mobileSidebar.js":
/*!****************************************!*\
  !*** ./static/src/js/mobileSidebar.js ***!
  \****************************************/
/***/ (() => {

eval("\r\n\r\n(() => {\r\n  // Писать код отсюда\r\n\r\n  if (document.querySelector('body').classList.contains('home') && window.innerWidth < 769) {\r\n\r\n    const lionsBuner = document.querySelector('.widget_lanc_memes_widget'),\r\n        heroBlock = document.querySelector('.hero-post'),\r\n        allPublications = document.querySelector('.all-post'),\r\n        allPublicationsTitle = allPublications.querySelector('.title-rows'),\r\n        linkWidget = document.querySelector('.link-widget').closest('.widget');\r\n\r\n    heroBlock.append(lionsBuner);\r\n\r\n    allPublications.querySelector('.title-rows').after(heroBlock.querySelectorAll('.post-full')[1]);\r\n    allPublications.querySelector('.post-full').classList.add('post-row');\r\n    allPublications.querySelector('.post-full').classList.remove('post-full');\r\n\r\n\r\n    heroBlock.querySelector('.post-full').querySelector('.hero-category').before(allPublicationsTitle);\r\n    allPublications.before(linkWidget);\r\n  }\r\n\r\n  // Писать код до сюда\r\n})();\n\n//# sourceURL=webpack://lancaster/./static/src/js/mobileSidebar.js?");

/***/ }),

/***/ "./static/src/js/openSearch.js":
/*!*************************************!*\
  !*** ./static/src/js/openSearch.js ***!
  \*************************************/
/***/ (() => {

eval("\r\n(() => {\r\n// Писать код отсюда\r\n  const openSearch = document.querySelector('.search-block .icon-search'),\r\n        searchRow = document.querySelector('.search-row'),\r\n        openMenu = document.querySelector('.header .menu'),\r\n        menuBar = document.querySelector('.menu-bar'),\r\n        menuClose = document.querySelector('.menu-bar .btn-close'),\r\n        openNav = document.querySelector('.header .menu_m'),\r\n        activeNav = document.querySelector('html');\r\n\r\n  window.addEventListener('click', (e) => {\r\n\r\n    if (e.target ===  openSearch) {\r\n      searchRow.classList.add('open-search');\r\n      //TODO Add focus\r\n    } else if(!e.target.closest('.search-row')) {\r\n      searchRow.classList.remove('open-search');\r\n    }\r\n\r\n    if(e.target ===  openMenu || e.target.closest('.header .menu') === openMenu) {\r\n      menuBar.classList.add('open-menu-bar');\r\n    } else if(!e.target.closest('.menu-bar')) {\r\n      menuBar.classList.remove('open-menu-bar');\r\n    }\r\n\r\n    if(e.target ===  openNav || e.target.closest('.header .menu_m') === openNav) {\r\n      activeNav.classList.toggle('open-nav');\r\n    } else if(!e.target.closest('.header_nav')) {\r\n      activeNav.classList.remove('open-nav');\r\n    }\r\n\r\n  });\r\n\r\n  if(menuClose !== null) {\r\n    menuClose.addEventListener('click', function () {\r\n      menuBar.classList.remove('open-menu-bar');\r\n      activeNav.classList.remove('open-nav');\r\n    })\r\n  }\r\n\r\n// Писать код до сюда\r\n})();\r\n\n\n//# sourceURL=webpack://lancaster/./static/src/js/openSearch.js?");

/***/ }),

/***/ "./static/src/js/smoothScroll.js":
/*!***************************************!*\
  !*** ./static/src/js/smoothScroll.js ***!
  \***************************************/
/***/ (() => {

eval("\r\n\r\n(() => {\r\n  document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\r\n    anchor.addEventListener('click', function (e) {\r\n      e.preventDefault();\r\n\r\n      document.querySelector(this.getAttribute('href')).scrollIntoView({\r\n        behavior: 'smooth'\r\n      });\r\n    });\r\n  });\r\n})();\n\n//# sourceURL=webpack://lancaster/./static/src/js/smoothScroll.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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