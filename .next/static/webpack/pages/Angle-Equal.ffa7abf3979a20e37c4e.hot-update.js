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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
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
    var value = document.getElementByClassName("steeltypebutton");
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: ["Error: ", error.message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 12
    }, this);
  } else if (!isLoaded) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 12
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
      className: "table-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
        "aria-label": "Basic example",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "secondary",
          id: "Mild Steel",
          className: "steeltypebutton",
          children: "Mild Steel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "secondary",
          id: "Stainless Steel",
          className: "steeltypebutton",
          children: "Stainless Steel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          onClick: handleTpyeChange(),
          variant: "secondary",
          id: "Aluminum",
          className: "steeltypebutton",
          children: "Aluminum"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: ["this is my state checker: ", steelType]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Table, {
        striped: true,
        bordered: true,
        hover: true,
        variant: "dark",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Standard Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Surface Area"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "lbs per ft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tbody", {
          children: items.map(function (items) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
                children: items.StandardName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
                children: items.SurfaceArea
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
                children: items.LbsPerFt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
                children: items.Type
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
                children: items.Description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, _this)]
            }, items.StandardName, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQW5nbGUtRXF1YWwuZmZhN2FiZjM5NzlhMjBlMzdjNGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1UsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUNsQixrQkFBMEJULCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9VLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFnQ1gsK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQUEsTUFBT1ksUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBMEJiLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUFBLE1BQU9jLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFrQ2YsK0NBQVEsQ0FBQyxZQUFELENBQTFDO0FBQUEsTUFBT2dCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsV0FBU0MsZ0JBQVQsR0FBNEI7QUFDeEIsUUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLHFCQUFULENBQStCLGlCQUEvQixDQUFkO0FBQ0FKLElBQUFBLFlBQVksQ0FBQztBQUFDRSxNQUFBQSxLQUFLLEVBQUxBO0FBQUQsS0FBRCxDQUFaO0FBQ0g7O0FBRUxsQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWnFCLElBQUFBLEtBQUssQ0FBQyx5QkFBRCxDQUFMLENBQ0tDLElBREwsQ0FDVSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQURiLEVBRUtGLElBRkwsQ0FHSSxVQUFDRyxNQUFELEVBQVk7QUFDUmIsTUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRixNQUFBQSxRQUFRLENBQUNlLE1BQUQsQ0FBUjtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDbEIsUUFBQUEsS0FBSyxFQUFMQTtBQUFE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QUEsWUFESjtBQW9DQztBQUNKLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQXZHU3RCOztLQUFBQTtBQTBHVCwrREFBZSxNQUFBRCx1REFBVSxDQUFDQyxVQUFELENBQXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0FuZ2xlLUVxdWFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQW5nbGVFcXVhbERhdGEgZnJvbSAnLi9kYXRhL2FuZ2xlLWVxdWFsLmpzb24nO1xyXG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uR3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIEFuZ2xlRXF1YWwoKSB7XHJcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdGVlbFR5cGUsIHNldFN0ZWVsVHlwZV0gPSB1c2VTdGF0ZShcIk1pbGQgU3RlZWxcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVHB5ZUNoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUNsYXNzTmFtZShcInN0ZWVsdHlwZWJ1dHRvblwiKTtcclxuICAgICAgICBzZXRTdGVlbFR5cGUoe3ZhbHVlfSlcclxuICAgIH1cclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcIi4vZGF0YS9hbmdsZS1lcXVhbC5qc29uXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0SXRlbXMocmVzdWx0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coe2l0ZW1zfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgfSBlbHNlIGlmICghaXNMb2FkZWQpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpZD1cIk1pbGQgU3RlZWxcIiBjbGFzc05hbWU9XCJzdGVlbHR5cGVidXR0b25cIj5NaWxkIFN0ZWVsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpZD1cIlN0YWlubGVzcyBTdGVlbFwiIGNsYXNzTmFtZT1cInN0ZWVsdHlwZWJ1dHRvblwiPlN0YWlubGVzcyBTdGVlbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUcHllQ2hhbmdlKCl9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpZD1cIkFsdW1pbnVtXCIgY2xhc3NOYW1lPVwic3RlZWx0eXBlYnV0dG9uXCI+QWx1bWludW08L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgPHA+dGhpcyBpcyBteSBzdGF0ZSBjaGVja2VyOiB7c3RlZWxUeXBlfTwvcD5cclxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlN0YW5kYXJkIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlN1cmZhY2UgQXJlYTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+bGJzIHBlciBmdDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW1zLlN0YW5kYXJkTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtcy5TdGFuZGFyZE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW1zLlN1cmZhY2VBcmVhfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtcy5MYnNQZXJGdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbXMuVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbXMuRGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICA8L1Jvdz5cclxuICAgICk7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPFJvdyBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbi8vICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuLy8gICAgICAgICAgICAgPHRoZWFkPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRoPlN0YW5kYXJkIE5hbWU8L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRoPlN1cmZhY2UgQXJlYTwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICA8dGg+bGJzIHBlciBmdDwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgPC90aGVhZD5cclxuLy8gICAgICAgICAgICAgPHRib2R5PlxyXG4vLyAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIEFuZ2xlRXF1YWxEYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aXRlbS5TdGFuZGFyZE5hbWV9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5TdGFuZGFyZE5hbWV9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uU3VyZmFjZUFyZWF9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uTGJzUGVyRnR9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uVHlwZX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5EZXNjcmlwdGlvbn08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIDwvdGJvZHk+XHJcbi8vICAgICAgICAgPC9UYWJsZT5cclxuLy8gICAgIDwvUm93PlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFuZ2xlRXF1YWwpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQW5nbGVFcXVhbERhdGEiLCJUYWJsZSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwiUm93IiwiQ29sIiwid2l0aFJvdXRlciIsIkFuZ2xlRXF1YWwiLCJpdGVtcyIsInNldEl0ZW1zIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsImVycm9yIiwic2V0RXJyb3IiLCJzdGVlbFR5cGUiLCJzZXRTdGVlbFR5cGUiLCJoYW5kbGVUcHllQ2hhbmdlIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUNsYXNzTmFtZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIm1hcCIsIlN0YW5kYXJkTmFtZSIsIlN1cmZhY2VBcmVhIiwiTGJzUGVyRnQiLCJUeXBlIiwiRGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9