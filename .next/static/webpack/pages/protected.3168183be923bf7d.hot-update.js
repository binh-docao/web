"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/protected",{

/***/ "./components/PasswordRedirect.jsx":
/*!*****************************************!*\
  !*** ./components/PasswordRedirect.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst PasswordPage = ()=>{\n    _s();\n    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const verifyPassword = (e)=>{\n        e.preventDefault();\n        const formData = new FormData(form.current);\n        const enteredPassword = formData.get(\"password\");\n        const correctPassword = \"lebow\"; // Replace with your correct password\n        if (enteredPassword === correctPassword) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Redirecting...\", {\n                position: \"top-center\",\n                autoClose: 1500,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: false,\n                draggable: true,\n                progress: undefined\n            });\n            setTimeout(()=>{\n                window.location.href = \"https://www.instagram.com/vicsjpeg/\"; // Replace with your website\n            }, 2000); // 2000 milliseconds (or 2 seconds)\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Incorrect Password\", {\n                position: \"top-center\",\n                autoClose: 2000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: false,\n                draggable: true,\n                progress: undefined\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tokyo_tm_contact\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"tokyo_tm_title\",\n                        style: {},\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title_flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Protected\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Enter password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fields\",\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"password_form\",\n                            id: \"passwordForm\",\n                            ref: form,\n                            onSubmit: verifyPassword,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"first\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"password\",\n                                                name: \"password\",\n                                                placeholder: \"Enter Password\",\n                                                required: true,\n                                                style: {\n                                                    width: \"60%\",\n                                                    color: \"inherit\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"tokyo_tm_button\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"ib-button\",\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(PasswordPage, \"dQhLC9DEDZP9Q6oVJIWRdCVKDdw=\");\n_c = PasswordPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PasswordPage);\nvar _c;\n$RefreshReg$(_c, \"PasswordPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bhc3N3b3JkUmVkaXJlY3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBQ0M7QUFDUTtBQUUvQyxNQUFNRyxlQUFlLElBQU07O0lBQ3pCLE1BQU1DLE9BQU9ILDZDQUFNQTtJQUVuQixNQUFNSSxpQkFBaUIsQ0FBQ0MsSUFBTTtRQUM1QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxXQUFXLElBQUlDLFNBQVNMLEtBQUtNLE9BQU87UUFDMUMsTUFBTUMsa0JBQWtCSCxTQUFTSSxHQUFHLENBQUM7UUFFckMsTUFBTUMsa0JBQWtCLFNBQVUscUNBQXFDO1FBRXZFLElBQUlGLG9CQUFvQkUsaUJBQWlCO1lBQ3JDWCx5REFBYSxDQUFDLGtCQUFrQjtnQkFDNUJhLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLGlCQUFpQixLQUFLO2dCQUN0QkMsY0FBYyxJQUFJO2dCQUNsQkMsY0FBYyxLQUFLO2dCQUNuQkMsV0FBVyxJQUFJO2dCQUNmQyxVQUFVQztZQUNaO1lBQ0FDLFdBQVcsSUFBTTtnQkFDZkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsdUNBQXVDLDRCQUE0QjtZQUM5RixHQUFHLE9BQU8sbUNBQW1DO1FBQ2pELE9BQU87WUFDTHhCLHVEQUFXLENBQUMsc0JBQXNCO2dCQUNoQ2EsVUFBVTtnQkFDVkMsV0FBVztnQkFDWEMsaUJBQWlCLEtBQUs7Z0JBQ3RCQyxjQUFjLElBQUk7Z0JBQ2xCQyxjQUFjLEtBQUs7Z0JBQ25CQyxXQUFXLElBQUk7Z0JBQ2ZDLFVBQVVDO1lBQ1o7UUFFRixDQUFDO0lBQ0g7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ007WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTt3QkFBaUJDLE9BQU8sQ0FBQztrQ0FDdEMsNEVBQUNGOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNFO2tEQUFLOzs7Ozs7a0RBQ04sOERBQUNDO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1WLDhEQUFDSjt3QkFBSUMsV0FBVTt3QkFBU0MsT0FBTzs0QkFBRUcsV0FBVzt3QkFBUztrQ0FDbkQsNEVBQUM3Qjs0QkFDQ3lCLFdBQVU7NEJBQ1ZLLElBQUc7NEJBQ0hDLEtBQUsvQjs0QkFDTGdDLFVBQVUvQjs7OENBRVYsOERBQUN1QjtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ1E7a0RBQ0MsNEVBQUNDO3NEQUNDLDRFQUFDQztnREFDQ0MsTUFBSztnREFDTEMsTUFBSztnREFDTEMsYUFBWTtnREFDWkMsUUFBUTtnREFDUmIsT0FBTztvREFBRWMsT0FBTztvREFBT0MsT0FBTztnREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQU1oRCw4REFBQ2pCO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDaUI7d0NBQU9OLE1BQUs7d0NBQVNYLFdBQVU7a0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjNUQ7R0F2Rk0xQjtLQUFBQTtBQXlGTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bhc3N3b3JkUmVkaXJlY3QuanN4P2QwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcblxuY29uc3QgUGFzc3dvcmRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gdXNlUmVmKCk7XG4gIFxuICBjb25zdCB2ZXJpZnlQYXNzd29yZCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0uY3VycmVudCk7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIik7XG4gICAgXG4gICAgY29uc3QgY29ycmVjdFBhc3N3b3JkID0gXCJsZWJvd1wiOyAgLy8gUmVwbGFjZSB3aXRoIHlvdXIgY29ycmVjdCBwYXNzd29yZFxuXG4gICAgaWYgKGVudGVyZWRQYXNzd29yZCA9PT0gY29ycmVjdFBhc3N3b3JkKSB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJSZWRpcmVjdGluZy4uLlwiLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IDE1MDAsXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS92aWNzanBlZy9cIjsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgd2Vic2l0ZVxuICAgICAgICB9LCAyMDAwKTsgLy8gMjAwMCBtaWxsaXNlY29uZHMgKG9yIDIgc2Vjb25kcylcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QuZXJyb3IoXCJJbmNvcnJlY3QgUGFzc3dvcmRcIiwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXG4gICAgICAgIGF1dG9DbG9zZTogMjAwMCxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gICAgICB9KTtcblxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva3lvX3RtX2NvbnRhY3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva3lvX3RtX3RpdGxlXCIgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Qcm90ZWN0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPkVudGVyIHBhc3N3b3JkPC9oMz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogRU5EIFRJVExFICovfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFzc3dvcmRfZm9ybVwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRGb3JtXCJcbiAgICAgICAgICAgICAgcmVmPXtmb3JtfVxuICAgICAgICAgICAgICBvblN1Ym1pdD17dmVyaWZ5UGFzc3dvcmR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNjAlJywgY29sb3I6ICdpbmhlcml0JyB9fSAgLy8gU2V0IHRoZSB3aWR0aCBhbmQgY29sb3IgaGVyZVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIHsvKiBFTkQgUEFTU1dPUkQgKi99XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9reW9fdG1fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiaWItYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiBFTkQgU1VCTUlUIEJVVFRPTiAqL31cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIHsvKiBFTkQgRk9STSAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogRU5EIEZJRUxEUyAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBFTkQgUEFTU1dPUkQgVkVSSUZJQ0FUSU9OICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidG9hc3QiLCJQYXNzd29yZFBhZ2UiLCJmb3JtIiwidmVyaWZ5UGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudCIsImVudGVyZWRQYXNzd29yZCIsImdldCIsImNvcnJlY3RQYXNzd29yZCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzcGFuIiwiaDMiLCJ0ZXh0QWxpZ24iLCJpZCIsInJlZiIsIm9uU3VibWl0IiwidWwiLCJsaSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwid2lkdGgiLCJjb2xvciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PasswordRedirect.jsx\n"));

/***/ })

});