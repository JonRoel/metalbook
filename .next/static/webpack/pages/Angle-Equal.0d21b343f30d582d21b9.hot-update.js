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

      var api = "".concat(this.state.api);
      fetch("./data/" + {
        api: api
      }).then(function (res) {
        // handle success
        var items = res.data;

        _this2.setState({
          items: items
        });

        console.log(items);

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
      var data = this.state.items.map(function (items) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
            children: items.StandardName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
            children: items.SurfaceArea
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
            children: items.LbsPerFt
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
            children: items.Type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
            children: items.Description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this3)]
        }, items.StandardName, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }, _this3);
      });

      if (!isLoaded) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
              lineNumber: 90,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Button, {
              onClick: this.handleClick,
              variant: "secondary",
              id: "Stainless Steel",
              className: "steeltypebutton",
              children: "Stainless Steel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Button, {
              onClick: this.handleClick,
              variant: "secondary",
              id: "Aluminum",
              className: "steeltypebutton",
              children: "Aluminum"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: ["this is my state checker: ", steelType]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
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
                  lineNumber: 98,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Surface Area"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "lbs per ft"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Type"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tbody", {
              children: data
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQW5nbGUtRXF1YWwuMGQyMWIzNDNmMzBkNTgyZDIxYjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBRXFCYzs7Ozs7QUFDakIsd0JBQWM7QUFBQTs7QUFBQTs7QUFDVjs7QUFEVSxvU0FvQkEsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JCLFVBQU1DLEVBQUUsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFELEVBQXhCO0FBQ0EsWUFBS0UsUUFBTCxDQUFjO0FBQUNDLFFBQUFBLFNBQVMsRUFBRUg7QUFBWixPQUFkLEdBQ0ksWUFBVztBQUNQSSxRQUFBQSxPQUFPO0FBQ1YsT0FITDtBQUlILEtBMUJhOztBQUFBLGdTQTRCUixZQUFNO0FBQ1osVUFBRyxNQUFLQyxLQUFMLENBQVdGLFNBQVgsS0FBeUIsWUFBNUIsRUFBMEM7QUFBQTs7QUFDdEMsY0FBS0QsUUFBTCxDQUFjO0FBQUNJLFVBQUFBLEdBQUcsRUFBRTtBQUFOLFNBQWQsTUFDQSxZQUFXO0FBQUE7O0FBQ1AsZUFBS3BCLFNBQUw7QUFDSCxTQUhEO0FBSUgsT0FMRCxNQUtPLElBQUcsTUFBS21CLEtBQUwsQ0FBV0YsU0FBWCxLQUF5QixpQkFBNUIsRUFBK0M7QUFBQTs7QUFDbEQsY0FBS0QsUUFBTCxDQUFjO0FBQUNJLFVBQUFBLEdBQUcsRUFBRTtBQUFOLFNBQWQsT0FDQSxZQUFXO0FBQUE7O0FBQ1AsZUFBS3BCLFNBQUw7QUFDSCxTQUhEO0FBSUg7QUFDSixLQXhDaUI7O0FBRVYsVUFBS21CLEtBQUwsR0FBYTtBQUNURSxNQUFBQSxLQUFLLEVBQUUsRUFERTtBQUVUQyxNQUFBQSxRQUFRLEVBQUUsS0FGRDtBQUdUQyxNQUFBQSxLQUFLLEVBQUUsSUFIRTtBQUlUTixNQUFBQSxTQUFTLEVBQUUsWUFKRjtBQUtURyxNQUFBQSxHQUFH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O0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFNSTtBQUFBLHFEQUE4QlAsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KLGVBT0ksK0RBQUMsbURBQUQ7QUFBTyxtQkFBTyxNQUFkO0FBQWUsb0JBQVEsTUFBdkI7QUFBd0IsaUJBQUssTUFBN0I7QUFBOEIsbUJBQU8sRUFBQyxNQUF0QztBQUFBLG9DQUNBO0FBQUEscUNBQ0k7QUFBQSx3Q0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZBLGVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEEsZUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKQSxlQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsZUFVQTtBQUFBLHdCQUNLWTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESjtBQXdCRDtBQUNGOzs7O0VBeEd1QzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0FuZ2xlLUVxdWFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCByZWYsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFuZ2xlRXF1YWxEYXRhIGZyb20gJy4vZGF0YS9hbmdsZS1lcXVhbC5qc29uJztcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbkdyb3VwLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGZpbmRET01Ob2RlLCByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5nbGVFcXVhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgc3RlZWxUeXBlOiAnTWlsZCBTdGVlbCcsXHJcbiAgICAgICAgICAgIGFwaTogJ2FuZ2xlLWVxdWFsLmpzb24nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGF0YVVybCA9IHRoaXMuZGF0YVVybC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgLy8gY29uc3QgW3N0ZWVsVHlwZSwgc2V0U3RlZWxUeXBlXSA9IHVzZVN0YXRlKFwiTWlsZCBTdGVlbFwiKTtcclxuICAgIC8vIGNvbnN0IFthcGksIHNldEFwaV0gPSB1c2VTdGF0ZSgnYW5nbGUtZXF1YWwuanNvbicpO1xyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuaWQ7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlZWxUeXBlOiBpZH0pLFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFVcmwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZGF0YVVybCA9ICgpID0+IHtcclxuICAgIGlmKHRoaXMuc3RhdGUuc3RlZWxUeXBlID09PSAnTWlsZCBTdGVlbCcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthcGk6ICdhbmdsZS1lcXVhbC5qc29uJ30pLFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZUVmZmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZih0aGlzLnN0YXRlLnN0ZWVsVHlwZSA9PT0gJ1N0YWlubGVzcyBTdGVlbCcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthcGk6ICdzcy1hbmdsZS1lcXVhbC5qc29uJ30pLFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZUVmZmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gXHJcbmNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICBjb25zdCBhcGkgPSBgJHt0aGlzLnN0YXRlLmFwaX1gXHJcbiAgICAgICAgZmV0Y2goXCIuL2RhdGEvXCIgKyB7YXBpfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbXMgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gICAgbGV0IGlzTG9hZGVkID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBzdGVlbFR5cGUgPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0YXRlLml0ZW1zLm1hcCgoaXRlbXMpID0+IChcclxuICAgICAgICA8dHIga2V5PXtpdGVtcy5TdGFuZGFyZE5hbWV9PlxyXG4gICAgICAgICAgICA8dGQ+e2l0ZW1zLlN0YW5kYXJkTmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e2l0ZW1zLlN1cmZhY2VBcmVhfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57aXRlbXMuTGJzUGVyRnR9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntpdGVtcy5UeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57aXRlbXMuRGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgKSk7XHJcblxyXG4gICAgaWYgKCFpc0xvYWRlZCkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gdmFyaWFudD1cInNlY29uZGFyeVwiIGlkPVwiTWlsZCBTdGVlbFwiIGNsYXNzTmFtZT1cInN0ZWVsdHlwZWJ1dHRvblwiPk1pbGQgU3RlZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gdmFyaWFudD1cInNlY29uZGFyeVwiIGlkPVwiU3RhaW5sZXNzIFN0ZWVsXCIgY2xhc3NOYW1lPVwic3RlZWx0eXBlYnV0dG9uXCI+U3RhaW5sZXNzIFN0ZWVsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpZD1cIkFsdW1pbnVtXCIgY2xhc3NOYW1lPVwic3RlZWx0eXBlYnV0dG9uXCI+QWx1bWludW08L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgPHA+dGhpcyBpcyBteSBzdGF0ZSBjaGVja2VyOiB7c3RlZWxUeXBlfTwvcD5cclxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlN0YW5kYXJkIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlN1cmZhY2UgQXJlYTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+bGJzIHBlciBmdDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2RhdGF9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgIDwvUm93PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVmIiwiQ29tcG9uZW50IiwiQW5nbGVFcXVhbERhdGEiLCJUYWJsZSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwiUm93IiwiQ29sIiwid2l0aFJvdXRlciIsImZpbmRET01Ob2RlIiwicmVuZGVyIiwiQW5nbGVFcXVhbCIsImV2ZW50IiwiaWQiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInN0ZWVsVHlwZSIsImRhdGFVcmwiLCJzdGF0ZSIsImFwaSIsIml0ZW1zIiwiaXNMb2FkZWQiLCJlcnJvciIsImhhbmRsZUNsaWNrIiwiYmluZCIsImZldGNoIiwidGhlbiIsInJlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaXNMb2FkaW5nIiwiZXJyIiwibWFwIiwiU3RhbmRhcmROYW1lIiwiU3VyZmFjZUFyZWEiLCJMYnNQZXJGdCIsIlR5cGUiLCJEZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=