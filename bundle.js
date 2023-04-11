/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@lulek1410/sudokudlx/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@lulek1410/sudokudlx/lib/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dlx": function() { return /* binding */ Y; },
/* harmony export */   "SudokuToOptionsMatrixConverter": function() { return /* binding */ B; },
/* harmony export */   "convertSolutionToSudoku": function() { return /* binding */ D; }
/* harmony export */ });
/*! For license information please see index.js.LICENSE.txt */
var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}t.d(e,{EJ:()=>P,xc:()=>M,KH:()=>N});var o=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.columnHeader=e,this.rowIndex=r,this.left=this,this.right=this,this.up=this,this.down=this,e&&e.addNode(this)}var e,r;return e=t,(r=[{key:"appendToRow",value:function(t){this.left.right=t,t.right=this,t.left=this.left,this.left=t}},{key:"appendToColumn",value:function(t){this.up.down=t,t.down=this,t.up=this.up,this.up=t}},{key:"unlinkFromColumn",value:function(){this.up.down=this.down,this.down.up=this.up}},{key:"relinkToColumn",value:function(){this.up.down=this,this.down.up=this}},{key:"loop",value:function(t,e){for(var r=this[t];r!==this;r=r[t])e(r)}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function f(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}var s,h,p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(h,o);var e,r,n,f,s=(n=h,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(n);if(f){var r=l(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return c(t)}(this,t)});function h(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),(t=s.call(this,null,-1)).previousColumn=c(t),t.nextColumn=c(t),t.numberOfRows=0,t}return e=h,(r=[{key:"appendHeaderColumn",value:function(t){this.numOfColumns++,this.previousColumn.nextColumn=t,t.previousColumn=this.previousColumn,t.nextColumn=this,this.previousColumn=t}},{key:"unlinkHeaderColumn",value:function(){this.numOfColumns--,this.nextColumn.previousColumn=this.previousColumn,this.previousColumn.nextColumn=this.nextColumn}},{key:"relinkHeaderColumn",value:function(){this.numOfColumns++,this.nextColumn.previousColumn=this,this.previousColumn.nextColumn=this}},{key:"addNode",value:function(t){this.appendToColumn(t),this.numberOfRows++}},{key:"unlinkNode",value:function(t){t.unlinkFromColumn(),this.numberOfRows--}},{key:"relinkNode",value:function(t){t.relinkToColumn(),this.numberOfRows++}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),h}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,u=Object.create(i.prototype),a=new j(o||[]);return n(u,"_invoke",{value:S(t,r,a)}),u}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s={};function h(){}function p(){}function m(){}var d={};c(d,i,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==e&&r.call(w,i)&&(d=w);var g=m.prototype=h.prototype=Object.create(d);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(n,i,u,a){var c=f(t[n],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==y(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,u,a)}),(function(t){o("throw",t,u,a)})):e.resolve(s).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,a)}))}a(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=k(u,r);if(a){if(a===s)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),s;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,s;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=m,n(g,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=c(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(O.prototype),c(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},x(g),c(g,a,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}s=p,(h=f(h="numOfColumns"))in s?Object.defineProperty(s,h,{value:0,enumerable:!0,configurable:!0,writable:!0}):s[h]=0;var m=v().mark(T);function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,b(n.key),n)}}function b(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}function w(t,e){g(t,e),e.add(t)}function g(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function x(t,e){var r=function(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}(t,e);return function(t,e){return e.get?e.get.call(t):e.value}(t,r)}function O(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return r}var S=new WeakSet,k=new WeakSet,E=new WeakSet,C=new WeakSet,j=new WeakMap,P=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,C),w(this,E),w(this,k),w(this,S),function(t,e,r){g(t,e),e.set(t,{writable:!0,value:[]})}(this,j)}var e,r;return e=t,r=[{key:"solve",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER,r=function(t){var e=new p,r=[];return t.forEach((function(t,n){var i=null;t.forEach((function(t,u){if(0===n){var a=new p;e.appendHeaderColumn(a),r.push(a)}if(t){var c=r[u],l=new o(c,n);i?i.appendToRow(l):i=l}}))})),e}(t),n=O(this,S,T).call(this,r),i=[],u=0;u<e;u++){var a=n.next();if(a.done)break;i.push(a.value)}return i}}],r&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){var e,r,n,o;return v().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(t.nextColumn!==t){i.next=5;break}if(!x(this,j).length){i.next=4;break}return i.next=4,x(this,j).slice();case 4:return i.abrupt("return");case 5:e=O(this,k,L).call(this,t),O(this,E,_).call(this,e),r=e.down;case 8:if(r==e){i.next=17;break}for(x(this,j).push(r.rowIndex),n=r.right;n!==r;n=n.right)O(this,E,_).call(this,n.columnHeader);return i.delegateYield(O(this,S,T).call(this,t),"t0",12);case 12:for(o=r.left;o!==r;o=o.left)O(this,C,H).call(this,o.columnHeader);x(this,j).pop();case 14:r=r.down,i.next=8;break;case 17:O(this,C,H).call(this,e);case 18:case"end":return i.stop()}}),m,this)}function L(t){for(var e=null,r=t.nextColumn;r!==t;r=r.nextColumn)(!e||e.numberOfRows>r.numberOfRows)&&(e=r);return e}function _(t){t.unlinkHeaderColumn(),t.loop("down",(function(t){t.loop("right",(function(t){t.columnHeader.unlinkNode(t),t.columnHeader.numberOfRows||t.columnHeader.unlinkHeaderColumn()}))}))}function H(t){t.loop("up",(function(t){t.loop("left",(function(t){t.columnHeader.relinkNode(t),t.columnHeader.numberOfRows||t.columnHeader.relinkHeaderColumn()}))})),t.relinkHeaderColumn()}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function N(t,e){var r,n=[],o=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return R(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;n.push(t[i])}}catch(t){o.e(t)}finally{o.f()}for(var u=Array.from({length:9},(function(){return Array.from({length:9},(function(){return 0}))})),a=function(){var t=l[c],e=t.slice(0,81),r=t.slice(81,162);e.forEach((function(t,e){if(t){var n=Math.floor(e/9),o=e%9;r.slice(9*n,9*(n+1)).forEach((function(t,e){t&&(u[n][o]=e+1)}))}}))},c=0,l=n;c<l.length;c++)a();return u}function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function G(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,I(n.key),n)}}function I(t){var e=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===A(e)?e:String(e)}function F(t,e,r){return function(t,e){if(t!==e)throw new TypeError("Private static access of wrong provenance")}(t,e),r}var M=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,r=[{key:"createOptionsMatrix",value:function(e){for(var r=[],n=0;n<9;++n)for(var o=0;o<9;++o){var i=e[n][o];if(i)r.push(F(this,t,W).call(this,n,o,i));else for(var u=1;u<=9;++u)r.push(F(this,t,W).call(this,n,o,u))}return r}}],null&&0,r&&G(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function W(t,e,r){var n=Array(324).fill(0),o=r-1;return n[9*t+e]=1,n[81+9*t+o]=1,n[162+9*e+o]=1,n[243+27*Math.floor(t/3)+9*Math.floor(e/3)+o]=1,n}var Y=e.EJ,B=e.xc,D=e.KH;

/***/ }),

