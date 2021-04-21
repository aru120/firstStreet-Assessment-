webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Videos.js":
/*!******************************!*\
  !*** ./components/Videos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Videos; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var linkifyjs_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! linkifyjs/html */ \"./node_modules/linkifyjs/html.js\");\n/* harmony import */ var linkifyjs_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(linkifyjs_html__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/kevin/Desktop/Personal projects/firstStreet_assessment/components/Videos.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Videos(_ref) {\n  _s();\n\n  var description = _ref.description,\n      title = _ref.title,\n      thumbnailLarge = _ref.thumbnailLarge,\n      thumbnailMedium = _ref.thumbnailMedium,\n      thumbnailSmall = _ref.thumbnailSmall,\n      url = _ref.url;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      expand = _useState[0],\n      setExpand = _useState[1];\n\n  var playButton = '/assets/playbtn.png';\n\n  var toggleOpen = function toggleOpen() {\n    setExpand(!expand);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365354019\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"videoContainer\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365354019\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"flex-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365354019\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"main-content\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365354019\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"title\",\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            dangerouslySetInnerHTML: {\n              __html: linkifyjs_html__WEBPACK_IMPORTED_MODULE_3___default()(description)\n            },\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365354019\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"content\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365354019\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"video-image\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: url,\n            target: \"_blank\",\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365354019\", [expand ? \"100%\" : \"350px\", playButton]]]),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: thumbnailLarge,\n              alt: \"thumbnail\",\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365354019\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"videoImage\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 26\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this), expand ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      onClick: toggleOpen,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365354019\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"toggle\",\n      children: \"show less\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 19\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      onClick: toggleOpen,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"365354019\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"toggle\",\n      children: \"show more\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 84\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"365354019\",\n      dynamic: [expand ? \"100%\" : \"350px\", playButton],\n      children: \".flex-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.main-content.__jsx-style-dynamic-selector{-webkit-flex:2;-ms-flex:2;flex:2;}.video-image.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.videoContainer.__jsx-style-dynamic-selector{margin:20px 20px;max-height:\".concat(expand ? \"100%\" : \"350px\", \";overflow:hidden;box-shadow:rgba(0,0,0,0.05) 0px 6px 24px 0px,rgba(0,0,0,0.08) 0px 0px 0px 1px;}.toggle.__jsx-style-dynamic-selector{position:relative;}.row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;}.column1.__jsx-style-dynamic-selector{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex:2;-ms-flex:2;flex:2;}.column2.__jsx-style-dynamic-selector{padding:10px display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-bases:100%;-ms-flex-bases:100%;flex-bases:100%;-webkit-flex:1;-ms-flex:1;flex:1;}.title.__jsx-style-dynamic-selector{font-size:36px;line-height:36px;margin-bottom:20px;color:#4C4C51 overflow:hidden;}.content.__jsx-style-dynamic-selector{font-size:22px;line-height:28px;color:#4C4C51;overflow:hidden;}.overlay.__jsx-style-dynamic-selector{position:relative;display:inline-block;}.overlay.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:100%;height:100%;z-index:-1;}.playButton.__jsx-style-dynamic-selector::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:url(\").concat(playButton, \") no-repeat center;opacity:0;-webkit-transition:.5s ease;transition:.5s ease;}.playButton.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::before{opacity:1;}.overlay.__jsx-style-dynamic-selector::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(238,46,29,1) 0%,rgba(255,177,181,1) 35%);z-index:0;opacity:0;-webkit-transition:.5s ease;transition:.5s ease;}.overlay.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::before{opacity:0.5;}@media (max-width:767px){.flex-container.__jsx-style-dynamic-selector{display:block;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.title.__jsx-style-dynamic-selector{font-size:28px;}.content.__jsx-style-dynamic-selector{font-size:20px;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9EZXNrdG9wL1BlcnNvbmFsIHByb2plY3RzL2ZpcnN0U3RyZWV0X2Fzc2Vzc21lbnQvY29tcG9uZW50cy9WaWRlb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMER3QixBQUtxQyxBQUtELEFBS0osQUFPTSxBQU9DLEFBSUwsQUFPQSxBQVVELEFBU0csQUFRQSxBQVFHLEFBT0ksQUFRZixBQWFDLEFBS0csQUFZQyxBQU1LLEFBSUMsQUFHQyxVQTdCekIsQ0Fib0IsQUFrQkksQ0FZdEIsQ0FoRmlCLENBc0ZxQixDQW5FakIsQUFRQSxBQStEakIsQUFHQSxFQS9Hd0MsQ0FPNUMsQUE4Q3lCLElBT1YsSUFoQ1csR0F5Q25CLEFBa0JJLEdBakRZLEFBUUwsQ0F6RGQsQUFJQSxBQW9FWSxHQVNWLEFBa0JJLEdBaENWLEdBZVcsQUFrQkksR0EzQkEsQ0FmSyxLQVBBLEVBZ0NSLEFBa0JJLEdBMUJoQixDQS9Eb0IsS0FpRHBCLEdBdUI4RCxBQWtCd0IsUUF6RkcsQ0FuQnJGLEFBNEJtQixPQThCdkIsTUF0QjBCLGlCQVVOLFlBNEVoQixXQTlCTSxVQUNVLE1BaEVELEVBZ0ZMLE1BekZkLElBMEZjLFNBOURILENBWFMsQUEwRUksb0JBakJ6QixZQTVDQyxHQXBCZSxXQUVmLEVBZ0ZBLHFCQTFFVyxpQ0FFWCIsImZpbGUiOiIvVXNlcnMva2V2aW4vRGVza3RvcC9QZXJzb25hbCBwcm9qZWN0cy9maXJzdFN0cmVldF9hc3Nlc3NtZW50L2NvbXBvbmVudHMvVmlkZW9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGxpbmtpZnkgZnJvbSAnbGlua2lmeWpzL2h0bWwnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvcyh7ZGVzY3JpcHRpb24sIHRpdGxlLHRodW1ibmFpbExhcmdlLHRodW1ibmFpbE1lZGl1bSx0aHVtYm5haWxTbWFsbCx1cmx9KXtcbiAgICBjb25zdCBbZXhwYW5kLCBzZXRFeHBhbmRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcGxheUJ1dHRvbiA9ICcvYXNzZXRzL3BsYXlidG4ucG5nJ1xuXG4gICAgY29uc3QgdG9nZ2xlT3BlbiA9ICgpID0+e1xuICAgICAgICBzZXRFeHBhbmQoIWV4cGFuZClcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9Db250YWluZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmxpbmtpZnkoZGVzY3JpcHRpb24pIH19IC8+ICAgICBcblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmlkZW9JbWFnZVwiIHNyYz17dGh1bWJuYWlsTGFyZ2V9IGFsdD1cInRodW1ibmFpbFwiIC8+IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6bGlua2lmeShkZXNjcmlwdGlvbikgfX0gLz4gICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbjJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsYXlCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpZGVvSW1hZ2VcIiBzcmM9e3RodW1ibmFpbExhcmdlfSBhbHQ9XCJ0aHVtYm5haWxcIiAvPiBcbiAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICB7LyogPC9kaXY+ICovfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZXhwYW5kID8gPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlXCIgb25DbGljaz17dG9nZ2xlT3Blbn0+c2hvdyBsZXNzPC9zcGFuPiA6IDxzcGFuIGNsYXNzTmFtZT1cInRvZ2dsZVwiIG9uQ2xpY2s9e3RvZ2dsZU9wZW59PnNob3cgbW9yZTwvc3Bhbj59XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuXG4gICAgICAgICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLm1haW4tY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvLWltYWdle1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuXG4gICAgICAgICAgICAgICAgLnZpZGVvQ29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogJHtleHBhbmQgPyBcIjEwMCVcIiA6IFwiMzUwcHhcIn07XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnRvZ2dsZXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yb3d7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29sdW1uMXtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmNvbHVtbjJ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHhcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2VzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAvLyBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNEM0QzUxXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNEM0QzUxO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm92ZXJsYXl7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vdmVybGF5IGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIC5wbGF5QnV0dG9uOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cGxheUJ1dHRvbn0pIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wbGF5QnV0dG9uOmhvdmVyOiA6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAub3ZlcmxheTo6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjM4LDQ2LDI5LDEpIDAlLCByZ2JhKDI1NSwxNzcsMTgxLDEpIDM1JSk7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3ZlcmxheTpob3Zlcjo6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xuICAgICAgICAgICAgICAgICAgICAuZmxleC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIFxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuIl19 */\\n/*@ sourceURL=/Users/kevin/Desktop/Personal projects/firstStreet_assessment/components/Videos.js */\")\n    }, void 0, false, void 0, this)]\n  }, void 0, true);\n}\n\n_s(Videos, \"V8NQrAFSLXwZu43JmcjJwSuHwmw=\");\n\n_c = Videos;\n\nvar _c;\n\n$RefreshReg$(_c, \"Videos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb3MuanM/MzQ5NiJdLCJuYW1lcyI6WyJWaWRlb3MiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwidGh1bWJuYWlsTGFyZ2UiLCJ0aHVtYm5haWxNZWRpdW0iLCJ0aHVtYm5haWxTbWFsbCIsInVybCIsInVzZVN0YXRlIiwiZXhwYW5kIiwic2V0RXhwYW5kIiwicGxheUJ1dHRvbiIsInRvZ2dsZU9wZW4iLCJfX2h0bWwiLCJsaW5raWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsTUFBVCxPQUF1RjtBQUFBOztBQUFBLE1BQXRFQyxXQUFzRSxRQUF0RUEsV0FBc0U7QUFBQSxNQUF6REMsS0FBeUQsUUFBekRBLEtBQXlEO0FBQUEsTUFBbkRDLGNBQW1ELFFBQW5EQSxjQUFtRDtBQUFBLE1BQXBDQyxlQUFvQyxRQUFwQ0EsZUFBb0M7QUFBQSxNQUFwQkMsY0FBb0IsUUFBcEJBLGNBQW9CO0FBQUEsTUFBTEMsR0FBSyxRQUFMQSxHQUFLOztBQUFBLGtCQUN0RUMsc0RBQVEsQ0FBQyxLQUFELENBRDhEO0FBQUEsTUFDM0ZDLE1BRDJGO0FBQUEsTUFDbkZDLFNBRG1GOztBQUVsRyxNQUFNQyxVQUFVLEdBQUcscUJBQW5COztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUs7QUFDcEJGLGFBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUEsNEJBRUE7QUFBQSxpR0FnRTBCQSxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BaEU1QyxFQXlJMEJFLFVBekkxQixhQUFlLGdCQUFmO0FBQUEsNkJBRUk7QUFBQSxtR0E4RHNCRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BOUR4QyxFQXVJc0JFLFVBdkl0QixhQUFlLGdCQUFmO0FBQUEsZ0NBQ0k7QUFBQSxxR0E2RGtCRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BN0RwQyxFQXNJa0JFLFVBdElsQixhQUFlLGNBQWY7QUFBQSxrQ0FDUTtBQUFBLHVHQTREVUYsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQTVENUIsRUFxSVVFLFVBcklWLGFBQWMsT0FBZDtBQUFBLHNCQUF1QlI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUixlQUVRO0FBQXlCLG1DQUF1QixFQUFFO0FBQUNVLG9CQUFNLEVBQUNDLHFEQUFPLENBQUNaLFdBQUQ7QUFBZixhQUFsRDtBQUFBLHVHQTJEVU8sTUFBTSxHQUFHLE1BQUgsR0FBWSxPQTNENUIsRUFvSVVFLFVBcElWLGFBQWU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU9JO0FBQUEscUdBdURrQkYsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQXZEcEMsRUFnSWtCRSxVQWhJbEIsYUFBZSxhQUFmO0FBQUEsaUNBQ0E7QUFBRyxnQkFBSSxFQUFFSixHQUFUO0FBQWMsa0JBQU0sRUFBQyxRQUFyQjtBQUFBLHVHQXNEa0JFLE1BQU0sR0FBRyxNQUFILEdBQVksT0F0RHBDLEVBK0hrQkUsVUEvSGxCO0FBQUEsbUNBRVM7QUFBNEIsaUJBQUcsRUFBRVAsY0FBakM7QUFBaUQsaUJBQUcsRUFBQyxXQUFyRDtBQUFBLHlHQW9EU0ssTUFBTSxHQUFHLE1BQUgsR0FBWSxPQXBEM0IsRUE2SFNFLFVBN0hULGFBQWU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLEVBMENDRixNQUFNLGdCQUFHO0FBQXlCLGFBQU8sRUFBRUcsVUFBbEM7QUFBQSxpR0F3QmdCSCxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BeEJsQyxFQWlHZ0JFLFVBakdoQixhQUFnQixRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILGdCQUFvRTtBQUF5QixhQUFPLEVBQUVDLFVBQWxDO0FBQUEsaUdBd0JqREgsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQXhCK0IsRUFpR2pERSxVQWpHaUQsYUFBZ0IsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQzNFO0FBQUE7QUFBQSxnQkFrRTBCRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BbEU1QyxFQTJJMEJFLFVBM0kxQjtBQUFBLG9YQWtFMEJGLE1BQU0sR0FBRyxNQUFILEdBQVksT0FsRTVDLG0rQ0EySTBCRSxVQTNJMUI7QUFBQTtBQUFBLGtCQURKO0FBMExIOztHQWxNdUJWLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBsaW5raWZ5IGZyb20gJ2xpbmtpZnlqcy9odG1sJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb3Moe2Rlc2NyaXB0aW9uLCB0aXRsZSx0aHVtYm5haWxMYXJnZSx0aHVtYm5haWxNZWRpdW0sdGh1bWJuYWlsU21hbGwsdXJsfSl7XG4gICAgY29uc3QgW2V4cGFuZCwgc2V0RXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHBsYXlCdXR0b24gPSAnL2Fzc2V0cy9wbGF5YnRuLnBuZydcblxuICAgIGNvbnN0IHRvZ2dsZU9wZW4gPSAoKSA9PntcbiAgICAgICAgc2V0RXhwYW5kKCFleHBhbmQpXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvQ29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpsaW5raWZ5KGRlc2NyaXB0aW9uKSB9fSAvPiAgICAgXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpZGVvSW1hZ2VcIiBzcmM9e3RodW1ibmFpbExhcmdlfSBhbHQ9XCJ0aHVtYm5haWxcIiAvPiBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4xXCI+XG4gICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmxpbmtpZnkoZGVzY3JpcHRpb24pIH19IC8+ICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4yXCI+XG4gICAgICAgICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbGF5QnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aWRlb0ltYWdlXCIgc3JjPXt0aHVtYm5haWxMYXJnZX0gYWx0PVwidGh1bWJuYWlsXCIgLz4gXG4gICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgey8qIDwvZGl2PiAqL31cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2V4cGFuZCA/IDxzcGFuIGNsYXNzTmFtZT1cInRvZ2dsZVwiIG9uQ2xpY2s9e3RvZ2dsZU9wZW59PnNob3cgbGVzczwvc3Bhbj4gOiA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGVcIiBvbkNsaWNrPXt0b2dnbGVPcGVufT5zaG93IG1vcmU8L3NwYW4+fVxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG5cblxuICAgICAgICAgICAgICAgICAgICAuZmxleC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC5tYWluLWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlby1pbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICAgICAgICAgIC52aWRlb0NvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6ICR7ZXhwYW5kID8gXCIxMDAlXCIgOiBcIjM1MHB4XCJ9O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC50b2dnbGV7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucm93e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbHVtbjF7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5jb2x1bW4ye1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNlczogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWluLWhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRDNEM1MVxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRDNEM1MTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdmVybGF5e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAub3ZlcmxheSBpbWcge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAucGxheUJ1dHRvbjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3BsYXlCdXR0b259KSBuby1yZXBlYXQgY2VudGVyO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucGxheUJ1dHRvbjpob3ZlcjogOmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm92ZXJsYXk6OmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIzOCw0NiwyOSwxKSAwJSwgcmdiYSgyNTUsMTc3LDE4MSwxKSAzNSUpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm92ZXJsYXk6aG92ZXI6OmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcbiAgICAgICAgICAgICAgICAgICAgLmZsZXgtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjhweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICBcblxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Videos.js\n");

/***/ })

})