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

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/create */ \"./js/components/create/index.js\");\n/* harmony import */ var _components_delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/delete */ \"./js/components/delete/index.js\");\n/* harmony import */ var _components_getTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/getTasks */ \"./js/components/getTasks/index.js\");\n/* harmony import */ var _components_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/functions */ \"./js/components/functions.js\");\n\r\n\r\n\r\n\r\n\r\nconst tasks = (0,_components_getTasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nlet arrKeysSorted = Object.keys(tasks).map(key => key).sort((a, b) => new Date(a) - new Date(b));\r\nlet tasksList = document.querySelector('.tasks__list');\r\n\r\narrKeysSorted.forEach(key => {\r\n    tasksList.append((0,_components_functions__WEBPACK_IMPORTED_MODULE_3__.createTask)(key, tasks.getItem(key)));\r\n});\r\n\r\n(0,_components_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_components_delete__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/components/create/index.js":
/*!***************************************!*\
  !*** ./js/components/create/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ \"./js/components/functions.js\");\n\r\n\r\nconst create = () => {\r\n    document.querySelector('#createTask').addEventListener('input', () => (0,_functions__WEBPACK_IMPORTED_MODULE_0__.updateInput)(document));\r\n    document.querySelector('#createTaskBut').addEventListener('click', () => (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addTasktoLocalStorage)(document));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);\n\n//# sourceURL=webpack:///./js/components/create/index.js?");

/***/ }),

/***/ "./js/components/delete/index.js":
/*!***************************************!*\
  !*** ./js/components/delete/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst remove = () => {\r\n    document.querySelectorAll('#delete').forEach(element => {\r\n        element.addEventListener('click', function() {\r\n            let item = this.parentNode.parentNode;\r\n            delete localStorage[item.id];\r\n            item.remove();\r\n        });\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (remove);\n\n//# sourceURL=webpack:///./js/components/delete/index.js?");

/***/ }),

/***/ "./js/components/functions.js":
/*!************************************!*\
  !*** ./js/components/functions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateInput\": () => (/* binding */ updateInput),\n/* harmony export */   \"addTasktoLocalStorage\": () => (/* binding */ addTasktoLocalStorage),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\nconst updateInput = () => {\r\n    let input = document.querySelector('#createTask');\r\n    let inputLength = document.querySelector('#createTaskLength');\r\n    let count = input.value.length ?? 0;\r\n    let maxLength = 70;\r\n\r\n    if (count > maxLength) {\r\n        input.value = input.value.substr(0, maxLength);\r\n        count = 40;\r\n    } \r\n    if (count > 0) {\r\n        inputLength.style.cssText = `\r\n            position: absolute;\r\n            top: 0%;\r\n            z-index: 10;\r\n            color: #0CAADC;\r\n            background: #001021;\r\n        `;\r\n    }\r\n    else {\r\n        inputLength.style.cssText = `\r\n            position: absolute;\r\n            top: 50%;\r\n            left: 16px;\r\n            z-index: 0;\r\n            color: lightgray;\r\n            background: none;\r\n        `;\r\n    }\r\n    inputLength.innerText = `${input.value.length}/${maxLength}`;\r\n}\r\n\r\nconst addTasktoLocalStorage = function () {\r\n    let input = document.querySelector('#createTask');\r\n    let id = new Date().toUTCString();\r\n    let text = input.value;\r\n    let item = createTask(id, text);\r\n\r\n    document.querySelector('.tasks__list').append(item);\r\n    localStorage.setItem(id, text);\r\n    input.value = '';\r\n\r\n    updateInput(document);\r\n}\r\n\r\nconst createTask = (id, text) => {\r\n    let element = document.createElement('div');\r\n    element.classList.add('tasks__item');\r\n    element.setAttribute('id', `${id}`);\r\n    element.innerHTML = `\r\n        <div class=\"tasks__text\">\r\n            <p class=\"text__item\">${text}</p>\r\n        </div>\r\n        <div class=\"tasks__control\">\r\n            <button class=\"tasks__delete tasks_but\" id=\"delete\">&#128473;</button>\r\n        </div>\r\n    `;\r\n    return element;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/components/functions.js?");

/***/ }),

/***/ "./js/components/getTasks/index.js":
/*!*****************************************!*\
  !*** ./js/components/getTasks/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTasks = () => {\r\n    return localStorage ?? [];\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTasks);\n\n//# sourceURL=webpack:///./js/components/getTasks/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;