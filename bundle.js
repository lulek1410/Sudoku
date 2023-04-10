/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
      try {
        _classPrivateMethodGet(this, _makeCellsUneditable, _makeCellsUneditable2).call(this, difficulty);
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
  var matrix = SudokuToOptionsMatrixConverter.createOptionsMatrix(sudoku);
  console.log(new Dlx().solve(matrix, 2).length);
  return new Dlx().solve(matrix, 2).length === 1;
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