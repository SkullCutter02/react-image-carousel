webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/image-carousel-test/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ImageCarousel = function ImageCarousel(_ref) {\n  _s();\n\n  var items = _ref.items;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  var height = \"320px\";\n  var width = \"500x\";\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setWindowSize(window.innerWidth);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.addEventListener(\"resize\", function () {\n      setWindowSize(window.innerWidth);\n      return function () {\n        window.removeEventListener(\"resize\", function () {\n          setWindowSize(window.innerWidth);\n        });\n      };\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // console.log(windowSize);\n    var images = Array.from(document.getElementsByClassName(\"image-carousel\"));\n\n    if (windowSize < 550) {\n      images.map(function (image) {\n        return image.style.height = \"200px\";\n      });\n    } else if (windowSize < 700) {\n      images.map(function (image) {\n        return image.style.height = \"250px\";\n      });\n    } else if (windowSize > 700) {\n      images.map(function (image) {\n        return image.style.height = \"320px\";\n      });\n    }\n  }, [windowSize]);\n\n  var handleDragStart = function handleDragStart(e) {\n    return e.preventDefault();\n  };\n\n  var responsive = {\n    568: {\n      items: 1\n    },\n    1024: {\n      items: 2\n    }\n  }; // const items = [\n  //   <img\n  //     src=\"/Big%20Daddy.jpg\"\n  //     alt=\"Big Daddy\"\n  //     onDragStart={handleDragStart}\n  //     className=\"image-carousel\"\n  //     style={{ height: height, width: width, objectFit: \"cover\" }}\n  //   />,\n  //   <img\n  //     src=\"/Big%20Sister.jpg\"\n  //     alt=\"Big Sister\"\n  //     onDragStart={handleDragStart}\n  //     className=\"image-carousel\"\n  //     style={{ height: height, width: width, objectFit: \"cover\" }}\n  //   />,\n  //   <img\n  //     src=\"/Columbia.jpg\"\n  //     alt=\"Columbia\"\n  //     onDragStart={handleDragStart}\n  //     className=\"image-carousel\"\n  //     style={{ height: height, width: width, objectFit: \"cover\" }}\n  //   />,\n  // ];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-2262873894\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        mouseTracking: true,\n        autoWidth: true,\n        autoHeight: true,\n        autoPlay: true,\n        autoPlayDirection: \"ltr\",\n        autoPlayInterval: 3000,\n        infinite: true,\n        items: items,\n        responsive: responsive\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2262873894\",\n      children: \"div.jsx-2262873894{width:75%;height:400px;margin:200px auto 0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2ltYWdlLWNhcm91c2VsLXRlc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZrQixBQUdxQixVQUNHLGFBQ08sb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2ltYWdlLWNhcm91c2VsLXRlc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5cbmltcG9ydCBcInJlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9hbGljZS1jYXJvdXNlbC5jc3NcIjtcblxuY29uc3QgSW1hZ2VDYXJvdXNlbCA9ICh7IGl0ZW1zIH0pID0+IHtcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoKTtcblxuICBsZXQgaGVpZ2h0ID0gXCIzMjBweFwiO1xuICBsZXQgd2lkdGggPSBcIjUwMHhcIjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd1NpemUod2luZG93LmlubmVyV2lkdGgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICAgIHNldFdpbmRvd1NpemUod2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cod2luZG93U2l6ZSk7XG4gICAgY29uc3QgaW1hZ2VzID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbWFnZS1jYXJvdXNlbFwiKVxuICAgICk7XG5cbiAgICBpZiAod2luZG93U2l6ZSA8IDU1MCkge1xuICAgICAgaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChpbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjIwMHB4XCIpKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvd1NpemUgPCA3MDApIHtcbiAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiAoaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCIyNTBweFwiKSk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3dTaXplID4gNzAwKSB7XG4gICAgICBpbWFnZXMubWFwKChpbWFnZSkgPT4gKGltYWdlLnN0eWxlLmhlaWdodCA9IFwiMzIwcHhcIikpO1xuICAgIH1cbiAgfSwgW3dpbmRvd1NpemVdKTtcblxuICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gICAgNTY4OiB7IGl0ZW1zOiAxIH0sXG4gICAgMTAyNDogeyBpdGVtczogMiB9LFxuICB9O1xuXG4gIC8vIGNvbnN0IGl0ZW1zID0gW1xuICAvLyAgIDxpbWdcbiAgLy8gICAgIHNyYz1cIi9CaWclMjBEYWRkeS5qcGdcIlxuICAvLyAgICAgYWx0PVwiQmlnIERhZGR5XCJcbiAgLy8gICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnU3RhcnR9XG4gIC8vICAgICBjbGFzc05hbWU9XCJpbWFnZS1jYXJvdXNlbFwiXG4gIC8vICAgICBzdHlsZT17eyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxuICAvLyAgIC8+LFxuICAvLyAgIDxpbWdcbiAgLy8gICAgIHNyYz1cIi9CaWclMjBTaXN0ZXIuanBnXCJcbiAgLy8gICAgIGFsdD1cIkJpZyBTaXN0ZXJcIlxuICAvLyAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgLy8gICAgIGNsYXNzTmFtZT1cImltYWdlLWNhcm91c2VsXCJcbiAgLy8gICAgIHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGgsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG4gIC8vICAgLz4sXG4gIC8vICAgPGltZ1xuICAvLyAgICAgc3JjPVwiL0NvbHVtYmlhLmpwZ1wiXG4gIC8vICAgICBhbHQ9XCJDb2x1bWJpYVwiXG4gIC8vICAgICBvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxuICAvLyAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY2Fyb3VzZWxcIlxuICAvLyAgICAgc3R5bGU9e3sgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbiAgLy8gICAvPixcbiAgLy8gXTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBbGljZUNhcm91c2VsXG4gICAgICAgICAgbW91c2VUcmFja2luZ1xuICAgICAgICAgIGF1dG9XaWR0aFxuICAgICAgICAgIGF1dG9IZWlnaHRcbiAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgIGF1dG9QbGF5RGlyZWN0aW9uPXtcImx0clwifVxuICAgICAgICAgIGF1dG9QbGF5SW50ZXJ2YWw9ezMwMDB9XG4gICAgICAgICAgaW5maW5pdGVcbiAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMjAwcHggYXV0byAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2Fyb3VzZWw7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/image-carousel-test/pages/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImageCarousel, \"lpkvN1vVU2OjWjKqOgejQox2LLY=\");\n\n_c = ImageCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbWFnZUNhcm91c2VsIiwiaXRlbXMiLCJ1c2VTdGF0ZSIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbWFnZXMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtYXAiLCJpbWFnZSIsInN0eWxlIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2l2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDQ0Msc0RBQVEsRUFEVDtBQUFBLE1BQzVCQyxVQUQ0QjtBQUFBLE1BQ2hCQyxhQURnQjs7QUFHbkMsTUFBSUMsTUFBTSxHQUFHLE9BQWI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsTUFBWjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEgsaUJBQWEsQ0FBQ0ksTUFBTSxDQUFDQyxVQUFSLENBQWI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFGLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdENOLG1CQUFhLENBQUNJLE1BQU0sQ0FBQ0MsVUFBUixDQUFiO0FBRUEsYUFBTyxZQUFNO0FBQ1hELGNBQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsWUFBTTtBQUN6Q1AsdUJBQWEsQ0FBQ0ksTUFBTSxDQUFDQyxVQUFSLENBQWI7QUFDRCxTQUZEO0FBR0QsT0FKRDtBQUtELEtBUkQ7QUFTRCxHQVZRLENBQVQ7QUFZQUYseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQSxRQUFNSyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUNiQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLGdCQUFoQyxDQURhLENBQWY7O0FBSUEsUUFBSWIsVUFBVSxHQUFHLEdBQWpCLEVBQXNCO0FBQ3BCUyxZQUFNLENBQUNLLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsZUFBWUEsS0FBSyxDQUFDQyxLQUFOLENBQVlkLE1BQVosR0FBcUIsT0FBakM7QUFBQSxPQUFYO0FBQ0QsS0FGRCxNQUVPLElBQUlGLFVBQVUsR0FBRyxHQUFqQixFQUFzQjtBQUMzQlMsWUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQ0MsS0FBRDtBQUFBLGVBQVlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZZCxNQUFaLEdBQXFCLE9BQWpDO0FBQUEsT0FBWDtBQUNELEtBRk0sTUFFQSxJQUFJRixVQUFVLEdBQUcsR0FBakIsRUFBc0I7QUFDM0JTLFlBQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSxlQUFZQSxLQUFLLENBQUNDLEtBQU4sQ0FBWWQsTUFBWixHQUFxQixPQUFqQztBQUFBLE9BQVg7QUFDRDtBQUNGLEdBYlEsRUFhTixDQUFDRixVQUFELENBYk0sQ0FBVDs7QUFlQSxNQUFNaUIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxjQUFGLEVBQVA7QUFBQSxHQUF4Qjs7QUFFQSxNQUFNQyxVQUFVLEdBQUc7QUFDakIsU0FBSztBQUFFdEIsV0FBSyxFQUFFO0FBQVQsS0FEWTtBQUVqQixVQUFNO0FBQUVBLFdBQUssRUFBRTtBQUFUO0FBRlcsR0FBbkIsQ0F2Q21DLENBNENuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUE7QUFBQSw2QkFDRSxxRUFBQywyREFBRDtBQUNFLHFCQUFhLE1BRGY7QUFFRSxpQkFBUyxNQUZYO0FBR0Usa0JBQVUsTUFIWjtBQUlFLGdCQUFRLE1BSlY7QUFLRSx5QkFBaUIsRUFBRSxLQUxyQjtBQU1FLHdCQUFnQixFQUFFLElBTnBCO0FBT0UsZ0JBQVEsTUFQVjtBQVFFLGFBQUssRUFBRUEsS0FSVDtBQVNFLGtCQUFVLEVBQUVzQjtBQVRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0E3RkQ7O0dBQU12QixhOztLQUFBQSxhO0FBK0ZTQSw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiO1xuXG5pbXBvcnQgXCJyZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzXCI7XG5cbmNvbnN0IEltYWdlQ2Fyb3VzZWwgPSAoeyBpdGVtcyB9KSA9PiB7XG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKCk7XG5cbiAgbGV0IGhlaWdodCA9IFwiMzIwcHhcIjtcbiAgbGV0IHdpZHRoID0gXCI1MDB4XCI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgc2V0V2luZG93U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvd1NpemUpO1xuICAgIGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW1hZ2UtY2Fyb3VzZWxcIilcbiAgICApO1xuXG4gICAgaWYgKHdpbmRvd1NpemUgPCA1NTApIHtcbiAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiAoaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCIyMDBweFwiKSk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3dTaXplIDwgNzAwKSB7XG4gICAgICBpbWFnZXMubWFwKChpbWFnZSkgPT4gKGltYWdlLnN0eWxlLmhlaWdodCA9IFwiMjUwcHhcIikpO1xuICAgIH0gZWxzZSBpZiAod2luZG93U2l6ZSA+IDcwMCkge1xuICAgICAgaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChpbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjMyMHB4XCIpKTtcbiAgICB9XG4gIH0sIFt3aW5kb3dTaXplXSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCByZXNwb25zaXZlID0ge1xuICAgIDU2ODogeyBpdGVtczogMSB9LFxuICAgIDEwMjQ6IHsgaXRlbXM6IDIgfSxcbiAgfTtcblxuICAvLyBjb25zdCBpdGVtcyA9IFtcbiAgLy8gICA8aW1nXG4gIC8vICAgICBzcmM9XCIvQmlnJTIwRGFkZHkuanBnXCJcbiAgLy8gICAgIGFsdD1cIkJpZyBEYWRkeVwiXG4gIC8vICAgICBvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxuICAvLyAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY2Fyb3VzZWxcIlxuICAvLyAgICAgc3R5bGU9e3sgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbiAgLy8gICAvPixcbiAgLy8gICA8aW1nXG4gIC8vICAgICBzcmM9XCIvQmlnJTIwU2lzdGVyLmpwZ1wiXG4gIC8vICAgICBhbHQ9XCJCaWcgU2lzdGVyXCJcbiAgLy8gICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnU3RhcnR9XG4gIC8vICAgICBjbGFzc05hbWU9XCJpbWFnZS1jYXJvdXNlbFwiXG4gIC8vICAgICBzdHlsZT17eyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxuICAvLyAgIC8+LFxuICAvLyAgIDxpbWdcbiAgLy8gICAgIHNyYz1cIi9Db2x1bWJpYS5qcGdcIlxuICAvLyAgICAgYWx0PVwiQ29sdW1iaWFcIlxuICAvLyAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgLy8gICAgIGNsYXNzTmFtZT1cImltYWdlLWNhcm91c2VsXCJcbiAgLy8gICAgIHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGgsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG4gIC8vICAgLz4sXG4gIC8vIF07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QWxpY2VDYXJvdXNlbFxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdcbiAgICAgICAgICBhdXRvV2lkdGhcbiAgICAgICAgICBhdXRvSGVpZ2h0XG4gICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICBhdXRvUGxheURpcmVjdGlvbj17XCJsdHJcIn1cbiAgICAgICAgICBhdXRvUGxheUludGVydmFsPXszMDAwfVxuICAgICAgICAgIGluZmluaXRlXG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBtYXJnaW46IDIwMHB4IGF1dG8gMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})