/***/ "./scripts/EventHandler.mjs":
/*!**********************************!*\
  !*** ./scripts/EventHandler.mjs ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EventHandler; }
/* harmony export */ });
/* harmony import */ var _Header_HeaderManager_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header/HeaderManager.mjs */ "./scripts/Header/HeaderManager.mjs");
/* harmony import */ var _SudokuBoard_SudokuGridManager_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SudokuBoard/SudokuGridManager.mjs */ "./scripts/SudokuBoard/SudokuGridManager.mjs");
/* harmony import */ var _SudokuBoard_PencilTool_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SudokuBoard/PencilTool.mjs */ "./scripts/SudokuBoard/PencilTool.mjs");
/* harmony import */ var _Header_MessageDisplyer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header/MessageDisplyer.mjs */ "./scripts/Header/MessageDisplyer.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _listenForGridInteractions = /*#__PURE__*/new WeakSet();
var _disableGridInteractions = /*#__PURE__*/new WeakSet();
var _listenForHeaderInteractions = /*#__PURE__*/new WeakSet();
var _listenForDifficultyChangeButtonsInteractions = /*#__PURE__*/new WeakSet();
var _disableDifficultyChangeButtonsInteractions = /*#__PURE__*/new WeakSet();
var _listenForToolsInteractions = /*#__PURE__*/new WeakSet();
var _listenForNumberButtonsInteractions = /*#__PURE__*/new WeakSet();
var _disabeNumberButtonsInteractions = /*#__PURE__*/new WeakSet();
var _disableToolsInteractions = /*#__PURE__*/new WeakSet();
var _startCallback = /*#__PURE__*/new WeakSet();
var _stopGame = /*#__PURE__*/new WeakSet();
var _$checkButton = /*#__PURE__*/new WeakMap();
var _$pencilButton = /*#__PURE__*/new WeakMap();
var _$ereaserButton = /*#__PURE__*/new WeakMap();
var _$leftArrowButton = /*#__PURE__*/new WeakMap();
var _$rightArrowButton = /*#__PURE__*/new WeakMap();
var _$cells = /*#__PURE__*/new WeakMap();
var _$startButton = /*#__PURE__*/new WeakMap();
var _$numberButtons = /*#__PURE__*/new WeakMap();
var _sudokuGridManager = /*#__PURE__*/new WeakMap();
var _headerManager = /*#__PURE__*/new WeakMap();
var EventHandler = /*#__PURE__*/_createClass(function EventHandler() {
  _classCallCheck(this, EventHandler);
  _classPrivateMethodInitSpec(this, _stopGame);
  _classPrivateMethodInitSpec(this, _startCallback);
  _classPrivateMethodInitSpec(this, _disableToolsInteractions);
  _classPrivateMethodInitSpec(this, _disabeNumberButtonsInteractions);
  _classPrivateMethodInitSpec(this, _listenForNumberButtonsInteractions);
  _classPrivateMethodInitSpec(this, _listenForToolsInteractions);
  _classPrivateMethodInitSpec(this, _disableDifficultyChangeButtonsInteractions);
  _classPrivateMethodInitSpec(this, _listenForDifficultyChangeButtonsInteractions);
  _classPrivateMethodInitSpec(this, _listenForHeaderInteractions);
  _classPrivateMethodInitSpec(this, _disableGridInteractions);
  _classPrivateMethodInitSpec(this, _listenForGridInteractions);
  _classPrivateFieldInitSpec(this, _$checkButton, {
    writable: true,
    value: $("#check-button")
  });
  _classPrivateFieldInitSpec(this, _$pencilButton, {
    writable: true,
    value: $("#pencil-button")
  });
  _classPrivateFieldInitSpec(this, _$ereaserButton, {
    writable: true,
    value: $("#ereaser-button")
  });
  _classPrivateFieldInitSpec(this, _$leftArrowButton, {
    writable: true,
    value: $("#left-arrow-button")
  });
  _classPrivateFieldInitSpec(this, _$rightArrowButton, {
    writable: true,
    value: $("#right-arrow-button")
  });
  _classPrivateFieldInitSpec(this, _$cells, {
    writable: true,
    value: $(".cell")
  });
  _classPrivateFieldInitSpec(this, _$startButton, {
    writable: true,
    value: $("#start-button")
  });
  _classPrivateFieldInitSpec(this, _$numberButtons, {
    writable: true,
    value: $("#number-buttons > button")
  });
  _defineProperty(this, "gameStarted", false);
  _classPrivateFieldInitSpec(this, _sudokuGridManager, {
    writable: true,
    value: void 0
  });
  _classPrivateFieldInitSpec(this, _headerManager, {
    writable: true,
    value: void 0
  });
  _classPrivateFieldSet(this, _sudokuGridManager, new _SudokuBoard_SudokuGridManager_mjs__WEBPACK_IMPORTED_MODULE_1__["default"](_classPrivateFieldGet(this, _$cells)));
  _classPrivateFieldSet(this, _headerManager, new _Header_HeaderManager_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]());
  _classPrivateMethodGet(this, _listenForHeaderInteractions, _listenForHeaderInteractions2).call(this, _classPrivateFieldGet(this, _$startButton));
});
function _listenForGridInteractions2() {
  var selectCellCallback = _classPrivateFieldGet(this, _sudokuGridManager).selectCell.bind(_classPrivateFieldGet(this, _sudokuGridManager));
  _classPrivateFieldGet(this, _$cells).each(function () {
    $(this).on("click", selectCellCallback);
  });
  var fillCellWitInputCallback = _classPrivateFieldGet(this, _sudokuGridManager).fillCellWithInput.bind(_classPrivateFieldGet(this, _sudokuGridManager));
  $(document).on("keyup", fillCellWitInputCallback);
}
function _disableGridInteractions2() {
  _classPrivateFieldGet(this, _$cells).each(function () {
    $(this).off("click");
  });
  $(document).off("keyup");
}
function _listenForHeaderInteractions2() {
  var startButtonCallback = _classPrivateMethodGet(this, _startCallback, _startCallback2).bind(this);
  _classPrivateFieldGet(this, _$startButton).on("click", startButtonCallback);
  _classPrivateMethodGet(this, _listenForDifficultyChangeButtonsInteractions, _listenForDifficultyChangeButtonsInteractions2).call(this);
}
function _listenForDifficultyChangeButtonsInteractions2() {
  var difficultyChangeCallback = _classPrivateFieldGet(this, _headerManager).changeDifficulty.bind(_classPrivateFieldGet(this, _headerManager));
  _classPrivateFieldGet(this, _$leftArrowButton).on("click", difficultyChangeCallback);
  _classPrivateFieldGet(this, _$rightArrowButton).on("click", difficultyChangeCallback);
}
function _disableDifficultyChangeButtonsInteractions2() {
  _classPrivateFieldGet(this, _$leftArrowButton).off("click");
  _classPrivateFieldGet(this, _$rightArrowButton).off("click");
}
function _listenForToolsInteractions2() {
  var isSudokuValidCallback = _classPrivateFieldGet(this, _sudokuGridManager).isSudokuValid.bind(_classPrivateFieldGet(this, _sudokuGridManager));
  var stopGameCallback = _classPrivateMethodGet(this, _stopGame, _stopGame2).bind(this);
  _classPrivateFieldGet(this, _$checkButton).on("click", function () {
    if (isSudokuValidCallback()) {
      stopGameCallback();
    }
  });
  _classPrivateFieldGet(this, _$pencilButton).on("click", function () {
    _SudokuBoard_PencilTool_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].pencilClicked();
  });
  var ereaserButtonCallback = _classPrivateFieldGet(this, _sudokuGridManager).removeSelectedCellText.bind(_classPrivateFieldGet(this, _sudokuGridManager));
  _classPrivateFieldGet(this, _$ereaserButton).on("click", ereaserButtonCallback);
}
function _listenForNumberButtonsInteractions2() {
  _classPrivateFieldGet(this, _$numberButtons).each(function () {
    $(this).on("click", function (event) {
      var key = +$(event.target).text();
      var eventToTrigger = $.Event("keyup", {
        key: key
      });
      $(document).trigger(eventToTrigger);
    });
  });
}
function _disabeNumberButtonsInteractions2() {
  _classPrivateFieldGet(this, _$numberButtons).each(function () {
    $(this).off("click");
  });
}
function _disableToolsInteractions2() {
  _classPrivateFieldGet(this, _$checkButton).off("click");
  _classPrivateFieldGet(this, _$pencilButton).off("click");
  _classPrivateFieldGet(this, _$ereaserButton).off("click");
}
function _startCallback2() {
  if (!this.gameStarted) {
    _classPrivateFieldGet(this, _sudokuGridManager).startGame($("#difficulty-level").text());
    _classPrivateFieldGet(this, _headerManager).handleGameStart();
    _classPrivateMethodGet(this, _listenForGridInteractions, _listenForGridInteractions2).call(this);
    _classPrivateMethodGet(this, _listenForNumberButtonsInteractions, _listenForNumberButtonsInteractions2).call(this);
    _classPrivateMethodGet(this, _listenForToolsInteractions, _listenForToolsInteractions2).call(this);
    _classPrivateMethodGet(this, _disableDifficultyChangeButtonsInteractions, _disableDifficultyChangeButtonsInteractions2).call(this);
    this.gameStarted = true;
  } else {
    _classPrivateFieldGet(this, _sudokuGridManager).endGame();
    _Header_MessageDisplyer_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].resetInfo();
    _classPrivateMethodGet(this, _listenForDifficultyChangeButtonsInteractions, _listenForDifficultyChangeButtonsInteractions2).call(this);
    _classPrivateMethodGet(this, _stopGame, _stopGame2).call(this);
  }
}
function _stopGame2() {
  _classPrivateFieldGet(this, _headerManager).handleGameStop();
  _SudokuBoard_PencilTool_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].resetPencilButton();
  _classPrivateMethodGet(this, _disableToolsInteractions, _disableToolsInteractions2).call(this);
  _classPrivateMethodGet(this, _disableGridInteractions, _disableGridInteractions2).call(this);
  _classPrivateMethodGet(this, _disabeNumberButtonsInteractions, _disabeNumberButtonsInteractions2).call(this);
  this.gameStarted = false;
}


