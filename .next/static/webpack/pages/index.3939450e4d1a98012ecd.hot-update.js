webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Videos.js":
/*!******************************!*\
  !*** ./components/Videos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Videos; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var linkifyjs_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! linkifyjs/html */ \"./node_modules/linkifyjs/html.js\");\n/* harmony import */ var linkifyjs_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(linkifyjs_html__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/kevin/Desktop/Personal projects/firstStreet_assessment/components/Videos.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Videos(_ref) {\n  _s();\n\n  var description = _ref.description,\n      title = _ref.title,\n      thumbnailLarge = _ref.thumbnailLarge,\n      thumbnailMedium = _ref.thumbnailMedium,\n      thumbnailSmall = _ref.thumbnailSmall,\n      url = _ref.url;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      expand = _useState[0],\n      setExpand = _useState[1];\n\n  var playButton = '/assets/playbtn.png';\n\n  var toggleOpen = function toggleOpen() {\n    setExpand(!expand);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2190618108\", [expand ? \"100%\" : \"300px\", playButton]]]) + \" \" + \"videoContainer\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2190618108\", [expand ? \"100%\" : \"300px\", playButton]]]) + \" \" + \"row\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2190618108\", [expand ? \"100%\" : \"300px\", playButton]]]) + \" \" + \"column1\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2190618108\", [expand ? \"100%\" : \"300px\", playButton]]]) + \" \" + \"title\",\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 22\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            dangerouslySetInnerHTML: {\n              __html: linkifyjs_html__WEBPACK_IMPORTED_MODULE_3___default()(description)\n            },\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2190618108\", [expand ? \"100%\" : \"300px\", playButton]]]) + \" \" + \"content\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 22\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2190618108\", [expand ? \"100%\" : \"300px\", playButton]]]) + \" \" + \"column2\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: url,\n            target: \"_blank\",\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2190618108\", [expand ? \"100%\" : \"300px\", playButton]]]),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: thumbnailMedium,\n              alt: \"thumbnail\",\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"2190618108\", [expand ? \"100%\" : \"300px\", playButton]]]) + \" \" + \"videoImage\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 26\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        id: \"2190618108\",\n        dynamic: [expand ? \"100%\" : \"300px\", playButton],\n        children: \".videoContainer.__jsx-style-dynamic-selector{margin:20px 20px;max-height:\".concat(expand ? \"100%\" : \"300px\", \";overflow:hidden;box-shadow:rgba(0,0,0,0.05) 0px 6px 24px 0px,rgba(0,0,0,0.08) 0px 0px 0px 1px;}.videoImage.__jsx-style-dynamic-selector{object-fit:contain;width:100%;height:100%;}.toggle.__jsx-style-dynamic-selector{position:relative;}.row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;}.column1.__jsx-style-dynamic-selector{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex:2;-ms-flex:2;flex:2;}.column2.__jsx-style-dynamic-selector{padding:10px display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-bases:100%;-ms-flex-bases:100%;flex-bases:100%;-webkit-flex:1;-ms-flex:1;flex:1;}.title.__jsx-style-dynamic-selector{font-size:36px;line-height:36px;margin-bottom:20px;color:#4C4C51;}.content.__jsx-style-dynamic-selector{font-size:22px;line-height:28px;color:#4C4C51;}.overlay.__jsx-style-dynamic-selector{position:relative;display:inline-block;}.overlay.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:100%;height:100%;z-index:-1;}.playButton.__jsx-style-dynamic-selector::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:url(\").concat(playButton, \") no-repeat center;opacity:0;-webkit-transition:.5s ease;transition:.5s ease;}.playButton.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::before{opacity:1;}.overlay.__jsx-style-dynamic-selector::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(238,46,29,1) 0%,rgba(255,177,181,1) 35%);z-index:0;opacity:0;-webkit-transition:.5s ease;transition:.5s ease;}.overlay.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::before{opacity:0.5;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9EZXNrdG9wL1BlcnNvbmFsIHByb2plY3RzL2ZpcnN0U3RyZWV0X2Fzc2Vzc21lbnQvY29tcG9uZW50cy9WaWRlb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUN3QixBQUlzQyxBQU9DLEFBUUEsQUFJTCxBQU9BLEFBU0QsQUFRRyxBQU9BLEFBTUcsQUFPSSxBQVFmLEFBYUMsQUFLRyxBQVlDLFVBaEJsQixDQWJvQixBQWtCSSxDQVl0QixDQTNFaUIsRUFpQkksQUFPQSxFQWxEdUIsQ0FlNUMsQUF5Q3lCLENBakRWLEdBd0RBLElBNUJXLEdBcUNuQixBQWtCSSxDQWxGSyxFQW9DTyxBQVN4QixDQVdpQixHQVNWLEFBa0JJLEdBaENWLEdBbERBLEFBaUVXLEFBa0JJLEdBM0JBLENBWmYsS0FQRCxFQTZCYSxBQWtCSSxHQTFCaEIsQ0FqRW9CLFFBNENwQixBQThCOEQsQUFrQndCLFFBM0ZHLENBZ0JsRSxhQVFHLGlCQVNOLHVCQTBDVixVQUNVLE1BM0RELEVBMkVMLE1BM0ZkLElBNEZjLFNBMURILENBVlMsQUFxRUksb0JBakJ6QixZQXpDQyxHQWxCZSxXQUVmLEVBMkVBLHFCQXJFVSxpQ0FDViIsImZpbGUiOiIvVXNlcnMva2V2aW4vRGVza3RvcC9QZXJzb25hbCBwcm9qZWN0cy9maXJzdFN0cmVldF9hc3Nlc3NtZW50L2NvbXBvbmVudHMvVmlkZW9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGxpbmtpZnkgZnJvbSAnbGlua2lmeWpzL2h0bWwnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvcyh7ZGVzY3JpcHRpb24sIHRpdGxlLHRodW1ibmFpbExhcmdlLHRodW1ibmFpbE1lZGl1bSx0aHVtYm5haWxTbWFsbCx1cmx9KXtcbiAgICBjb25zdCBbZXhwYW5kLCBzZXRFeHBhbmRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcGxheUJ1dHRvbiA9ICcvYXNzZXRzL3BsYXlidG4ucG5nJ1xuXG4gICAgY29uc3QgdG9nZ2xlT3BlbiA9ICgpID0+e1xuICAgICAgICBzZXRFeHBhbmQoIWV4cGFuZClcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9Db250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6bGlua2lmeShkZXNjcmlwdGlvbikgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbjJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpZGVvSW1hZ2VcIiBzcmM9e3RodW1ibmFpbE1lZGl1bX0gYWx0PVwidGh1bWJuYWlsXCIgLz4gXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgLnZpZGVvQ29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogJHtleHBhbmQgPyBcIjEwMCVcIiA6IFwiMzAwcHhcIn07XG4gICAgICAgICAgICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudmlkZW9JbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDpjb250YWluO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICAudG9nZ2xle1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJvd3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb2x1bW4xe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OjI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmNvbHVtbjJ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHhcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2VzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAvLyBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QzRDNTFcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QzRDNTFcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3ZlcmxheXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm92ZXJsYXkgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgLnBsYXlCdXR0b246OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtwbGF5QnV0dG9ufSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBsYXlCdXR0b246aG92ZXI6IDpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5vdmVybGF5OjpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyMzgsNDYsMjksMSkgMCUsIHJnYmEoMjU1LDE3NywxODEsMSkgMzUlKTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdmVybGF5OmhvdmVyOjpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtleHBhbmQgPyA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGVcIiBvbkNsaWNrPXt0b2dnbGVPcGVufT5zaG93IGxlc3M8L3NwYW4+IDogPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlXCIgb25DbGljaz17dG9nZ2xlT3Blbn0+c2hvdyBtb3JlPC9zcGFuPn1cblxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbiJdfQ== */\\n/*@ sourceURL=/Users/kevin/Desktop/Personal projects/firstStreet_assessment/components/Videos.js */\")\n      }, void 0, false, void 0, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, this), expand ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"toggle\",\n      onClick: toggleOpen,\n      children: \"show less\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 19\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"toggle\",\n      onClick: toggleOpen,\n      children: \"show more\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 84\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Videos, \"V8NQrAFSLXwZu43JmcjJwSuHwmw=\");\n\n_c = Videos;\n\nvar _c;\n\n$RefreshReg$(_c, \"Videos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb3MuanM/MzQ5NiJdLCJuYW1lcyI6WyJWaWRlb3MiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwidGh1bWJuYWlsTGFyZ2UiLCJ0aHVtYm5haWxNZWRpdW0iLCJ0aHVtYm5haWxTbWFsbCIsInVybCIsInVzZVN0YXRlIiwiZXhwYW5kIiwic2V0RXhwYW5kIiwicGxheUJ1dHRvbiIsInRvZ2dsZU9wZW4iLCJfX2h0bWwiLCJsaW5raWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsTUFBVCxPQUF1RjtBQUFBOztBQUFBLE1BQXRFQyxXQUFzRSxRQUF0RUEsV0FBc0U7QUFBQSxNQUF6REMsS0FBeUQsUUFBekRBLEtBQXlEO0FBQUEsTUFBbkRDLGNBQW1ELFFBQW5EQSxjQUFtRDtBQUFBLE1BQXBDQyxlQUFvQyxRQUFwQ0EsZUFBb0M7QUFBQSxNQUFwQkMsY0FBb0IsUUFBcEJBLGNBQW9CO0FBQUEsTUFBTEMsR0FBSyxRQUFMQSxHQUFLOztBQUFBLGtCQUN0RUMsc0RBQVEsQ0FBQyxLQUFELENBRDhEO0FBQUEsTUFDM0ZDLE1BRDJGO0FBQUEsTUFDbkZDLFNBRG1GOztBQUVsRyxNQUFNQyxVQUFVLEdBQUcscUJBQW5COztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUs7QUFDcEJGLGFBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUEsNEJBQ0E7QUFBQSxrR0F3QjBCQSxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BeEI1QyxFQW9HMEJFLFVBcEcxQixhQUFlLGdCQUFmO0FBQUEsOEJBQ0k7QUFBQSxvR0F1QnNCRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BdkJ4QyxFQW1Hc0JFLFVBbkd0QixhQUFlLEtBQWY7QUFBQSxnQ0FFSTtBQUFBLHNHQXFCa0JGLE1BQU0sR0FBRyxNQUFILEdBQVksT0FyQnBDLEVBaUdrQkUsVUFqR2xCLGFBQWUsU0FBZjtBQUFBLGtDQUNLO0FBQUEsd0dBb0JhRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BcEIvQixFQWdHYUUsVUFoR2IsYUFBYyxPQUFkO0FBQUEsc0JBQXVCUjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURMLGVBRUs7QUFBeUIsbUNBQXVCLEVBQUU7QUFBQ1Usb0JBQU0sRUFBQ0MscURBQU8sQ0FBQ1osV0FBRDtBQUFmLGFBQWxEO0FBQUEsd0dBbUJhTyxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BbkIvQixFQStGYUUsVUEvRmIsYUFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBVUE7QUFBQSxzR0Fhc0JGLE1BQU0sR0FBRyxNQUFILEdBQVksT0FieEMsRUF5RnNCRSxVQXpGdEIsYUFBZSxTQUFmO0FBQUEsaUNBQ0E7QUFBRyxnQkFBSSxFQUFFSixHQUFUO0FBQWMsa0JBQU0sRUFBQyxRQUFyQjtBQUFBLHdHQVlzQkUsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQVp4QyxFQXdGc0JFLFVBeEZ0QjtBQUFBLG1DQUVhO0FBQTRCLGlCQUFHLEVBQUVOLGVBQWpDO0FBQWtELGlCQUFHLEVBQUMsV0FBdEQ7QUFBQSwwR0FVU0ksTUFBTSxHQUFHLE1BQUgsR0FBWSxPQVYzQixFQXNGU0UsVUF0RlQsYUFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUFBO0FBQUEsa0JBd0IwQkYsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQXhCNUMsRUFvRzBCRSxVQXBHMUI7QUFBQSxxR0F3QjBCRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BeEI1Qyx1aERBb0cwQkUsVUFwRzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsRUFrSUNGLE1BQU0sZ0JBQUc7QUFBTSxlQUFTLEVBQUMsUUFBaEI7QUFBeUIsYUFBTyxFQUFFRyxVQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILGdCQUFvRTtBQUFNLGVBQVMsRUFBQyxRQUFoQjtBQUF5QixhQUFPLEVBQUVBLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEkzRTtBQUFBLGtCQURKO0FBdUlIOztHQS9JdUJYLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBsaW5raWZ5IGZyb20gJ2xpbmtpZnlqcy9odG1sJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb3Moe2Rlc2NyaXB0aW9uLCB0aXRsZSx0aHVtYm5haWxMYXJnZSx0aHVtYm5haWxNZWRpdW0sdGh1bWJuYWlsU21hbGwsdXJsfSl7XG4gICAgY29uc3QgW2V4cGFuZCwgc2V0RXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHBsYXlCdXR0b24gPSAnL2Fzc2V0cy9wbGF5YnRuLnBuZydcblxuICAgIGNvbnN0IHRvZ2dsZU9wZW4gPSAoKSA9PntcbiAgICAgICAgc2V0RXhwYW5kKCFleHBhbmQpXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvQ29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4xXCI+XG4gICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmxpbmtpZnkoZGVzY3JpcHRpb24pIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4yXCI+XG4gICAgICAgICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aWRlb0ltYWdlXCIgc3JjPXt0aHVtYm5haWxNZWRpdW19IGFsdD1cInRodW1ibmFpbFwiIC8+IFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgICAgIC52aWRlb0NvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6ICR7ZXhwYW5kID8gXCIxMDAlXCIgOiBcIjMwMHB4XCJ9O1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnZpZGVvSW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6Y29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgLnRvZ2dsZXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yb3d7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29sdW1uMXtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxleDoyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5jb2x1bW4ye1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNlczogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWluLWhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNEM0QzUxXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNEM0QzUxXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm92ZXJsYXl7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vdmVybGF5IGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIC5wbGF5QnV0dG9uOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cGxheUJ1dHRvbn0pIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wbGF5QnV0dG9uOmhvdmVyOiA6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAub3ZlcmxheTo6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjM4LDQ2LDI5LDEpIDAlLCByZ2JhKDI1NSwxNzcsMTgxLDEpIDM1JSk7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3ZlcmxheTpob3Zlcjo6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZXhwYW5kID8gPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlXCIgb25DbGljaz17dG9nZ2xlT3Blbn0+c2hvdyBsZXNzPC9zcGFuPiA6IDxzcGFuIGNsYXNzTmFtZT1cInRvZ2dsZVwiIG9uQ2xpY2s9e3RvZ2dsZU9wZW59PnNob3cgbW9yZTwvc3Bhbj59XG5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Videos.js\n");

/***/ })

})