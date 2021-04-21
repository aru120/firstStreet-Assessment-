webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Videos.js":
/*!******************************!*\
  !*** ./components/Videos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Videos; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var linkifyjs_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! linkifyjs/html */ \"./node_modules/linkifyjs/html.js\");\n/* harmony import */ var linkifyjs_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(linkifyjs_html__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/kevin/Desktop/Personal projects/firstStreet_assessment/components/Videos.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Videos(_ref) {\n  _s();\n\n  var description = _ref.description,\n      title = _ref.title,\n      thumbnailLarge = _ref.thumbnailLarge,\n      thumbnailMedium = _ref.thumbnailMedium,\n      thumbnailSmall = _ref.thumbnailSmall,\n      url = _ref.url;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      expand = _useState[0],\n      setExpand = _useState[1];\n\n  var playButton = '/assets/playbtn.png';\n\n  var toggleOpen = function toggleOpen() {\n    setExpand(!expand);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"111819887\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"videoContainer\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"111819887\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"flex-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"111819887\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"main-content\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"111819887\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"title\",\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            dangerouslySetInnerHTML: {\n              __html: linkifyjs_html__WEBPACK_IMPORTED_MODULE_3___default()(description)\n            },\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"111819887\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"content\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"111819887\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"video-image\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: url,\n            target: \"_blank\",\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"111819887\", [expand ? \"100%\" : \"350px\", playButton]]]),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: thumbnailLarge,\n              alt: \"thumbnail\",\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"111819887\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"videoImage\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 26\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this), expand ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      onClick: toggleOpen,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"111819887\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"toggle\",\n      children: \"show less\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 19\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      onClick: toggleOpen,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"111819887\", [expand ? \"100%\" : \"350px\", playButton]]]) + \" \" + \"toggle\",\n      children: \"show more\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 84\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"111819887\",\n      dynamic: [expand ? \"100%\" : \"350px\", playButton],\n      children: \".flex-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.main-content.__jsx-style-dynamic-selector{-webkit-flex:2;-ms-flex:2;flex:2;}.video-image.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.videoContainer.__jsx-style-dynamic-selector{margin:20px 20px;max-height:\".concat(expand ? \"100%\" : \"350px\", \";overflow:hidden;box-shadow:rgba(0,0,0,0.05) 0px 6px 24px 0px,rgba(0,0,0,0.08) 0px 0px 0px 1px;}.toggle.__jsx-style-dynamic-selector{position:relative;}.row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;}.column1.__jsx-style-dynamic-selector{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex:2;-ms-flex:2;flex:2;}.column2.__jsx-style-dynamic-selector{padding:10px display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-bases:100%;-ms-flex-bases:100%;flex-bases:100%;-webkit-flex:1;-ms-flex:1;flex:1;}.title.__jsx-style-dynamic-selector{font-size:36px;line-height:36px;margin-bottom:20px;color:#4C4C51 overflow:hidden;}.content.__jsx-style-dynamic-selector{font-size:22px;line-height:28px;color:#4C4C51;overflow:hidden;}.overlay.__jsx-style-dynamic-selector{position:relative;display:inline-block;}.overlay.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:100%;height:100%;z-index:-1;}.playButton.__jsx-style-dynamic-selector::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:url(\").concat(playButton, \") no-repeat center;opacity:0;-webkit-transition:.5s ease;transition:.5s ease;}.playButton.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::before{opacity:1;}.overlay.__jsx-style-dynamic-selector::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(238,46,29,1) 0%,rgba(255,177,181,1) 35%);z-index:0;opacity:0;-webkit-transition:.5s ease;transition:.5s ease;}.overlay.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::before{opacity:0.5;}@media (max-width:767px){.title.__jsx-style-dynamic-selector{font-size:28px;}.content.__jsx-style-dynamic-selector{font-size:20px;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9EZXNrdG9wL1BlcnNvbmFsIHByb2plY3RzL2ZpcnN0U3RyZWV0X2Fzc2Vzc21lbnQvY29tcG9uZW50cy9WaWRlb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMER3QixBQUtxQyxBQUtELEFBS0osQUFPTSxBQU9DLEFBSUwsQUFPQSxBQVVELEFBU0csQUFRQSxBQVFHLEFBT0ksQUFRZixBQWFDLEFBS0csQUFZQyxBQU1NLEFBR0MsVUF6QnpCLENBYm9CLEFBa0JJLENBWXRCLENBaEZpQixFQW1CSSxBQVFBLEFBMkRqQixBQUdBLEVBM0d3QyxDQU81QyxBQThDeUIsSUFPVixJQWhDVyxHQXlDbkIsQUFrQkksR0FqRFksQUFRTCxDQXpEZCxBQUlBLEFBb0VZLEdBU1YsQUFrQkksR0FoQ1YsR0FlVyxBQWtCSSxHQTNCQSxDQWZLLEtBUEEsRUFnQ1IsQUFrQkksR0ExQmhCLENBL0RvQixLQWlEcEIsR0F1QjhELEFBa0J3QixRQXpGRyxDQW5CckYsQUE0Qm1CLE9BOEJ2QixNQXRCMEIsaUJBVU4sdUJBOENWLFVBQ1UsTUFoRUQsRUFnRkwsTUF6RmQsSUEwRmMsU0E5REgsQ0FYUyxBQTBFSSxvQkFqQnpCLFlBNUNDLEdBcEJlLFdBRWYsRUFnRkEscUJBMUVXLGlDQUVYIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbi9EZXNrdG9wL1BlcnNvbmFsIHByb2plY3RzL2ZpcnN0U3RyZWV0X2Fzc2Vzc21lbnQvY29tcG9uZW50cy9WaWRlb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgbGlua2lmeSBmcm9tICdsaW5raWZ5anMvaHRtbCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW9zKHtkZXNjcmlwdGlvbiwgdGl0bGUsdGh1bWJuYWlsTGFyZ2UsdGh1bWJuYWlsTWVkaXVtLHRodW1ibmFpbFNtYWxsLHVybH0pe1xuICAgIGNvbnN0IFtleHBhbmQsIHNldEV4cGFuZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBwbGF5QnV0dG9uID0gJy9hc3NldHMvcGxheWJ0bi5wbmcnXG5cbiAgICBjb25zdCB0b2dnbGVPcGVuID0gKCkgPT57XG4gICAgICAgIHNldEV4cGFuZCghZXhwYW5kKVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6bGlua2lmeShkZXNjcmlwdGlvbikgfX0gLz4gICAgIFxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aWRlb0ltYWdlXCIgc3JjPXt0aHVtYm5haWxMYXJnZX0gYWx0PVwidGh1bWJuYWlsXCIgLz4gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uMVwiPlxuICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpsaW5raWZ5KGRlc2NyaXB0aW9uKSB9fSAvPiAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uMlwiPlxuICAgICAgICAgICAgPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGxheUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmlkZW9JbWFnZVwiIHNyYz17dGh1bWJuYWlsTGFyZ2V9IGFsdD1cInRodW1ibmFpbFwiIC8+IFxuICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIHsvKiA8L2Rpdj4gKi99XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtleHBhbmQgPyA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGVcIiBvbkNsaWNrPXt0b2dnbGVPcGVufT5zaG93IGxlc3M8L3NwYW4+IDogPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlXCIgb25DbGljaz17dG9nZ2xlT3Blbn0+c2hvdyBtb3JlPC9zcGFuPn1cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG5cbiAgICAgICAgICAgICAgICAgICAgLmZsZXgtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAubWFpbi1jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW8taW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgICAgICAgICAudmlkZW9Db250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAke2V4cGFuZCA/IFwiMTAwJVwiIDogXCIzNTBweFwifTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAudG9nZ2xle1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJvd3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb2x1bW4xe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAuY29sdW1uMntcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzZXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QzRDNTFcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QzRDNTE7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3ZlcmxheXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm92ZXJsYXkgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgLnBsYXlCdXR0b246OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtwbGF5QnV0dG9ufSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBsYXlCdXR0b246aG92ZXI6IDpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5vdmVybGF5OjpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyMzgsNDYsMjksMSkgMCUsIHJnYmEoMjU1LDE3NywxODEsMSkgMzUlKTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdmVybGF5OmhvdmVyOjpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XG4gICAgICAgICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIFxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuIl19 */\\n/*@ sourceURL=/Users/kevin/Desktop/Personal projects/firstStreet_assessment/components/Videos.js */\")\n    }, void 0, false, void 0, this)]\n  }, void 0, true);\n}\n\n_s(Videos, \"V8NQrAFSLXwZu43JmcjJwSuHwmw=\");\n\n_c = Videos;\n\nvar _c;\n\n$RefreshReg$(_c, \"Videos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb3MuanM/MzQ5NiJdLCJuYW1lcyI6WyJWaWRlb3MiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwidGh1bWJuYWlsTGFyZ2UiLCJ0aHVtYm5haWxNZWRpdW0iLCJ0aHVtYm5haWxTbWFsbCIsInVybCIsInVzZVN0YXRlIiwiZXhwYW5kIiwic2V0RXhwYW5kIiwicGxheUJ1dHRvbiIsInRvZ2dsZU9wZW4iLCJfX2h0bWwiLCJsaW5raWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsTUFBVCxPQUF1RjtBQUFBOztBQUFBLE1BQXRFQyxXQUFzRSxRQUF0RUEsV0FBc0U7QUFBQSxNQUF6REMsS0FBeUQsUUFBekRBLEtBQXlEO0FBQUEsTUFBbkRDLGNBQW1ELFFBQW5EQSxjQUFtRDtBQUFBLE1BQXBDQyxlQUFvQyxRQUFwQ0EsZUFBb0M7QUFBQSxNQUFwQkMsY0FBb0IsUUFBcEJBLGNBQW9CO0FBQUEsTUFBTEMsR0FBSyxRQUFMQSxHQUFLOztBQUFBLGtCQUN0RUMsc0RBQVEsQ0FBQyxLQUFELENBRDhEO0FBQUEsTUFDM0ZDLE1BRDJGO0FBQUEsTUFDbkZDLFNBRG1GOztBQUVsRyxNQUFNQyxVQUFVLEdBQUcscUJBQW5COztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUs7QUFDcEJGLGFBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUEsNEJBRUE7QUFBQSxpR0FnRTBCQSxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BaEU1QyxFQXlJMEJFLFVBekkxQixhQUFlLGdCQUFmO0FBQUEsNkJBRUk7QUFBQSxtR0E4RHNCRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BOUR4QyxFQXVJc0JFLFVBdkl0QixhQUFlLGdCQUFmO0FBQUEsZ0NBQ0k7QUFBQSxxR0E2RGtCRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BN0RwQyxFQXNJa0JFLFVBdElsQixhQUFlLGNBQWY7QUFBQSxrQ0FDUTtBQUFBLHVHQTREVUYsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQTVENUIsRUFxSVVFLFVBcklWLGFBQWMsT0FBZDtBQUFBLHNCQUF1QlI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUixlQUVRO0FBQXlCLG1DQUF1QixFQUFFO0FBQUNVLG9CQUFNLEVBQUNDLHFEQUFPLENBQUNaLFdBQUQ7QUFBZixhQUFsRDtBQUFBLHVHQTJEVU8sTUFBTSxHQUFHLE1BQUgsR0FBWSxPQTNENUIsRUFvSVVFLFVBcElWLGFBQWU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU9JO0FBQUEscUdBdURrQkYsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQXZEcEMsRUFnSWtCRSxVQWhJbEIsYUFBZSxhQUFmO0FBQUEsaUNBQ0E7QUFBRyxnQkFBSSxFQUFFSixHQUFUO0FBQWMsa0JBQU0sRUFBQyxRQUFyQjtBQUFBLHVHQXNEa0JFLE1BQU0sR0FBRyxNQUFILEdBQVksT0F0RHBDLEVBK0hrQkUsVUEvSGxCO0FBQUEsbUNBRVM7QUFBNEIsaUJBQUcsRUFBRVAsY0FBakM7QUFBaUQsaUJBQUcsRUFBQyxXQUFyRDtBQUFBLHlHQW9EU0ssTUFBTSxHQUFHLE1BQUgsR0FBWSxPQXBEM0IsRUE2SFNFLFVBN0hULGFBQWU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLEVBMENDRixNQUFNLGdCQUFHO0FBQXlCLGFBQU8sRUFBRUcsVUFBbEM7QUFBQSxpR0F3QmdCSCxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BeEJsQyxFQWlHZ0JFLFVBakdoQixhQUFnQixRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILGdCQUFvRTtBQUF5QixhQUFPLEVBQUVDLFVBQWxDO0FBQUEsaUdBd0JqREgsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQXhCK0IsRUFpR2pERSxVQWpHaUQsYUFBZ0IsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQzNFO0FBQUE7QUFBQSxnQkFrRTBCRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BbEU1QyxFQTJJMEJFLFVBM0kxQjtBQUFBLG9YQWtFMEJGLE1BQU0sR0FBRyxNQUFILEdBQVksT0FsRTVDLG0rQ0EySTBCRSxVQTNJMUI7QUFBQTtBQUFBLGtCQURKO0FBc0xIOztHQTlMdUJWLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBsaW5raWZ5IGZyb20gJ2xpbmtpZnlqcy9odG1sJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb3Moe2Rlc2NyaXB0aW9uLCB0aXRsZSx0aHVtYm5haWxMYXJnZSx0aHVtYm5haWxNZWRpdW0sdGh1bWJuYWlsU21hbGwsdXJsfSl7XG4gICAgY29uc3QgW2V4cGFuZCwgc2V0RXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHBsYXlCdXR0b24gPSAnL2Fzc2V0cy9wbGF5YnRuLnBuZydcblxuICAgIGNvbnN0IHRvZ2dsZU9wZW4gPSAoKSA9PntcbiAgICAgICAgc2V0RXhwYW5kKCFleHBhbmQpXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvQ29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpsaW5raWZ5KGRlc2NyaXB0aW9uKSB9fSAvPiAgICAgXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpZGVvSW1hZ2VcIiBzcmM9e3RodW1ibmFpbExhcmdlfSBhbHQ9XCJ0aHVtYm5haWxcIiAvPiBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4xXCI+XG4gICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmxpbmtpZnkoZGVzY3JpcHRpb24pIH19IC8+ICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4yXCI+XG4gICAgICAgICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbGF5QnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aWRlb0ltYWdlXCIgc3JjPXt0aHVtYm5haWxMYXJnZX0gYWx0PVwidGh1bWJuYWlsXCIgLz4gXG4gICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgey8qIDwvZGl2PiAqL31cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2V4cGFuZCA/IDxzcGFuIGNsYXNzTmFtZT1cInRvZ2dsZVwiIG9uQ2xpY2s9e3RvZ2dsZU9wZW59PnNob3cgbGVzczwvc3Bhbj4gOiA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGVcIiBvbkNsaWNrPXt0b2dnbGVPcGVufT5zaG93IG1vcmU8L3NwYW4+fVxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG5cblxuICAgICAgICAgICAgICAgICAgICAuZmxleC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC5tYWluLWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlby1pbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICAgICAgICAgIC52aWRlb0NvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6ICR7ZXhwYW5kID8gXCIxMDAlXCIgOiBcIjM1MHB4XCJ9O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC50b2dnbGV7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucm93e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbHVtbjF7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5jb2x1bW4ye1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNlczogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWluLWhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRDNEM1MVxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRDNEM1MTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdmVybGF5e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAub3ZlcmxheSBpbWcge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAucGxheUJ1dHRvbjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3BsYXlCdXR0b259KSBuby1yZXBlYXQgY2VudGVyO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucGxheUJ1dHRvbjpob3ZlcjogOmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm92ZXJsYXk6OmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIzOCw0NiwyOSwxKSAwJSwgcmdiYSgyNTUsMTc3LDE4MSwxKSAzNSUpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm92ZXJsYXk6aG92ZXI6OmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjI4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgXG5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Videos.js\n");

/***/ })

})