/***/ }),

/***/ "./scripts/Header/HeaderManager.mjs":
/*!******************************************!*\
  !*** ./scripts/Header/HeaderManager.mjs ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeaderManager; }
/* harmony export */ });
/* harmony import */ var _Timer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timer.mjs */ "./scripts/Header/Timer.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var HeaderManager = /*#__PURE__*/function () {
  function HeaderManager() {
    _classCallCheck(this, HeaderManager);
  }
  _createClass(HeaderManager, [{
    key: "handleGameStart",
    value: function handleGameStart() {
      _Timer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].startTimer();
      $("#start-button").text("Stop");
    }
  }, {
    key: "handleGameStop",
    value: function handleGameStop() {
      $("#start-button").text("Start");
      _Timer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].stopTimer();
    }
  }, {
    key: "changeDifficulty",
    value: function changeDifficulty(event) {
      var difficultyChange = 1;
      var animationClass = "fadeInRight";
      if (event.target.classList.contains("fa-chevron-left")) {
        animationClass = "fadeInLeft";
        difficultyChange = -1;
      }
      var difficultyLevels = ["Easy", "Medium", "Hard"];
      var $difficultyLevel = $("#difficulty-level");
      var curretnIndex = difficultyLevels.indexOf($difficultyLevel.text());
      curretnIndex += difficultyChange;
      if (curretnIndex < 0) {
        curretnIndex = difficultyLevels.length - 1;
      } else if (curretnIndex >= difficultyLevels.length) {
        curretnIndex = 0;
      }
      $difficultyLevel.text(difficultyLevels[curretnIndex]);
      $difficultyLevel.addClass(animationClass);
      setTimeout(function () {
        $difficultyLevel.removeClass(animationClass);
      }, 100);
    }
  }]);
  return HeaderManager;
}();


