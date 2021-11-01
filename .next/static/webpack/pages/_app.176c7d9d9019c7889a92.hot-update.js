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
  this.props.router.push({
    pathname: "/Angle-Equal",
    query: {
      steelType: (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)()
    }
  });
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
          lineNumber: 19,
          columnNumber: 54
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
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
          lineNumber: 20,
          columnNumber: 64
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/Angle-Unequal",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/Angle-Unequal" ? "current" : "",
          variant: "secondary",
          children: "Angle Unequal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "C-Channel",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/C-Channel" ? "current" : "",
          variant: "secondary",
          children: "C Channel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 40
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "Flats",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/Flats" ? "current" : "",
          variant: "secondary",
          children: "Flats"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 36
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "HP-Shapes",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/HP-Shapes" ? "current" : "",
          variant: "secondary",
          children: "HP Shapes"
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
        href: "HSS-Round",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/HSS-Round" ? "current" : "",
          variant: "secondary",
          children: "HSS Round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 40
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "HSS-Square",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/HSS-Square" ? "current" : "",
          variant: "secondary",
          children: "HSS Square"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 41
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "M-Shapes",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/M-Shapes" ? "current" : "",
          variant: "secondary",
          children: "M Shapes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 39
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "MC-Channel",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/MC-Channel" ? "current" : "",
          variant: "secondary",
          children: "MC Channel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 41
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "MT",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/MT" ? "current" : "",
          variant: "secondary",
          children: "MT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "Pipe-Std",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/Pipe-Std" ? "current" : "",
          variant: "secondary",
          children: "Pipe Standard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 39
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "Round-Bar",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/Round-Bar" ? "current" : "",
          variant: "secondary",
          children: "Round Bar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 40
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "Square-Bar",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/Square-Bar" ? "current" : "",
          variant: "secondary",
          children: "Square Bar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 41
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "ST-Beam",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/ST-Beam" ? "current" : "",
          variant: "secondary",
          children: "ST Beam"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 38
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "W-Beams",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: router.pathname == "/W-Beams" ? "current" : "",
          variant: "secondary",
          children: "W Beam"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 38
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
        lineNumber: 37,
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
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_s(Header, "aDFqthMuq8kyWbg40sMsgyYaTS0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNzZjN2Q5ZDkwMTljNzg4OWE5Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU08sTUFBVCxHQUFrQjtBQUFBOztBQUM3QixrQkFBa0NOLCtDQUFRLENBQUMsWUFBRCxDQUExQztBQUFBLE1BQU9PLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUF4QjtBQUVBLE9BQUtLLEtBQUwsQ0FBV0QsTUFBWCxDQUFrQkUsSUFBbEIsQ0FBdUI7QUFDbkJDLElBQUFBLFFBQVEsZ0JBRFc7QUFFbkJDLElBQUFBLEtBQUssRUFBRTtBQUFDTixNQUFBQSxTQUFTLEVBQUVQLCtDQUFRO0FBQXBCO0FBRlksR0FBdkI7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDSSw4REFBQyxrREFBRDtBQUFNLGlCQUFTLEVBQUVPLFNBQWpCO0FBQTRCLFlBQUksRUFBQyxHQUFqQztBQUFBLCtCQUFxQyw4REFBQyxtREFBRDtBQUFRLG1CQUFTLEVBQUVFLE1BQU0sQ0FBQ0csUUFBUCxJQUFtQixHQUFuQixHQUF5QixTQUF6QixHQUFxQyxFQUF4RDtBQUE0RCxpQkFBTyxFQUFDLFdBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLGtEQUFEO0FBQU0saUJBQVMsRUFBRUwsU0FBakI7QUFBNEIsWUFBSSxFQUFDLGFBQWpDO0FBQUEsK0JBQStDLDhEQUFDLG1EQUFEO0FBQVEsbUJBQVMsRUFBRUUsTUFBTSxDQUFDRyxRQUFQLElBQW1CLGNBQW5CLEdBQW9DLFNBQXBDLEdBQWdELEVBQW5FO0FBQXVFLGlCQUFPLEVBQUMsV0FBL0U7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QTtBQUFBO0FBQUEsVUFESjtBQTBCSDs7R0FwQ3VCRDtVQUdMRDs7O0tBSEtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbkdyb3VwLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtzdGVlbFR5cGUsIHNldFN0ZWVsVHlwZV0gPSB1c2VTdGF0ZShcIk1pbGQgU3RlZWxcIik7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiBgL0FuZ2xlLUVxdWFsYCxcclxuICAgICAgICBxdWVyeToge3N0ZWVsVHlwZTogdXNlU3RhdGUoKX1cclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZWVsLXR5cGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtZ3JvdXAtMVwiPiBcclxuICAgICAgICAgICAgICAgIDxMaW5rIHN0ZWVsVHlwZT17c3RlZWxUeXBlfSBocmVmPVwiL1wiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5BbGw8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBzdGVlbFR5cGU9e3N0ZWVsVHlwZX0gaHJlZj1cIkFuZ2xlLUVxdWFsXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9BbmdsZS1FcXVhbFwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+QW5nbGUgRXF1YWw8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0FuZ2xlLVVuZXF1YWxcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL0FuZ2xlLVVuZXF1YWxcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkFuZ2xlIFVuZXF1YWw8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiQy1DaGFubmVsXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9DLUNoYW5uZWxcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkMgQ2hhbm5lbDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJGbGF0c1wiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvRmxhdHNcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkZsYXRzPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIkhQLVNoYXBlc1wiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvSFAtU2hhcGVzXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5IUCBTaGFwZXM8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiSFNTLVJvdW5kXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9IU1MtUm91bmRcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPkhTUyBSb3VuZDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJIU1MtU3F1YXJlXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9IU1MtU3F1YXJlXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5IU1MgU3F1YXJlPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIk0tU2hhcGVzXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9NLVNoYXBlc1wiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+TSBTaGFwZXM8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiTUMtQ2hhbm5lbFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvTUMtQ2hhbm5lbFwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+TUMgQ2hhbm5lbDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJNVFwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvTVRcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPk1UPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlBpcGUtU3RkXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9QaXBlLVN0ZFwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+UGlwZSBTdGFuZGFyZDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJSb3VuZC1CYXJcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1JvdW5kLUJhclwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+Um91bmQgQmFyPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlNxdWFyZS1CYXJcIj48QnV0dG9uIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1NxdWFyZS1CYXJcIiA/IFwiY3VycmVudFwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlNxdWFyZSBCYXI8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiU1QtQmVhbVwiPjxCdXR0b24gY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvU1QtQmVhbVwiID8gXCJjdXJyZW50XCIgOiBcIlwifSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+U1QgQmVhbTwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJXLUJlYW1zXCI+PEJ1dHRvbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9XLUJlYW1zXCIgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5XIEJlYW08L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZWVsLXR5cGUtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3RlZWx0eXBlPXtzdGVlbFR5cGV9IG9uQ2xpY2s9eygpID0+IHNldFN0ZWVsVHlwZSgnTWlsZCBTdGVlbCcpfSBjbGFzc05hbWU9e3N0ZWVsVHlwZSA9PSBcIk1pbGQgU3RlZWxcIiA/IFwiY3VycmVudFN0ZWVsVHlwZVwiIDogXCJcIn0gdmFyaWFudD1cInNlY29uZGFyeVwiPk1pbGQgU3RlZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3RlZWx0eXBlPXtzdGVlbFR5cGV9IG9uQ2xpY2s9eygpID0+IHNldFN0ZWVsVHlwZSgnU3RhaW5sZXNzIFN0ZWVsJyl9IGNsYXNzTmFtZT17c3RlZWxUeXBlID09IFwiU3RhaW5sZXNzIFN0ZWVsXCIgPyBcImN1cnJlbnRTdGVlbFR5cGVcIiA6IFwiXCJ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5TdGFpbmxlc3MgU3RlZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwiTGluayIsIlJvdXRlciIsInVzZVJvdXRlciIsIkhlYWRlciIsInN0ZWVsVHlwZSIsInNldFN0ZWVsVHlwZSIsInJvdXRlciIsInByb3BzIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9