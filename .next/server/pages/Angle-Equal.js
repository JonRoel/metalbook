"use strict";
(() => {
var exports = {};
exports.id = "pages/Angle-Equal";
exports.ids = ["pages/Angle-Equal"];
exports.modules = {

/***/ "./pages/Angle-Equal.js":
/*!******************************!*\
  !*** ./pages/Angle-Equal.js ***!
  \******************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\CAD1\\SampleApps\\metalbook\\pages\\Angle-Equal.js";







function AngleEqual() {
  const {
    0: items,
    1: setItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: isLoaded,
    1: setIsLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetch("./data/angle-equal.json").then(res => res.json()).then(result => {
      setIsLoaded(true);
      setItems(result);
      console.log({
        items
      });
    }, error => {
      setIsLoaded(true);
      setError(error);
    });
  }, []);

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: ["Error: ", error.message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }, this);
  } else if (!isLoaded) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
      className: "table-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2___default()), {
        striped: true,
        bordered: true,
        hover: true,
        variant: "dark",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
              children: "Standard Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
              children: "Surface Area"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
              children: "lbs per ft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
              children: "Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tbody", {
          children: items.map(items => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                children: items.StandardName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                children: items.SurfaceArea
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                children: items.LbsPerFt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                children: items.Type
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                children: items.Description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, this)]
            }, items.StandardName, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(AngleEqual));

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/Angle-Equal.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBOEJDO0FBQ0osRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWVqQix1REFBVSxDQUFDQyxVQUFELENBQXpCOzs7Ozs7Ozs7O0FDcEdBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRhbGJvb2svLi9wYWdlcy9BbmdsZS1FcXVhbC5qcyIsIndlYnBhY2s6Ly9tZXRhbGJvb2svZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21ldGFsYm9vay9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWV0YWxib29rL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vbWV0YWxib29rL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL1RhYmxlXCIiLCJ3ZWJwYWNrOi8vbWV0YWxib29rL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbmdsZUVxdWFsRGF0YSBmcm9tICcuL2RhdGEvYW5nbGUtZXF1YWwuanNvbic7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC1ib290c3RyYXAvVGFibGUnXHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBBbmdsZUVxdWFsKCkge1xyXG4gICAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCIuL2RhdGEvYW5nbGUtZXF1YWwuanNvblwiKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldEl0ZW1zKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtpdGVtc30pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIFxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgIH0gZWxzZSBpZiAoIWlzTG9hZGVkKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlN0YW5kYXJkIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlN1cmZhY2UgQXJlYTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+bGJzIHBlciBmdDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW1zLlN0YW5kYXJkTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtcy5TdGFuZGFyZE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW1zLlN1cmZhY2VBcmVhfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtcy5MYnNQZXJGdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbXMuVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbXMuRGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICA8L1Jvdz5cclxuICAgICk7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPFJvdyBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbi8vICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuLy8gICAgICAgICAgICAgPHRoZWFkPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRoPlN0YW5kYXJkIE5hbWU8L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRoPlN1cmZhY2UgQXJlYTwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICA8dGg+bGJzIHBlciBmdDwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgPC90aGVhZD5cclxuLy8gICAgICAgICAgICAgPHRib2R5PlxyXG4vLyAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIEFuZ2xlRXF1YWxEYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aXRlbS5TdGFuZGFyZE5hbWV9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5TdGFuZGFyZE5hbWV9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uU3VyZmFjZUFyZWF9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uTGJzUGVyRnR9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uVHlwZX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5EZXNjcmlwdGlvbn08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIDwvdGJvZHk+XHJcbi8vICAgICAgICAgPC9UYWJsZT5cclxuLy8gICAgIDwvUm93PlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFuZ2xlRXF1YWwpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQW5nbGVFcXVhbERhdGEiLCJUYWJsZSIsIlJvdyIsIkNvbCIsIndpdGhSb3V0ZXIiLCJBbmdsZUVxdWFsIiwiaXRlbXMiLCJzZXRJdGVtcyIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibWFwIiwiU3RhbmRhcmROYW1lIiwiU3VyZmFjZUFyZWEiLCJMYnNQZXJGdCIsIlR5cGUiLCJEZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=