/***/ }),

/***/ "./scripts/Header/MessageDisplyer.mjs":
/*!********************************************!*\
  !*** ./scripts/Header/MessageDisplyer.mjs ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MessageDisplayer; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MessageDisplayer = /*#__PURE__*/function () {
  function MessageDisplayer() {
    _classCallCheck(this, MessageDisplayer);
  }
  _createClass(MessageDisplayer, null, [{
    key: "displayMessage",
    value: function displayMessage(numberOfEmptyCells, numberOfMistakes) {
      var message;
      if (numberOfEmptyCells !== 0) {
        message = "You did not fill ".concat(numberOfEmptyCells, " cells!");
      } else if (numberOfMistakes !== 0) {
        message = "You made ".concat(numberOfMistakes, " mistakes!");
      } else {
        message = "You won! Congratulations!";
      }
      $("#info").text(message);
    }
  }, {
    key: "resetInfo",
    value: function resetInfo() {
      $("#info").text("");
    }
  }]);
  return MessageDisplayer;
}();


/***/ }),

/***/ "./scripts/Header/Timer.mjs":
/*!**********************************!*\
  !*** ./scripts/Header/Timer.mjs ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Timer; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer);
  }
  _createClass(Timer, null, [{
    key: "startTimer",
    value: function startTimer() {
      var start = Date.now();
      var seconds = "";
      var minutes = "";
      var updateTime = function updateTime(count) {
        return count < 10 ? "0" + count : "" + count;
      };
      _classStaticPrivateFieldSpecSet(this, Timer, _timer, setInterval(function () {
        var elapsed = Date.now() - start;
        var elapsedMinutes = Math.floor(elapsed / 60000);
        seconds = updateTime(Math.floor(elapsed / 1000) - elapsedMinutes * 60);
        minutes = updateTime(elapsedMinutes);
        $("#timer").text("".concat(minutes, ":").concat(seconds));
      }, 100));
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      clearInterval(_classStaticPrivateFieldSpecGet(this, Timer, _timer));
    }
  }]);
  return Timer;
}();
var _timer = {
  writable: true,
  value: void 0
};


/***/ }),

/***/ "./scripts/SudokuBoard/BoxIndexCalculator.mjs":
/*!****************************************************!*\
  !*** ./scripts/SudokuBoard/BoxIndexCalculator.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BoxIndexCalculator; }
/* harmony export */ });
/* harmony import */ var _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Constants.mjs */ "./scripts/common/Constants.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var BoxIndexCalculator = /*#__PURE__*/function () {
  function BoxIndexCalculator() {
    _classCallCheck(this, BoxIndexCalculator);
  }
  _createClass(BoxIndexCalculator, null, [{
    key: "startIndex",
    value: function startIndex(currentPosition) {
      return currentPosition - currentPosition % _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].boxSize;
    }
  }, {
    key: "endIndex",
    value: function endIndex(currentPosition) {
      return currentPosition + 2 - currentPosition % _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].boxSize;
    }
  }]);
  return BoxIndexCalculator;
}();


/***/ }),

/***/ "./scripts/SudokuBoard/PencilTool.mjs":
/*!********************************************!*\
  !*** ./scripts/SudokuBoard/PencilTool.mjs ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PencilTool; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var PencilTool = /*#__PURE__*/function () {
  function PencilTool() {
    _classCallCheck(this, PencilTool);
  }
  _createClass(PencilTool, null, [{
    key: "pencilClicked",
    value: function pencilClicked() {
      var $pencilButton = $("#pencil-button");
      _classStaticPrivateFieldSpecSet(this, PencilTool, _pencilActive, !_classStaticPrivateFieldSpecGet(this, PencilTool, _pencilActive));
      if (this.isPencilActive()) {
        $pencilButton.addClass("button-clicked");
      } else {
        $pencilButton.removeClass("button-clicked");
      }
    }
  }, {
    key: "resetPencilButton",
    value: function resetPencilButton() {
      $("#pencil-button").removeClass("button-clicked");
      _classStaticPrivateFieldSpecSet(this, PencilTool, _pencilActive, false);
    }
  }, {
    key: "isPencilActive",
    value: function isPencilActive() {
      return _classStaticPrivateFieldSpecGet(this, PencilTool, _pencilActive);
    }
  }]);
  return PencilTool;
}();
var _pencilActive = {
  writable: true,
  value: false
};


/***/ }),

