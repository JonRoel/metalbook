"use strict";
self["webpackHotUpdate_N_E"]("pages/Angle-Equal",{

/***/ "./pages/Angle-Equal.js":
/*!******************************!*\
  !*** ./pages/Angle-Equal.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_angle_equal_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/angle-equal.json */ "./pages/data/angle-equal.json");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\CAD1\\SampleApps\\metalbook\\pages\\Angle-Equal.js",
    _s = $RefreshSig$();









function AngleEqual() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      items = _useState[0],
      setItems = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isLoaded = _useState2[0],
      setIsLoaded = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Mild Steel"),
      steelType = _useState4[0],
      setSteelType = _useState4[1];

  function handleTpyeChange() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.ReactDOM.findDOMNode.getElementsByClassName("steeltypebutton");
    setSteelType({
      value: value
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("./data/angle-equal.json").then(function (res) {
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
  }, []);

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: ["Error: ", error.message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 12
    }, this);
  } else if (!isLoaded) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
      className: "table-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
        "aria-label": "Basic example",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "secondary",
          id: "Mild Steel",
          className: "steeltypebutton",
          children: "Mild Steel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "secondary",
          id: "Stainless Steel",
          className: "steeltypebutton",
          children: "Stainless Steel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
          onClick: handleTpyeChange(),
          variant: "secondary",
          id: "Aluminum",
          className: "steeltypebutton",
          children: "Aluminum"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: ["this is my state checker: ", steelType]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Table, {
        striped: true,
        bordered: true,
        hover: true,
        variant: "dark",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
              children: "Standard Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
              children: "Surface Area"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
              children: "lbs per ft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
              children: "Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tbody", {
          children: items.map(function (items) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                children: items.StandardName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                children: items.SurfaceArea
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                children: items.LbsPerFt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                children: items.Type
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                children: items.Description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, _this)]
            }, items.StandardName, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this);
  }
} //   return (
//     <Row className="table-wrapper">
//         <Table striped bordered hover variant="dark">
//             <thead>
//                 <tr>
//                 <th>Standard Name</th>
//                 <th>Surface Area</th>
//                 <th>lbs per ft</th>
//                 <th>Type</th>
//                 <th>Description</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     AngleEqualData.map((item) => {
//                         return (
//                             <tr key={item.StandardName}>
//                                 <td>{item.StandardName}</td>
//                                 <td>{item.SurfaceArea}</td>
//                                 <td>{item.LbsPerFt}</td>
//                                 <td>{item.Type}</td>
//                                 <td>{item.Description}</td>
//                             </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </Table>
//     </Row>
//   );
// }


_s(AngleEqual, "ff+AAXTRqwsI2S1wFPUvsWfGQhQ=");

_c = AngleEqual;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(AngleEqual));

var _c, _c2;

