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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    --solid-blue: rgb(0, 80, 255);\n    --light-blue: rgb(0, 190, 255);\n    --shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n    font-size: 18px;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: max-content 1fr;\n    height: 100vh;\n    background-color: whitesmoke;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n\n    height: 100%;\n    padding: 2rem;\n    background-color: var(--solid-blue);\n}\n\nheader h1 {\n    font-size: 2rem;\n    font-weight: bolder;\n    color: white;\n    background-color: var(--light-blue);\n    padding: 1rem;\n    border-radius: 1.5rem;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n}\n\nnav button {\n    font-size: 1.5rem;\n    background: none;\n    border: none;\n    color: white;\n    text-align: left;\n    font-weight: 900;\n\n    height: 2rem;\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 1rem;\n}\n\nnav button svg {\n    height: 100%;\n    fill: white;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./src/tabs/todos/style.css"
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/tabs/todos/style.css ***!
  \************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.todos-container {\n    height: calc(100% - 2rem);\n    margin: 1rem;\n    padding: 2rem;\n\n    display: grid;\n    grid-template-rows: min-content 1fr min-content;\n    gap: 2rem;\n\n    background-color: white;\n    border-radius: 2rem;\n    box-shadow: var(--shadow);\n}\n\n.todos-container .project-selector {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    font-size: 1.5rem;\n\n    > select {\n        width: 100%;\n        font-size: 1.5rem;\n        padding-left: 1rem;\n        border-radius: 3rem;\n    }\n\n    > button {\n        padding: 0.25rem 1rem;\n        border-radius: 2em;\n        border: none;\n        background-color: var(--solid-blue);\n        color: white;\n        font-size: 1rem;\n    }\n}\n\n.todos-container .todos {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    grid-auto-rows: min-content;\n    gap: 2rem;\n\n    .todo {\n        display: grid;\n        grid-auto-rows: min-content;\n        gap: 0.5rem;\n\n        padding: 1rem;\n        background-color: antiquewhite;\n        border-radius: 2rem;\n        box-shadow: var(--shadow);\n\n        button {\n            justify-self: right;\n            height: auto;\n            width: min-content;\n            background: none;\n            border: none;\n        }\n\n        svg {\n            height: 2rem;\n        }\n    }\n}\n\n.todos-container .new-todo {\n    display: flex;\n    flex-direction: row-reverse;\n    \n    > button {\n        width: 2.5rem;\n        height: 2.5rem;\n        font-size: xx-large;\n        background-color: var(--solid-blue);\n        color: white;\n        border: none;\n        border-radius: 2rem;\n        box-shadow: var(--shadow);\n    }\n}\n\n.todos-container dialog {\n    margin: auto;\n    border: none;\n    padding: 2rem;\n    border-radius: 2rem;\n}\n\n.todos-container dialog form {\n    display: grid;\n    gap: 1rem;\n    justify-items: center;\n\n    input {\n        border: 1px solid black;\n        padding-left: 0.5rem;\n        border-radius: 2rem;\n    }\n\n    button {\n        width: min-content;\n        padding: 0.5rem 1rem;\n        background-color: var(--solid-blue);\n        color: white;\n        border: none;\n        border-radius: 2rem;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-todo-list/./src/tabs/todos/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-todo-list/./src/style.css?\n}");

/***/ },

/***/ "./src/tabs/todos/style.css"
/*!**********************************!*\
  !*** ./src/tabs/todos/style.css ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/tabs/todos/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-todo-list/./src/tabs/todos/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _tabs_home_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/home/index.js */ \"./src/tabs/home/index.js\");\n/* harmony import */ var _tabs_todos_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/todos/index.js */ \"./src/tabs/todos/index.js\");\n/* harmony import */ var _tabs_about_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/about/index.js */ \"./src/tabs/about/index.js\");\n\n\n\n\n\n\nconst displayManager = new class {\n    #tab;\n\n    switchTab(tab) {\n        this.#tab = tab;\n        const content = document.getElementById(\"content\");\n        content.innerHTML = \"\";\n        this.#tab.display(content);\n    }\n}\n\ndocument.getElementById(\"home\").addEventListener(\"click\", (e) => {\n    displayManager.switchTab(_tabs_home_index_js__WEBPACK_IMPORTED_MODULE_1__.homeTab);\n});\ndocument.getElementById(\"todos\").addEventListener(\"click\", (e) => {\n    displayManager.switchTab(_tabs_todos_index_js__WEBPACK_IMPORTED_MODULE_2__.todosDisplayController);\n});\ndocument.getElementById(\"about\").addEventListener(\"click\", (e) => {\n    displayManager.switchTab(_tabs_about_index_js__WEBPACK_IMPORTED_MODULE_3__.aboutTab);\n});\n\ndisplayManager.switchTab(_tabs_todos_index_js__WEBPACK_IMPORTED_MODULE_2__.todosDisplayController);\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/tabs/about/index.js"
/*!*********************************!*\
  !*** ./src/tabs/about/index.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutTab: () => (/* binding */ aboutTab)\n/* harmony export */ });\nconst aboutTab =  {\n    display(content) {\n        const container = document.createElement(\"div\");\n        container.classList.add(\"about-container\");\n        container.textContent = \"This is the about page\";\n\n        content.appendChild(container);\n    }\n}\n\n//# sourceURL=webpack://top-todo-list/./src/tabs/about/index.js?\n}");

/***/ },

/***/ "./src/tabs/home/index.js"
/*!********************************!*\
  !*** ./src/tabs/home/index.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeTab: () => (/* binding */ homeTab)\n/* harmony export */ });\nconst homeTab =  {\n    display(content) {\n        const container = document.createElement(\"div\");\n        container.classList.add(\"home-container\");\n        container.textContent = \"This is the home page\";\n\n        content.appendChild(container);\n    }\n}\n\n//# sourceURL=webpack://top-todo-list/./src/tabs/home/index.js?\n}");

/***/ },

/***/ "./src/tabs/todos/data.js"
/*!********************************!*\
  !*** ./src/tabs/todos/data.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo),\n/* harmony export */   todosData: () => (/* binding */ todosData)\n/* harmony export */ });\nclass Todo {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n\n    static fromJSON(json) {\n        const dueDate = new Date(json.dueDate);\n        return new Todo(json.title, json.description, dueDate, json.priority);\n    }\n}\n\nclass Project {\n    #todos;\n    #name;\n\n    constructor(name, todos = []) {\n        this.#name = name;\n        this.#todos = todos;\n    }\n\n    addTodo(todo) {\n        this.#todos.push(todo);\n    }\n\n    removeTodo(todo) {\n        for (let index in this.#todos) {\n            if (this.#todos[index] == todo) {\n                this.#todos.splice(index, 1);\n            }\n        };\n    }\n\n    get name() {\n        return this.#name;\n    }\n\n    get todos() {\n        return this.#todos;\n    }\n\n    toJSON() { \n        return {\n            todos: this.#todos,\n            name: this.#name,\n        }\n    }\n\n    static fromJSON(json) {\n        const todos = json.todos.map(Todo.fromJSON);\n        const project = new Project(json.name, todos);\n        return project\n    }\n}\n\nclass StorageManager {\n    store(key, object) {\n        localStorage.setItem(key, JSON.stringify(object));\n    }\n\n    load(key) {\n        const strObject = localStorage.getItem(key);\n        return strObject === null ? null : JSON.parse(strObject);\n    }\n}\n\nconst todosData = new class {\n    #projects = [new Project(\"Default\")];\n    #selectIndex = 0;\n    #storageManager = new StorageManager();\n\n    constructor() {\n        const loadedObject = this.#storageManager.load(\"todoData\");\n        if (loadedObject !== null) {\n            this.#projects = loadedObject.projects.map((p) => Project.fromJSON(p));\n            this.#selectIndex = loadedObject.selectIndex;\n        }\n    }\n\n    newProject(name) {\n        this.#projects.push(new Project(name));\n        this.#selectIndex = this.#projects.length - 1;\n        this.#store();\n    }\n\n    deleteProject() {\n        this.#projects.splice(this.#selectIndex, 1);\n        this.#selectIndex = this.#projects.length > 0 ? 0 : null;\n        this.#store();\n    }\n\n    removeTodo(todo) {\n        this.#projects[this.#selectIndex].removeTodo(todo);\n        this.#store();\n    }\n\n    addTodo(todo) {\n        this.#projects[this.#selectIndex].addTodo(todo);\n        this.#store();\n    }\n\n    set selectedIndex(value) {\n        if (value !== null && value >= 0 && value < this.#projects.length) {\n            this.#selectIndex = value;\n        }\n    }\n\n    get selectedIndex() {\n        return this.#selectIndex;\n    }\n\n    get todos() {\n        if (this.#selectIndex !== null) {\n            return this.#projects[this.#selectIndex].todos;\n        }\n    }\n\n    get projectNames() {\n        const names = this.#projects.map((project) => {\n            return project.name;\n        });\n        return names;\n    }\n\n    #store() {\n        this.#storageManager.store(\"todoData\", {\n            projects: this.#projects,\n            selectIndex: this.#selectIndex            \n        });\n    }\n}\n\n//# sourceURL=webpack://top-todo-list/./src/tabs/todos/data.js?\n}");

/***/ },