/***/ "./scripts/SudokuBoard/SudokuGenerator.mjs":
/*!*************************************************!*\
  !*** ./scripts/SudokuBoard/SudokuGenerator.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SudokuGenerator; }
/* harmony export */ });
/* harmony import */ var _BoxIndexCalculator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxIndexCalculator.mjs */ "./scripts/SudokuBoard/BoxIndexCalculator.mjs");
/* harmony import */ var _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Constants.mjs */ "./scripts/common/Constants.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }


var _initializeValues = /*#__PURE__*/new WeakSet();
var _fillDiagonalBoxes = /*#__PURE__*/new WeakSet();
var _fillBox = /*#__PURE__*/new WeakSet();
var _unUsedInBox = /*#__PURE__*/new WeakSet();
var _fillRemaining = /*#__PURE__*/new WeakSet();
var _isValid = /*#__PURE__*/new WeakSet();
var _unUsedInRow = /*#__PURE__*/new WeakSet();
var _unUsedInColumn = /*#__PURE__*/new WeakSet();
var _sudoku = /*#__PURE__*/new WeakMap();
var SudokuGenerator = /*#__PURE__*/function () {
  function SudokuGenerator() {
    _classCallCheck(this, SudokuGenerator);
    _classPrivateMethodInitSpec(this, _unUsedInColumn);
    _classPrivateMethodInitSpec(this, _unUsedInRow);
    _classPrivateMethodInitSpec(this, _isValid);
    _classPrivateMethodInitSpec(this, _fillRemaining);
    _classPrivateMethodInitSpec(this, _unUsedInBox);
    _classPrivateMethodInitSpec(this, _fillBox);
    _classPrivateMethodInitSpec(this, _fillDiagonalBoxes);
    _classPrivateMethodInitSpec(this, _initializeValues);
    _classPrivateFieldInitSpec(this, _sudoku, {
      writable: true,
      value: []
    });
  }
  _createClass(SudokuGenerator, [{
    key: "generateSudoku",
    value: function generateSudoku() {
      _classPrivateMethodGet(this, _initializeValues, _initializeValues2).call(this);
      _classPrivateMethodGet(this, _fillDiagonalBoxes, _fillDiagonalBoxes2).call(this);
      _classPrivateMethodGet(this, _fillRemaining, _fillRemaining2).call(this, 0, _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].boxSize);
      return _classPrivateFieldGet(this, _sudoku);
    }
  }]);
  return SudokuGenerator;
}();
function _initializeValues2() {
  _classPrivateFieldSet(this, _sudoku, []);
  for (var i = 0; i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++i) {
    var row = Array(_common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize);
    for (var _i = 0; _i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++_i) {
      row[_i] = 0;
    }
    _classPrivateFieldSet(this, _sudoku, [row].concat(_toConsumableArray(_classPrivateFieldGet(this, _sudoku))));
  }
}
function _fillDiagonalBoxes2() {
  for (var i = 0; i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; i += _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].boxSize) {
    _classPrivateMethodGet(this, _fillBox, _fillBox2).call(this, i, i);
  }
}
function _fillBox2(rowStart, colStart) {
  for (var i = 0; i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].boxSize; ++i) {
    for (var j = 0; j < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].boxSize; ++j) {
      var number = 0;
      while (true) {
        number = Math.floor(Math.random() * _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize + 1);
        if (_classPrivateMethodGet(this, _unUsedInBox, _unUsedInBox2).call(this, rowStart, colStart, number)) {
          break;
        }
      }
      _classPrivateFieldGet(this, _sudoku)[rowStart + i][colStart + j] = number;
    }
  }
}
function _unUsedInBox2(rowStart, colStart, num) {
  for (var i = 0; i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].boxSize; i++) {
    for (var j = 0; j < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].boxSize; j++) {
      if (_classPrivateFieldGet(this, _sudoku)[rowStart + i][colStart + j] == num) {
        return false;
      }
    }
  }
  return true;
}
function _fillRemaining2(row, column) {
  if (row === _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize - 1 && column === _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize) {
    return true;
  }
  if (column === _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize) {
    row += 1;
    column = 0;
  }
  if (_classPrivateFieldGet(this, _sudoku)[row][column] !== 0) {
    return _classPrivateMethodGet(this, _fillRemaining, _fillRemaining2).call(this, row, column + 1);
  }
  for (var num = 1; num <= _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; num++) {
    if (_classPrivateMethodGet(this, _isValid, _isValid2).call(this, row, column, num)) {
      _classPrivateFieldGet(this, _sudoku)[row][column] = num;
      if (_classPrivateMethodGet(this, _fillRemaining, _fillRemaining2).call(this, row, column + 1)) {
        return true;
      }
      _classPrivateFieldGet(this, _sudoku)[row][column] = 0;
    }
  }
  return false;
}
function _isValid2(row, column, number) {
  return _classPrivateMethodGet(this, _unUsedInColumn, _unUsedInColumn2).call(this, column, number) && _classPrivateMethodGet(this, _unUsedInRow, _unUsedInRow2).call(this, row, number) && _classPrivateMethodGet(this, _unUsedInBox, _unUsedInBox2).call(this, _BoxIndexCalculator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].startIndex(row), _BoxIndexCalculator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].startIndex(column), number);
}
function _unUsedInRow2(row, num) {
  for (var j = 0; j < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; j++) {
    if (_classPrivateFieldGet(this, _sudoku)[row][j] === num) {
      return false;
    }
  }
  return true;
}
function _unUsedInColumn2(column, num) {
  for (var i = 0; i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; i++) {
    if (_classPrivateFieldGet(this, _sudoku)[i][column] === num) {
      return false;
    }
  }
  return true;
}


/***/ }),

