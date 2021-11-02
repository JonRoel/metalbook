"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./pages/header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./pages/Footer.js");
/* harmony import */ var _context_main_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/main-data */ "./pages/context/main-data.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\CAD1\\SampleApps\\metalbook\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_CAD1_SampleApps_metalbook_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_context_main_data__WEBPACK_IMPORTED_MODULE_5__.SteelTypeProvider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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

/***/ "./pages/context/main-data.js":
/*!************************************!*\
  !*** ./pages/context/main-data.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SteelTypeProvider": function() { return /* binding */ SteelTypeProvider; },
/* harmony export */   "useSteelType": function() { return /* binding */ useSteelType; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\CAD1\\SampleApps\\metalbook\\pages\\context\\main-data.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var SteelTypeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
function SteelTypeProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      steelType = _useState[0],
      setSteelType = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SteelTypeContext.Provider, {
    value: {
      steelType: steelType,
      setSteelType: setSteelType
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, this);
}

_s(SteelTypeProvider, "vmFQ05yZCq7yd81RkweC0LZGAUg=");

_c = SteelTypeProvider;
function useSteelType() {
  _s2();

  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SteelTypeContext);
  if (!context) throw new Error('No steel type selected');
  return context;
}

_s2(useSteelType, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

var _c;

$RefreshReg$(_c, "SteelTypeProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZGNjYTBhMjczOTZlNjAyYzg3NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU0csS0FBVCxPQUF5QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdkMsc0JBQ0E7QUFBQSwyQkFDRSw4REFBQyxpRUFBRDtBQUFBLDhCQUNFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURBO0FBU0Q7O0tBVlFGO0FBWVQsK0RBQWVBLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7QUFFQSxJQUFNTSxnQkFBZ0IsZ0JBQUdILG9EQUFhLENBQUNJLFNBQUQsQ0FBdEM7QUFFTyxTQUFTUixpQkFBVCxPQUF5QztBQUFBOztBQUFBLE1BQVpTLFFBQVksUUFBWkEsUUFBWTs7QUFDOUMsa0JBQWtDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPSSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLHNCQUNJLDhEQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQ0EsU0FBSyxFQUFFO0FBQ0xELE1BQUFBLFNBQVMsRUFBVEEsU0FESztBQUVMQyxNQUFBQSxZQUFZLEVBQVpBO0FBRkssS0FEUDtBQUFBLGNBTUNGO0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUQ7O0dBWmVUOztLQUFBQTtBQWNULFNBQVNZLFlBQVQsR0FBd0I7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHUixpREFBVSxDQUFDRSxnQkFBRCxDQUExQjtBQUVBLE1BQUksQ0FBQ00sT0FBTCxFQUNFLE1BQU0sSUFBSUMsS0FBSixDQUFVLHdCQUFWLENBQU47QUFFRixTQUFPRCxPQUFQO0FBQ0Q7O0lBUGVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRleHQvbWFpbi1kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgeyBTdGVlbFR5cGVQcm92aWRlciB9IGZyb20gJy4vY29udGV4dC9tYWluLWRhdGEnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICA8PlxuICAgIDxTdGVlbFR5cGVQcm92aWRlcj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1N0ZWVsVHlwZVByb3ZpZGVyPlxuICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN0ZWVsVHlwZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdGVlbFR5cGVQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc3RlZWxUeXBlLCBzZXRTdGVlbFR5cGVdID0gdXNlU3RhdGUoe30pXHJcbiAgcmV0dXJuIChcclxuICAgICAgPFN0ZWVsVHlwZUNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBzdGVlbFR5cGUsXHJcbiAgICAgICAgc2V0U3RlZWxUeXBlLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1N0ZWVsVHlwZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RlZWxUeXBlKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFN0ZWVsVHlwZUNvbnRleHQpXHJcblxyXG4gIGlmICghY29udGV4dClcclxuICAgIHRocm93IG5ldyBFcnJvcignTm8gc3RlZWwgdHlwZSBzZWxlY3RlZCcpXHJcblxyXG4gIHJldHVybiBjb250ZXh0XHJcbn0iXSwibmFtZXMiOlsiSGVhZGVyIiwiRm9vdGVyIiwiU3RlZWxUeXBlUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJTdGVlbFR5cGVDb250ZXh0IiwidW5kZWZpbmVkIiwiY2hpbGRyZW4iLCJzdGVlbFR5cGUiLCJzZXRTdGVlbFR5cGUiLCJ1c2VTdGVlbFR5cGUiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9