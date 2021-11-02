"use strict";
self["webpackHotUpdate_N_E"]("pages/Angle-Equal",{

/***/ "./pages/Angle-Equal.js":
/*!******************************!*\
  !*** ./pages/Angle-Equal.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AngleEqual; }
/* harmony export */ });
/* harmony import */ var C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_angle_equal_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/angle-equal.json */ "./pages/data/angle-equal.json");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\CAD1\\SampleApps\\metalbook\\pages\\Angle-Equal.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var AngleEqual = /*#__PURE__*/function (_Component) {
  (0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(AngleEqual, _Component);

  var _super = _createSuper(AngleEqual);

  function AngleEqual() {
    var _this;

    (0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AngleEqual);

    _this = _super.call(this);

    (0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "handleClick", function (event) {
      var id = event.target.id;
      _this.setState({
        steelType: id
      }), function () {
        dataUrl();
      };
    });

    (0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "dataUrl", function () {
      if (_this.state.steelType === 'Mild Steel') {
        var _s = $RefreshSig$();

        _this.setState({
          api: 'angle-equal.json'
        }), _s(function () {
          _s();

          this.useEffect();
        }, "OD7bBpZva5O2jO+Puf00hKivP7c=");
      } else if (_this.state.steelType === 'Stainless Steel') {
        var _s2 = $RefreshSig$();

        _this.setState({
          api: 'ss-angle-equal.json'
        }), _s2(function () {
          _s2();

          this.useEffect();
        }, "OD7bBpZva5O2jO+Puf00hKivP7c=");
      }
    });

    _this.state = {
      items: [],
      isLoaded: false,
      error: null,
      steelType: 'Mild Steel',
      api: 'angle-equal.json'
    };
    _this.handleClick = _this.handleClick.bind((0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this.dataUrl = _this.dataUrl.bind((0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  } // const [items, setItems] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [error, setError] = useState(null);
  // const [steelType, setSteelType] = useState("Mild Steel");
  // const [api, setApi] = useState('angle-equal.json');


  (0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AngleEqual, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var api = "".concat(this.state.api);
      fetch("./data/" + {
        api: api
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        setIsLoaded(true);
        setItems(result);
        console.log({
          items: items
        });
      }, function (error) {
        setIsLoaded(true);
        setError(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (error) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          children: ["Error: ", error.message]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 12
        }, this);
      } else if (!isLoaded) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 12
        }, this);
      } else {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Row, {
          className: "table-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.ButtonGroup, {
            "aria-label": "Basic example",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Button, {
              onClick: handleClick,
              variant: "secondary",
              id: "Mild Steel",
              className: "steeltypebutton",
              children: "Mild Steel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Button, {
              onClick: handleClick,
              variant: "secondary",
              id: "Stainless Steel",
              className: "steeltypebutton",
              children: "Stainless Steel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Button, {
              onClick: handleClick,
              variant: "secondary",
              id: "Aluminum",
              className: "steeltypebutton",
              children: "Aluminum"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: ["this is my state checker: ", steelType]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Table, {
            striped: true,
            bordered: true,
            hover: true,
            variant: "dark",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("thead", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Standard Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Surface Area"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "lbs per ft"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Type"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tbody", {
              children: items.map(function (items) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: items.StandardName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 33
                  }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: items.SurfaceArea
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 33
                  }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: items.LbsPerFt
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 33
                  }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: items.Type
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 33
                  }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: items.Description
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 33
                  }, _this2)]
                }, items.StandardName, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 29
                }, _this2);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, this);
      }
    }
  }]);

  return AngleEqual;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQW5nbGUtRXF1YWwuNjlhYWY2OWI1YmVhOTFhODRlNGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBRXFCYzs7Ozs7QUFDakIsd0JBQWM7QUFBQTs7QUFBQTs7QUFDVjs7QUFEVSxvU0FvQkEsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JCLFVBQU1DLEVBQUUsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFELEVBQXhCO0FBQ0EsWUFBS0UsUUFBTCxDQUFjO0FBQUNDLFFBQUFBLFNBQVMsRUFBRUg7QUFBWixPQUFkLEdBQ0ksWUFBVztBQUNQSSxRQUFBQSxPQUFPO0FBQ1YsT0FITDtBQUlILEtBMUJhOztBQUFBLGdTQTRCUixZQUFNO0FBQ1osVUFBRyxNQUFLQyxLQUFMLENBQVdGLFNBQVgsS0FBeUIsWUFBNUIsRUFBMEM7QUFBQTs7QUFDdEMsY0FBS0QsUUFBTCxDQUFjO0FBQUNJLFVBQUFBLEdBQUcsRUFBRTtBQUFOLFNBQWQsTUFDQSxZQUFXO0FBQUE7O0FBQ1AsZUFBS3BCLFNBQUw7QUFDSCxTQUhEO0FBSUgsT0FMRCxNQUtPLElBQUcsTUFBS21CLEtBQUwsQ0FBV0YsU0FBWCxLQUF5QixpQkFBNUIsRUFBK0M7QUFBQTs7QUFDbEQsY0FBS0QsUUFBTCxDQUFjO0FBQUNJLFVBQUFBLEdBQUcsRUFBRTtBQUFOLFNBQWQsT0FDQSxZQUFXO0FBQUE7O0FBQ1AsZUFBS3BCLFNBQUw7QUFDSCxTQUhEO0FBSUg7QUFDSixLQXhDaUI7O0FBRVYsVUFBS21CLEtBQUwsR0FBYTtBQUNURSxNQUFBQSxLQUFLLEVBQUUsRUFERTtBQUVUQyxNQUFBQSxRQUFRLEVBQUUsS0FGRDtBQUdUQyxNQUFBQSxLQUFLLEVBQUUsSUFIRTtBQUlUTixNQUFBQSxTQUFTLEVBQUUsWUFKRjtBQUtURyxNQUFBQSxHQUFH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QUFDSjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMaUQ7QUFDbEM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQiwyREFBYztBQUNoQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RvRDtBQUNXO0FBQ2hEO0FBQ2YsZUFBZSxzRUFBTztBQUN0QjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMsa0VBQXFCO0FBQzlCOzs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BbmdsZS1FcXVhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCByZWYsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFuZ2xlRXF1YWxEYXRhIGZyb20gJy4vZGF0YS9hbmdsZS1lcXVhbC5qc29uJztcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbkdyb3VwLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGZpbmRET01Ob2RlLCByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5nbGVFcXVhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgc3RlZWxUeXBlOiAnTWlsZCBTdGVlbCcsXHJcbiAgICAgICAgICAgIGFwaTogJ2FuZ2xlLWVxdWFsLmpzb24nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGF0YVVybCA9IHRoaXMuZGF0YVVybC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgLy8gY29uc3QgW3N0ZWVsVHlwZSwgc2V0U3RlZWxUeXBlXSA9IHVzZVN0YXRlKFwiTWlsZCBTdGVlbFwiKTtcclxuICAgIC8vIGNvbnN0IFthcGksIHNldEFwaV0gPSB1c2VTdGF0ZSgnYW5nbGUtZXF1YWwuanNvbicpO1xyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuaWQ7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlZWxUeXBlOiBpZH0pLFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFVcmwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZGF0YVVybCA9ICgpID0+IHtcclxuICAgIGlmKHRoaXMuc3RhdGUuc3RlZWxUeXBlID09PSAnTWlsZCBTdGVlbCcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthcGk6ICdhbmdsZS1lcXVhbC5qc29uJ30pLFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZUVmZmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZih0aGlzLnN0YXRlLnN0ZWVsVHlwZSA9PT0gJ1N0YWlubGVzcyBTdGVlbCcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthcGk6ICdzcy1hbmdsZS1lcXVhbC5qc29uJ30pLFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZUVmZmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gXHJcbmNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICBjb25zdCBhcGkgPSBgJHt0aGlzLnN0YXRlLmFwaX1gXHJcbiAgICAgICAgZmV0Y2goXCIuL2RhdGEvXCIgKyB7YXBpfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldEl0ZW1zKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7aXRlbXN9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgfSBlbHNlIGlmICghaXNMb2FkZWQpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWQ9XCJNaWxkIFN0ZWVsXCIgY2xhc3NOYW1lPVwic3RlZWx0eXBlYnV0dG9uXCI+TWlsZCBTdGVlbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gdmFyaWFudD1cInNlY29uZGFyeVwiIGlkPVwiU3RhaW5sZXNzIFN0ZWVsXCIgY2xhc3NOYW1lPVwic3RlZWx0eXBlYnV0dG9uXCI+U3RhaW5sZXNzIFN0ZWVsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWQ9XCJBbHVtaW51bVwiIGNsYXNzTmFtZT1cInN0ZWVsdHlwZWJ1dHRvblwiPkFsdW1pbnVtPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgIDxwPnRoaXMgaXMgbXkgc3RhdGUgY2hlY2tlcjoge3N0ZWVsVHlwZX08L3A+XHJcbiAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5TdGFuZGFyZCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5TdXJmYWNlIEFyZWE8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPmxicyBwZXIgZnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtcy5TdGFuZGFyZE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbXMuU3RhbmRhcmROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtcy5TdXJmYWNlQXJlYX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbXMuTGJzUGVyRnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW1zLlR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW1zLkRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgPC9Sb3c+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVmIiwiQ29tcG9uZW50IiwiQW5nbGVFcXVhbERhdGEiLCJUYWJsZSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwiUm93IiwiQ29sIiwid2l0aFJvdXRlciIsImZpbmRET01Ob2RlIiwicmVuZGVyIiwiQW5nbGVFcXVhbCIsImV2ZW50IiwiaWQiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInN0ZWVsVHlwZSIsImRhdGFVcmwiLCJzdGF0ZSIsImFwaSIsIml0ZW1zIiwiaXNMb2FkZWQiLCJlcnJvciIsImhhbmRsZUNsaWNrIiwiYmluZCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJzZXRJc0xvYWRlZCIsInNldEl0ZW1zIiwiY29uc29sZSIsImxvZyIsInNldEVycm9yIiwibWVzc2FnZSIsIm1hcCIsIlN0YW5kYXJkTmFtZSIsIlN1cmZhY2VBcmVhIiwiTGJzUGVyRnQiLCJUeXBlIiwiRGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9