webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/icons/Exit.js":
/*!**********************************!*\
  !*** ./components/icons/Exit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/steven/Programming/Projects/circle-gps/app-next/frontend/components/icons/Exit.js";


var SVG = function SVG(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    className: "".concat(className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SVG);

/***/ }),

/***/ "./components/icons/Lock.js":
false,

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cog */ "./components/icons/Cog.js");
/* harmony import */ var _Exit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Exit */ "./components/icons/Exit.js");
/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Target */ "./components/icons/Target.js");
var _jsxFileName = "/home/steven/Programming/Projects/circle-gps/app-next/frontend/components/icons/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var Icon = function Icon(props) {
  switch (props.name) {
    case "cog":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cog__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }));

    case "exit":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Exit__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));

    case "target":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Target__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }));

    default:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ })

})
//# sourceMappingURL=_app.js.30d51255115a61eaa131.hot-update.js.map