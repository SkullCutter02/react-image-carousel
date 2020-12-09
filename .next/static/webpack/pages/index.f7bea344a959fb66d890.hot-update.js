webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/image-carousel-test/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HomePage = function HomePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(window.innerWidth),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  var height = \"300px\";\n  var width = \"500x\";\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.addEventListener(\"resize\", function () {\n      setWindowSize(window.innerWidth);\n      return function () {\n        window.removeEventListener(\"resize\", function () {\n          setWindowSize(window.innerWidth);\n        });\n      };\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(windowSize); // if (windowSize > 800) {\n    //   height = \"280px\";\n    //   width = \"500px\";\n    // }\n  }, [windowSize]);\n\n  var handleDragStart = function handleDragStart(e) {\n    return e.preventDefault();\n  };\n\n  var responsive = {\n    568: {\n      items: 1\n    },\n    1024: {\n      items: 2\n    }\n  };\n  var items = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: \"/Big%20Daddy.jpg\",\n    alt: \"Big Daddy\",\n    onDragStart: handleDragStart,\n    className: \"image-carousel\",\n    style: {\n      height: height,\n      width: width,\n      objectFit: \"cover\"\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: \"/Big%20Sister.jpg\",\n    alt: \"Big Sister\",\n    onDragStart: handleDragStart,\n    className: \"image-carousel\",\n    style: {\n      height: height,\n      width: width,\n      objectFit: \"cover\"\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: \"/Columbia.jpg\",\n    alt: \"Columbia\",\n    onDragStart: handleDragStart,\n    className: \"image-carousel\",\n    style: {\n      height: height,\n      width: width,\n      objectFit: \"cover\"\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, _this)];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3435844922\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        mouseTracking: true,\n        autoWidth: true,\n        autoHeight: true,\n        autoPlay: true,\n        autoPlayDirection: \"ltr\",\n        autoPlayInterval: 3500,\n        infinite: true,\n        items: items,\n        responsive: responsive\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3435844922\",\n      children: \"div.jsx-3435844922{width:70%;height:400px;margin:200px auto 0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2ltYWdlLWNhcm91c2VsLXRlc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VrQixBQUdxQixVQUNHLGFBQ08sb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2ltYWdlLWNhcm91c2VsLXRlc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5cbmltcG9ydCBcInJlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9hbGljZS1jYXJvdXNlbC5jc3NcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoKTtcblxuICBsZXQgaGVpZ2h0ID0gXCIzMDBweFwiO1xuICBsZXQgd2lkdGggPSBcIjUwMHhcIjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIHNldFdpbmRvd1NpemUod2luZG93LmlubmVyV2lkdGgpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgc2V0V2luZG93U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh3aW5kb3dTaXplKTtcblxuICAgIC8vIGlmICh3aW5kb3dTaXplID4gODAwKSB7XG4gICAgLy8gICBoZWlnaHQgPSBcIjI4MHB4XCI7XG4gICAgLy8gICB3aWR0aCA9IFwiNTAwcHhcIjtcbiAgICAvLyB9XG4gIH0sIFt3aW5kb3dTaXplXSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCByZXNwb25zaXZlID0ge1xuICAgIDU2ODogeyBpdGVtczogMSB9LFxuICAgIDEwMjQ6IHsgaXRlbXM6IDIgfSxcbiAgfTtcblxuICBjb25zdCBpdGVtcyA9IFtcbiAgICA8aW1nXG4gICAgICBzcmM9XCIvQmlnJTIwRGFkZHkuanBnXCJcbiAgICAgIGFsdD1cIkJpZyBEYWRkeVwiXG4gICAgICBvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY2Fyb3VzZWxcIlxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbiAgICAvPixcbiAgICA8aW1nXG4gICAgICBzcmM9XCIvQmlnJTIwU2lzdGVyLmpwZ1wiXG4gICAgICBhbHQ9XCJCaWcgU2lzdGVyXCJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnU3RhcnR9XG4gICAgICBjbGFzc05hbWU9XCJpbWFnZS1jYXJvdXNlbFwiXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxuICAgIC8+LFxuICAgIDxpbWdcbiAgICAgIHNyYz1cIi9Db2x1bWJpYS5qcGdcIlxuICAgICAgYWx0PVwiQ29sdW1iaWFcIlxuICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgIGNsYXNzTmFtZT1cImltYWdlLWNhcm91c2VsXCJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGgsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG4gICAgLz4sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QWxpY2VDYXJvdXNlbFxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdcbiAgICAgICAgICBhdXRvV2lkdGhcbiAgICAgICAgICBhdXRvSGVpZ2h0XG4gICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICBhdXRvUGxheURpcmVjdGlvbj17XCJsdHJcIn1cbiAgICAgICAgICBhdXRvUGxheUludGVydmFsPXszNTAwfVxuICAgICAgICAgIGluZmluaXRlXG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBtYXJnaW46IDIwMHB4IGF1dG8gMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/image-carousel-test/pages/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HomePage, \"kEY5hRaF2hrRH5HRPOqX+neGfd0=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInVzZVN0YXRlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEcmFnU3RhcnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJvYmplY3RGaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUNDLE1BQU0sQ0FBQ0MsVUFBUixDQUR2QjtBQUFBLE1BQ2RDLFVBRGM7QUFBQSxNQUNGQyxhQURFOztBQUdyQixNQUFJQyxNQUFNLEdBQUcsT0FBYjtBQUNBLE1BQUlDLEtBQUssR0FBRyxNQUFaO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkTixVQUFNLENBQUNPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdENKLG1CQUFhLENBQUNILE1BQU0sQ0FBQ0MsVUFBUixDQUFiO0FBRUEsYUFBTyxZQUFNO0FBQ1hELGNBQU0sQ0FBQ1EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsWUFBTTtBQUN6Q0wsdUJBQWEsQ0FBQ0gsTUFBTSxDQUFDQyxVQUFSLENBQWI7QUFDRCxTQUZEO0FBR0QsT0FKRDtBQUtELEtBUkQ7QUFTRCxHQVZRLENBQVQ7QUFZQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2RHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixVQUFaLEVBRGMsQ0FHZDtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBUFEsRUFPTixDQUFDQSxVQUFELENBUE0sQ0FBVDs7QUFTQSxNQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLGNBQUYsRUFBUDtBQUFBLEdBQXhCOztBQUVBLE1BQU1DLFVBQVUsR0FBRztBQUNqQixTQUFLO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBRFk7QUFFakIsVUFBTTtBQUFFQSxXQUFLLEVBQUU7QUFBVDtBQUZXLEdBQW5CO0FBS0EsTUFBTUEsS0FBSyxHQUFHLGNBQ1o7QUFDRSxPQUFHLEVBQUMsa0JBRE47QUFFRSxPQUFHLEVBQUMsV0FGTjtBQUdFLGVBQVcsRUFBRUosZUFIZjtBQUlFLGFBQVMsRUFBQyxnQkFKWjtBQUtFLFNBQUssRUFBRTtBQUFFUCxZQUFNLEVBQUVBLE1BQVY7QUFBa0JDLFdBQUssRUFBRUEsS0FBekI7QUFBZ0NXLGVBQVMsRUFBRTtBQUEzQztBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWSxlQVFaO0FBQ0UsT0FBRyxFQUFDLG1CQUROO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFHRSxlQUFXLEVBQUVMLGVBSGY7QUFJRSxhQUFTLEVBQUMsZ0JBSlo7QUFLRSxTQUFLLEVBQUU7QUFBRVAsWUFBTSxFQUFFQSxNQUFWO0FBQWtCQyxXQUFLLEVBQUVBLEtBQXpCO0FBQWdDVyxlQUFTLEVBQUU7QUFBM0M7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUlksZUFlWjtBQUNFLE9BQUcsRUFBQyxlQUROO0FBRUUsT0FBRyxFQUFDLFVBRk47QUFHRSxlQUFXLEVBQUVMLGVBSGY7QUFJRSxhQUFTLEVBQUMsZ0JBSlo7QUFLRSxTQUFLLEVBQUU7QUFBRVAsWUFBTSxFQUFFQSxNQUFWO0FBQWtCQyxXQUFLLEVBQUVBLEtBQXpCO0FBQWdDVyxlQUFTLEVBQUU7QUFBM0M7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBZlksQ0FBZDtBQXdCQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBO0FBQUEsNkJBQ0UscUVBQUMsMkRBQUQ7QUFDRSxxQkFBYSxNQURmO0FBRUUsaUJBQVMsTUFGWDtBQUdFLGtCQUFVLE1BSFo7QUFJRSxnQkFBUSxNQUpWO0FBS0UseUJBQWlCLEVBQUUsS0FMckI7QUFNRSx3QkFBZ0IsRUFBRSxJQU5wQjtBQU9FLGdCQUFRLE1BUFY7QUFRRSxhQUFLLEVBQUVELEtBUlQ7QUFTRSxrQkFBVSxFQUFFRDtBQVRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0FuRkQ7O0dBQU1oQixROztLQUFBQSxRO0FBcUZTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiO1xuXG5pbXBvcnQgXCJyZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG5cbiAgbGV0IGhlaWdodCA9IFwiMzAwcHhcIjtcbiAgbGV0IHdpZHRoID0gXCI1MDB4XCI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICAgIHNldFdpbmRvd1NpemUod2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cod2luZG93U2l6ZSk7XG5cbiAgICAvLyBpZiAod2luZG93U2l6ZSA+IDgwMCkge1xuICAgIC8vICAgaGVpZ2h0ID0gXCIyODBweFwiO1xuICAgIC8vICAgd2lkdGggPSBcIjUwMHB4XCI7XG4gICAgLy8gfVxuICB9LCBbd2luZG93U2l6ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICA1Njg6IHsgaXRlbXM6IDEgfSxcbiAgICAxMDI0OiB7IGl0ZW1zOiAyIH0sXG4gIH07XG5cbiAgY29uc3QgaXRlbXMgPSBbXG4gICAgPGltZ1xuICAgICAgc3JjPVwiL0JpZyUyMERhZGR5LmpwZ1wiXG4gICAgICBhbHQ9XCJCaWcgRGFkZHlcIlxuICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgIGNsYXNzTmFtZT1cImltYWdlLWNhcm91c2VsXCJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGgsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG4gICAgLz4sXG4gICAgPGltZ1xuICAgICAgc3JjPVwiL0JpZyUyMFNpc3Rlci5qcGdcIlxuICAgICAgYWx0PVwiQmlnIFNpc3RlclwiXG4gICAgICBvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY2Fyb3VzZWxcIlxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbiAgICAvPixcbiAgICA8aW1nXG4gICAgICBzcmM9XCIvQ29sdW1iaWEuanBnXCJcbiAgICAgIGFsdD1cIkNvbHVtYmlhXCJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnU3RhcnR9XG4gICAgICBjbGFzc05hbWU9XCJpbWFnZS1jYXJvdXNlbFwiXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxuICAgIC8+LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgICAgICBtb3VzZVRyYWNraW5nXG4gICAgICAgICAgYXV0b1dpZHRoXG4gICAgICAgICAgYXV0b0hlaWdodFxuICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgYXV0b1BsYXlEaXJlY3Rpb249e1wibHRyXCJ9XG4gICAgICAgICAgYXV0b1BsYXlJbnRlcnZhbD17MzUwMH1cbiAgICAgICAgICBpbmZpbml0ZVxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAyMDBweCBhdXRvIDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})