$RefreshReg$(_c, "AngleEqual");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQW5nbGUtRXF1YWwuZjlmNDdkZmE5NjdiOWFiZmI5MDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNZLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDbEIsa0JBQTBCWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPWSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBZ0NiLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9jLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTBCZiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPZ0IsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWtDakIsK0NBQVEsQ0FBQyxZQUFELENBQTFDO0FBQUEsTUFBT2tCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsV0FBU0MsZ0JBQVQsR0FBNEI7QUFDeEIsUUFBTUMsS0FBSyxHQUFHbkIsOEVBQUEsQ0FBNEMsaUJBQTVDLENBQWQ7QUFDQWlCLElBQUFBLFlBQVksQ0FBQztBQUFDRSxNQUFBQSxLQUFLLEVBQUxBO0FBQUQsS0FBRCxDQUFaO0FBQ0g7O0FBRUxwQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWnNCLElBQUFBLEtBQUssQ0FBQyx5QkFBRCxDQUFMLENBQ0tDLElBREwsQ0FDVSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQURiLEVBRUtGLElBRkwsQ0FHSSxVQUFDRyxNQUFELEVBQVk7QUFDUlosTUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRixNQUFBQSxRQUFRLENBQUNjLE1BQUQsQ0FBUjtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDakIsUUFBQUEsS0FBSyxFQUFMQTtBQUFE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QUEsWUFESjtBQW9DQztBQUNKLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQXZHU3JCOztLQUFBQTtBQTBHVCwrREFBZSxNQUFBRix1REFBVSxDQUFDRSxVQUFELENBQXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0FuZ2xlLUVxdWFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBSZWFjdERPTSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFuZ2xlRXF1YWxEYXRhIGZyb20gJy4vZGF0YS9hbmdsZS1lcXVhbC5qc29uJztcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbkdyb3VwLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmZ1bmN0aW9uIEFuZ2xlRXF1YWwoKSB7XHJcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdGVlbFR5cGUsIHNldFN0ZWVsVHlwZV0gPSB1c2VTdGF0ZShcIk1pbGQgU3RlZWxcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVHB5ZUNoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGVlbHR5cGVidXR0b25cIik7XHJcbiAgICAgICAgc2V0U3RlZWxUeXBlKHt2YWx1ZX0pXHJcbiAgICB9XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCIuL2RhdGEvYW5nbGUtZXF1YWwuanNvblwiKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldEl0ZW1zKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtpdGVtc30pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIFxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgIH0gZWxzZSBpZiAoIWlzTG9hZGVkKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPVwiQmFzaWMgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWQ9XCJNaWxkIFN0ZWVsXCIgY2xhc3NOYW1lPVwic3RlZWx0eXBlYnV0dG9uXCI+TWlsZCBTdGVlbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWQ9XCJTdGFpbmxlc3MgU3RlZWxcIiBjbGFzc05hbWU9XCJzdGVlbHR5cGVidXR0b25cIj5TdGFpbmxlc3MgU3RlZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlVHB5ZUNoYW5nZSgpfSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWQ9XCJBbHVtaW51bVwiIGNsYXNzTmFtZT1cInN0ZWVsdHlwZWJ1dHRvblwiPkFsdW1pbnVtPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgIDxwPnRoaXMgaXMgbXkgc3RhdGUgY2hlY2tlcjoge3N0ZWVsVHlwZX08L3A+XHJcbiAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5TdGFuZGFyZCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5TdXJmYWNlIEFyZWE8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPmxicyBwZXIgZnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtcy5TdGFuZGFyZE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbXMuU3RhbmRhcmROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtcy5TdXJmYWNlQXJlYX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbXMuTGJzUGVyRnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW1zLlR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW1zLkRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgPC9Sb3c+XHJcbiAgICApO1xyXG4gICAgfVxyXG59XHJcbiAgXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxSb3cgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4vLyAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbi8vICAgICAgICAgICAgIDx0aGVhZD5cclxuLy8gICAgICAgICAgICAgICAgIDx0cj5cclxuLy8gICAgICAgICAgICAgICAgIDx0aD5TdGFuZGFyZCBOYW1lPC90aD5cclxuLy8gICAgICAgICAgICAgICAgIDx0aD5TdXJmYWNlIEFyZWE8L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRoPmxicyBwZXIgZnQ8L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuLy8gICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbi8vICAgICAgICAgICAgIDx0Ym9keT5cclxuLy8gICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBBbmdsZUVxdWFsRGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uU3RhbmRhcmROYW1lfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uU3RhbmRhcmROYW1lfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLlN1cmZhY2VBcmVhfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLkxic1BlckZ0fTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLlR5cGV9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uRGVzY3JpcHRpb259PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICA8L3Rib2R5PlxyXG4vLyAgICAgICAgIDwvVGFibGU+XHJcbi8vICAgICA8L1Jvdz5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBbmdsZUVxdWFsKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0RE9NIiwiQW5nbGVFcXVhbERhdGEiLCJUYWJsZSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwiUm93IiwiQ29sIiwid2l0aFJvdXRlciIsImZpbmRET01Ob2RlIiwiQW5nbGVFcXVhbCIsIml0ZW1zIiwic2V0SXRlbXMiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwiZXJyb3IiLCJzZXRFcnJvciIsInN0ZWVsVHlwZSIsInNldFN0ZWVsVHlwZSIsImhhbmRsZVRweWVDaGFuZ2UiLCJ2YWx1ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJtYXAiLCJTdGFuZGFyZE5hbWUiLCJTdXJmYWNlQXJlYSIsIkxic1BlckZ0IiwiVHlwZSIsIkRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==