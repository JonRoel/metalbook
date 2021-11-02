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
  }

  (0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AngleEqual, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/data/angle-equal.json').then(function (res) {
        return res.json();
      }).then(function (result) {
        _this2.setState({
          isLoaded: true,
          items: result.items
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded,
          items = _this$state.items,
          steelType = _this$state.steelType;

      if (!isLoaded) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 12
        }, this);
      } else {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Row, {
          className: "table-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.ButtonGroup, {
            "aria-label": "Basic example",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Button, {
              onClick: this.handleClick,
              variant: "secondary",
              id: "Mild Steel",
              className: "steeltypebutton",
              children: "Mild Steel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Button, {
              onClick: this.handleClick,
              variant: "secondary",
              id: "Stainless Steel",
              className: "steeltypebutton",
              children: "Stainless Steel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Button, {
              onClick: this.handleClick,
              variant: "secondary",
              id: "Aluminum",
              className: "steeltypebutton",
              children: "Aluminum"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: ["this is my state checker: ", steelType]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
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
                  lineNumber: 84,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Surface Area"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "lbs per ft"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Type"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tbody", {
              children: items.map(function (item) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: item.StandardName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 25
                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: item.SurfaceArea
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 25
                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: item.LbsPerFt
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 25
                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: item.Type
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 25
                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: item.Description
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 25
                  }, _this3)]
                }, item.StandardName, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 21
                }, _this3);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQW5nbGUtRXF1YWwuZTAxNTgzMjhkNTVjYzBkMTI4NWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBRXFCYzs7Ozs7QUFDakIsd0JBQWM7QUFBQTs7QUFBQTs7QUFDVjs7QUFEVSxvU0FjQSxVQUFDQyxLQUFELEVBQVc7QUFDckIsVUFBTUMsRUFBRSxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUQsRUFBeEI7QUFDQSxZQUFLRSxRQUFMLENBQWM7QUFBQ0MsUUFBQUEsU0FBUyxFQUFFSDtBQUFaLE9BQWQsR0FDSSxZQUFXO0FBQ1BJLFFBQUFBLE9BQU87QUFDVixPQUhMO0FBSUgsS0FwQmE7O0FBQUEsZ1NBc0JSLFlBQU07QUFDWixVQUFHLE1BQUtDLEtBQUwsQ0FBV0YsU0FBWCxLQUF5QixZQUE1QixFQUEwQztBQUFBOztBQUN0QyxjQUFLRCxRQUFMLENBQWM7QUFBQ0ksVUFBQUEsR0FBRyxFQUFFO0FBQU4sU0FBZCxNQUNBLFlBQVc7QUFBQTs7QUFDUCxlQUFLcEIsU0FBTDtBQUNILFNBSEQ7QUFJSCxPQUxELE1BS08sSUFBRyxNQUFLbUIsS0FBTCxDQUFXRixTQUFYLEtBQXlCLGlCQUE1QixFQUErQztBQUFBOztBQUNsRCxjQUFLRCxRQUFMLENBQWM7QUFBQ0ksVUFBQUEsR0FBRyxFQUFFO0FBQU4sU0FBZCxPQUNBLFlBQVc7QUFBQTs7QUFDUCxlQUFLcEIsU0FBTDtBQUNILFNBSEQ7QUFJSDtBQUNKLEtBbENpQjs7QUFFVixVQUFLbUIsS0FBTCxHQUFhO0FBQ1RFLE1BQUFBLEtBQUssRUFBRSxFQURFO0FBRVRDLE1BQUFBLFFBQVEsRUFBRSxLQUZEO0FBR1RDLE1BQUFBLEtBQUssRUFBRSxJQUhFO0FBSVROLE1BQUFBLFNBQVMsRUFBRSxZQUpGO0FBS1RHLE1BQUFBLEdBQUcs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R0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxvQ0FDWDtBQUFBLDBDQUNJO0FBQUEsOEJBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLGVBRUk7QUFBQSw4QkFBS0QsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkosZUFHSTtBQUFBLDhCQUFLRixJQUFJLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFISixlQUlJO0FBQUEsOEJBQUtILElBQUksQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpKLGVBS0k7QUFBQSw4QkFBS0osSUFBSSxDQUFDSztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTEo7QUFBQSxtQkFBU0wsSUFBSSxDQUFDQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRFc7QUFBQSxlQUFkO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKO0FBZ0NEO0FBQ0Y7Ozs7RUFsR3VDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQW5nbGUtRXF1YWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHJlZiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQW5nbGVFcXVhbERhdGEgZnJvbSAnLi9kYXRhL2FuZ2xlLWVxdWFsLmpzb24nO1xyXG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uR3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZmluZERPTU5vZGUsIHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmdsZUVxdWFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgICBpc0xvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICBzdGVlbFR5cGU6ICdNaWxkIFN0ZWVsJyxcclxuICAgICAgICAgICAgYXBpOiAnYW5nbGUtZXF1YWwuanNvbicsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGF0YVVybCA9IHRoaXMuZGF0YVVybC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuaWQ7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlZWxUeXBlOiBpZH0pLFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFVcmwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZGF0YVVybCA9ICgpID0+IHtcclxuICAgIGlmKHRoaXMuc3RhdGUuc3RlZWxUeXBlID09PSAnTWlsZCBTdGVlbCcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthcGk6ICdhbmdsZS1lcXVhbC5qc29uJ30pLFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZUVmZmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZih0aGlzLnN0YXRlLnN0ZWVsVHlwZSA9PT0gJ1N0YWlubGVzcyBTdGVlbCcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthcGk6ICdzcy1hbmdsZS1lcXVhbC5qc29uJ30pLFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZUVmZmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBmZXRjaCgnL2RhdGEvYW5nbGUtZXF1YWwuanNvbicpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiByZXN1bHQuaXRlbXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciwgaXNMb2FkZWQsIGl0ZW1zLCBzdGVlbFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKCFpc0xvYWRlZCkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gdmFyaWFudD1cInNlY29uZGFyeVwiIGlkPVwiTWlsZCBTdGVlbFwiIGNsYXNzTmFtZT1cInN0ZWVsdHlwZWJ1dHRvblwiPk1pbGQgU3RlZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gdmFyaWFudD1cInNlY29uZGFyeVwiIGlkPVwiU3RhaW5sZXNzIFN0ZWVsXCIgY2xhc3NOYW1lPVwic3RlZWx0eXBlYnV0dG9uXCI+U3RhaW5sZXNzIFN0ZWVsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpZD1cIkFsdW1pbnVtXCIgY2xhc3NOYW1lPVwic3RlZWx0eXBlYnV0dG9uXCI+QWx1bWludW08L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgPHA+dGhpcyBpcyBteSBzdGF0ZSBjaGVja2VyOiB7c3RlZWxUeXBlfTwvcD5cclxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlN0YW5kYXJkIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlN1cmZhY2UgQXJlYTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+bGJzIHBlciBmdDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLlN0YW5kYXJkTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5TdGFuZGFyZE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLlN1cmZhY2VBcmVhfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5MYnNQZXJGdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uRGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgIDwvUm93PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVmIiwiQ29tcG9uZW50IiwiQW5nbGVFcXVhbERhdGEiLCJUYWJsZSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwiUm93IiwiQ29sIiwid2l0aFJvdXRlciIsImZpbmRET01Ob2RlIiwicmVuZGVyIiwiQW5nbGVFcXVhbCIsImV2ZW50IiwiaWQiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInN0ZWVsVHlwZSIsImRhdGFVcmwiLCJzdGF0ZSIsImFwaSIsIml0ZW1zIiwiaXNMb2FkZWQiLCJlcnJvciIsImhhbmRsZUNsaWNrIiwiYmluZCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJtYXAiLCJpdGVtIiwiU3RhbmRhcmROYW1lIiwiU3VyZmFjZUFyZWEiLCJMYnNQZXJGdCIsIlR5cGUiLCJEZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=