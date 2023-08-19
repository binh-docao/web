"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/zta-home",{

/***/ "./components/ZTA/ZTA_Home.jsx":
/*!*************************************!*\
  !*** ./components/ZTA/ZTA_Home.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-typed */ \"./node_modules/react-typed/dist/react-typed.js\");\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Social */ \"./components/Social.jsx\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ZTA_Home = ()=>{\n    _s();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [houseGirls, setHouseGirls] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedHouseGirl, setSelectedHouseGirl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const { resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Fetch list of house girls from the API\n        // fetch('http://localhost:4000/api/HouseGirlNames')\n        fetch(\"http://b1nh.com/api/HouseGirlNames\").then((response)=>response.json()).then((data)=>setHouseGirls(data)).catch((error)=>console.error(\"Error fetching house girls:\", error));\n        setMounted(true);\n    }, []);\n    const handleHouseGirlSelect = (event)=>{\n        const id = event.target.value;\n        const girl = houseGirls.find((h)=>h._id === id);\n        setSelectedHouseGirl(girl);\n    };\n    const requestLatePlate = ()=>{\n        console.log(\"Requesting late plate for\", selectedHouseGirl.name);\n    // Here, you can send a request to your API to handle the late plate request\n    };\n    if (!mounted) {\n        return null;\n    }\n    const avatarImageUrl = selectedHouseGirl ? \"/img/hg/\".concat(selectedHouseGirl.name.replace(/\\s+/g, \"\").toLowerCase(), \".jpg\") : null; // set to a default image or keep it null if you don't want to show any image before selection\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !selectedHouseGirl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-81cb0623e461d1c8\" + \" \" + \"centered-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    onChange: handleHouseGirlSelect,\n                    className: \"jsx-81cb0623e461d1c8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            className: \"jsx-81cb0623e461d1c8\",\n                            children: \"Select a House Girl\"\n                        }, void 0, false, {\n                            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, undefined),\n                        houseGirls.map((girl)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: girl._id,\n                                className: \"jsx-81cb0623e461d1c8\",\n                                children: girl.name\n                            }, girl._id, false, {\n                                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 41\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-81cb0623e461d1c8\" + \" \" + \"tokyo_tm_home\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-81cb0623e461d1c8\" + \" \" + \"home_content\",\n                    children: selectedHouseGirl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-81cb0623e461d1c8\" + \" \" + \"avatar\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        backgroundImage: \"url(\".concat(avatarImageUrl, \")\")\n                                    },\n                                    className: \"jsx-81cb0623e461d1c8\" + \" \" + \"image avatar_img\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-81cb0623e461d1c8\" + \" \" + \"details\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        style: {\n                                            color: \"deeppink\"\n                                        },\n                                        className: \"jsx-81cb0623e461d1c8\" + \" \" + \"name\",\n                                        children: selectedHouseGirl.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"jsx-81cb0623e461d1c8\" + \" \" + \"typer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_typed__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            strings: selectedHouseGirl.roles || [\n                                                \"House Girl\",\n                                                \"ZTA\",\n                                                \"insert adjectives\"\n                                            ],\n                                            loop: true,\n                                            typeSpeed: 80\n                                        }, void 0, false, {\n                                            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-81cb0623e461d1c8\" + \" \" + \"job\",\n                                        children: selectedHouseGirl.description || \"Description here...\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Social__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: requestLatePlate,\n                                        className: \"jsx-81cb0623e461d1c8\",\n                                        children: \"Request Late Plate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/ZTA/ZTA_Home.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"81cb0623e461d1c8\",\n                children: \".centered-container.jsx-81cb0623e461d1c8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;position:absolute;top:0;left:0;right:0;z-index:1}select.jsx-81cb0623e461d1c8{padding:8px 16px;font-size:1rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ZTA_Home, \"j7WLXGiTlhMxlwiX+LHQ/GAgMwI=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_5__.useTheme\n    ];\n});\n_c = ZTA_Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ZTA_Home);\nvar _c;\n$RefreshReg$(_c, \"ZTA_Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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X0UvLi9jb21wb25lbnRzL1pUQS9aVEFfSG9tZS5qc3g/ODlmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFR5cGVkIGZyb20gXCJyZWFjdC10eXBlZFwiO1xuaW1wb3J0IFNvY2lhbCBmcm9tIFwiLi4vU29jaWFsXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuXG5jb25zdCBaVEFfSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaG91c2VHaXJscywgc2V0SG91c2VHaXJsc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZEhvdXNlR2lybCwgc2V0U2VsZWN0ZWRIb3VzZUdpcmxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgcmVzb2x2ZWRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZldGNoIGxpc3Qgb2YgaG91c2UgZ2lybHMgZnJvbSB0aGUgQVBJXG4gICAgLy8gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvSG91c2VHaXJsTmFtZXMnKVxuICAgIGZldGNoKCdodHRwOi8vYjFuaC5jb20vYXBpL0hvdXNlR2lybE5hbWVzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0SG91c2VHaXJscyhkYXRhKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBob3VzZSBnaXJsczonLCBlcnJvcikpO1xuXG4gICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUhvdXNlR2lybFNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IGdpcmwgPSBob3VzZUdpcmxzLmZpbmQoaCA9PiBoLl9pZCA9PT0gaWQpO1xuICAgIHNldFNlbGVjdGVkSG91c2VHaXJsKGdpcmwpO1xuICB9O1xuXG4gIGNvbnN0IHJlcXVlc3RMYXRlUGxhdGUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSZXF1ZXN0aW5nIGxhdGUgcGxhdGUgZm9yXCIsIHNlbGVjdGVkSG91c2VHaXJsLm5hbWUpO1xuICAgIC8vIEhlcmUsIHlvdSBjYW4gc2VuZCBhIHJlcXVlc3QgdG8geW91ciBBUEkgdG8gaGFuZGxlIHRoZSBsYXRlIHBsYXRlIHJlcXVlc3RcbiAgfTtcblxuICBpZiAoIW1vdW50ZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGF2YXRhckltYWdlVXJsID0gc2VsZWN0ZWRIb3VzZUdpcmwgXG4gICAgPyBgL2ltZy9oZy8ke3NlbGVjdGVkSG91c2VHaXJsLm5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJykudG9Mb3dlckNhc2UoKX0uanBnYFxuICAgIDogbnVsbDsgLy8gc2V0IHRvIGEgZGVmYXVsdCBpbWFnZSBvciBrZWVwIGl0IG51bGwgaWYgeW91IGRvbid0IHdhbnQgdG8gc2hvdyBhbnkgaW1hZ2UgYmVmb3JlIHNlbGVjdGlvblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBEcm9wZG93biB0byBzZWxlY3QgSG91c2UgR2lybCAqL31cbiAgICAgIHshc2VsZWN0ZWRIb3VzZUdpcmwgJiYgKCAvLyBSZW5kZXIgdGhlIGRyb3Bkb3duIG9ubHkgaWYgbm8gaG91c2UgZ2lybCBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVIb3VzZUdpcmxTZWxlY3R9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24+U2VsZWN0IGEgSG91c2UgR2lybDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIHtob3VzZUdpcmxzLm1hcChnaXJsID0+IDxvcHRpb24ga2V5PXtnaXJsLl9pZH0gdmFsdWU9e2dpcmwuX2lkfT57Z2lybC5uYW1lfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2t5b190bV9ob21lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZV9jb250ZW50XCI+XG5cbiAgICAgICAgICB7c2VsZWN0ZWRIb3VzZUdpcmwgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZSBhdmF0YXJfaW1nXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2F2YXRhckltYWdlVXJsfSlgLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCIgc3R5bGU9e3sgY29sb3I6ICdkZWVwcGluaycgfX0+e3NlbGVjdGVkSG91c2VHaXJsLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidHlwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxUeXBlZFxuICAgICAgICAgICAgICAgICAgICBzdHJpbmdzPXtzZWxlY3RlZEhvdXNlR2lybC5yb2xlcyB8fCBbXCJIb3VzZSBHaXJsXCIsXCJaVEFcIixcImluc2VydCBhZGplY3RpdmVzXCJdfVxuICAgICAgICAgICAgICAgICAgICBsb29wXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGVlZD17ODB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiam9iXCI+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRIb3VzZUdpcmwuZGVzY3JpcHRpb24gfHwgJ0Rlc2NyaXB0aW9uIGhlcmUuLi4nfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8U29jaWFsIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXF1ZXN0TGF0ZVBsYXRlfT5SZXF1ZXN0IExhdGUgUGxhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2VudGVyZWQtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDsgLy8gVGhpcyB0YWtlcyB1cCB0aGUgZW50aXJlIHZpZXdwb3J0IGhlaWdodC5cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgei1pbmRleDogMTsgLy8gVGhpcyBlbnN1cmVzIHRoZSBjZW50ZXJlZCBjb250YWluZXIgaXMgYWJvdmUgdGhlIHRva3lvX3RtX2hvbWUgY29udGFpbmVyLlxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDsgLy8gQWRkZWQgc29tZSBwYWRkaW5nIGZvciBiZXR0ZXIgYXBwZWFyYW5jZS5cbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFpUQV9Ib21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUeXBlZCIsIlNvY2lhbCIsInVzZVRoZW1lIiwiWlRBX0hvbWUiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsImhvdXNlR2lybHMiLCJzZXRIb3VzZUdpcmxzIiwic2VsZWN0ZWRIb3VzZUdpcmwiLCJzZXRTZWxlY3RlZEhvdXNlR2lybCIsInJlc29sdmVkVGhlbWUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVIb3VzZUdpcmxTZWxlY3QiLCJldmVudCIsImlkIiwidGFyZ2V0IiwidmFsdWUiLCJnaXJsIiwiZmluZCIsImgiLCJfaWQiLCJyZXF1ZXN0TGF0ZVBsYXRlIiwibG9nIiwibmFtZSIsImF2YXRhckltYWdlVXJsIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZGl2Iiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJtYXAiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImgzIiwiY29sb3IiLCJoNCIsInN0cmluZ3MiLCJyb2xlcyIsImxvb3AiLCJ0eXBlU3BlZWQiLCJwIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ZTA/ZTA_Home.jsx\n"));

/***/ })

});