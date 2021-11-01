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

  function passSteelType() {
    next_router__WEBPACK_IMPORTED_MODULE_2__.Router.push({
      pathname: "/Angle-Equal",
      state: {
        steelType: this.state.steelType
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "steel-type-container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
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
          lineNumber: 18,
          columnNumber: 54
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        steelType: steelType,
        href: "Angle-Equal",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/Angle-Equal" ? "current" : "",
          variant: "secondary",
          children: "Angle Equal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 64
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/Angle-Unequal",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/Angle-Unequal" ? "current" : "",
          variant: "secondary",
          children: "Angle Unequal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "C-Channel",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/C-Channel" ? "current" : "",
          variant: "secondary",
          children: "C Channel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 40
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "Flats",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/Flats" ? "current" : "",
          variant: "secondary",
          children: "Flats"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 36
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "HP-Shapes",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/HP-Shapes" ? "current" : "",
          variant: "secondary",
          children: "HP Shapes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 40
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "HSS-Round",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/HSS-Round" ? "current" : "",
          variant: "secondary",
          children: "HSS Round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 40
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "HSS-Square",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/HSS-Square" ? "current" : "",
          variant: "secondary",
          children: "HSS Square"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 41
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "M-Shapes",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/M-Shapes" ? "current" : "",
          variant: "secondary",
          children: "M Shapes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 39
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "MC-Channel",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/MC-Channel" ? "current" : "",
          variant: "secondary",
          children: "MC Channel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 41
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "MT",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/MT" ? "current" : "",
          variant: "secondary",
          children: "MT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "Pipe-Std",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/Pipe-Std" ? "current" : "",
          variant: "secondary",
          children: "Pipe Standard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 39
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "Round-Bar",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/Round-Bar" ? "current" : "",
          variant: "secondary",
          children: "Round Bar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 40
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "Square-Bar",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/Square-Bar" ? "current" : "",
          variant: "secondary",
          children: "Square Bar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 41
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "ST-Beam",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/ST-Beam" ? "current" : "",
          variant: "secondary",
          children: "ST Beam"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 38
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "W-Beams",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/W-Beams" ? "current" : "",
          variant: "secondary",
          children: "W Beam"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 38
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "steel-type-group",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
        steeltype: steelType,
        onClick: function onClick() {
          return setSteelType('Mild Steel');
        },
        className: steelType == "Mild Steel" ? "currentSteelType" : "",
        variant: "secondary",
        children: "Mild Steel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
        steeltype: steelType,
        onClick: function onClick() {
          return setSteelType('Stainless Steel');
        },
        className: steelType == "Stainless Steel" ? "currentSteelType" : "",
        variant: "secondary",
        children: "Stainless Steel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NGY4MGI3NmIzNjI4Zjg4NzZlMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU08sTUFBVCxHQUFrQjtBQUFBOztBQUM3QixrQkFBa0NOLCtDQUFRLENBQUMsWUFBRCxDQUExQztBQUFBLE1BQU9PLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUF4Qjs7QUFFQSxXQUFTSyxhQUFULEdBQXlCO0FBQ3JCTixJQUFBQSxvREFBQSxDQUFZO0FBQUNRLE1BQUFBLFFBQVEsRUFBQyxjQUFWO0FBQTBCQyxNQUFBQSxLQUFLLEVBQUU7QUFBQ04sUUFBQUEsU0FBUyxFQUFDLEtBQUtNLEtBQUwsQ0FBV047QUFBdEI7QUFBakMsS0FBWjtBQUNIOztBQUVELHNCQUNJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNJLDhEQUFDLGtEQUFEO0FBQU0saUJBQVMsRUFBRUEsU0FBakI7QUFBNEIsWUFBSSxFQUFDLEdBQWpDO0FBQUEsK0JBQXFDLDhEQUFDLG1EQUFEO0FBQVEsbUJBQVMsRUFBRUUsTUFBTSxDQUFDRyxRQUFQLElBQW1CLEdBQW5CLEdBQXlCLFNBQXpCLEdBQXFDLEVBQXhEO0FBQTRELGlCQUFPLEVBQUMsV0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBTSxpQkFBUyxFQUFFTCxTQUFqQjtBQUE0QixZQUFJLEVBQUMsYUFBakM7QUFBQSwrQkFBK0MsOERBQUMsbURBQUQ7QUFBUSxtQkFBUyxFQUFFRSxNQUFNLENBQUNHLFFBQVAsSUFBbUIsY0FBbkIsR0FBb0MsU0FBcEMsR0FBZ0QsRUFBbkU7QUFBdUUsaUJBQU8sRUFBQyxXQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxnQkFBWDtBQUFBLCtCQUE0Qiw4REFBQyxtREFBRDtBQUFRLG1CQUFTLEVBQUVILE1BQU0sQ0FBQ0csUUFBUCxJQUFtQixnQkFBbkIsR0FBc0MsU0FBdEMsR0FBa0QsRUFBckU7QUFBeUUsaUJBQU8sRUFBQyxXQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFJSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUEsK0JBQXVCLDhEQUFDLG1EQUFEO0FBQVEsbUJBQVMsRUFBRUgsTUFBTSxDQUFDRyxRQUFQLElBQW1CLFlBQW5CLEdBQWtDLFNBQWxDLEdBQThDLEVBQWpFO0FBQXFFLGlCQUFPLEVBQUMsV0FBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBS0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBLCtCQUFtQiw4REFBQyxtREFBRDtBQUFRLG1CQUFTLEVBQUVILE1BQU0sQ0FBQ0csUUFBUCxJQUFtQixRQUFuQixHQUE4QixTQUE5QixHQUEwQyxFQUE3RDtBQUFpRSxpQkFBTyxFQUFDLFdBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQU1JLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFdBQVg7QUFBQSwrQkFBdUIsOERBQUMsbURBQUQ7QUFBUSxtQkFBUyxFQUFFSCxNQUFNLENBQUNHLFFBQVAsSUFBbUIsWUFBbkIsR0FBa0MsU0FBbEMsR0FBOEMsRUFBakU7QUFBcUUsaUJBQU8sRUFBQyxXQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFPSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUEsK0JBQXVCLDhEQUFDLG1EQUFEO0FBQVEsbUJBQVMsRUFBRUgsTUFBTSxDQUFDRyxRQUFQLElBQW1CLFlBQW5CLEdBQWtDLFNBQWxDLEdBQThDLEVBQWpFO0FBQXFFLGlCQUFPLEVBQUMsV0FBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLGVBUUksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsWUFBWDtBQUFBLCtCQUF3Qiw4REFBQyxtREFBRDtBQUFRLG1CQUFTLEVBQUVILE1BQU0sQ0FBQ0csUUFBUCxJQUFtQixhQUFuQixHQUFtQyxTQUFuQyxHQUErQyxFQUFsRTtBQUFzRSxpQkFBTyxFQUFDLFdBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixlQVNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQSwrQkFBc0IsOERBQUMsbURBQUQ7QUFBUSxtQkFBUyxFQUFFSCxNQUFNLENBQUNHLFFBQVAsSUFBbUIsV0FBbkIsR0FBaUMsU0FBakMsR0FBNkMsRUFBaEU7QUFBb0UsaUJBQU8sRUFBQyxXQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEosZUFVSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxZQUFYO0FBQUEsK0JBQXdCLDhEQUFDLG1EQUFEO0FBQVEsbUJBQVMsRUFBRUgsTUFBTSxDQUFDRyxRQUFQLElBQW1CLGFBQW5CLEdBQW1DLFNBQW5DLEdBQStDLEVBQWxFO0FBQXNFLGlCQUFPLEVBQUMsV0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKLGVBV0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsSUFBWDtBQUFBLCtCQUFnQiw4REFBQyxtREFBRDtBQUFRLG1CQUFTLEVBQUVILE1BQU0sQ0FBQ0csUUFBUCxJQUFtQixLQUFuQixHQUEyQixTQUEzQixHQUF1QyxFQUExRDtBQUE4RCxpQkFBTyxFQUFDLFdBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSixlQVlJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQSwrQkFBc0IsOERBQUMsbURBQUQ7QUFBUSxtQkFBUyxFQUFFSCxNQUFNLENBQUNHLFFBQVAsSUFBbUIsV0FBbkIsR0FBaUMsU0FBakMsR0FBNkMsRUFBaEU7QUFBb0UsaUJBQU8sRUFBQyxXQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosZUFhSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUEsK0JBQXVCLDhEQUFDLG1EQUFEO0FBQVEsbUJBQVMsRUFBRUgsTUFBTSxDQUFDRyxRQUFQLElBQW1CLFlBQW5CLEdBQWtDLFNBQWxDLEdBQThDLEVBQWpFO0FBQXFFLGlCQUFPLEVBQUMsV0FBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKLGVBY0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsWUFBWDtBQUFBLCtCQUF3Qiw4REFBQyxtREFBRDtBQUFRLG1CQUFTLEVBQUVILE1BQU0sQ0FBQ0csUUFBUCxJQUFtQixhQUFuQixHQUFtQyxTQUFuQyxHQUErQyxFQUFsRTtBQUFzRSxpQkFBTyxFQUFDLFdBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkSixlQWVJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQSwrQkFBcUIsOERBQUMsbURBQUQ7QUFBUSxtQkFBUyxFQUFFSCxNQUFNLENBQUNHLFFBQVAsSUFBbUIsVUFBbkIsR0FBZ0MsU0FBaEMsR0FBNEMsRUFBL0Q7QUFBbUUsaUJBQU8sRUFBQyxXQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkosZUFnQkksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBLCtCQUFxQiw4REFBQyxtREFBRDtBQUFRLG1CQUFTLEVBQUVILE1BQU0sQ0FBQ0csUUFBUCxJQUFtQixVQUFuQixHQUFnQyxTQUFoQyxHQUE0QyxFQUEvRDtBQUFtRSxpQkFBTyxFQUFDLFdBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFtQkk7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFDSSw4REFBQyxtREFBRDtBQUFRLGlCQUFTLEVBQUVMLFNBQW5CO0FBQThCLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxZQUFZLENBQUMsWUFBRCxDQUFsQjtBQUFBLFNBQXZDO0FBQXlFLGlCQUFTLEVBQUVELFNBQVMsSUFBSSxZQUFiLEdBQTRCLGtCQUE1QixHQUFpRCxFQUFySTtBQUF5SSxlQUFPLEVBQUMsV0FBako7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLG1EQUFEO0FBQVEsaUJBQVMsRUFBRUEsU0FBbkI7QUFBOEIsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLFlBQVksQ0FBQyxpQkFBRCxDQUFsQjtBQUFBLFNBQXZDO0FBQThFLGlCQUFTLEVBQUVELFNBQVMsSUFBSSxpQkFBYixHQUFpQyxrQkFBakMsR0FBc0QsRUFBL0k7QUFBbUosZUFBTyxFQUFDLFdBQTNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMEJIOztHQW5DdUJEO1VBR0xEOzs7S0FIS0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uR3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW3N0ZWVsVHlwZSwgc2V0U3RlZWxUeXBlXSA9IHVzZVN0YXRlKFwiTWlsZCBTdGVlbFwiKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzU3RlZWxUeXBlKCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtwYXRobmFtZTpcIi9BbmdsZS1FcXVhbFwiLCBzdGF0ZToge3N0ZWVsVHlwZTp0aGlzLnN0YXRlLnN0ZWVsVHlwZX19KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVlbC10eXBlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWdyb3VwLTFcIj4gXHJcbiAgICAgICAgICAgICAgICA8TGluayBzdGVlbFR5cGU9e3N0ZWVsVHlwZX0gaHJlZj1cIi9cIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+QWxsPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgc3RlZWxUeXBlPXtzdGVlbFR5cGV9IGhyZWY9XCJBbmdsZS1FcXVhbFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvQW5nbGUtRXF1YWxcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkFuZ2xlIEVxdWFsPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BbmdsZS1VbmVxdWFsXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9BbmdsZS1VbmVxdWFsXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5BbmdsZSBVbmVxdWFsPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIkMtQ2hhbm5lbFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvQy1DaGFubmVsXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5DIENoYW5uZWw8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiRmxhdHNcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL0ZsYXRzXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5GbGF0czwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJIUC1TaGFwZXNcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL0hQLVNoYXBlc1wiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+SFAgU2hhcGVzPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIkhTUy1Sb3VuZFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvSFNTLVJvdW5kXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5IU1MgUm91bmQ8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiSFNTLVNxdWFyZVwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvSFNTLVNxdWFyZVwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+SFNTIFNxdWFyZTwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJNLVNoYXBlc1wiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvTS1TaGFwZXNcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPk0gU2hhcGVzPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIk1DLUNoYW5uZWxcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL01DLUNoYW5uZWxcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPk1DIENoYW5uZWw8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiTVRcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL01UXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5NVDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJQaXBlLVN0ZFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvUGlwZS1TdGRcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlBpcGUgU3RhbmRhcmQ8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiUm91bmQtQmFyXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9Sb3VuZC1CYXJcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlJvdW5kIEJhcjwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJTcXVhcmUtQmFyXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9TcXVhcmUtQmFyXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5TcXVhcmUgQmFyPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlNULUJlYW1cIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1NULUJlYW1cIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlNUIEJlYW08L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiVy1CZWFtc1wiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvVy1CZWFtc1wiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+VyBCZWFtPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVlbC10eXBlLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0ZWVsdHlwZT17c3RlZWxUeXBlfSBvbkNsaWNrPXsoKSA9PiBzZXRTdGVlbFR5cGUoJ01pbGQgU3RlZWwnKX0gY2xhc3NOYW1lPXtzdGVlbFR5cGUgPT0gXCJNaWxkIFN0ZWVsXCIgPyBcImN1cnJlbnRTdGVlbFR5cGVcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5NaWxkIFN0ZWVsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0ZWVsdHlwZT17c3RlZWxUeXBlfSBvbkNsaWNrPXsoKSA9PiBzZXRTdGVlbFR5cGUoJ1N0YWlubGVzcyBTdGVlbCcpfSBjbGFzc05hbWU9e3N0ZWVsVHlwZSA9PSBcIlN0YWlubGVzcyBTdGVlbFwiID8gXCJjdXJyZW50U3RlZWxUeXBlXCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+U3RhaW5sZXNzIFN0ZWVsPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b25Hcm91cCIsIkJ1dHRvbiIsIkxpbmsiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJzdGVlbFR5cGUiLCJzZXRTdGVlbFR5cGUiLCJyb3V0ZXIiLCJwYXNzU3RlZWxUeXBlIiwicHVzaCIsInBhdGhuYW1lIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9