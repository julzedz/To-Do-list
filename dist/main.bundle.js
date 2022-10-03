"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  outline: none;\\n  border: none;\\n}\\n\\nbody {\\n  width: 100%;\\n  background: #f1f1ef;\\n  overflow-x: hidden;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nsvg {\\n  fill: white;\\n  width: 1em;\\n  height: 1em;\\n  cursor: pointer;\\n}\\n\\n.todo-wrap {\\n  margin: 0 auto;\\n  margin-top: 3em;\\n  width: 40%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background: #fff;\\n  box-shadow: 0 0 10px #0003;\\n}\\n\\n.header {\\n  display: flex;\\n  margin: 0 auto;\\n  align-items: center;\\n  justify-content: space-between;\\n  border-bottom: 0.2px solid #d3d3d3;\\n  width: 100%;\\n  padding: 1em;\\n}\\n\\n.title {\\n  font-size: 1.2em;\\n  font-weight: 500;\\n}\\n\\n.refresh {\\n  width: fit-content;\\n  height: 1em;\\n  opacity: 0.5;\\n}\\n\\n.todo-input {\\n  width: 100%;\\n  padding: 1em;\\n  border: none;\\n  border-bottom: 0.2px solid #d3d3d3;\\n}\\n\\n.todo-input::placeholder {\\n  padding-left: 0.5em;\\n  font-size: 1.1em;\\n  font-style: italic;\\n  font-weight: 100;\\n}\\n\\n#item-list {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n}\\n\\n.items {\\n  width: 100%;\\n  margin: 0 auto;\\n  padding: 1em;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  border-bottom: 0.2px solid #d3d3d3;\\n}\\n\\n.items div {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.items svg {\\n  cursor: move;\\n  opacity: 0.3;\\n}\\n\\n.items svg:hover {\\n  opacity: 1;\\n}\\n\\n.todo-item input {\\n  height: 1em;\\n  width: 1em;\\n  border: 0.5em solid #c1c1c3;\\n}\\n\\n.task {\\n  padding-left: 0.7em;\\n  padding-top: 0.3em;\\n  padding-bottom: 0.3em;\\n  word-spacing: 0.2em;\\n  letter-spacing: 1px;\\n  width: 90%;\\n}\\n\\n.t-parent {\\n  width: 100%;\\n}\\n\\n.clear-button {\\n  width: 100%;\\n  margin: 0 auto;\\n  padding: 1em;\\n  background: #d3d3d3;\\n  font-size: 1em;\\n  font-weight: lighter;\\n  opacity: 0.5;\\n  cursor: pointer;\\n}\\n\\n.clear-button:hover {\\n  opacity: 1;\\n  text-decoration: underline;\\n}\\n\\n.remove {\\n  width: 5%;\\n  color: black;\\n  position: relative;\\n  z-index: +1;\\n  background: red;\\n  display: none;\\n}\\n\\n.remove-btn {\\n  padding: 0 5px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_edittask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/edittask.js */ \"./src/modules/edittask.js\");\n/* harmony import */ var _modules_populate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/populate.js */ \"./src/modules/populate.js\");\n/* harmony import */ var _modules_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/input.js */ \"./src/modules/input.js\");\n/* harmony import */ var _modules_status_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/status.js */ \"./src/modules/status.js\");\n/* harmony import */ var _modules_clear_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/clear.js */ \"./src/modules/clear.js\");\n\n\n\n\n\n\n\n(0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_input_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_edittask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_status_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_clear_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n\n//# sourceURL=webpack://my-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/clear.js":
/*!******************************!*\
  !*** ./src/modules/clear.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _populate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populate.js */ \"./src/modules/populate.js\");\n/* harmony import */ var _var_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./var.js */ \"./src/modules/var.js\");\n\n\n\nconst clearAll = () => {\n  const clear = document.querySelector('#clear-button');\n  clear.addEventListener('click', () => {\n    const completedTasks = _var_js__WEBPACK_IMPORTED_MODULE_1__.tasksArray.filter((data) => data.completed === true);\n    completedTasks.forEach((data) => {\n      const index = _var_js__WEBPACK_IMPORTED_MODULE_1__.tasksArray.indexOf(data);\n      _var_js__WEBPACK_IMPORTED_MODULE_1__.tasksArray.splice(index, 1);\n    });\n    (0,_var_js__WEBPACK_IMPORTED_MODULE_1__.storage)(_var_js__WEBPACK_IMPORTED_MODULE_1__.tasksArray);\n    (0,_populate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    window.location.reload();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAll);\n\n\n//# sourceURL=webpack://my-webpack/./src/modules/clear.js?");

/***/ }),