/***/ "./src/tabs/todos/index.js"
/*!*********************************!*\
  !*** ./src/tabs/todos/index.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todosDisplayController: () => (/* binding */ todosDisplayController)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/tabs/todos/style.css\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/tabs/todos/data.js\");\n\n\n\nconst todosDisplayController = new class {\n    #data;\n\n    constructor(data) {\n        this.#data = data;\n    }\n\n    display(content) {\n        content.innerHTML = \"\";\n        const container = document.createElement(\"div\");\n        container.classList.add(\"todos-container\");\n\n        const projectSelector = this.#createProjectSelector(content);\n        const todosSection = this.#createTodosSection();\n        const newTodoButton = this.#createNewTodoButton();\n        \n        container.append(projectSelector, todosSection, newTodoButton);\n        content.appendChild(container);\n    }\n\n    #createProjectSelector() {\n        const projectSelector = document.createElement(\"div\"); \n        projectSelector.classList.add(\"project-selector\");\n        projectSelector.textContent = \"Project: \"\n        {\n            const select = this.#createSelect();\n\n            const newProjectButton = document.createElement(\"button\");\n            const newProjectDialog = document.createElement(\"dialog\");\n\n            newProjectButton.textContent = \"New project\";\n            newProjectButton.addEventListener(\"click\", () => {\n                newProjectDialog.showModal();\n            })\n\n            const deleteProjectButton = document.createElement(\"button\");\n            deleteProjectButton.textContent = \"Delete project\";\n            deleteProjectButton.addEventListener(\"click\", () => {\n                this.#data.deleteProject();\n                this.display(content);\n            })\n\n            {\n                const form = document.createElement(\"form\");\n                form.innerHTML = `\n                <form>\n                    <label for=\"name\">New project name</label>\n                    <input type=\"text\" id=\"name\" name=\"project_name\">\n                    <button type=\"submit\">Submit</button>\n                </form>\n                `;\n                form.addEventListener(\"submit\", (e) => {\n                    e.preventDefault();\n                    const formData = new FormData(form);\n                    const name = formData.get(\"project_name\");\n                    this.#data.newProject(name);\n                    newProjectDialog.close();\n\n                    this.display(content);\n                })\n\n                newProjectDialog.appendChild(form);\n            }\n            projectSelector.append(select, newProjectButton, newProjectDialog, deleteProjectButton);\n        }\n\n        return projectSelector;\n    }\n\n    #createTodosSection() {\n        const todosContainer = document.createElement(\"div\");\n        todosContainer.classList.add(\"todos\");\n\n        if (this.#data.selectedIndex !== null) {\n            for (let todo of this.#data.todos) {\n                const todoDiv = document.createElement(\"div\");\n                todoDiv.classList.add(\"todo\");\n                {\n                    const title = document.createElement(\"h3\");\n                    title.textContent = todo.title;\n\n                    const desc = document.createElement(\"p\");\n                    if (todo.description) desc.textContent = todo.description;\n\n                    const dueDate = document.createElement(\"p\");\n                    if (todo.dueDate != \"Invalid Date\") dueDate.textContent = \"Due date: \" + todo.dueDate;\n\n                    const priority = document.createElement(\"p\");\n                    if (todo.priority) priority.textContent = \"Priority: \" + todo.priority;\n\n                    const deleteButton = document.createElement(\"button\");\n                    deleteButton.innerHTML = `\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>delete-forever</title><path d=\"M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z\" /></svg>\n                    `\n                    deleteButton.addEventListener(\"click\", () => {\n                        this.#data.removeTodo(todo);\n                        this.display(content);\n                    });\n\n                    todoDiv.append(title, desc, dueDate, priority, deleteButton);\n                }\n                todosContainer.appendChild(todoDiv);\n            }\n        }\n        \n        return todosContainer;\n    }\n\n    #createSelect() {\n        const select = document.createElement(\"select\");\n\n        for (let index in this.#data.projectNames) {\n            const option = document.createElement(\"option\");\n            option.value = index;\n            option.textContent = this.#data.projectNames[index];\n            select.appendChild(option);\n        }\n\n        select.value = this.#data.selectedIndex;\n\n        select.addEventListener(\"change\", (e) => {\n            const projectIndex = e.target.value;\n            this.#data.selectedIndex = projectIndex;\n\n            this.display(content);\n            \n        })\n        \n        return select;\n    }\n\n    #createNewTodoButton() {\n        const container = document.createElement(\"div\");\n        container.classList.add(\"new-todo\")\n        const button = document.createElement(\"button\");\n        const dialog = document.createElement(\"dialog\");\n        button.textContent = \"+\";\n\n        {\n            const form = document.createElement(\"form\");\n            form.innerHTML= `\n            <legend>New Todo</legend>\n            <label for=\"title\">Title*</label>\n            <input type=\"text\" id=\"title\" name=\"todo_title\" required>\n\n            <label for=\"description\">Description</label>\n            <textarea id=\"description\" name=\"todo_description\"></textarea>\n\n            <label for=\"due-date\">Due date</label>\n            <input type=\"datetime-local\" id=\"due-date\" name=\"todo_due_date\">\n\n            <label for=\"priority\">Priority</label>\n            <input type=\"number\" id=\"priority\" name=\"todo_priority\" min=\"0\">\n\n            <button type=\"submit\">Submit</button>\n            `;\n            dialog.appendChild(form);\n\n            form.addEventListener(\"submit\", (e) => {\n                e.preventDefault();\n                const formData = new FormData(form);\n\n                const todo = new _data_js__WEBPACK_IMPORTED_MODULE_1__.Todo(formData.get(\"todo_title\"), formData.get(\"todo_description\"), new Date(formData.get(\"todo_due_date\")), formData.get(\"todo_priority\"));\n                this.#data.addTodo(todo);\n\n                this.display(content);\n            })\n        }\n\n        button.addEventListener(\"click\", (e) => {\n            e.preventDefault();\n            dialog.showModal();\n        })\n\n        container.append(button, dialog);\n        return container;\n    }\n}(_data_js__WEBPACK_IMPORTED_MODULE_1__.todosData)\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/tabs/todos/index.js?\n}");

/***/ }

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;