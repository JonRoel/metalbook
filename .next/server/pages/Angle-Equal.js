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
/* harmony export */   "default": () => (/* binding */ AngleEqual)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_angle_equal_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/angle-equal.json */ "./pages/data/angle-equal.json");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\CAD1\\SampleApps\\metalbook\\pages\\Angle-Equal.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class AngleEqual extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();

    _defineProperty(this, "handleClick", event => {
      const id = event.target.id;
      this.setState({
        steelType: id
      }), function () {
        dataUrl();
      };
    });

    _defineProperty(this, "dataUrl", () => {
      if (this.state.steelType === 'Mild Steel') {
        this.setState({
          api: 'angle-equal.json'
        }), function () {
          this.useEffect();
        };
      } else if (this.state.steelType === 'Stainless Steel') {
        this.setState({
          api: 'ss-angle-equal.json'
        }), function () {
          this.useEffect();
        };
      }
    });

    this.state = {
      items: [],
      isLoaded: false,
      error: null,
      steelType: 'Mild Steel',
      api: 'angle-equal.json'
    };
    this.handleClick = this.handleClick.bind(this);
    this.dataUrl = this.dataUrl.bind(this);
  }

  componentDidMount() {
    fetch('/data/angle-equal.json').then(res => res.json()).then(result => {
      this.setState({
        isLoaded: true,
        items: result.items
      });
    }, error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  render() {
    const {
      error,
      isLoaded,
      items,
      steelType
    } = this.state;

    if (!isLoaded) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 12
      }, this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
        className: "table-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          "aria-label": "Basic example",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: this.handleClick,
            variant: "secondary",
            id: "Mild Steel",
            className: "steeltypebutton",
            children: "Mild Steel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: this.handleClick,
            variant: "secondary",
            id: "Stainless Steel",
            className: "steeltypebutton",
            children: "Stainless Steel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: this.handleClick,
            variant: "secondary",
            id: "Aluminum",
            className: "steeltypebutton",
            children: "Aluminum"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["this is my state checker: ", steelType]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Table, {
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
                lineNumber: 84,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                children: "Surface Area"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                children: "lbs per ft"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                children: "Type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tbody", {
            children: this.state.items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                children: item.StandardName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                children: item.SurfaceArea
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                children: item.LbsPerFt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                children: item.Type
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                children: item.Description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 25
              }, this)]
            }, item.StandardName, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 21
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this);
    }
  }

}

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBQSwwQkFBS0YsSUFBSSxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEosZUFJSTtBQUFBLDBCQUFLSCxJQUFJLENBQUNJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKSixlQUtJO0FBQUEsMEJBQUtKLElBQUksQ0FBQ0s7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKO0FBQUEsZUFBU0wsSUFBSSxDQUFDQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWdDRDtBQUNGOztBQWxHaUQ7Ozs7Ozs7Ozs7QUNQbEQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGFsYm9vay8uL3BhZ2VzL0FuZ2xlLUVxdWFsLmpzIiwid2VicGFjazovL21ldGFsYm9vay9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbWV0YWxib29rL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tZXRhbGJvb2svZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly9tZXRhbGJvb2svZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9tZXRhbGJvb2svZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgcmVmLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbmdsZUVxdWFsRGF0YSBmcm9tICcuL2RhdGEvYW5nbGUtZXF1YWwuanNvbic7XHJcbmltcG9ydCB7IFRhYmxlLCBCdXR0b25Hcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBmaW5kRE9NTm9kZSwgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZ2xlRXF1YWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIHN0ZWVsVHlwZTogJ01pbGQgU3RlZWwnLFxyXG4gICAgICAgICAgICBhcGk6ICdhbmdsZS1lcXVhbC5qc29uJyxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kYXRhVXJsID0gdGhpcy5kYXRhVXJsLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5pZDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGVlbFR5cGU6IGlkfSksXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVVybCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5kYXRhVXJsID0gKCkgPT4ge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5zdGVlbFR5cGUgPT09ICdNaWxkIFN0ZWVsJykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FwaTogJ2FuZ2xlLWVxdWFsLmpzb24nfSksXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlRWZmZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKHRoaXMuc3RhdGUuc3RlZWxUeXBlID09PSAnU3RhaW5sZXNzIFN0ZWVsJykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FwaTogJ3NzLWFuZ2xlLWVxdWFsLmpzb24nfSksXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlRWZmZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGZldGNoKCcvZGF0YS9hbmdsZS1lcXVhbC5qc29uJylcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgaXRlbXM6IHJlc3VsdC5pdGVtc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yLCBpc0xvYWRlZCwgaXRlbXMsIHN0ZWVsVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoIWlzTG9hZGVkKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPVwiQmFzaWMgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWQ9XCJNaWxkIFN0ZWVsXCIgY2xhc3NOYW1lPVwic3RlZWx0eXBlYnV0dG9uXCI+TWlsZCBTdGVlbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWQ9XCJTdGFpbmxlc3MgU3RlZWxcIiBjbGFzc05hbWU9XCJzdGVlbHR5cGVidXR0b25cIj5TdGFpbmxlc3MgU3RlZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gdmFyaWFudD1cInNlY29uZGFyeVwiIGlkPVwiQWx1bWludW1cIiBjbGFzc05hbWU9XCJzdGVlbHR5cGVidXR0b25cIj5BbHVtaW51bTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICA8cD50aGlzIGlzIG15IHN0YXRlIGNoZWNrZXI6IHtzdGVlbFR5cGV9PC9wPlxyXG4gICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+U3RhbmRhcmQgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+U3VyZmFjZSBBcmVhPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5sYnMgcGVyIGZ0PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLlN0YW5kYXJkTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5TdGFuZGFyZE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLlN1cmZhY2VBcmVhfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5MYnNQZXJGdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uRGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgIDwvUm93PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVmIiwiQ29tcG9uZW50IiwiQW5nbGVFcXVhbERhdGEiLCJUYWJsZSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwiUm93IiwiQ29sIiwid2l0aFJvdXRlciIsImZpbmRET01Ob2RlIiwicmVuZGVyIiwiQW5nbGVFcXVhbCIsImNvbnN0cnVjdG9yIiwiZXZlbnQiLCJpZCIsInRhcmdldCIsInNldFN0YXRlIiwic3RlZWxUeXBlIiwiZGF0YVVybCIsInN0YXRlIiwiYXBpIiwiaXRlbXMiLCJpc0xvYWRlZCIsImVycm9yIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwibWFwIiwiaXRlbSIsIlN0YW5kYXJkTmFtZSIsIlN1cmZhY2VBcmVhIiwiTGJzUGVyRnQiLCJUeXBlIiwiRGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9