/***/ "./src/modules/edittask.js":
/*!*********************************!*\
  !*** ./src/modules/edittask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./var.js */ \"./src/modules/var.js\");\n\n\nconst editFunction = () => {\n  const label = document.querySelectorAll('.task');\n  label.forEach((input, index) => input.addEventListener('change', () => {\n    _var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray[index].description = input.value;\n    (0,_var_js__WEBPACK_IMPORTED_MODULE_0__.storage)(_var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray);\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editFunction);\n\n//# sourceURL=webpack://my-webpack/./src/modules/edittask.js?");

/***/ }),

/***/ "./src/modules/input.js":
/*!******************************!*\
  !*** ./src/modules/input.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./var.js */ \"./src/modules/var.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n/* harmony import */ var _populate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populate.js */ \"./src/modules/populate.js\");\n\n\n\n\nconst inputMethod = () => {\n  _var_js__WEBPACK_IMPORTED_MODULE_0__.toDoInput.addEventListener('keypress', (e) => {\n    if (e.keyCode === 13) {\n      e.preventDefault();\n      const description = _var_js__WEBPACK_IMPORTED_MODULE_0__.toDoInput.value;\n      const newToDo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](description);\n      _var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray.push(newToDo);\n      (0,_populate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      _var_js__WEBPACK_IMPORTED_MODULE_0__.toDoInput.value = '';\n      window.location.reload();\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputMethod);\n\n\n//# sourceURL=webpack://my-webpack/./src/modules/input.js?");

/***/ }),

/***/ "./src/modules/populate.js":
/*!*********************************!*\
  !*** ./src/modules/populate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./var.js */ \"./src/modules/var.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n\n\n\nconst populateHtml = () => {\n  (0,_var_js__WEBPACK_IMPORTED_MODULE_0__.storage)(_var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray);\n  _var_js__WEBPACK_IMPORTED_MODULE_0__.itemList.innerHTML = _var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray.map(\n    (data) => `<li class=\"items\">\n          <div class='t-parent'>\n            <input type=\"checkbox\" class='box' ${data.completed ? 'checked' : ''} class=\"todo-item\" name=\"car\">\n            <input for=\"\" class=\"task\" value=\"${data.description}\">\n          </div>\n          <div>\n          <button class=\"remove-btn\">x</button>\n          </div>\n        </li>`,\n  ).join(' ');\n  const removeBtn = document.querySelectorAll('.remove-btn');\n  removeBtn.forEach((btn, index) => btn.addEventListener('click', () => {\n    const item = index + 1;\n    _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeTask(item);\n    populateHtml();\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateHtml);\n\n//# sourceURL=webpack://my-webpack/./src/modules/populate.js?");

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./var.js */ \"./src/modules/var.js\");\n\n\nconst status = () => {\n  const box = document.querySelectorAll('.box');\n  box.forEach((input, index) => input.addEventListener('change', () => {\n    if (_var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray[index].completed === false) {\n      _var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray[index].completed = true;\n    } else {\n      _var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray[index].completed = false;\n    }\n    (0,_var_js__WEBPACK_IMPORTED_MODULE_0__.storage)(_var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray);\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n\n//# sourceURL=webpack://my-webpack/./src/modules/status.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./var.js */ \"./src/modules/var.js\");\n\n\nclass Todo {\n  constructor(description) {\n    this.id = _var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray.length + 1;\n    this.description = description;\n    this.completed = false;\n  }\n\n  static updateIndex = () => {\n    _var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray.forEach((data, index) => {\n      data.id = index + 1;\n    });\n  };\n\n  static removeTask = (index) => {\n    _var_js__WEBPACK_IMPORTED_MODULE_0__.tasksArray.splice(index - 1, 1);\n    this.updateIndex();\n  };\n}\n\n\n//# sourceURL=webpack://my-webpack/./src/modules/todo.js?");

/***/ }),

/***/ "./src/modules/var.js":
/*!****************************!*\
  !*** ./src/modules/var.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemList\": () => (/* binding */ itemList),\n/* harmony export */   \"storage\": () => (/* binding */ storage),\n/* harmony export */   \"tasksArray\": () => (/* binding */ tasksArray),\n/* harmony export */   \"toDoInput\": () => (/* binding */ toDoInput)\n/* harmony export */ });\nconst itemList = document.querySelector('#item-list');\nconst tasksArray = JSON.parse(localStorage.getItem('todo')) || [];\nconst storage = (todo) => {\n  todo.sort((a, b) => a.index - b.index);\n  localStorage.setItem('todo', JSON.stringify(todo));\n};\nconst toDoInput = document.querySelector('#todo-input');\n\n\n\n//# sourceURL=webpack://my-webpack/./src/modules/var.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);