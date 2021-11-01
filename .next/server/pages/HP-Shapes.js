"use strict";
(() => {
var exports = {};
exports.id = "pages/HP-Shapes";
exports.ids = ["pages/HP-Shapes"];
exports.modules = {

/***/ "./pages/HP-Shapes.js":
/*!****************************!*\
  !*** ./pages/HP-Shapes.js ***!
  \****************************/
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
var _jsxFileName = "C:\\Users\\CAD1\\SampleApps\\metalbook\\pages\\HP-Shapes.js";






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
var __webpack_exports__ = (__webpack_exec__("./pages/HP-Shapes.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvSFAtU2hhcGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTTyxVQUFULEdBQXNCO0FBRXBCLHNCQUNFLDhEQUFDLGdEQUFEO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSwyQkFDSSw4REFBQyw4REFBRDtBQUFPLGFBQU8sTUFBZDtBQUFlLGNBQVEsTUFBdkI7QUFBd0IsV0FBSyxNQUE3QjtBQUE4QixhQUFPLEVBQUMsTUFBdEM7QUFBQSw4QkFDSTtBQUFBLCtCQUNJO0FBQUEsa0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQSxlQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhBLGVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkEsZUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFVSTtBQUFBLGtCQUVRSix1REFBQSxDQUFvQk0sSUFBRCxJQUFVO0FBQ3pCLDhCQUNJO0FBQUEsb0NBQ0k7QUFBQSx3QkFBS0EsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBLHdCQUFLRCxJQUFJLENBQUNFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUEsd0JBQUtGLElBQUksQ0FBQ0c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKLGVBSUk7QUFBQSx3QkFBS0gsSUFBSSxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosZUFLSTtBQUFBLHdCQUFLSixJQUFJLENBQUNLO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSjtBQUFBLGFBQVNMLElBQUksQ0FBQ0MsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBU0gsU0FWRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7O0FBRUQsaUVBQWVILFVBQWY7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRhbGJvb2svLi9wYWdlcy9IUC1TaGFwZXMuanMiLCJ3ZWJwYWNrOi8vbWV0YWxib29rL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tZXRhbGJvb2svZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly9tZXRhbGJvb2svZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIiIsIndlYnBhY2s6Ly9tZXRhbGJvb2svZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFuZ2xlRXF1YWxEYXRhIGZyb20gJy4vZGF0YS9hbmdsZS1lcXVhbC5qc29uJ1xyXG5pbXBvcnQgVGFibGUgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1RhYmxlJ1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmZ1bmN0aW9uIEFuZ2xlRXF1YWwoKSB7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5TdGFuZGFyZCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5TdXJmYWNlIEFyZWE8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPmxicyBwZXIgZnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBBbmdsZUVxdWFsRGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uU3RhbmRhcmROYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uU3RhbmRhcmROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLlN1cmZhY2VBcmVhfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLkxic1BlckZ0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLlR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uRGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmdsZUVxdWFsOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQW5nbGVFcXVhbERhdGEiLCJUYWJsZSIsIlJvdyIsIkNvbCIsIkFuZ2xlRXF1YWwiLCJtYXAiLCJpdGVtIiwiU3RhbmRhcmROYW1lIiwiU3VyZmFjZUFyZWEiLCJMYnNQZXJGdCIsIlR5cGUiLCJEZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=