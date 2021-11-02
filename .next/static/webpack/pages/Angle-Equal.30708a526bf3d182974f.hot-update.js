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
      var _this2 = this;

      fetch("./data/".concat(this.state.api)).then(function (res) {
        // handle success
        var items = res.data;

        _this2.setState({
          items: items
        });

        console.log(_this2.state.items);

        _this2.setState({
          isLoading: false
        });
      })["catch"](function (err) {
        // handle error
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var isLoaded = this.state;
      var steelType = this.state;
      var items = this.state;

      if (!isLoaded) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
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
              lineNumber: 80,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Button, {
              onClick: this.handleClick,
              variant: "secondary",
              id: "Stainless Steel",
              className: "steeltypebutton",
              children: "Stainless Steel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Button, {
              onClick: this.handleClick,
              variant: "secondary",
              id: "Aluminum",
              className: "steeltypebutton",
              children: "Aluminum"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: ["this is my state checker: ", steelType]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
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
                  lineNumber: 88,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Surface Area"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "lbs per ft"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Type"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tbody", {
              children: items.map(function (item) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: item.StandardName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 33
                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: item.SurfaceArea
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 33
                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: item.LbsPerFt
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 33
                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: item.Type
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 33
                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
                    children: item.Description
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 33
                  }, _this3)]
                }, item.StandardName, true, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 29
                }, _this3);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQW5nbGUtRXF1YWwuMzA3MDhhNTI2YmYzZDE4Mjk3NGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBRXFCYzs7Ozs7QUFDakIsd0JBQWM7QUFBQTs7QUFBQTs7QUFDVjs7QUFEVSxvU0FvQkEsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JCLFVBQU1DLEVBQUUsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFELEVBQXhCO0FBQ0EsWUFBS0UsUUFBTCxDQUFjO0FBQUNDLFFBQUFBLFNBQVMsRUFBRUg7QUFBWixPQUFkLEdBQ0ksWUFBVztBQUNQSSxRQUFBQSxPQUFPO0FBQ1YsT0FITDtBQUlILEtBMUJhOztBQUFBLGdTQTRCUixZQUFNO0FBQ1osVUFBRyxNQUFLQyxLQUFMLENBQVdGLFNBQVgsS0FBeUIsWUFBNUIsRUFBMEM7QUFBQTs7QUFDdEMsY0FBS0QsUUFBTCxDQUFjO0FBQUNJLFVBQUFBLEdBQUcsRUFBRTtBQUFOLFNBQWQsTUFDQSxZQUFXO0FBQUE7O0FBQ1AsZUFBS3BCLFNBQUw7QUFDSCxTQUhEO0FBSUgsT0FMRCxNQUtPLElBQUcsTUFBS21CLEtBQUwsQ0FBV0YsU0FBWCxLQUF5QixpQkFBNUIsRUFBK0M7QUFBQTs7QUFDbEQsY0FBS0QsUUFBTCxDQUFjO0FBQUNJLFVBQUFBLEdBQUcsRUFBRTtBQUFOLFNBQWQsT0FDQSxZQUFXO0FBQUE7O0FBQ1AsZUFBS3BCLFNBQUw7QUFDSCxTQUhEO0FBSUg7QUFDSixLQXhDaUI7O0FBRVYsVUFBS21CLEtBQUwsR0FBYTtBQUNURSxNQUFBQSxLQUFLLEVBQUUsRUFERTtBQUVUQyxNQUFBQSxRQUFRLEVBQUUsS0FGRDtBQUdUQyxNQUFBQSxLQUFLLEVBQUUsSUFIRTtBQUlUTixNQUFBQSxTQUFTLEVBQUUsWUFKRjtBQUtURyxNQUFBQSxHQUFH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QSx3QkFFUUksS0FBSyxDQUFDYSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hCLG9DQUNJO0FBQUEsMENBQ0k7QUFBQSw4QkFBS0EsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosZUFFSTtBQUFBLDhCQUFLRCxJQUFJLENBQUNFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGSixlQUdJO0FBQUEsOEJBQUtGLElBQUksQ0FBQ0c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhKLGVBSUk7QUFBQSw4QkFBS0gsSUFBSSxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSkosZUFLSTtBQUFBLDhCQUFLSixJQUFJLENBQUNLO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFMSjtBQUFBLG1CQUFTTCxJQUFJLENBQUNDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESjtBQVNILGVBVkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREo7QUFvQ0Q7QUFDRjs7OztFQTFHdUNsQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BbmdsZS1FcXVhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgcmVmLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbmdsZUVxdWFsRGF0YSBmcm9tICcuL2RhdGEvYW5nbGUtZXF1YWwuanNvbic7XHJcbmltcG9ydCB7IFRhYmxlLCBCdXR0b25Hcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBmaW5kRE9NTm9kZSwgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZ2xlRXF1YWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIHN0ZWVsVHlwZTogJ01pbGQgU3RlZWwnLFxyXG4gICAgICAgICAgICBhcGk6ICdhbmdsZS1lcXVhbC5qc29uJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRhdGFVcmwgPSB0aGlzLmRhdGFVcmwuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIC8vIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIC8vIGNvbnN0IFtzdGVlbFR5cGUsIHNldFN0ZWVsVHlwZV0gPSB1c2VTdGF0ZShcIk1pbGQgU3RlZWxcIik7XHJcbiAgICAvLyBjb25zdCBbYXBpLCBzZXRBcGldID0gdXNlU3RhdGUoJ2FuZ2xlLWVxdWFsLmpzb24nKTtcclxuXHJcbiAgICBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmlkO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0ZWVsVHlwZTogaWR9KSxcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhVXJsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbmRhdGFVcmwgPSAoKSA9PiB7XHJcbiAgICBpZih0aGlzLnN0YXRlLnN0ZWVsVHlwZSA9PT0gJ01pbGQgU3RlZWwnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXBpOiAnYW5nbGUtZXF1YWwuanNvbid9KSxcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VFZmZlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYodGhpcy5zdGF0ZS5zdGVlbFR5cGUgPT09ICdTdGFpbmxlc3MgU3RlZWwnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXBpOiAnc3MtYW5nbGUtZXF1YWwuanNvbid9KSxcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VFZmZlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIFxyXG5jb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgZmV0Y2goYC4vZGF0YS8ke3RoaXMuc3RhdGUuYXBpfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1zIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLml0ZW1zKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gICAgbGV0IGlzTG9hZGVkID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBzdGVlbFR5cGUgPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoIWlzTG9hZGVkKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPVwiQmFzaWMgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWQ9XCJNaWxkIFN0ZWVsXCIgY2xhc3NOYW1lPVwic3RlZWx0eXBlYnV0dG9uXCI+TWlsZCBTdGVlbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWQ9XCJTdGFpbmxlc3MgU3RlZWxcIiBjbGFzc05hbWU9XCJzdGVlbHR5cGVidXR0b25cIj5TdGFpbmxlc3MgU3RlZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gdmFyaWFudD1cInNlY29uZGFyeVwiIGlkPVwiQWx1bWludW1cIiBjbGFzc05hbWU9XCJzdGVlbHR5cGVidXR0b25cIj5BbHVtaW51bTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICA8cD50aGlzIGlzIG15IHN0YXRlIGNoZWNrZXI6IHtzdGVlbFR5cGV9PC9wPlxyXG4gICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+U3RhbmRhcmQgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+U3VyZmFjZSBBcmVhPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5sYnMgcGVyIGZ0PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLlN0YW5kYXJkTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLlN0YW5kYXJkTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5TdXJmYWNlQXJlYX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5MYnNQZXJGdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5UeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLkRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgPC9Sb3c+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJyZWYiLCJDb21wb25lbnQiLCJBbmdsZUVxdWFsRGF0YSIsIlRhYmxlIiwiQnV0dG9uR3JvdXAiLCJCdXR0b24iLCJSb3ciLCJDb2wiLCJ3aXRoUm91dGVyIiwiZmluZERPTU5vZGUiLCJyZW5kZXIiLCJBbmdsZUVxdWFsIiwiZXZlbnQiLCJpZCIsInRhcmdldCIsInNldFN0YXRlIiwic3RlZWxUeXBlIiwiZGF0YVVybCIsInN0YXRlIiwiYXBpIiwiaXRlbXMiLCJpc0xvYWRlZCIsImVycm9yIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpc0xvYWRpbmciLCJlcnIiLCJtYXAiLCJpdGVtIiwiU3RhbmRhcmROYW1lIiwiU3VyZmFjZUFyZWEiLCJMYnNQZXJGdCIsIlR5cGUiLCJEZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=