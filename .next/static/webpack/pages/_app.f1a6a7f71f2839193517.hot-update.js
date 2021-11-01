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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Navbar, {
      bg: "dark",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Container, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Navbar.Brand, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mMWE2YTdmNzFmMjgzOTE5MzUxNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNPLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0Isa0JBQWtDTiwrQ0FBUSxDQUFDLFlBQUQsQ0FBMUM7QUFBQSxNQUFPTyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBeEI7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLE1BQUQ7QUFBUSxRQUFFLEVBQUMsTUFBWDtBQUFBLDZCQUNJLDhEQUFDLFNBQUQ7QUFBQSwrQkFDSSw4REFBQyxNQUFELENBQVEsS0FBUjtBQUFjLGNBQUksRUFBQyxPQUFuQjtBQUFBLGlDQUNBO0FBQ0ksZUFBRyxFQUFDLFdBRFI7QUFFSSxpQkFBSyxFQUFDLElBRlY7QUFHSSxrQkFBTSxFQUFDLElBSFg7QUFJSSxxQkFBUyxFQUFDLDBCQUpkO0FBS0ksZUFBRyxFQUFDO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBY0k7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNJLDhEQUFDLGtEQUFEO0FBQU0sbUJBQVMsRUFBRUUsU0FBakI7QUFBNEIsY0FBSSxFQUFDLEdBQWpDO0FBQUEsaUNBQXFDLDhEQUFDLG1EQUFEO0FBQVEscUJBQVMsRUFBRUUsTUFBTSxDQUFDQyxRQUFQLElBQW1CLEdBQW5CLEdBQXlCLFNBQXpCLEdBQXFDLEVBQXhEO0FBQTRELG1CQUFPLEVBQUMsV0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckM7QUFB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UyxFQUFFRCxNQUFNLENBQUNDLFFBQVAsSUFBbUIsYUFBbkIsR0FBbUMsU0FBbkMsR0FBK0MsRUFBbEU7QUFBc0UsbUJBQU8sRUFBQyxXQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLGVBZUksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFBLGlDQUFxQiw4REFBQyxtREFBRDtBQUFRLHFCQUFTLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixVQUFuQixHQUFnQyxTQUFoQyxHQUE0QyxFQUEvRDtBQUFtRSxtQkFBTyxFQUFDLFdBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkosZUFnQkksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFBLGlDQUFxQiw4REFBQyxtREFBRDtBQUFRLHFCQUFTLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixVQUFuQixHQUFnQyxTQUFoQyxHQUE0QyxFQUEvRDtBQUFtRSxtQkFBTyxFQUFDLFdBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSjtBQUFBLGtCQURKO0FBcUNIOztHQTFDdUJKO1VBR0xEOzs7S0FIS0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uR3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW3N0ZWVsVHlwZSwgc2V0U3RlZWxUeXBlXSA9IHVzZVN0YXRlKFwiTWlsZCBTdGVlbFwiKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJSZWFjdCBCb290c3RyYXAgbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVlbC10eXBlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1ncm91cC0xXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHN0ZWVsVHlwZT17c3RlZWxUeXBlfSBocmVmPVwiL1wiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5BbGw8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgc3RlZWxUeXBlPXtzdGVlbFR5cGV9IGhyZWY9XCJBbmdsZS1FcXVhbFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvQW5nbGUtRXF1YWxcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkFuZ2xlIEVxdWFsPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQW5nbGUtVW5lcXVhbFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvQW5nbGUtVW5lcXVhbFwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+QW5nbGUgVW5lcXVhbDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiQy1DaGFubmVsXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9DLUNoYW5uZWxcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkMgQ2hhbm5lbDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiRmxhdHNcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL0ZsYXRzXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5GbGF0czwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiSFAtU2hhcGVzXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9IUC1TaGFwZXNcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkhQIFNoYXBlczwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiSFNTLVJvdW5kXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9IU1MtUm91bmRcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkhTUyBSb3VuZDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiSFNTLVNxdWFyZVwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvSFNTLVNxdWFyZVwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+SFNTIFNxdWFyZTwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiTS1TaGFwZXNcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL00tU2hhcGVzXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5NIFNoYXBlczwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiTUMtQ2hhbm5lbFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvTUMtQ2hhbm5lbFwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+TUMgQ2hhbm5lbDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiTVRcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL01UXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5NVDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiUGlwZS1TdGRcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1BpcGUtU3RkXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5QaXBlIFN0YW5kYXJkPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJSb3VuZC1CYXJcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1JvdW5kLUJhclwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+Um91bmQgQmFyPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJTcXVhcmUtQmFyXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9TcXVhcmUtQmFyXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5TcXVhcmUgQmFyPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJTVC1CZWFtXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9TVC1CZWFtXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5TVCBCZWFtPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJXLUJlYW1zXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9XLUJlYW1zXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5XIEJlYW08L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwiTGluayIsIlJvdXRlciIsInVzZVJvdXRlciIsIkhlYWRlciIsInN0ZWVsVHlwZSIsInNldFN0ZWVsVHlwZSIsInJvdXRlciIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==