/***/ "./scripts/SudokuBoard/SudokuGridManager.mjs":
/*!***************************************************!*\
  !*** ./scripts/SudokuBoard/SudokuGridManager.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SudokuGridManager; }
/* harmony export */ });
/* harmony import */ var _BoxIndexCalculator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxIndexCalculator.mjs */ "./scripts/SudokuBoard/BoxIndexCalculator.mjs");
/* harmony import */ var _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Constants.mjs */ "./scripts/common/Constants.mjs");
/* harmony import */ var _SudokuGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SudokuGenerator.mjs */ "./scripts/SudokuBoard/SudokuGenerator.mjs");
/* harmony import */ var _PencilTool_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PencilTool.mjs */ "./scripts/SudokuBoard/PencilTool.mjs");
/* harmony import */ var _Header_MessageDisplyer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/MessageDisplyer.mjs */ "./scripts/Header/MessageDisplyer.mjs");
/* harmony import */ var _lulek1410_sudokudlx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lulek1410/sudokudlx */ "./node_modules/@lulek1410/sudokudlx/lib/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }







var _changeSelectedCellsText = /*#__PURE__*/new WeakSet();
var _removeCellsClasses = /*#__PURE__*/new WeakSet();
var _handleSudokuCheck = /*#__PURE__*/new WeakSet();
var _getCellTextContent = /*#__PURE__*/new WeakSet();
var _makeCellsInvalid = /*#__PURE__*/new WeakSet();
var _markImportantCells = /*#__PURE__*/new WeakSet();
var _addImportantCellClass = /*#__PURE__*/new WeakSet();
var _removeImportantCellClass = /*#__PURE__*/new WeakSet();
var _removeSelectedCellClass = /*#__PURE__*/new WeakSet();
var _getImportantCells = /*#__PURE__*/new WeakSet();
var _isCellEditable = /*#__PURE__*/new WeakSet();
var _findCellPosition = /*#__PURE__*/new WeakSet();
var _initializeGridCells = /*#__PURE__*/new WeakSet();
var _initializeGridValues = /*#__PURE__*/new WeakSet();
var _makeCellsUneditable = /*#__PURE__*/new WeakSet();
var _sudokuHasOnlyOneSolution = /*#__PURE__*/new WeakSet();
var _displayUneditableCellsValue = /*#__PURE__*/new WeakSet();
var _setCellText = /*#__PURE__*/new WeakSet();
var _grid = /*#__PURE__*/new WeakMap();
var _$selectedCell = /*#__PURE__*/new WeakMap();
var _importantCells = /*#__PURE__*/new WeakMap();
var _sudokuGenerator = /*#__PURE__*/new WeakMap();
var SudokuGridManager = /*#__PURE__*/function () {
  function SudokuGridManager(_cells) {
    _classCallCheck(this, SudokuGridManager);
    _classPrivateMethodInitSpec(this, _setCellText);
    _classPrivateMethodInitSpec(this, _displayUneditableCellsValue);
    _classPrivateMethodInitSpec(this, _sudokuHasOnlyOneSolution);
    _classPrivateMethodInitSpec(this, _makeCellsUneditable);
    _classPrivateMethodInitSpec(this, _initializeGridValues);
    _classPrivateMethodInitSpec(this, _initializeGridCells);
    _classPrivateMethodInitSpec(this, _findCellPosition);
    _classPrivateMethodInitSpec(this, _isCellEditable);
    _classPrivateMethodInitSpec(this, _getImportantCells);
    _classPrivateMethodInitSpec(this, _removeSelectedCellClass);
    _classPrivateMethodInitSpec(this, _removeImportantCellClass);
    _classPrivateMethodInitSpec(this, _addImportantCellClass);
    _classPrivateMethodInitSpec(this, _markImportantCells);
    _classPrivateMethodInitSpec(this, _makeCellsInvalid);
    _classPrivateMethodInitSpec(this, _getCellTextContent);
    _classPrivateMethodInitSpec(this, _handleSudokuCheck);
    _classPrivateMethodInitSpec(this, _removeCellsClasses);
    _classPrivateMethodInitSpec(this, _changeSelectedCellsText);
    _classPrivateFieldInitSpec(this, _grid, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _$selectedCell, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _importantCells, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _sudokuGenerator, {
      writable: true,
      value: new _SudokuGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]()
    });
    _classPrivateMethodGet(this, _initializeGridCells, _initializeGridCells2).call(this, _cells);
  }
  _createClass(SudokuGridManager, [{
    key: "startGame",
    value: function startGame(difficulty) {
      _classPrivateMethodGet(this, _initializeGridValues, _initializeGridValues2).call(this);
      var counter = 0;
      try {
        if (counter > 10) {
          _classPrivateMethodGet(this, _initializeGridValues, _initializeGridValues2).call(this);
          counter = 0;
        }
        _classPrivateMethodGet(this, _makeCellsUneditable, _makeCellsUneditable2).call(this, difficulty);
        while (!_classPrivateMethodGet(this, _sudokuHasOnlyOneSolution, _sudokuHasOnlyOneSolution2).call(this)) {
          _classPrivateMethodGet(this, _makeCellsUneditable, _makeCellsUneditable2).call(this, difficulty);
        }
      } catch (error) {
        _classPrivateMethodGet(this, _makeCellsUneditable, _makeCellsUneditable2).call(this, "Easy");
      }
      _classPrivateMethodGet(this, _displayUneditableCellsValue, _displayUneditableCellsValue2).call(this);
    }
  }, {
    key: "endGame",
    value: function endGame() {
      _classPrivateMethodGet(this, _removeSelectedCellClass, _removeSelectedCellClass2).call(this);
      _classPrivateMethodGet(this, _removeImportantCellClass, _removeImportantCellClass2).call(this);
      _classPrivateFieldSet(this, _$selectedCell, undefined);
      _classPrivateFieldSet(this, _importantCells, undefined);
      for (var i = 0; i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++i) {
        for (var j = 0; j < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++j) {
          var cell = _classPrivateFieldGet(this, _grid)[i][j].element;
          _classPrivateMethodGet(this, _removeCellsClasses, _removeCellsClasses2).call(this, ["pencil-grid", "invalid", "uneditable"], cell);
          _classPrivateMethodGet(this, _setCellText, _setCellText2).call(this, cell, "");
        }
      }
    }
  }, {
    key: "selectCell",
    value: function selectCell(event) {
      var $target = $(event.target);
      var $cell = $target.parent().hasClass("cell") ? $target.parent() : $target;
      if (_classPrivateMethodGet(this, _isCellEditable, _isCellEditable2).call(this, $cell)) {
        if (_classPrivateFieldGet(this, _$selectedCell)) {
          _classPrivateMethodGet(this, _removeSelectedCellClass, _removeSelectedCellClass2).call(this);
        }
        _classPrivateFieldSet(this, _$selectedCell, $cell);
        _classPrivateMethodGet(this, _markImportantCells, _markImportantCells2).call(this);
        _classPrivateFieldGet(this, _$selectedCell).addClass("selected");
      }
    }
  }, {
    key: "fillCellWithInput",
    value: function fillCellWithInput(event) {
      var key = event.key;
      var pencilActive = _PencilTool_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].isPencilActive();
      if (!_classPrivateFieldGet(this, _$selectedCell)) {
        return;
      }
      if (_classPrivateMethodGet(this, _isCellEditable, _isCellEditable2).call(this, _classPrivateFieldGet(this, _$selectedCell))) {
        if (key > 0 && key <= 9) {
          _classPrivateMethodGet(this, _removeCellsClasses, _removeCellsClasses2).call(this, ["invalid"]);
          if (pencilActive) {
            if (!_classPrivateFieldGet(this, _$selectedCell).hasClass("pencil-grid")) {
              _classPrivateMethodGet(this, _setCellText, _setCellText2).call(this, _classPrivateFieldGet(this, _$selectedCell), "");
            }
            _classPrivateFieldGet(this, _$selectedCell).addClass("pencil-grid");
            _classPrivateMethodGet(this, _changeSelectedCellsText, _changeSelectedCellsText2).call(this, key, key - 1);
          } else {
            _classPrivateMethodGet(this, _removeCellsClasses, _removeCellsClasses2).call(this, ["pencil-grid", "invalid"]);
            this.removeSelectedCellText();
            _classPrivateMethodGet(this, _changeSelectedCellsText, _changeSelectedCellsText2).call(this, key);
          }
        } else if (key === "Backspace" && !pencilActive) {
          _classPrivateMethodGet(this, _removeCellsClasses, _removeCellsClasses2).call(this, ["pencil-grid", "invalid"]);
          this.removeSelectedCellText();
          _classPrivateMethodGet(this, _setCellText, _setCellText2).call(this, _classPrivateFieldGet(this, _$selectedCell), "");
        }
      }
    }
  }, {
    key: "isSudokuValid",
    value: function isSudokuValid() {
      var mistakeCells = [];
      var emptyCells = [];
      for (var i = 0; i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++i) {
        for (var j = 0; j < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++j) {
          var cell = _classPrivateFieldGet(this, _grid)[i][j];
          var element = cell.element;
          var elementContent = _classPrivateMethodGet(this, _getCellTextContent, _getCellTextContent2).call(this, element);
          if (elementContent === "" || element.hasClass("pencil-grid")) {
            emptyCells.push(element);
          } else if (elementContent !== cell.value.toString()) {
            mistakeCells.push(element);
          }
        }
      }
      _classPrivateMethodGet(this, _handleSudokuCheck, _handleSudokuCheck2).call(this, emptyCells, mistakeCells);
      if (emptyCells.length !== 0 || mistakeCells.length !== 0) {
        return false;
      }
      return true;
    }
  }, {
    key: "removeSelectedCellText",
    value: function removeSelectedCellText() {
      _classPrivateMethodGet(this, _removeCellsClasses, _removeCellsClasses2).call(this, ["pencil-grid", "invalid"]);
      _classPrivateFieldGet(this, _$selectedCell).children().each(function () {
        $(this).text("");
      });
    }
  }]);
  return SudokuGridManager;
}();
function _changeSelectedCellsText2(key) {
  var childNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  if (_classPrivateMethodGet(this, _getCellTextContent, _getCellTextContent2).call(this, _classPrivateFieldGet(this, _$selectedCell), childNumber) === "") {
    _classPrivateMethodGet(this, _setCellText, _setCellText2).call(this, _classPrivateFieldGet(this, _$selectedCell), key, childNumber);
  } else {
    _classPrivateMethodGet(this, _setCellText, _setCellText2).call(this, _classPrivateFieldGet(this, _$selectedCell), "", childNumber);
  }
}
function _removeCellsClasses2(classes) {
  var cell = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _classPrivateFieldGet(this, _$selectedCell);
  var _iterator = _createForOfIteratorHelper(classes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var classToRemove = _step.value;
      cell.removeClass(classToRemove);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function _handleSudokuCheck2(emptyCells, mistakeCells) {
  var numOfEmptyCells = emptyCells.length;
  var numOfMistakes = mistakeCells.length;
  if (numOfEmptyCells != 0) {
    _classPrivateMethodGet(this, _makeCellsInvalid, _makeCellsInvalid2).call(this, emptyCells);
  } else if (numOfMistakes !== 0) {
    _classPrivateMethodGet(this, _makeCellsInvalid, _makeCellsInvalid2).call(this, mistakeCells);
  }
  _Header_MessageDisplyer_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].displayMessage(numOfEmptyCells, numOfMistakes);
}
function _getCellTextContent2(cell) {
  var childNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return cell.children().eq(childNumber).text();
}
function _makeCellsInvalid2(cellsArray) {
  cellsArray.forEach(function (cell) {
    $(cell).addClass("invalid");
  });
}
function _markImportantCells2() {
  _classPrivateMethodGet(this, _removeImportantCellClass, _removeImportantCellClass2).call(this);
  _classPrivateFieldSet(this, _importantCells, _classPrivateMethodGet(this, _getImportantCells, _getImportantCells2).call(this, _classPrivateFieldGet(this, _$selectedCell)));
  _classPrivateMethodGet(this, _addImportantCellClass, _addImportantCellClass2).call(this);
}
function _addImportantCellClass2() {
  var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _importantCells)),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var cell = _step2.value;
      $(cell).addClass("important");
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function _removeImportantCellClass2() {
  if (_classPrivateFieldGet(this, _importantCells)) {
    var _iterator3 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _importantCells)),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var cell = _step3.value;
        $(cell).removeClass("important");
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
}
function _removeSelectedCellClass2() {
  if (_classPrivateFieldGet(this, _$selectedCell)) {
    _classPrivateFieldGet(this, _$selectedCell).removeClass("selected");
  }
}
function _getImportantCells2(cell) {
  var position = _classPrivateMethodGet(this, _findCellPosition, _findCellPosition2).call(this, cell);
  var row = _classPrivateFieldGet(this, _grid)[position[0]].map(function (obj) {
    return obj.element;
  });
  var column = [];
  _classPrivateFieldGet(this, _grid).forEach(function (arr) {
    column = [arr[position[1]]].concat(_toConsumableArray(column));
  });
  column = column.map(function (obj) {
    return obj.element;
  });
  var box = [];
  var start = {
    i: _BoxIndexCalculator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].startIndex(position[0]),
    j: _BoxIndexCalculator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].startIndex(position[1])
  };
  var end = {
    i: _BoxIndexCalculator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].endIndex(position[0]),
    j: _BoxIndexCalculator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].endIndex(position[1])
  };
  for (var i = start.i; i <= end.i; ++i) {
    for (var j = start.j; j <= end.j; ++j) {
      box = [_classPrivateFieldGet(this, _grid)[i][j].element].concat(_toConsumableArray(box));
    }
  }
  return new Set([].concat(_toConsumableArray(row), _toConsumableArray(column), _toConsumableArray(box)));
}
function _isCellEditable2(cell) {
  var position = _classPrivateMethodGet(this, _findCellPosition, _findCellPosition2).call(this, cell);
  return !_classPrivateFieldGet(this, _grid)[position[0]][position[1]].element.hasClass("uneditable");
}
function _findCellPosition2(cell) {
  for (var i = 0; i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++i) {
    for (var j = 0; j < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++j) {
      if (_classPrivateFieldGet(this, _grid)[i][j].element.get(0) === cell.get(0)) {
        return [i, j];
      }
    }
  }
}
function _initializeGridCells2(cells) {
  var grid = [];
  var row = [];
  for (var i = 0; i < cells.length; ++i) {
    row = [].concat(_toConsumableArray(row), [{
      element: $(cells[i]),
      value: 0
    }]);
    if (i % 9 == 8) {
      grid = [].concat(_toConsumableArray(grid), [row]);
      row = [];
    }
  }
  _classPrivateFieldSet(this, _grid, grid);
}
function _initializeGridValues2() {
  var values = _classPrivateFieldGet(this, _sudokuGenerator).generateSudoku();
  for (var i = 0; i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++i) {
    for (var j = 0; j < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++j) {
      _classPrivateFieldGet(this, _grid)[i][j].value = values[i][j];
    }
  }
}
function _makeCellsUneditable2(difficulty) {
  var numOfUneditableCells;
  switch (difficulty) {
    case "Easy":
      numOfUneditableCells = 40;
      break;
    case "Medium":
      numOfUneditableCells = 30;
      break;
    case "Hard":
      numOfUneditableCells = 20;
      break;
    default:
      throw new Error("Difficulty setting not recognised : ".concat(difficulty));
  }
  var count = 0;
  while (count !== numOfUneditableCells) {
    var i = Math.floor(Math.random() * _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize);
    var j = Math.floor(Math.random() * _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize);
    var cell = _classPrivateFieldGet(this, _grid)[i][j].element;
    if (_classPrivateMethodGet(this, _isCellEditable, _isCellEditable2).call(this, cell)) {
      ++count;
      cell.addClass("uneditable");
    }
  }
}
function _sudokuHasOnlyOneSolution2() {
  var sudoku = _classPrivateFieldGet(this, _grid);
  for (var i = 0; i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++i) {
    for (var j = 0; j < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++j) {
      var cell = _classPrivateFieldGet(this, _grid)[i][j].element;
      console.log("A");
      if (!_classPrivateMethodGet(this, _isCellEditable, _isCellEditable2).call(this, cell)) {
        sudoku[i][j] = 0;
      }
    }
  }
  var matrix = _lulek1410_sudokudlx__WEBPACK_IMPORTED_MODULE_5__.SudokuToOptionsMatrixConverter.createOptionsMatrix(sudoku);
  console.log(new _lulek1410_sudokudlx__WEBPACK_IMPORTED_MODULE_5__.Dlx().solve(matrix, 2).length);
  return new _lulek1410_sudokudlx__WEBPACK_IMPORTED_MODULE_5__.Dlx().solve(matrix, 2).length === 1;
}
function _displayUneditableCellsValue2() {
  for (var i = 0; i < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++i) {
    for (var j = 0; j < _common_Constants_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize; ++j) {
      var cell = _classPrivateFieldGet(this, _grid)[i][j];
      var element = cell.element;
      if (!_classPrivateMethodGet(this, _isCellEditable, _isCellEditable2).call(this, element)) {
        _classPrivateMethodGet(this, _setCellText, _setCellText2).call(this, element, cell.value);
      }
    }
  }
}
function _setCellText2(cell, text) {
  var childNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
  cell.children().eq(childNumber).text(text);
}


/***/ }),

/***/ "./scripts/common/Constants.mjs":
/*!**************************************!*\
  !*** ./scripts/common/Constants.mjs ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Constants; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Constants = /*#__PURE__*/_createClass(function Constants() {
  _classCallCheck(this, Constants);
});
_defineProperty(Constants, "gridSize", 9);
_defineProperty(Constants, "boxSize", Math.floor(Math.sqrt(Constants.gridSize)));


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./scripts/main.mjs ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventHandler_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventHandler.mjs */ "./scripts/EventHandler.mjs");

var eventHandler = new _EventHandler_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]();
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map