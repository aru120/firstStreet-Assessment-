webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Videos.js":
/*!******************************!*\
  !*** ./components/Videos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Videos; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var linkifyjs_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! linkifyjs/html */ \"./node_modules/linkifyjs/html.js\");\n/* harmony import */ var linkifyjs_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(linkifyjs_html__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/kevin/Desktop/Personal projects/firstStreet_assessment/components/Videos.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Videos(_ref) {\n  _s();\n\n  var description = _ref.description,\n      title = _ref.title,\n      thumbnailLarge = _ref.thumbnailLarge,\n      thumbnailMedium = _ref.thumbnailMedium,\n      thumbnailSmall = _ref.thumbnailSmall,\n      url = _ref.url;\n  console.log(url);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      expand = _useState[0],\n      setExpand = _useState[1];\n\n  var playButton = '/assets/playbtn.png';\n\n  var toggleOpen = function toggleOpen() {\n    setExpand(!expand);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1898984688\", [expand ? \"100%\" : \"200px\", playButton]]]) + \" \" + \"videoContainer\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1898984688\", [expand ? \"100%\" : \"200px\", playButton]]]) + \" \" + \"row\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1898984688\", [expand ? \"100%\" : \"200px\", playButton]]]) + \" \" + \"column1\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1898984688\", [expand ? \"100%\" : \"200px\", playButton]]]) + \" \" + \"title\",\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 22\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            dangerouslySetInnerHTML: {\n              __html: linkifyjs_html__WEBPACK_IMPORTED_MODULE_3___default()(description)\n            },\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1898984688\", [expand ? \"100%\" : \"200px\", playButton]]]) + \" \" + \"content\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 22\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1898984688\", [expand ? \"100%\" : \"200px\", playButton]]]) + \" \" + \"column2\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: url,\n            target: \"_blank\",\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1898984688\", [expand ? \"100%\" : \"200px\", playButton]]]),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1898984688\", [expand ? \"100%\" : \"200px\", playButton]]]) + \" \" + \"overlay\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1898984688\", [expand ? \"100%\" : \"200px\", playButton]]]) + \" \" + \"playButton\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: thumbnailLarge,\n                  alt: \"thumbnail\",\n                  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1898984688\", [expand ? \"100%\" : \"200px\", playButton]]]) + \" \" + \"videoImage\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 31,\n                  columnNumber: 26\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        id: \"1898984688\",\n        dynamic: [expand ? \"100%\" : \"200px\", playButton],\n        children: \".videoContainer.__jsx-style-dynamic-selector{margin:20px 20px;max-height:\".concat(expand ? \"100%\" : \"200px\", \";overflow:hidden;box-shadow:rgba(0,0,0,0.05) 0px 6px 24px 0px,rgba(0,0,0,0.08) 0px 0px 0px 1px;}.toggle.__jsx-style-dynamic-selector{position:relative;}.row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;}.column1.__jsx-style-dynamic-selector{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex:2;-ms-flex:2;flex:2;}.column2.__jsx-style-dynamic-selector{padding:10px display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-bases:100%;-ms-flex-bases:100%;flex-bases:100%;min-height:auto;-webkit-flex:1;-ms-flex:1;flex:1;}.title.__jsx-style-dynamic-selector{font-size:36px;}.overlay.__jsx-style-dynamic-selector{position:relative;display:inline-block;}.overlay.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:100%;height:100%;z-index:-1;}.playButton.__jsx-style-dynamic-selector::before{position:absolute;left:0;top:0;width:100%;height:100%;background:url(\").concat(playButton, \") no-repeat center;z-index:4;opacity:0;-webkit-transition:.5s ease;transition:.5s ease;}.playButton.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::before{opacity:0;}.overlay.__jsx-style-dynamic-selector::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(238,46,29,1) 0%,rgba(255,177,181,1) 35%);z-index:0;opacity:0;-webkit-transition:.5s ease;transition:.5s ease;}.overlay.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::before{opacity:0.23;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9EZXNrdG9wL1BlcnNvbmFsIHByb2plY3RzL2ZpcnN0U3RyZWV0X2Fzc2Vzc21lbnQvY29tcG9uZW50cy9WaWRlb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUN3QixBQUdzQyxBQVNDLEFBR0wsQUFPQSxBQVNELEFBUUcsQUFJRyxBQU9JLEFBV1IsQUFZTixBQUlHLEFBWUUsVUFmbkIsQ0FJd0IsRUF2REwsQUFtRWpCLEVBbERBLEVBcEM0QyxDQVM1QyxBQStCeUIsQUFrQmxCLElBWFEsR0FZVCxDQS9Cb0IsR0ErQ2YsRUFmQSxFQVpLLEdBNEJOLEdBakNWLEdBa0JZLEFBZ0JHLEdBNUJBLFFBNkJDLENBaEI4QyxFQVg5RCxDQWpEb0IsUUE2RWtFLFFBNUVHLENBU2xFLGFBUUcsaUJBU04sWUFrQ1YsVUFDQSxVQUNVLE9BcERELEVBbUVMLE1BMUVkLElBMkVjLFNBbkRNLENBVEEsQUE2REksZUFuRGIsSUFtQ1osZ0JBcERnQixXQUVmLEVBZ0JBLEFBbURBLHFCQTdEVSxpQ0FDViIsImZpbGUiOiIvVXNlcnMva2V2aW4vRGVza3RvcC9QZXJzb25hbCBwcm9qZWN0cy9maXJzdFN0cmVldF9hc3Nlc3NtZW50L2NvbXBvbmVudHMvVmlkZW9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGxpbmtpZnkgZnJvbSAnbGlua2lmeWpzL2h0bWwnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvcyh7ZGVzY3JpcHRpb24sIHRpdGxlLHRodW1ibmFpbExhcmdlLHRodW1ibmFpbE1lZGl1bSx0aHVtYm5haWxTbWFsbCx1cmx9KXtcbiAgICBjb25zb2xlLmxvZyh1cmwpXG4gICAgY29uc3QgW2V4cGFuZCwgc2V0RXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHBsYXlCdXR0b24gPSAnL2Fzc2V0cy9wbGF5YnRuLnBuZydcblxuICAgIGNvbnN0IHRvZ2dsZU9wZW4gPSAoKSA9PntcbiAgICAgICAgc2V0RXhwYW5kKCFleHBhbmQpXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvQ29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uMVwiPlxuICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpsaW5raWZ5KGRlc2NyaXB0aW9uKSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uMlwiPlxuICAgICAgICAgICAgPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsYXlCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpZGVvSW1hZ2VcIiBzcmM9e3RodW1ibmFpbExhcmdlfSBhbHQ9XCJ0aHVtYm5haWxcIiAvPiBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAudmlkZW9Db250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAke2V4cGFuZCA/IFwiMTAwJVwiIDogXCIyMDBweFwifTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvZ2dsZXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucm93e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbHVtbjF7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6MjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAuY29sdW1uMntcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzZXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm92ZXJsYXl7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vdmVybGF5IGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgLnBsYXlCdXR0b246OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtwbGF5QnV0dG9ufSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA0O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBsYXlCdXR0b246aG92ZXI6IDpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAub3ZlcmxheTo6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjM4LDQ2LDI5LDEpIDAlLCByZ2JhKDI1NSwxNzcsMTgxLDEpIDM1JSk7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3ZlcmxheTpob3Zlcjo6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjIzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2V4cGFuZCA/IDxzcGFuIGNsYXNzTmFtZT1cInRvZ2dsZVwiIG9uQ2xpY2s9e3RvZ2dsZU9wZW59PnNob3cgbGVzczwvc3Bhbj4gOiA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGVcIiBvbkNsaWNrPXt0b2dnbGVPcGVufT5zaG93IG1vcmU8L3NwYW4+fVxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuIl19 */\\n/*@ sourceURL=/Users/kevin/Desktop/Personal projects/firstStreet_assessment/components/Videos.js */\")\n      }, void 0, false, void 0, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this), expand ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"toggle\",\n      onClick: toggleOpen,\n      children: \"show less\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 19\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"toggle\",\n      onClick: toggleOpen,\n      children: \"show more\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 84\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Videos, \"V8NQrAFSLXwZu43JmcjJwSuHwmw=\");\n\n_c = Videos;\n\nvar _c;\n\n$RefreshReg$(_c, \"Videos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb3MuanM/MzQ5NiJdLCJuYW1lcyI6WyJWaWRlb3MiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwidGh1bWJuYWlsTGFyZ2UiLCJ0aHVtYm5haWxNZWRpdW0iLCJ0aHVtYm5haWxTbWFsbCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImV4cGFuZCIsInNldEV4cGFuZCIsInBsYXlCdXR0b24iLCJ0b2dnbGVPcGVuIiwiX19odG1sIiwibGlua2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE1BQVQsT0FBdUY7QUFBQTs7QUFBQSxNQUF0RUMsV0FBc0UsUUFBdEVBLFdBQXNFO0FBQUEsTUFBekRDLEtBQXlELFFBQXpEQSxLQUF5RDtBQUFBLE1BQW5EQyxjQUFtRCxRQUFuREEsY0FBbUQ7QUFBQSxNQUFwQ0MsZUFBb0MsUUFBcENBLGVBQW9DO0FBQUEsTUFBcEJDLGNBQW9CLFFBQXBCQSxjQUFvQjtBQUFBLE1BQUxDLEdBQUssUUFBTEEsR0FBSztBQUNsR0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7O0FBRGtHLGtCQUV0RUcsc0RBQVEsQ0FBQyxLQUFELENBRjhEO0FBQUEsTUFFM0ZDLE1BRjJGO0FBQUEsTUFFbkZDLFNBRm1GOztBQUdsRyxNQUFNQyxVQUFVLEdBQUcscUJBQW5COztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUs7QUFDcEJGLGFBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUEsNEJBQ0E7QUFBQSxrR0F3QjBCQSxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BeEI1QyxFQXNGMEJFLFVBdEYxQixhQUFlLGdCQUFmO0FBQUEsOEJBQ0k7QUFBQSxvR0F1QnNCRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BdkJ4QyxFQXFGc0JFLFVBckZ0QixhQUFlLEtBQWY7QUFBQSxnQ0FDSTtBQUFBLHNHQXNCa0JGLE1BQU0sR0FBRyxNQUFILEdBQVksT0F0QnBDLEVBb0ZrQkUsVUFwRmxCLGFBQWUsU0FBZjtBQUFBLGtDQUNLO0FBQUEsd0dBcUJhRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BckIvQixFQW1GYUUsVUFuRmIsYUFBYyxPQUFkO0FBQUEsc0JBQXVCVjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURMLGVBRUs7QUFBeUIsbUNBQXVCLEVBQUU7QUFBQ1ksb0JBQU0sRUFBQ0MscURBQU8sQ0FBQ2QsV0FBRDtBQUFmLGFBQWxEO0FBQUEsd0dBb0JhUyxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BcEIvQixFQWtGYUUsVUFsRmIsYUFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBU0E7QUFBQSxzR0Fjc0JGLE1BQU0sR0FBRyxNQUFILEdBQVksT0FkeEMsRUE0RXNCRSxVQTVFdEIsYUFBZSxTQUFmO0FBQUEsaUNBQ0E7QUFBRyxnQkFBSSxFQUFFTixHQUFUO0FBQWMsa0JBQU0sRUFBQyxRQUFyQjtBQUFBLHdHQWFzQkksTUFBTSxHQUFHLE1BQUgsR0FBWSxPQWJ4QyxFQTJFc0JFLFVBM0V0QjtBQUFBLG1DQUNJO0FBQUEsMEdBWWtCRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BWnBDLEVBMEVrQkUsVUExRWxCLGFBQWdCLFNBQWhCO0FBQUEscUNBQ0k7QUFBQSw0R0FXY0YsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQVhoQyxFQXlFY0UsVUF6RWQsYUFBZ0IsWUFBaEI7QUFBQSx1Q0FDSztBQUE0QixxQkFBRyxFQUFFVCxjQUFqQztBQUFpRCxxQkFBRyxFQUFDLFdBQXJEO0FBQUEsOEdBVVNPLE1BQU0sR0FBRyxNQUFILEdBQVksT0FWM0IsRUF3RVNFLFVBeEVULGFBQWU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUFBO0FBQUEsa0JBd0IwQkYsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQXhCNUMsRUFzRjBCRSxVQXRGMUI7QUFBQSxxR0F3QjBCRixNQUFNLEdBQUcsTUFBSCxHQUFZLE9BeEI1QyxpMENBc0YwQkUsVUF0RjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsRUFtSENGLE1BQU0sZ0JBQUc7QUFBTSxlQUFTLEVBQUMsUUFBaEI7QUFBeUIsYUFBTyxFQUFFRyxVQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILGdCQUFvRTtBQUFNLGVBQVMsRUFBQyxRQUFoQjtBQUF5QixhQUFPLEVBQUVBLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkgzRTtBQUFBLGtCQURKO0FBd0hIOztHQWpJdUJiLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBsaW5raWZ5IGZyb20gJ2xpbmtpZnlqcy9odG1sJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb3Moe2Rlc2NyaXB0aW9uLCB0aXRsZSx0aHVtYm5haWxMYXJnZSx0aHVtYm5haWxNZWRpdW0sdGh1bWJuYWlsU21hbGwsdXJsfSl7XG4gICAgY29uc29sZS5sb2codXJsKVxuICAgIGNvbnN0IFtleHBhbmQsIHNldEV4cGFuZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBwbGF5QnV0dG9uID0gJy9hc3NldHMvcGxheWJ0bi5wbmcnXG5cbiAgICBjb25zdCB0b2dnbGVPcGVuID0gKCkgPT57XG4gICAgICAgIHNldEV4cGFuZCghZXhwYW5kKVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6bGlua2lmeShkZXNjcmlwdGlvbikgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbjJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbGF5QnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aWRlb0ltYWdlXCIgc3JjPXt0aHVtYm5haWxMYXJnZX0gYWx0PVwidGh1bWJuYWlsXCIgLz4gXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnZpZGVvQ29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogJHtleHBhbmQgPyBcIjEwMCVcIiA6IFwiMjAwcHhcIn07XG4gICAgICAgICAgICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50b2dnbGV7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJvd3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb2x1bW4xe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OjI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmNvbHVtbjJ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHhcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2VzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vdmVybGF5e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAub3ZlcmxheSBpbWcge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgIC5wbGF5QnV0dG9uOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cGxheUJ1dHRvbn0pIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICAgICAgICAgICAgei1pbmRleDogNDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wbGF5QnV0dG9uOmhvdmVyOiA6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm92ZXJsYXk6OmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIzOCw0NiwyOSwxKSAwJSwgcmdiYSgyNTUsMTc3LDE4MSwxKSAzNSUpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm92ZXJsYXk6aG92ZXI6OmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtleHBhbmQgPyA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGVcIiBvbkNsaWNrPXt0b2dnbGVPcGVufT5zaG93IGxlc3M8L3NwYW4+IDogPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlXCIgb25DbGljaz17dG9nZ2xlT3Blbn0+c2hvdyBtb3JlPC9zcGFuPn1cblxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Videos.js\n");

/***/ })

})