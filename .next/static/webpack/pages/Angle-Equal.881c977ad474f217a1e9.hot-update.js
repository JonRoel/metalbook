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
    var value = find(".steeltypebutton");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQW5nbGUtRXF1YWwuODgxYzk3N2FkNDc0ZjIxN2ExZTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNZLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDbEIsa0JBQTBCWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPWSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBZ0NiLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9jLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTBCZiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPZ0IsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWtDakIsK0NBQVEsQ0FBQyxZQUFELENBQTFDO0FBQUEsTUFBT2tCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsV0FBU0MsZ0JBQVQsR0FBNEI7QUFDeEIsUUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUMsa0JBQUQsQ0FBbEI7QUFDQUgsSUFBQUEsWUFBWSxDQUFDO0FBQUNFLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFELENBQVo7QUFDSDs7QUFFTHBCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNac0IsSUFBQUEsS0FBSyxDQUFDLHlCQUFELENBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBRGIsRUFFS0YsSUFGTCxDQUdJLFVBQUNHLE1BQUQsRUFBWTtBQUNSWixNQUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FGLE1BQUFBLFFBQVEsQ0FBQ2MsTUFBRCxDQUFSO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNqQixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FB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QURKO0FBb0NDO0FBQ0osRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBdkdTckI7O0tBQUFBO0FBMEdULCtEQUFlLE1BQUFGLHVEQUFVLENBQUNFLFVBQUQsQ0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQW5nbGUtRXF1YWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFuZ2xlRXF1YWxEYXRhIGZyb20gJy4vZGF0YS9hbmdsZS1lcXVhbC5qc29uJztcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbkdyb3VwLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmZ1bmN0aW9uIEFuZ2xlRXF1YWwoKSB7XHJcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdGVlbFR5cGUsIHNldFN0ZWVsVHlwZV0gPSB1c2VTdGF0ZShcIk1pbGQgU3RlZWxcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVHB5ZUNoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGZpbmQoXCIuc3RlZWx0eXBlYnV0dG9uXCIpO1xyXG4gICAgICAgIHNldFN0ZWVsVHlwZSh7dmFsdWV9KVxyXG4gICAgfVxyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiLi9kYXRhL2FuZ2xlLWVxdWFsLmpzb25cIilcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRJdGVtcyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7aXRlbXN9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICB9IGVsc2UgaWYgKCFpc0xvYWRlZCkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGlkPVwiTWlsZCBTdGVlbFwiIGNsYXNzTmFtZT1cInN0ZWVsdHlwZWJ1dHRvblwiPk1pbGQgU3RlZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGlkPVwiU3RhaW5sZXNzIFN0ZWVsXCIgY2xhc3NOYW1lPVwic3RlZWx0eXBlYnV0dG9uXCI+U3RhaW5sZXNzIFN0ZWVsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRweWVDaGFuZ2UoKX0gdmFyaWFudD1cInNlY29uZGFyeVwiIGlkPVwiQWx1bWludW1cIiBjbGFzc05hbWU9XCJzdGVlbHR5cGVidXR0b25cIj5BbHVtaW51bTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICA8cD50aGlzIGlzIG15IHN0YXRlIGNoZWNrZXI6IHtzdGVlbFR5cGV9PC9wPlxyXG4gICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+U3RhbmRhcmQgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+U3VyZmFjZSBBcmVhPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5sYnMgcGVyIGZ0PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aXRlbXMuU3RhbmRhcmROYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW1zLlN0YW5kYXJkTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbXMuU3VyZmFjZUFyZWF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW1zLkxic1BlckZ0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtcy5UeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtcy5EZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgIDwvUm93PlxyXG4gICAgKTtcclxuICAgIH1cclxufVxyXG4gIFxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8Um93IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuLy8gICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4vLyAgICAgICAgICAgICA8dGhlYWQ+XHJcbi8vICAgICAgICAgICAgICAgICA8dHI+XHJcbi8vICAgICAgICAgICAgICAgICA8dGg+U3RhbmRhcmQgTmFtZTwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICA8dGg+U3VyZmFjZSBBcmVhPC90aD5cclxuLy8gICAgICAgICAgICAgICAgIDx0aD5sYnMgcGVyIGZ0PC90aD5cclxuLy8gICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuLy8gICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICA8L3RoZWFkPlxyXG4vLyAgICAgICAgICAgICA8dGJvZHk+XHJcbi8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgQW5nbGVFcXVhbERhdGEubWFwKChpdGVtKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLlN0YW5kYXJkTmFtZX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLlN0YW5kYXJkTmFtZX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5TdXJmYWNlQXJlYX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5MYnNQZXJGdH08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5UeXBlfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLkRlc2NyaXB0aW9ufTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgPC90Ym9keT5cclxuLy8gICAgICAgICA8L1RhYmxlPlxyXG4vLyAgICAgPC9Sb3c+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQW5nbGVFcXVhbCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJyZWYiLCJBbmdsZUVxdWFsRGF0YSIsIlRhYmxlIiwiQnV0dG9uR3JvdXAiLCJCdXR0b24iLCJSb3ciLCJDb2wiLCJ3aXRoUm91dGVyIiwiZmluZERPTU5vZGUiLCJBbmdsZUVxdWFsIiwiaXRlbXMiLCJzZXRJdGVtcyIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJlcnJvciIsInNldEVycm9yIiwic3RlZWxUeXBlIiwic2V0U3RlZWxUeXBlIiwiaGFuZGxlVHB5ZUNoYW5nZSIsInZhbHVlIiwiZmluZCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIm1hcCIsIlN0YW5kYXJkTmFtZSIsIlN1cmZhY2VBcmVhIiwiTGJzUGVyRnQiLCJUeXBlIiwiRGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9