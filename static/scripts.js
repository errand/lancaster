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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_openSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/openSearch.js */ \"./static/src/js/openSearch.js\");\n/* harmony import */ var _js_openSearch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_openSearch_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_mobileSidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mobileSidebar.js */ \"./static/src/js/mobileSidebar.js\");\n/* harmony import */ var _js_mobileSidebar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_mobileSidebar_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_loadMore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/loadMore.js */ \"./static/src/js/loadMore.js\");\n/* harmony import */ var _js_loadMore_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_loadMore_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_smoothScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/smoothScroll.js */ \"./static/src/js/smoothScroll.js\");\n/* harmony import */ var _js_smoothScroll_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_smoothScroll_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/main.scss */ \"./static/src/scss/main.scss\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://lancaster/./static/src/index.js?");

/***/ }),

/***/ "./static/src/js/loadMore.js":
/*!***********************************!*\
  !*** ./static/src/js/loadMore.js ***!
  \***********************************/
/***/ (() => {

eval("\n\n(() => {\n\nif( document.querySelector( '.all-post' )) {\n    const container      = document.querySelector('.all-post');\n    const loadMoreButton = document.getElementById( 'loadMore' );\n    const request        = new XMLHttpRequest();\n    const postsPerPage   = container.dataset.postsPerPage;\n    const total          = container.dataset.total;\n\n    let catId;\n    let tax;\n    let term;\n\n    if( container.dataset.category ) {\n      catId = container.dataset.category;\n    }\n\n    if( container.dataset.creator ) {\n      tax  = 'creator';\n      term = container.dataset.creator\n    }\n\n    if( container.dataset.publication ) {\n      tax  = 'publication';\n      term = container.dataset.publication\n    }\n\n    if( total < parseInt( postsPerPage )) { \n      loadMoreButton.style.display = 'none';\n    }\n\n    loadMoreButton.addEventListener( 'click', loadMore );\n\n    function loadMore() {\n      let paged  = container.dataset.paged;\n      let offset = container.dataset.offset;\n      let catAdd = ( catId != undefined ) ? `&cat_id=${ catId }` : '';\n      let taxAdd = ( tax != undefined ) ? `&tax=${ tax }&term=${ term }` : '';\n      let data   = `paged=${ paged }&offset=${ offset }&posts_per_page=${ postsPerPage }${catAdd}${taxAdd}`;\n\n      request.open( 'POST', `${ my_ajax_url.ajax_url }?action=loadMorePosts`, true );\n      request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );\n      request.send( data );\n\n      request.onprogress = () => {\n        console.log( 'The request is in progress' );\n      };\n      request.onload     = () => {\n        if ( request.status != 200 ) {\n          console.log( `Error ${ request.status }: ${ request.statusText }` );\n        } else {\n          let postsArray  = Array.from( container.querySelectorAll('.post-row') );\n          let lastPost    = postsArray[ postsArray.length - 1 ];\n          let content     = JSON.parse(request.response);\n          content = content[ 'posts' ].replace( /[\\n\\r\\t]/g, '' );\n          \n          lastPost.insertAdjacentHTML( 'afterEnd', content );\n          container.dataset.paged  = parseInt( paged ) + 1;\n          container.dataset.offset = parseInt( offset ) + parseInt( postsPerPage );\n\n          if ( total - offset <= postsPerPage ) {\n            loadMoreButton.style.display = 'none';\n          }\n        }\n      };\n      request.onerror = () => {\n        console.log( 'The request failed' );\n      };\n    }\n  } \n\n})();\n\n//# sourceURL=webpack://lancaster/./static/src/js/loadMore.js?");

/***/ }),

/***/ "./static/src/js/mobileSidebar.js":
/*!****************************************!*\
  !*** ./static/src/js/mobileSidebar.js ***!
  \****************************************/
/***/ (() => {

eval("\n\n(() => {\n  // Писать код отсюда\n\n  const lionsBuner = document.querySelector('.widget_lanc_memes_widget'),\n    heroBlock = document.querySelector('.hero-post'),\n    allPublications = document.querySelector('.all-post'),\n    linkWidget = document.querySelector('.link-widget');\n\n  if (window.innerWidth < 769) {\n    heroBlock.append(lionsBuner);\n\n    allPublications.querySelector('.title-rows').after(heroBlock.querySelectorAll('.post-full')[1]);\n    allPublications.querySelector('.post-full').classList.add('post-row');\n    allPublications.querySelector('.post-full').classList.remove('post-full');\n  }\n\n  // Писать код до сюда\n})();\n\n//# sourceURL=webpack://lancaster/./static/src/js/mobileSidebar.js?");

/***/ }),

/***/ "./static/src/js/openSearch.js":
/*!*************************************!*\
  !*** ./static/src/js/openSearch.js ***!
  \*************************************/
/***/ (() => {

eval("\n(() => {\n// Писать код отсюда\n  const openSearch = document.querySelector('.search-block .icon-search'),\n        searchRow = document.querySelector('.search-row'),\n        openMenu = document.querySelector('.header .menu'),\n        menuBar = document.querySelector('.menu-bar'),\n        menuClose = document.querySelector('.menu-bar .btn-close'),\n        openNav = document.querySelector('.header .menu_m'),\n        activeNav = document.querySelector('html');\n\n  window.addEventListener('click', (e) => {\n\n    if (e.target ===  openSearch) {\n      searchRow.classList.add('open-search');\n      //TODO Add focus\n    } else if(!e.target.closest('.search-row')) {\n      searchRow.classList.remove('open-search');\n    }\n\n    if(e.target ===  openMenu || e.target.closest('.header .menu') === openMenu) {\n      menuBar.classList.add('open-menu-bar');\n    } else if(!e.target.closest('.menu-bar')) {\n      menuBar.classList.remove('open-menu-bar');\n    }\n\n    if(e.target ===  openNav || e.target.closest('.header .menu_m') === openNav) {\n      activeNav.classList.toggle('open-nav');\n    } else if(!e.target.closest('.header_nav')) {\n      activeNav.classList.remove('open-nav');\n    }\n\n  });\n\n  if(menuClose !== null) {\n    menuClose.addEventListener('click', function () {\n      menuBar.classList.remove('open-menu-bar');\n      activeNav.classList.remove('open-nav');\n    })\n  }\n\n// Писать код до сюда\n})();\n\n\n//# sourceURL=webpack://lancaster/./static/src/js/openSearch.js?");

/***/ }),

/***/ "./static/src/js/smoothScroll.js":
/*!***************************************!*\
  !*** ./static/src/js/smoothScroll.js ***!
  \***************************************/
/***/ (() => {

eval("\n\n(() => {\n  document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n    anchor.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      document.querySelector(this.getAttribute('href')).scrollIntoView({\n        behavior: 'smooth'\n      });\n    });\n  });\n})();\n\n//# sourceURL=webpack://lancaster/./static/src/js/smoothScroll.js?");

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