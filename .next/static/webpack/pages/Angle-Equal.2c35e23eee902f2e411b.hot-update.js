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
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_main_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/main-data */ "./pages/context/main-data.js");
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

  var _useSteelType = (0,_context_main_data__WEBPACK_IMPORTED_MODULE_3__.useSteelType)(),
      steelType = _useSteelType.steelType;

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
      lineNumber: 33,
      columnNumber: 12
    }, this);
  } else if (!isLoaded) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
      className: "table-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: ["This is the state: ", steelType, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__.default, {
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
              lineNumber: 43,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
              children: "Surface Area"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
              children: "lbs per ft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
              children: "Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tbody", {
          children: items.map(function (items) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                children: items.StandardName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                children: items.SurfaceArea
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                children: items.LbsPerFt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                children: items.Type
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                children: items.Description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, _this)]
            }, items.StandardName, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
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


_s(AngleEqual, "DRxPwQa9VvNszBiFyXIX4G03jQY=", false, function () {
  return [_context_main_data__WEBPACK_IMPORTED_MODULE_3__.useSteelType];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQW5nbGUtRXF1YWwuMmMzNWUyM2VlZTkwMmYyZTQxMWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNTLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDbEIsa0JBQTBCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPUyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBZ0NWLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9XLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTBCWiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPYSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxzQkFBc0JQLGdFQUFZLEVBQWxDO0FBQUEsTUFBUVEsU0FBUixpQkFBUUEsU0FBUjs7QUFFSmQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1plLElBQUFBLEtBQUssQ0FBQyx5QkFBRCxDQUFMLENBQ0tDLElBREwsQ0FDVSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQURiLEVBRUtGLElBRkwsQ0FHSSxVQUFDRyxNQUFELEVBQVk7QUFDUlIsTUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRixNQUFBQSxRQUFRLENBQUNVLE1BQUQsQ0FBUjtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDYixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBWjtBQUNILEtBUEwsRUFRSSxVQUFDSSxLQUFELEVBQVc7QUFDUEQsTUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRSxNQUFBQSxRQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNILEtBWEw7QUFhQyxHQWRJLEVBY0YsRUFkRSxDQUFUOztBQWtCSSxNQUFJQSxLQUFKLEVBQVc7QUFDWCx3QkFBTztBQUFBLDRCQUFhQSxLQUFLLENBQUNVLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0MsR0FGRCxNQUVPLElBQUksQ0FBQ1osUUFBTCxFQUFlO0FBQ3RCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDQyxHQUZNLE1BRUE7QUFDUCx3QkFDSSw4REFBQyxnREFBRDtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsOEJBQ0k7QUFBQSwwQ0FBdUJJLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUksOERBQUMsMERBQUQ7QUFBTyxlQUFPLE1BQWQ7QUFBZSxnQkFBUSxNQUF2QjtBQUF3QixhQUFLLE1BQTdCO0FBQThCLGVBQU8sRUFBQyxNQUF0QztBQUFBLGdDQUNBO0FBQUEsaUNBQ0k7QUFBQSxvQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBLGVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEEsZUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKQSxlQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFVQTtBQUFBLG9CQUVRTixLQUFLLENBQUNlLEdBQU4sQ0FBVSxVQUFDZixLQUFELEVBQVc7QUFDakIsZ0NBQ0k7QUFBQSxzQ0FDSTtBQUFBLDBCQUFLQSxLQUFLLENBQUNnQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFBLDBCQUFLaEIsS0FBSyxDQUFDaUI7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBQSwwQkFBS2pCLEtBQUssQ0FBQ2tCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISixlQUlJO0FBQUEsMEJBQUtsQixLQUFLLENBQUNtQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkosZUFLSTtBQUFBLDBCQUFLbkIsS0FBSyxDQUFDb0I7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKO0FBQUEsZUFBU3BCLEtBQUssQ0FBQ2dCLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQVNILFdBVkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBK0JDO0FBQ0osRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBN0ZTakI7VUFJaUJEOzs7S0FKakJDO0FBZ0dULCtEQUFlLE1BQUFGLHVEQUFVLENBQUNFLFVBQUQsQ0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQW5nbGUtRXF1YWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbmdsZUVxdWFsRGF0YSBmcm9tICcuL2RhdGEvYW5nbGUtZXF1YWwuanNvbic7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC1ib290c3RyYXAvVGFibGUnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0ZWVsVHlwZSB9IGZyb20gJy4vY29udGV4dC9tYWluLWRhdGEnO1xyXG5cclxuZnVuY3Rpb24gQW5nbGVFcXVhbCgpIHtcclxuICAgIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgeyBzdGVlbFR5cGUgfSA9IHVzZVN0ZWVsVHlwZSgpO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiLi9kYXRhL2FuZ2xlLWVxdWFsLmpzb25cIilcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRJdGVtcyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7aXRlbXN9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICB9IGVsc2UgaWYgKCFpc0xvYWRlZCkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBzdGF0ZToge3N0ZWVsVHlwZX0gPC9wPlxyXG4gICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+U3RhbmRhcmQgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+U3VyZmFjZSBBcmVhPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5sYnMgcGVyIGZ0PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aXRlbXMuU3RhbmRhcmROYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW1zLlN0YW5kYXJkTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbXMuU3VyZmFjZUFyZWF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW1zLkxic1BlckZ0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtcy5UeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtcy5EZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgIDwvUm93PlxyXG4gICAgKTtcclxuICAgIH1cclxufVxyXG4gIFxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8Um93IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuLy8gICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4vLyAgICAgICAgICAgICA8dGhlYWQ+XHJcbi8vICAgICAgICAgICAgICAgICA8dHI+XHJcbi8vICAgICAgICAgICAgICAgICA8dGg+U3RhbmRhcmQgTmFtZTwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICA8dGg+U3VyZmFjZSBBcmVhPC90aD5cclxuLy8gICAgICAgICAgICAgICAgIDx0aD5sYnMgcGVyIGZ0PC90aD5cclxuLy8gICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuLy8gICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICA8L3RoZWFkPlxyXG4vLyAgICAgICAgICAgICA8dGJvZHk+XHJcbi8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgQW5nbGVFcXVhbERhdGEubWFwKChpdGVtKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLlN0YW5kYXJkTmFtZX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLlN0YW5kYXJkTmFtZX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5TdXJmYWNlQXJlYX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5MYnNQZXJGdH08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5UeXBlfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLkRlc2NyaXB0aW9ufTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgPC90Ym9keT5cclxuLy8gICAgICAgICA8L1RhYmxlPlxyXG4vLyAgICAgPC9Sb3c+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQW5nbGVFcXVhbCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbmdsZUVxdWFsRGF0YSIsIlRhYmxlIiwiUm93IiwiQ29sIiwid2l0aFJvdXRlciIsInVzZVN0ZWVsVHlwZSIsIkFuZ2xlRXF1YWwiLCJpdGVtcyIsInNldEl0ZW1zIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsImVycm9yIiwic2V0RXJyb3IiLCJzdGVlbFR5cGUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJtYXAiLCJTdGFuZGFyZE5hbWUiLCJTdXJmYWNlQXJlYSIsIkxic1BlckZ0IiwiVHlwZSIsIkRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==