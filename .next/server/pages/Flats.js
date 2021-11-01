"use strict";
(() => {
var exports = {};
exports.id = "pages/Flats";
exports.ids = ["pages/Flats"];
exports.modules = {

/***/ "./pages/Flats.js":
/*!************************!*\
  !*** ./pages/Flats.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_angle_equal_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/angle-equal.json */ "./pages/data/angle-equal.json");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ "react-bootstrap/Table");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\CAD1\\SampleApps\\metalbook\\pages\\Flats.js";






function AngleEqual() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
    className: "table-wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2___default()), {
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
            lineNumber: 13,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
            children: "Surface Area"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
            children: "lbs per ft"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
            children: "Type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tbody", {
        children: _data_angle_equal_json__WEBPACK_IMPORTED_MODULE_1__.map(item => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
              children: item.StandardName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
              children: item.SurfaceArea
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
              children: item.LbsPerFt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
              children: item.Type
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
              children: item.Description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 33
            }, this)]
          }, item.StandardName, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AngleEqual);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/Table":
/*!****************************************!*\
  !*** external "react-bootstrap/Table" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./pages/data/angle-equal.json":
/*!*************************************!*\
  !*** ./pages/data/angle-equal.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"StandardName":"L 10 X 10 X 1","SurfaceArea":3.25,"LbsPerFt":"50.16","Type":"Angle Equal","Description":"10 X 10 X 1 Angle"},{"StandardName":"L 10 X 10 X 1-1/4","SurfaceArea":3.25,"LbsPerFt":"59.01","Type":"Angle Equal","Description":"10 X 10 X 1-1/4 Angle"},{"StandardName":"L 10 X 10 X 1-1/8","SurfaceArea":3.25,"LbsPerFt":"54.78","Type":"Angle Equal","Description":"10 X 10 X 1-1/8 Angle"},{"StandardName":"L 10 X 10 X 1-3/8","SurfaceArea":3.25,"LbsPerFt":"62.75","Type":"Angle Equal","Description":"10 X 10 X 1-3/8 Angle"},{"StandardName":"L 10 X 10 X 3/4","SurfaceArea":3.25,"LbsPerFt":"39.96","Type":"Angle Equal","Description":"10 X 10 X 3/4 Angle"},{"StandardName":"L 10 X 10 X 7/8","SurfaceArea":3.25,"LbsPerFt":"45.16","Type":"Angle Equal","Description":"10 X 10 X 7/8 Angle"},{"StandardName":"L 12 X 12 X 1","SurfaceArea":3.88,"LbsPerFt":"62.64","Type":"Angle Equal","Description":"12 X 12 X 1 Angle"},{"StandardName":"L 12 X 12 X 1-1/4","SurfaceArea":3.88,"LbsPerFt":"74.64","Type":"Angle Equal","Description":"12 X 12 X 1-1/4 Angle"},{"StandardName":"L 12 X 12 X 1-1/8","SurfaceArea":3.88,"LbsPerFt":"68.83","Type":"Angle Equal","Description":"12 X 12 X 1-1/8 Angle"},{"StandardName":"L 12 X 12 X 1-3/8","SurfaceArea":3.88,"LbsPerFt":"79.9","Type":"Angle Equal","Description":"12 X 12 X 1-3/8 Angle"},{"StandardName":"L 2-1/2 X 2-1/2 X 1/2","SurfaceArea":0.83,"LbsPerFt":"4.77","Type":"Angle Equal","Description":"2-1/2 X 2-1/2 X 1/2 Angle"},{"StandardName":"L 2-1/2 X 2-1/2 X 1/4","SurfaceArea":0.83,"LbsPerFt":"3.14","Type":"Angle Equal","Description":"2-1/2 X 2-1/2 X 1/4 Angle"},{"StandardName":"L 2-1/2 X 2-1/2 X 3/16","SurfaceArea":0.83,"LbsPerFt":"2.5","Type":"Angle Equal","Description":"2-1/2 X 2-1/2 X 3/16 Angle"},{"StandardName":"L 2-1/2 X 2-1/2 X 3/8","SurfaceArea":0.83,"LbsPerFt":"4.14","Type":"Angle Equal","Description":"2-1/2 X 2-1/2 X 3/8 Angle"},{"StandardName":"L 2-1/2 X 2-1/2 X 5/16","SurfaceArea":0.83,"LbsPerFt":"3.69","Type":"Angle Equal","Description":"2-1/2 X 2-1/2 X 5/16 Angle"},{"StandardName":"L 2 X 2 X 1/4","SurfaceArea":0.67,"LbsPerFt":"2.36","Type":"Angle Equal","Description":"2 X 2 X 1/4 Angle"},{"StandardName":"L 2 X 2 X 1/8","SurfaceArea":0.67,"LbsPerFt":"1.37","Type":"Angle Equal","Description":"2 X 2 X 1/8 Angle"},{"StandardName":"L 2 X 2 X 3/16","SurfaceArea":0.67,"LbsPerFt":"1.91","Type":"Angle Equal","Description":"2 X 2 X 3/16 Angle"},{"StandardName":"L 2 X 2 X 3/8","SurfaceArea":0.67,"LbsPerFt":"2.97","Type":"Angle Equal","Description":"2 X 2 X 3/8 Angle"},{"StandardName":"L 2 X 2 X 5/16","SurfaceArea":0.67,"LbsPerFt":"2.72","Type":"Angle Equal","Description":"2 X 2 X 5/16 Angle"},{"StandardName":"L 3-1/2 X 3-1/2 X 1/2","SurfaceArea":1.17,"LbsPerFt":"7.88","Type":"Angle Equal","Description":"3-1/2 X 3-1/2 X 1/2 Angle"},{"StandardName":"L 3-1/2 X 3-1/2 X 1/4","SurfaceArea":1.17,"LbsPerFt":"4.69","Type":"Angle Equal","Description":"3-1/2 X 3-1/2 X 1/4 Angle"},{"StandardName":"L 3-1/2 X 3-1/2 X 3/8","SurfaceArea":1.17,"LbsPerFt":"6.47","Type":"Angle Equal","Description":"3-1/2 X 3-1/2 X 3/8 Angle"},{"StandardName":"L 3-1/2 X 3-1/2 X 5/16","SurfaceArea":1.17,"LbsPerFt":"5.63","Type":"Angle Equal","Description":"3-1/2 X 3-1/2 X 5/16 Angle"},{"StandardName":"L 3-1/2 X 3-1/2 X 7/16","SurfaceArea":1.17,"LbsPerFt":"7.23","Type":"Angle Equal","Description":"3-1/2 X 3-1/2 X 7/16 Angle"},{"StandardName":"L 3 X 3 X 1/2","SurfaceArea":1,"LbsPerFt":"6.32","Type":"Angle Equal","Description":"3 X 3 X 1/2 Angle"},{"StandardName":"L 3 X 3 X 1/4","SurfaceArea":1,"LbsPerFt":"3.91","Type":"Angle Equal","Description":"3 X 3 X 1/4 Angle"},{"StandardName":"L 3 X 3 X 3/16","SurfaceArea":1,"LbsPerFt":"Fla","Type":"Angle Equal","Description":"3 X 3 X 3/16 Angle"},{"StandardName":"L 3 X 3 X 3/8","SurfaceArea":1,"LbsPerFt":"5.31","Type":"Angle Equal","Description":"3 X 3 X 3/8 Angle"},{"StandardName":"L 3 X 3 X 5/16","SurfaceArea":1,"LbsPerFt":"4.66","Type":"Angle Equal","Description":"3 X 3 X 5/16 Angle"},{"StandardName":"L 3 X 3 X 7/16","SurfaceArea":1,"LbsPerFt":"5.87","Type":"Angle Equal","Description":"3 X 3 X 7/16 Angle"},{"StandardName":"L 4 X 4 X 1/2","SurfaceArea":1.33,"LbsPerFt":"9.43","Type":"Angle Equal","Description":"4 X 4 X 1/2 Angle"},{"StandardName":"L 4 X 4 X 1/4","SurfaceArea":1.33,"LbsPerFt":"5.47","Type":"Angle Equal","Description":"4 X 4 X 1/4 Angle"},{"StandardName":"L 4 X 4 X 3/4","SurfaceArea":1.33,"LbsPerFt":"11.9","Type":"Angle Equal","Description":"4 X 4 X 3/4 Angle"},{"StandardName":"L 4 X 4 X 3/8","SurfaceArea":1.33,"LbsPerFt":"7.64","Type":"Angle Equal","Description":"4 X 4 X 3/8 Angle"},{"StandardName":"L 4 X 4 X 5/16","SurfaceArea":1.33,"LbsPerFt":"6.61","Type":"Angle Equal","Description":"4 X 4 X 5/16 Angle"},{"StandardName":"L 4 X 4 X 5/8","SurfaceArea":1.33,"LbsPerFt":"10.85","Type":"Angle Equal","Description":"4 X 4 X 5/8 Angle"},{"StandardName":"L 4 X 4 X 7/16","SurfaceArea":1.33,"LbsPerFt":"8.59","Type":"Angle Equal","Description":"4 X 4 X 7/16 Angle"},{"StandardName":"L 5 X 5 X 1/2","SurfaceArea":1.67,"LbsPerFt":"12.54","Type":"Angle Equal","Description":"5 X 5 X 1/2 Angle"},{"StandardName":"L 5 X 5 X 3/4","SurfaceArea":1.67,"LbsPerFt":"16.56","Type":"Angle Equal","Description":"5 X 5 X 3/4 Angle"},{"StandardName":"L 5 X 5 X 3/8","SurfaceArea":1.67,"LbsPerFt":"9.97","Type":"Angle Equal","Description":"5 X 5 X 3/8 Angle"},{"StandardName":"L 5 X 5 X 5/16","SurfaceArea":1.67,"LbsPerFt":"8.55","Type":"Angle Equal","Description":"5 X 5 X 5/16 Angle"},{"StandardName":"L 5 X 5 X 5/8","SurfaceArea":1.67,"LbsPerFt":"14.74","Type":"Angle Equal","Description":"5 X 5 X 5/8 Angle"},{"StandardName":"L 5 X 5 X 7/16","SurfaceArea":1.67,"LbsPerFt":"11.31","Type":"Angle Equal","Description":"5 X 5 X 7/16 Angle"},{"StandardName":"L 5 X 5 X 7/8","SurfaceArea":1.67,"LbsPerFt":"18.01","Type":"Angle Equal","Description":"5 X 5 X 7/8 Angle"},{"StandardName":"L 6 X 6 X 1","SurfaceArea":2,"LbsPerFt":"25.3","Type":"Angle Equal","Description":"6 X 6 X 1 Angle"},{"StandardName":"L 6 X 6 X 1/2","SurfaceArea":2,"LbsPerFt":"15.65","Type":"Angle Equal","Description":"6 X 6 X 1/2 Angle"},{"StandardName":"L 6 X 6 X 3/4","SurfaceArea":2,"LbsPerFt":"21.22","Type":"Angle Equal","Description":"6 X 6 X 3/4 Angle"},{"StandardName":"L 6 X 6 X 3/8","SurfaceArea":2,"LbsPerFt":"12.3","Type":"Angle Equal","Description":"6 X 6 X 3/8 Angle"},{"StandardName":"L 6 X 6 X 5/16","SurfaceArea":2,"LbsPerFt":"10.5","Type":"Angle Equal","Description":"6 X 6 X 5/16 Angle"},{"StandardName":"L 6 X 6 X 5/8","SurfaceArea":2,"LbsPerFt":"18.62","Type":"Angle Equal","Description":"6 X 6 X 5/8 Angle"},{"StandardName":"L 6 X 6 X 7/16","SurfaceArea":2,"LbsPerFt":"14.03","Type":"Angle Equal","Description":"6 X 6 X 7/16 Angle"},{"StandardName":"L 6 X 6 X 7/8","SurfaceArea":2,"LbsPerFt":"23.45","Type":"Angle Equal","Description":"6 X 6 X 7/8 Angle"},{"StandardName":"L 6 X 6 X 9/16","SurfaceArea":2,"LbsPerFt":"17.19","Type":"Angle Equal","Description":"6 X 6 X 9/16 Angle"},{"StandardName":"L 8 X 8 X 1","SurfaceArea":2.67,"LbsPerFt":"37.73","Type":"Angle Equal","Description":"8 X 8 X 1 Angle"},{"StandardName":"L 8 X 8 X 1-1/8","SurfaceArea":2.67,"LbsPerFt":"40.87","Type":"Angle Equal","Description":"8 X 8 X 1-1/8 Angle"},{"StandardName":"L 8 X 8 X 1/2","SurfaceArea":2.67,"LbsPerFt":"21.86","Type":"Angle Equal","Description":"8 X 8 X 1/2 Angle"},{"StandardName":"L 8 X 8 X 3/4","SurfaceArea":2.67,"LbsPerFt":"30.55","Type":"Angle Equal","Description":"8 X 8 X 3/4 Angle"},{"StandardName":"L 8 X 8 X 5/8","SurfaceArea":2.67,"LbsPerFt":"26.39","Type":"Angle Equal","Description":"8 X 8 X 5/8 Angle"},{"StandardName":"L 8 X 8 X 7/8","SurfaceArea":2.67,"LbsPerFt":"34.32","Type":"Angle Equal","Description":"8 X 8 X 7/8 Angle"},{"StandardName":"L 8 X 8 X 9/16","SurfaceArea":2.67,"LbsPerFt":"24.19","Type":"Angle Equal","Description":"8 X 8 X 9/16 Angle"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Flats.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvRmxhdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNPLFVBQVQsR0FBc0I7QUFFcEIsc0JBQ0UsOERBQUMsZ0RBQUQ7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDJCQUNJLDhEQUFDLDhEQUFEO0FBQU8sYUFBTyxNQUFkO0FBQWUsY0FBUSxNQUF2QjtBQUF3QixXQUFLLE1BQTdCO0FBQThCLGFBQU8sRUFBQyxNQUF0QztBQUFBLDhCQUNJO0FBQUEsK0JBQ0k7QUFBQSxrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZBLGVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEEsZUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKQSxlQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVVJO0FBQUEsa0JBRVFKLHVEQUFBLENBQW9CTSxJQUFELElBQVU7QUFDekIsOEJBQ0k7QUFBQSxvQ0FDSTtBQUFBLHdCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUEsd0JBQUtELElBQUksQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBQSx3QkFBS0YsSUFBSSxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEosZUFJSTtBQUFBLHdCQUFLSCxJQUFJLENBQUNJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSixlQUtJO0FBQUEsd0JBQUtKLElBQUksQ0FBQ0s7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKO0FBQUEsYUFBU0wsSUFBSSxDQUFDQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFTSCxTQVZEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7QUFFRCxpRUFBZUgsVUFBZjs7Ozs7Ozs7OztBQ3ZDQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGFsYm9vay8uL3BhZ2VzL0ZsYXRzLmpzIiwid2VicGFjazovL21ldGFsYm9vay9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWV0YWxib29rL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vbWV0YWxib29rL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL1RhYmxlXCIiLCJ3ZWJwYWNrOi8vbWV0YWxib29rL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbmdsZUVxdWFsRGF0YSBmcm9tICcuL2RhdGEvYW5nbGUtZXF1YWwuanNvbidcclxuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9UYWJsZSdcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5mdW5jdGlvbiBBbmdsZUVxdWFsKCkge1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Um93IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+U3RhbmRhcmQgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+U3VyZmFjZSBBcmVhPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5sYnMgcGVyIGZ0PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQW5nbGVFcXVhbERhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLlN0YW5kYXJkTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLlN0YW5kYXJkTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5TdXJmYWNlQXJlYX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5MYnNQZXJGdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5UeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLkRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5nbGVFcXVhbDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1RhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFuZ2xlRXF1YWxEYXRhIiwiVGFibGUiLCJSb3ciLCJDb2wiLCJBbmdsZUVxdWFsIiwibWFwIiwiaXRlbSIsIlN0YW5kYXJkTmFtZSIsIlN1cmZhY2VBcmVhIiwiTGJzUGVyRnQiLCJUeXBlIiwiRGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9