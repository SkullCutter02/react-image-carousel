module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-alice-carousel/lib/alice-carousel.css":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/alice-carousel.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-alice-carousel/lib/alice-carousel.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel */ \"react-alice-carousel\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/image-carousel-test/pages/index.js\";\n\n\n\n\n\nconst HomePage = () => {\n  const {\n    0: windowSize,\n    1: setWindowSize\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])();\n  let height = \"320px\";\n  let width = \"500x\";\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    setWindowSize(window.innerWidth);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    window.addEventListener(\"resize\", () => {\n      setWindowSize(window.innerWidth);\n      return () => {\n        window.removeEventListener(\"resize\", () => {\n          setWindowSize(window.innerWidth);\n        });\n      };\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    // console.log(windowSize);\n    const images = Array.from(document.getElementsByClassName(\"image-carousel\"));\n\n    if (windowSize < 550) {\n      images.map(image => image.style.height = \"200px\");\n    } else if (windowSize < 700) {\n      images.map(image => image.style.height = \"250px\");\n    } else if (windowSize > 700) {\n      images.map(image => image.style.height = \"320px\");\n    }\n  }, [windowSize]);\n\n  const handleDragStart = e => e.preventDefault();\n\n  const responsive = {\n    568: {\n      items: 1\n    },\n    1024: {\n      items: 2\n    }\n  };\n  const items = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: \"/Big%20Daddy.jpg\",\n    alt: \"Big Daddy\",\n    onDragStart: handleDragStart,\n    className: \"image-carousel\",\n    style: {\n      height: height,\n      width: width,\n      objectFit: \"cover\"\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: \"/Big%20Sister.jpg\",\n    alt: \"Big Sister\",\n    onDragStart: handleDragStart,\n    className: \"image-carousel\",\n    style: {\n      height: height,\n      width: width,\n      objectFit: \"cover\"\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: \"/Columbia.jpg\",\n    alt: \"Columbia\",\n    onDragStart: handleDragStart,\n    className: \"image-carousel\",\n    style: {\n      height: height,\n      width: width,\n      objectFit: \"cover\"\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, undefined)];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-413180559\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        mouseTracking: true,\n        autoWidth: true,\n        autoHeight: true,\n        autoPlay: true,\n        autoPlayDirection: \"ltr\",\n        autoPlayInterval: 3000,\n        infinite: true,\n        items: items,\n        responsive: responsive\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"413180559\",\n      children: \"div.jsx-413180559{width:85%;height:400px;margin:200px auto 0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2ltYWdlLWNhcm91c2VsLXRlc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZrQixBQUdxQixVQUNHLGFBQ08sb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2ltYWdlLWNhcm91c2VsLXRlc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5cbmltcG9ydCBcInJlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9hbGljZS1jYXJvdXNlbC5jc3NcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKCk7XG5cbiAgbGV0IGhlaWdodCA9IFwiMzIwcHhcIjtcbiAgbGV0IHdpZHRoID0gXCI1MDB4XCI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgc2V0V2luZG93U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvd1NpemUpO1xuICAgIGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW1hZ2UtY2Fyb3VzZWxcIilcbiAgICApO1xuXG4gICAgaWYgKHdpbmRvd1NpemUgPCA1NTApIHtcbiAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiAoaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCIyMDBweFwiKSk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3dTaXplIDwgNzAwKSB7XG4gICAgICBpbWFnZXMubWFwKChpbWFnZSkgPT4gKGltYWdlLnN0eWxlLmhlaWdodCA9IFwiMjUwcHhcIikpO1xuICAgIH0gZWxzZSBpZiAod2luZG93U2l6ZSA+IDcwMCkge1xuICAgICAgaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChpbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjMyMHB4XCIpKTtcbiAgICB9XG4gIH0sIFt3aW5kb3dTaXplXSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCByZXNwb25zaXZlID0ge1xuICAgIDU2ODogeyBpdGVtczogMSB9LFxuICAgIDEwMjQ6IHsgaXRlbXM6IDIgfSxcbiAgfTtcblxuICBjb25zdCBpdGVtcyA9IFtcbiAgICA8aW1nXG4gICAgICBzcmM9XCIvQmlnJTIwRGFkZHkuanBnXCJcbiAgICAgIGFsdD1cIkJpZyBEYWRkeVwiXG4gICAgICBvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY2Fyb3VzZWxcIlxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbiAgICAvPixcbiAgICA8aW1nXG4gICAgICBzcmM9XCIvQmlnJTIwU2lzdGVyLmpwZ1wiXG4gICAgICBhbHQ9XCJCaWcgU2lzdGVyXCJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnU3RhcnR9XG4gICAgICBjbGFzc05hbWU9XCJpbWFnZS1jYXJvdXNlbFwiXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxuICAgIC8+LFxuICAgIDxpbWdcbiAgICAgIHNyYz1cIi9Db2x1bWJpYS5qcGdcIlxuICAgICAgYWx0PVwiQ29sdW1iaWFcIlxuICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgIGNsYXNzTmFtZT1cImltYWdlLWNhcm91c2VsXCJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGgsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG4gICAgLz4sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QWxpY2VDYXJvdXNlbFxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdcbiAgICAgICAgICBhdXRvV2lkdGhcbiAgICAgICAgICBhdXRvSGVpZ2h0XG4gICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICBhdXRvUGxheURpcmVjdGlvbj17XCJsdHJcIn1cbiAgICAgICAgICBhdXRvUGxheUludGVydmFsPXszMDAwfVxuICAgICAgICAgIGluZmluaXRlXG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBtYXJnaW46IDIwMHB4IGF1dG8gMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/image-carousel-test/pages/index.js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImhlaWdodCIsIndpZHRoIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW1hZ2VzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibWFwIiwiaW1hZ2UiLCJzdHlsZSIsImhhbmRsZURyYWdTdGFydCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNpdmUiLCJpdGVtcyIsIm9iamVjdEZpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQyxzREFBUSxFQUE1QztBQUVBLE1BQUlDLE1BQU0sR0FBRyxPQUFiO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLE1BQVo7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RKLGlCQUFhLENBQUNLLE1BQU0sQ0FBQ0MsVUFBUixDQUFiO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBRix5REFBUyxDQUFDLE1BQU07QUFDZEMsVUFBTSxDQUFDRSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxNQUFNO0FBQ3RDUCxtQkFBYSxDQUFDSyxNQUFNLENBQUNDLFVBQVIsQ0FBYjtBQUVBLGFBQU8sTUFBTTtBQUNYRCxjQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLE1BQU07QUFDekNSLHVCQUFhLENBQUNLLE1BQU0sQ0FBQ0MsVUFBUixDQUFiO0FBQ0QsU0FGRDtBQUdELE9BSkQ7QUFLRCxLQVJEO0FBU0QsR0FWUSxDQUFUO0FBWUFGLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0EsVUFBTUssTUFBTSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FDYkMsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxnQkFBaEMsQ0FEYSxDQUFmOztBQUlBLFFBQUlkLFVBQVUsR0FBRyxHQUFqQixFQUFzQjtBQUNwQlUsWUFBTSxDQUFDSyxHQUFQLENBQVlDLEtBQUQsSUFBWUEsS0FBSyxDQUFDQyxLQUFOLENBQVlkLE1BQVosR0FBcUIsT0FBNUM7QUFDRCxLQUZELE1BRU8sSUFBSUgsVUFBVSxHQUFHLEdBQWpCLEVBQXNCO0FBQzNCVSxZQUFNLENBQUNLLEdBQVAsQ0FBWUMsS0FBRCxJQUFZQSxLQUFLLENBQUNDLEtBQU4sQ0FBWWQsTUFBWixHQUFxQixPQUE1QztBQUNELEtBRk0sTUFFQSxJQUFJSCxVQUFVLEdBQUcsR0FBakIsRUFBc0I7QUFDM0JVLFlBQU0sQ0FBQ0ssR0FBUCxDQUFZQyxLQUFELElBQVlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZZCxNQUFaLEdBQXFCLE9BQTVDO0FBQ0Q7QUFDRixHQWJRLEVBYU4sQ0FBQ0gsVUFBRCxDQWJNLENBQVQ7O0FBZUEsUUFBTWtCLGVBQWUsR0FBSUMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLGNBQUYsRUFBL0I7O0FBRUEsUUFBTUMsVUFBVSxHQUFHO0FBQ2pCLFNBQUs7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FEWTtBQUVqQixVQUFNO0FBQUVBLFdBQUssRUFBRTtBQUFUO0FBRlcsR0FBbkI7QUFLQSxRQUFNQSxLQUFLLEdBQUcsY0FDWjtBQUNFLE9BQUcsRUFBQyxrQkFETjtBQUVFLE9BQUcsRUFBQyxXQUZOO0FBR0UsZUFBVyxFQUFFSixlQUhmO0FBSUUsYUFBUyxFQUFDLGdCQUpaO0FBS0UsU0FBSyxFQUFFO0FBQUVmLFlBQU0sRUFBRUEsTUFBVjtBQUFrQkMsV0FBSyxFQUFFQSxLQUF6QjtBQUFnQ21CLGVBQVMsRUFBRTtBQUEzQztBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWSxlQVFaO0FBQ0UsT0FBRyxFQUFDLG1CQUROO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFHRSxlQUFXLEVBQUVMLGVBSGY7QUFJRSxhQUFTLEVBQUMsZ0JBSlo7QUFLRSxTQUFLLEVBQUU7QUFBRWYsWUFBTSxFQUFFQSxNQUFWO0FBQWtCQyxXQUFLLEVBQUVBLEtBQXpCO0FBQWdDbUIsZUFBUyxFQUFFO0FBQTNDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJZLGVBZVo7QUFDRSxPQUFHLEVBQUMsZUFETjtBQUVFLE9BQUcsRUFBQyxVQUZOO0FBR0UsZUFBVyxFQUFFTCxlQUhmO0FBSUUsYUFBUyxFQUFDLGdCQUpaO0FBS0UsU0FBSyxFQUFFO0FBQUVmLFlBQU0sRUFBRUEsTUFBVjtBQUFrQkMsV0FBSyxFQUFFQSxLQUF6QjtBQUFnQ21CLGVBQVMsRUFBRTtBQUEzQztBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmWSxDQUFkO0FBd0JBLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUE7QUFBQSw2QkFDRSxxRUFBQywyREFBRDtBQUNFLHFCQUFhLE1BRGY7QUFFRSxpQkFBUyxNQUZYO0FBR0Usa0JBQVUsTUFIWjtBQUlFLGdCQUFRLE1BSlY7QUFLRSx5QkFBaUIsRUFBRSxLQUxyQjtBQU1FLHdCQUFnQixFQUFFLElBTnBCO0FBT0UsZ0JBQVEsTUFQVjtBQVFFLGFBQUssRUFBRUQsS0FSVDtBQVNFLGtCQUFVLEVBQUVEO0FBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsQ0E3RkQ7O0FBK0ZldEIsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tIFwicmVhY3QtYWxpY2UtY2Fyb3VzZWxcIjtcblxuaW1wb3J0IFwicmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2FsaWNlLWNhcm91c2VsLmNzc1wiO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoKTtcblxuICBsZXQgaGVpZ2h0ID0gXCIzMjBweFwiO1xuICBsZXQgd2lkdGggPSBcIjUwMHhcIjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd1NpemUod2luZG93LmlubmVyV2lkdGgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICAgIHNldFdpbmRvd1NpemUod2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cod2luZG93U2l6ZSk7XG4gICAgY29uc3QgaW1hZ2VzID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbWFnZS1jYXJvdXNlbFwiKVxuICAgICk7XG5cbiAgICBpZiAod2luZG93U2l6ZSA8IDU1MCkge1xuICAgICAgaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChpbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjIwMHB4XCIpKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvd1NpemUgPCA3MDApIHtcbiAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiAoaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCIyNTBweFwiKSk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3dTaXplID4gNzAwKSB7XG4gICAgICBpbWFnZXMubWFwKChpbWFnZSkgPT4gKGltYWdlLnN0eWxlLmhlaWdodCA9IFwiMzIwcHhcIikpO1xuICAgIH1cbiAgfSwgW3dpbmRvd1NpemVdKTtcblxuICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gICAgNTY4OiB7IGl0ZW1zOiAxIH0sXG4gICAgMTAyNDogeyBpdGVtczogMiB9LFxuICB9O1xuXG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIDxpbWdcbiAgICAgIHNyYz1cIi9CaWclMjBEYWRkeS5qcGdcIlxuICAgICAgYWx0PVwiQmlnIERhZGR5XCJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnU3RhcnR9XG4gICAgICBjbGFzc05hbWU9XCJpbWFnZS1jYXJvdXNlbFwiXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxuICAgIC8+LFxuICAgIDxpbWdcbiAgICAgIHNyYz1cIi9CaWclMjBTaXN0ZXIuanBnXCJcbiAgICAgIGFsdD1cIkJpZyBTaXN0ZXJcIlxuICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgIGNsYXNzTmFtZT1cImltYWdlLWNhcm91c2VsXCJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGgsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG4gICAgLz4sXG4gICAgPGltZ1xuICAgICAgc3JjPVwiL0NvbHVtYmlhLmpwZ1wiXG4gICAgICBhbHQ9XCJDb2x1bWJpYVwiXG4gICAgICBvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY2Fyb3VzZWxcIlxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbiAgICAvPixcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBbGljZUNhcm91c2VsXG4gICAgICAgICAgbW91c2VUcmFja2luZ1xuICAgICAgICAgIGF1dG9XaWR0aFxuICAgICAgICAgIGF1dG9IZWlnaHRcbiAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgIGF1dG9QbGF5RGlyZWN0aW9uPXtcImx0clwifVxuICAgICAgICAgIGF1dG9QbGF5SW50ZXJ2YWw9ezMwMDB9XG4gICAgICAgICAgaW5maW5pdGVcbiAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMjAwcHggYXV0byAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-alice-carousel":
/*!***************************************!*\
  !*** external "react-alice-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-alice-carousel\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiP2Q2NGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtYWxpY2UtY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-alice-carousel\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });