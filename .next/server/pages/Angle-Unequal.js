"use strict";
(() => {
var exports = {};
exports.id = "pages/Angle-Unequal";
exports.ids = ["pages/Angle-Unequal"];
exports.modules = {

/***/ "./pages/Angle-Unequal.js":
/*!********************************!*\
  !*** ./pages/Angle-Unequal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_angle_unequal_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/angle-unequal.json */ "./pages/data/angle-unequal.json");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ "react-bootstrap/Table");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\CAD1\\SampleApps\\metalbook\\pages\\Angle-Unequal.js";






function AngleUnequal() {
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
        children: _data_angle_unequal_json__WEBPACK_IMPORTED_MODULE_1__.map(item => {
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
              children: item.lbsperft
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AngleUnequal);

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

/***/ "./pages/data/angle-unequal.json":
/*!***************************************!*\
  !*** ./pages/data/angle-unequal.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"StandardName":"L 2-1/2 X 1-1/2 X 1/4","SurfaceArea":0.667,"lbsperft":3.19,"Type":"Angle Unequal","Description":"2-1/2 X 1-1/2 X 1/4 Angle"},{"StandardName":"L 2-1/2 X 1-1/2 X 3/16","SurfaceArea":0.667,"lbsperft":2.44,"Type":"Angle Unequal","Description":"2-1/2 X 1-1/2 X 3/16 Angle"},{"StandardName":"L 2-1/2 X 2 X 1/4","SurfaceArea":0.75,"lbsperft":3.62,"Type":"Angle Unequal","Description":"2-1/2 X 2 X 1/4 Angle"},{"StandardName":"L 2-1/2 X 2 X 3/16","SurfaceArea":0.75,"lbsperft":2.75,"Type":"Angle Unequal","Description":"2-1/2 X 2 X 3/16 Angle"},{"StandardName":"L 2-1/2 X 2 X 3/8","SurfaceArea":0.75,"lbsperft":5.3,"Type":"Angle Unequal","Description":"2-1/2 X 2 X 3/8 Angle"},{"StandardName":"L 2-1/2 X 2 X 5/16","SurfaceArea":0.75,"lbsperft":4.5,"Type":"Angle Unequal","Description":"2-1/2 X 2 X 5/16 Angle"},{"StandardName":"L 3-1/2 X 2-1/2 X 1/2","SurfaceArea":1,"lbsperft":9.4,"Type":"Angle Unequal","Description":"3-1/2 X 2-1/2 X 1/2 Angle"},{"StandardName":"L 3-1/2 X 2-1/2 X 1/4","SurfaceArea":1,"lbsperft":4.9,"Type":"Angle Unequal","Description":"3-1/2 X 2-1/2 X 1/4 Angle"},{"StandardName":"L 3-1/2 X 2-1/2 X 3/8","SurfaceArea":1,"lbsperft":7.2,"Type":"Angle Unequal","Description":"3-1/2 X 2-1/2 X 3/8 Angle"},{"StandardName":"L 3-1/2 X 2-1/2 X 5/16","SurfaceArea":1,"lbsperft":6.1,"Type":"Angle Unequal","Description":"3-1/2 X 2-1/2 X 5/16 Angle"},{"StandardName":"L 3-1/2 X 3 X 1/2","SurfaceArea":1.083,"lbsperft":10.2,"Type":"Angle Unequal","Description":"3-1/2 X 3 X 1/2 Angle"},{"StandardName":"L 3-1/2 X 3 X 1/4","SurfaceArea":1.083,"lbsperft":5.4,"Type":"Angle Unequal","Description":"3-1/2 X 3 X 1/4 Angle"},{"StandardName":"L 3-1/2 X 3 X 3/8","SurfaceArea":1.083,"lbsperft":7.9,"Type":"Angle Unequal","Description":"3-1/2 X 3 X 3/8 Angle"},{"StandardName":"L 3-1/2 X 3 X 5/16","SurfaceArea":1.083,"lbsperft":6.6,"Type":"Angle Unequal","Description":"3-1/2 X 3 X 5/16 Angle"},{"StandardName":"L 3-1/2 X 3 X 7/16","SurfaceArea":1.083,"lbsperft":9.1,"Type":"Angle Unequal","Description":"3-1/2 X 3 X 7/16 Angle"},{"StandardName":"L 3 X 2-1/2 X 1/2","SurfaceArea":0.917,"lbsperft":8.5,"Type":"Angle Unequal","Description":"3 X 2-1/2 X 1/2 Angle"},{"StandardName":"L 3 X 2-1/2 X 1/4","SurfaceArea":0.917,"lbsperft":4.5,"Type":"Angle Unequal","Description":"3 X 2-1/2 X 1/4 Angle"},{"StandardName":"L 3 X 2-1/2 X 3/16","SurfaceArea":0.917,"lbsperft":3.39,"Type":"Angle Unequal","Description":"3 X 2-1/2 X 3/16 Angle"},{"StandardName":"L 3 X 2-1/2 X 3/8","SurfaceArea":0.917,"lbsperft":6.6,"Type":"Angle Unequal","Description":"3 X 2-1/2 X 3/8 Angle"},{"StandardName":"L 3 X 2-1/2 X 5/16","SurfaceArea":0.917,"lbsperft":5.6,"Type":"Angle Unequal","Description":"3 X 2-1/2 X 5/16 Angle"},{"StandardName":"L 3 X 2-1/2 X 7/16","SurfaceArea":0.917,"lbsperft":7.6,"Type":"Angle Unequal","Description":"3 X 2-1/2 X 7/16 Angle"},{"StandardName":"L 3 X 2 X 1/2","SurfaceArea":0.833,"lbsperft":7.7,"Type":"Angle Unequal","Description":"3 X 2 X 1/2 Angle"},{"StandardName":"L 3 X 2 X 1/4","SurfaceArea":0.833,"lbsperft":4.1,"Type":"Angle Unequal","Description":"3 X 2 X 1/4 Angle"},{"StandardName":"L 3 X 2 X 3/16","SurfaceArea":0.833,"lbsperft":3.07,"Type":"Angle Unequal","Description":"3 X 2 X 3/16 Angle"},{"StandardName":"L 3 X 2 X 3/8","SurfaceArea":0.833,"lbsperft":5.9,"Type":"Angle Unequal","Description":"3 X 2 X 3/8 Angle"},{"StandardName":"L 3 X 2 X 5/16","SurfaceArea":0.833,"lbsperft":5,"Type":"Angle Unequal","Description":"3 X 2 X 5/16 Angle"},{"StandardName":"L 4 X 3-1/2 X 1/2","SurfaceArea":1.25,"lbsperft":11.9,"Type":"Angle Unequal","Description":"4 X 3-1/2 X 1/2 Angle"},{"StandardName":"L 4 X 3-1/2 X 1/4","SurfaceArea":1.25,"lbsperft":6.2,"Type":"Angle Unequal","Description":"4 X 3-1/2 X 1/4 Angle"},{"StandardName":"L 4 X 3-1/2 X 3/8","SurfaceArea":1.25,"lbsperft":9.1,"Type":"Angle Unequal","Description":"4 X 3-1/2 X 3/8 Angle"},{"StandardName":"L 4 X 3-1/2 X 5/16","SurfaceArea":1.25,"lbsperft":7.7,"Type":"Angle Unequal","Description":"4 X 3-1/2 X 5/16 Angle"},{"StandardName":"L 4 X 3 X 1/2","SurfaceArea":1.167,"lbsperft":11.1,"Type":"Angle Unequal","Description":"4 X 3 X 1/2 Angle"},{"StandardName":"L 4 X 3 X 1/4","SurfaceArea":1.167,"lbsperft":5.8,"Type":"Angle Unequal","Description":"4 X 3 X 1/4 Angle"},{"StandardName":"L 4 X 3 X 3/8","SurfaceArea":1.167,"lbsperft":8.5,"Type":"Angle Unequal","Description":"4 X 3 X 3/8 Angle"},{"StandardName":"L 4 X 3 X 5/16","SurfaceArea":1.167,"lbsperft":7.2,"Type":"Angle Unequal","Description":"4 X 3 X 5/16 Angle"},{"StandardName":"L 4 X 3 X 5/8","SurfaceArea":1.167,"lbsperft":13.6,"Type":"Angle Unequal","Description":"4 X 3 X 5/8 Angle"},{"StandardName":"L 5 X 3-1/2 X 1/2","SurfaceArea":1.417,"lbsperft":13.6,"Type":"Angle Unequal","Description":"5 X 3-1/2 X 1/2 Angle"},{"StandardName":"L 5 X 3-1/2 X 1/4","SurfaceArea":1.417,"lbsperft":7,"Type":"Angle Unequal","Description":"5 X 3-1/2 X 1/4 Angle"},{"StandardName":"L 5 X 3-1/2 X 3/4","SurfaceArea":1.417,"lbsperft":19.8,"Type":"Angle Unequal","Description":"5 X 3-1/2 X 3/4 Angle"},{"StandardName":"L 5 X 3-1/2 X 3/8","SurfaceArea":1.417,"lbsperft":10.4,"Type":"Angle Unequal","Description":"5 X 3-1/2 X 3/8 Angle"},{"StandardName":"L 5 X 3-1/2 X 5/16","SurfaceArea":1.417,"lbsperft":8.7,"Type":"Angle Unequal","Description":"5 X 3-1/2 X 5/16 Angle"},{"StandardName":"L 5 X 3-1/2 X 5/8","SurfaceArea":1.417,"lbsperft":16.8,"Type":"Angle Unequal","Description":"5 X 3-1/2 X 5/8 Angle"},{"StandardName":"L 5 X 3 X 1/2","SurfaceArea":1.333,"lbsperft":12.8,"Type":"Angle Unequal","Description":"5 X 3 X 1/2 Angle"},{"StandardName":"L 5 X 3 X 1/4","SurfaceArea":1.333,"lbsperft":6.6,"Type":"Angle Unequal","Description":"5 X 3 X 1/4 Angle"},{"StandardName":"L 5 X 3 X 3/8","SurfaceArea":1.333,"lbsperft":9.8,"Type":"Angle Unequal","Description":"5 X 3 X 3/8 Angle"},{"StandardName":"L 5 X 3 X 5/16","SurfaceArea":1.333,"lbsperft":8.2,"Type":"Angle Unequal","Description":"5 X 3 X 5/16 Angle"},{"StandardName":"L 5 X 3 X 7/16","SurfaceArea":1.333,"lbsperft":11.3,"Type":"Angle Unequal","Description":"5 X 3 X 7/16 Angle"},{"StandardName":"L 6 X 3-1/2 X 1/2","SurfaceArea":1.583,"lbsperft":15.3,"Type":"Angle Unequal","Description":"6 X 3-1/2 X 1/2 Angle"},{"StandardName":"L 6 X 3-1/2 X 3/8","SurfaceArea":1.583,"lbsperft":11.7,"Type":"Angle Unequal","Description":"6 X 3-1/2 X 3/8 Angle"},{"StandardName":"L 6 X 3-1/2 X 5/16","SurfaceArea":1.583,"lbsperft":9.8,"Type":"Angle Unequal","Description":"6 X 3-1/2 X 5/16 Angle"},{"StandardName":"L 6 X 4 X 1/2","SurfaceArea":1.667,"lbsperft":16.2,"Type":"Angle Unequal","Description":"6 X 4 X 1/2 Angle"},{"StandardName":"L 6 X 4 X 3/4","SurfaceArea":1.667,"lbsperft":23.6,"Type":"Angle Unequal","Description":"6 X 4 X 3/4 Angle"},{"StandardName":"L 6 X 4 X 3/8","SurfaceArea":1.667,"lbsperft":12.3,"Type":"Angle Unequal","Description":"6 X 4 X 3/8 Angle"},{"StandardName":"L 6 X 4 X 5/16","SurfaceArea":1.667,"lbsperft":10.3,"Type":"Angle Unequal","Description":"6 X 4 X 5/16 Angle"},{"StandardName":"L 6 X 4 X 5/8","SurfaceArea":1.667,"lbsperft":20,"Type":"Angle Unequal","Description":"6 X 4 X 5/8 Angle"},{"StandardName":"L 6 X 4 X 7/16","SurfaceArea":1.667,"lbsperft":14.3,"Type":"Angle Unequal","Description":"6 X 4 X 7/16 Angle"},{"StandardName":"L 6 X 4 X 7/8","SurfaceArea":1.667,"lbsperft":27.2,"Type":"Angle Unequal","Description":"6 X 4 X 7/8 Angle"},{"StandardName":"L 6 X 4 X 9/16","SurfaceArea":1.667,"lbsperft":18.1,"Type":"Angle Unequal","Description":"6 X 4 X 9/16 Angle"},{"StandardName":"L 7 X 4 X 1/2","SurfaceArea":1.833,"lbsperft":17.9,"Type":"Angle Unequal","Description":"7 X 4 X 1/2 Angle"},{"StandardName":"L 7 X 4 X 3/4","SurfaceArea":1.833,"lbsperft":26.2,"Type":"Angle Unequal","Description":"7 X 4 X 3/4 Angle"},{"StandardName":"L 7 X 4 X 3/8","SurfaceArea":1.833,"lbsperft":13.6,"Type":"Angle Unequal","Description":"7 X 4 X 3/8 Angle"},{"StandardName":"L 7 X 4 X 5/8","SurfaceArea":1.833,"lbsperft":22.1,"Type":"Angle Unequal","Description":"7 X 4 X 5/8 Angle"},{"StandardName":"L 7 X 4 X 7/16","SurfaceArea":1.833,"lbsperft":15.7,"Type":"Angle Unequal","Description":"7 X 4 X 7/16 Angle"},{"StandardName":"L 8 X 4 X 1","SurfaceArea":2,"lbsperft":37.4,"Type":"Angle Unequal","Description":"8 X 4 X 1 Angle"},{"StandardName":"L 8 X 4 X 1/2","SurfaceArea":2,"lbsperft":19.6,"Type":"Angle Unequal","Description":"8 X 4 X 1/2 Angle"},{"StandardName":"L 8 X 4 X 3/4","SurfaceArea":2,"lbsperft":28.7,"Type":"Angle Unequal","Description":"8 X 4 X 3/4 Angle"},{"StandardName":"L 8 X 4 X 5/8","SurfaceArea":2,"lbsperft":24.2,"Type":"Angle Unequal","Description":"8 X 4 X 5/8 Angle"},{"StandardName":"L 8 X 4 X 7/16","SurfaceArea":2,"lbsperft":17.2,"Type":"Angle Unequal","Description":"8 X 4 X 7/16 Angle"},{"StandardName":"L 8 X 4 X 7/8","SurfaceArea":2,"lbsperft":33.1,"Type":"Angle Unequal","Description":"8 X 4 X 7/8 Angle"},{"StandardName":"L 8 X 4 X 9/16","SurfaceArea":2,"lbsperft":21.9,"Type":"Angle Unequal","Description":"8 X 4 X 9/16 Angle"},{"StandardName":"L 8 X 6 X 1","SurfaceArea":2.333,"lbsperft":44.2,"Type":"Angle Unequal","Description":"8 X 6 X 1 Angle"},{"StandardName":"L 8 X 6 X 1/2","SurfaceArea":2.333,"lbsperft":23,"Type":"Angle Unequal","Description":"8 X 6 X 1/2 Angle"},{"StandardName":"L 8 X 6 X 3/4","SurfaceArea":2.333,"lbsperft":33.8,"Type":"Angle Unequal","Description":"8 X 6 X 3/4 Angle"},{"StandardName":"L 8 X 6 X 5/8","SurfaceArea":2.333,"lbsperft":28.5,"Type":"Angle Unequal","Description":"8 X 6 X 5/8 Angle"},{"StandardName":"L 8 X 6 X 7/16","SurfaceArea":2.333,"lbsperft":20.2,"Type":"Angle Unequal","Description":"8 X 6 X 7/16 Angle"},{"StandardName":"L 8 X 6 X 7/8","SurfaceArea":2.333,"lbsperft":39.1,"Type":"Angle Unequal","Description":"8 X 6 X 7/8 Angle"},{"StandardName":"L 8 X 6 X 9/16","SurfaceArea":2.333,"lbsperft":25.7,"Type":"Angle Unequal","Description":"8 X 6 X 9/16 Angle"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Angle-Unequal.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvQW5nbGUtVW5lcXVhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU08sWUFBVCxHQUF3QjtBQUV0QixzQkFDRSw4REFBQyxnREFBRDtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsMkJBQ0ksOERBQUMsOERBQUQ7QUFBTyxhQUFPLE1BQWQ7QUFBZSxjQUFRLE1BQXZCO0FBQXdCLFdBQUssTUFBN0I7QUFBOEIsYUFBTyxFQUFDLE1BQXRDO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFBLGtDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkEsZUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQSxlQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpBLGVBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBVUk7QUFBQSxrQkFFUUoseURBQUEsQ0FBc0JNLElBQUQsSUFBVTtBQUMzQiw4QkFDSTtBQUFBLG9DQUNJO0FBQUEsd0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQSx3QkFBS0QsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFBLHdCQUFLRixJQUFJLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISixlQUlJO0FBQUEsd0JBQUtILElBQUksQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKLGVBS0k7QUFBQSx3QkFBS0osSUFBSSxDQUFDSztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEo7QUFBQSxhQUFTTCxJQUFJLENBQUNDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQVNILFNBVkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEOztBQUVELGlFQUFlSCxZQUFmOzs7Ozs7Ozs7O0FDdkNBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0YWxib29rLy4vcGFnZXMvQW5nbGUtVW5lcXVhbC5qcyIsIndlYnBhY2s6Ly9tZXRhbGJvb2svZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL21ldGFsYm9vay9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovL21ldGFsYm9vay9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiIiwid2VicGFjazovL21ldGFsYm9vay9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQW5nbGVVbmVxdWFsRGF0YSBmcm9tICcuL2RhdGEvYW5nbGUtdW5lcXVhbC5qc29uJ1xyXG5pbXBvcnQgVGFibGUgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1RhYmxlJ1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmZ1bmN0aW9uIEFuZ2xlVW5lcXVhbCgpIHtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdyBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlN0YW5kYXJkIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlN1cmZhY2UgQXJlYTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+bGJzIHBlciBmdDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEFuZ2xlVW5lcXVhbERhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLlN0YW5kYXJkTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLlN0YW5kYXJkTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5TdXJmYWNlQXJlYX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5sYnNwZXJmdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5UeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLkRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5nbGVVbmVxdWFsOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQW5nbGVVbmVxdWFsRGF0YSIsIlRhYmxlIiwiUm93IiwiQ29sIiwiQW5nbGVVbmVxdWFsIiwibWFwIiwiaXRlbSIsIlN0YW5kYXJkTmFtZSIsIlN1cmZhY2VBcmVhIiwibGJzcGVyZnQiLCJUeXBlIiwiRGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9