"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/header.js":
/*!*************************!*\
  !*** ./pages/header.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\CAD1\\SampleApps\\metalbook\\pages\\header.js",
    _s = $RefreshSig$();







function Header() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Mild Steel"),
      steelType = _useState[0],
      setSteelType = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {
      bg: "dark",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {
          href: "#home",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "/logo.svg",
            width: "30",
            height: "30",
            className: "d-inline-block align-top",
            alt: "React Bootstrap logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "steel-type-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "shape-group-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          steelType: steelType,
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/" ? "current" : "",
            variant: "secondary",
            children: "All"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 58
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          steelType: steelType,
          href: "Angle-Equal",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/Angle-Equal" ? "current" : "",
            variant: "secondary",
            children: "Angle Equal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 68
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/Angle-Unequal",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/Angle-Unequal" ? "current" : "",
            variant: "secondary",
            children: "Angle Unequal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 49
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "C-Channel",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/C-Channel" ? "current" : "",
            variant: "secondary",
            children: "C Channel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 44
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "Flats",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/Flats" ? "current" : "",
            variant: "secondary",
            children: "Flats"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 40
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "HP-Shapes",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/HP-Shapes" ? "current" : "",
            variant: "secondary",
            children: "HP Shapes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 44
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "HSS-Round",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/HSS-Round" ? "current" : "",
            variant: "secondary",
            children: "HSS Round"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 44
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "HSS-Square",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/HSS-Square" ? "current" : "",
            variant: "secondary",
            children: "HSS Square"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 45
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "M-Shapes",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/M-Shapes" ? "current" : "",
            variant: "secondary",
            children: "M Shapes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "MC-Channel",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/MC-Channel" ? "current" : "",
            variant: "secondary",
            children: "MC Channel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 45
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "MT",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/MT" ? "current" : "",
            variant: "secondary",
            children: "MT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 37
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "Pipe-Std",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/Pipe-Std" ? "current" : "",
            variant: "secondary",
            children: "Pipe Standard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "Round-Bar",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/Round-Bar" ? "current" : "",
            variant: "secondary",
            children: "Round Bar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 44
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "Square-Bar",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/Square-Bar" ? "current" : "",
            variant: "secondary",
            children: "Square Bar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 45
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "ST-Beam",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/ST-Beam" ? "current" : "",
            variant: "secondary",
            children: "ST Beam"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 42
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "W-Beams",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: router.pathname == "/W-Beams" ? "current" : "",
            variant: "secondary",
            children: "W Beam"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 42
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Header, "2l79m2yLM7ibhucCU1kWxr7apM0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNzA3YzQ5YmJmZjI2ZWFhZDRmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNRLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0Isa0JBQWtDUCwrQ0FBUSxDQUFDLFlBQUQsQ0FBMUM7QUFBQSxNQUFPUSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBeEI7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLG1EQUFEO0FBQVEsUUFBRSxFQUFDLE1BQVg7QUFBQSw2QkFDSSw4REFBQyxzREFBRDtBQUFBLCtCQUNJLDhEQUFDLHlEQUFEO0FBQWMsY0FBSSxFQUFDLE9BQW5CO0FBQUEsaUNBQ0E7QUFDSSxlQUFHLEVBQUMsV0FEUjtBQUVJLGlCQUFLLEVBQUMsSUFGVjtBQUdJLGtCQUFNLEVBQUMsSUFIWDtBQUlJLHFCQUFTLEVBQUMsMEJBSmQ7QUFLSSxlQUFHLEVBQUM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFjSTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0ksOERBQUMsa0RBQUQ7QUFBTSxtQkFBUyxFQUFFRSxTQUFqQjtBQUE0QixjQUFJLEVBQUMsR0FBakM7QUFBQSxpQ0FBcUMsOERBQUMsbURBQUQ7QUFBUSxxQkFBUyxFQUFFRSxNQUFNLENBQUNDLFFBQVAsSUFBbUIsR0FBbkIsR0FBeUIsU0FBekIsR0FBcUMsRUFBeEQ7QUFBNEQsbUJBQU8sRUFBQyxXQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBTSxtQkFBUyxFQUFFSCxTQUFqQjtBQUE0QixjQUFJLEVBQUMsYUFBakM7QUFBQSxpQ0FBK0MsOERBQUMsbURBQUQ7QUFBUSxxQkFBUyxFQUFFRSxNQUFNLENBQUNDLFFBQVAsSUFBbUIsY0FBbkIsR0FBb0MsU0FBcEMsR0FBZ0QsRUFBbkU7QUFBdUUsbUJBQU8sRUFBQyxXQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsZ0JBQVg7QUFBQSxpQ0FBNEIsOERBQUMsbURBQUQ7QUFBUSxxQkFBUyxFQUFFRCxNQUFNLENBQUNDLFFBQVAsSUFBbUIsZ0JBQW5CLEdBQXNDLFNBQXRDLEdBQWtELEVBQXJFO0FBQXlFLG1CQUFPLEVBQUMsV0FBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFdBQVg7QUFBQSxpQ0FBdUIsOERBQUMsbURBQUQ7QUFBUSxxQkFBUyxFQUFFRCxNQUFNLENBQUNDLFFBQVAsSUFBbUIsWUFBbkIsR0FBa0MsU0FBbEMsR0FBOEMsRUFBakU7QUFBcUUsbUJBQU8sRUFBQyxXQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsT0FBWDtBQUFBLGlDQUFtQiw4REFBQyxtREFBRDtBQUFRLHFCQUFTLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixRQUFuQixHQUE4QixTQUE5QixHQUEwQyxFQUE3RDtBQUFpRSxtQkFBTyxFQUFDLFdBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxXQUFYO0FBQUEsaUNBQXVCLDhEQUFDLG1EQUFEO0FBQVEscUJBQVMsRUFBRUQsTUFBTSxDQUFDQyxRQUFQLElBQW1CLFlBQW5CLEdBQWtDLFNBQWxDLEdBQThDLEVBQWpFO0FBQXFFLG1CQUFPLEVBQUMsV0FBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixlQU9JLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFdBQVg7QUFBQSxpQ0FBdUIsOERBQUMsbURBQUQ7QUFBUSxxQkFBUyxFQUFFRCxNQUFNLENBQUNDLFFBQVAsSUFBbUIsWUFBbkIsR0FBa0MsU0FBbEMsR0FBOEMsRUFBakU7QUFBcUUsbUJBQU8sRUFBQyxXQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKLGVBUUksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsWUFBWDtBQUFBLGlDQUF3Qiw4REFBQyxtREFBRDtBQUFRLHFCQUFTLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixhQUFuQixHQUFtQyxTQUFuQyxHQUErQyxFQUFsRTtBQUFzRSxtQkFBTyxFQUFDLFdBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFTSSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQUEsaUNBQXNCLDhEQUFDLG1EQUFEO0FBQVEscUJBQVMsRUFBRUQsTUFBTSxDQUFDQyxRQUFQLElBQW1CLFdBQW5CLEdBQWlDLFNBQWpDLEdBQTZDLEVBQWhFO0FBQW9FLG1CQUFPLEVBQUMsV0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSixlQVVJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFlBQVg7QUFBQSxpQ0FBd0IsOERBQUMsbURBQUQ7QUFBUSxxQkFBUyxFQUFFRCxNQUFNLENBQUNDLFFBQVAsSUFBbUIsYUFBbkIsR0FBbUMsU0FBbkMsR0FBK0MsRUFBbEU7QUFBc0UsbUJBQU8sRUFBQyxXQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKLGVBV0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsSUFBWDtBQUFBLGlDQUFnQiw4REFBQyxtREFBRDtBQUFRLHFCQUFTLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixLQUFuQixHQUEyQixTQUEzQixHQUF1QyxFQUExRDtBQUE4RCxtQkFBTyxFQUFDLFdBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEosZUFZSSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQUEsaUNBQXNCLDhEQUFDLG1EQUFEO0FBQVEscUJBQVMsRUFBRUQsTUFBTSxDQUFDQyxRQUFQLElBQW1CLFdBQW5CLEdBQWlDLFNBQWpDLEdBQTZDLEVBQWhFO0FBQW9FLG1CQUFPLEVBQUMsV0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaSixlQWFJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFdBQVg7QUFBQSxpQ0FBdUIsOERBQUMsbURBQUQ7QUFBUSxxQkFBUyxFQUFFRCxNQUFNLENBQUNDLFFBQVAsSUFBbUIsWUFBbkIsR0FBa0MsU0FBbEMsR0FBOEMsRUFBakU7QUFBcUUsbUJBQU8sRUFBQyxXQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGVBY0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsWUFBWDtBQUFBLGlDQUF3Qiw4REFBQyxtREFBRDtBQUFRLHFCQUFTLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixhQUFuQixHQUFtQyxTQUFuQyxHQUErQyxFQUFsRTtBQUFzRSxtQkFBTyxFQUFDLFdBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEosZUFlSSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQXFCLDhEQUFDLG1EQUFEO0FBQVEscUJBQVMsRUFBRUQsTUFBTSxDQUFDQyxRQUFQLElBQW1CLFVBQW5CLEdBQWdDLFNBQWhDLEdBQTRDLEVBQS9EO0FBQW1FLG1CQUFPLEVBQUMsV0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmSixlQWdCSSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQXFCLDhEQUFDLG1EQUFEO0FBQVEscUJBQVMsRUFBRUQsTUFBTSxDQUFDQyxRQUFQLElBQW1CLFVBQW5CLEdBQWdDLFNBQWhDLEdBQTRDLEVBQS9EO0FBQW1FLG1CQUFPLEVBQUMsV0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRKO0FBQUEsa0JBREo7QUFxQ0g7O0dBMUN1Qko7VUFHTEQ7OztLQUhLQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIE5hdmJhciwgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbc3RlZWxUeXBlLCBzZXRTdGVlbFR5cGVdID0gdXNlU3RhdGUoXCJNaWxkIFN0ZWVsXCIpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhciBiZz1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlJlYWN0IEJvb3RzdHJhcCBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVlbC10eXBlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1ncm91cC0xXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHN0ZWVsVHlwZT17c3RlZWxUeXBlfSBocmVmPVwiL1wiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5BbGw8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgc3RlZWxUeXBlPXtzdGVlbFR5cGV9IGhyZWY9XCJBbmdsZS1FcXVhbFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvQW5nbGUtRXF1YWxcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkFuZ2xlIEVxdWFsPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQW5nbGUtVW5lcXVhbFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvQW5nbGUtVW5lcXVhbFwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+QW5nbGUgVW5lcXVhbDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiQy1DaGFubmVsXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9DLUNoYW5uZWxcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkMgQ2hhbm5lbDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiRmxhdHNcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL0ZsYXRzXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5GbGF0czwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiSFAtU2hhcGVzXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9IUC1TaGFwZXNcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkhQIFNoYXBlczwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiSFNTLVJvdW5kXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9IU1MtUm91bmRcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkhTUyBSb3VuZDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiSFNTLVNxdWFyZVwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvSFNTLVNxdWFyZVwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+SFNTIFNxdWFyZTwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiTS1TaGFwZXNcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL00tU2hhcGVzXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5NIFNoYXBlczwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiTUMtQ2hhbm5lbFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvTUMtQ2hhbm5lbFwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+TUMgQ2hhbm5lbDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiTVRcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL01UXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5NVDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiUGlwZS1TdGRcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1BpcGUtU3RkXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5QaXBlIFN0YW5kYXJkPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJSb3VuZC1CYXJcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1JvdW5kLUJhclwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+Um91bmQgQmFyPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJTcXVhcmUtQmFyXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9TcXVhcmUtQmFyXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5TcXVhcmUgQmFyPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJTVC1CZWFtXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9TVC1CZWFtXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5TVCBCZWFtPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJXLUJlYW1zXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9XLUJlYW1zXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5XIEJlYW08L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIk5hdmJhciIsIkNvbnRhaW5lciIsIkxpbmsiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJzdGVlbFR5cGUiLCJzZXRTdGVlbFR5cGUiLCJyb3V0ZXIiLCJwYXRobmFtZSJdLCJzb3VyY2VSb290IjoiIn0=