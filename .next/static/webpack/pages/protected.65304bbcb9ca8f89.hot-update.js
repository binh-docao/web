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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst PasswordPage = ()=>{\n    _s();\n    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const verifyPassword = (e)=>{\n        e.preventDefault();\n        const formData = new FormData(form.current);\n        const enteredPassword = formData.get(\"password\");\n        const correctPassword = \"YourCorrectPassword\"; // Replace with your correct password\n        if (enteredPassword === correctPassword) {\n            window.location.href = \"https://www.yourwebsite.com\"; // Replace with your website\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Incorrect Password\", {\n                position: \"top-right\",\n                autoClose: 2000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tokyo_tm_contact\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"tokyo_tm_title\",\n                        style: {},\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title_flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"P\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Enter password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fields\",\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"password_form\",\n                            id: \"passwordForm\",\n                            ref: form,\n                            onSubmit: verifyPassword,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"first\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"password\",\n                                                name: \"password\",\n                                                placeholder: \"Enter Password\",\n                                                required: true,\n                                                style: {\n                                                    width: \"80%\",\n                                                    color: \"inherit\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"tokyo_tm_button\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"ib-button\",\n                                        children: \"Verify\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(PasswordPage, \"dQhLC9DEDZP9Q6oVJIWRdCVKDdw=\");\n_c = PasswordPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PasswordPage);\nvar _c;\n$RefreshReg$(_c, \"PasswordPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bhc3N3b3JkUmVkaXJlY3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBQ0M7QUFDUTtBQUUvQyxNQUFNRyxlQUFlLElBQU07O0lBQ3pCLE1BQU1DLE9BQU9ILDZDQUFNQTtJQUVuQixNQUFNSSxpQkFBaUIsQ0FBQ0MsSUFBTTtRQUM1QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxXQUFXLElBQUlDLFNBQVNMLEtBQUtNLE9BQU87UUFDMUMsTUFBTUMsa0JBQWtCSCxTQUFTSSxHQUFHLENBQUM7UUFFckMsTUFBTUMsa0JBQWtCLHVCQUF3QixxQ0FBcUM7UUFFckYsSUFBSUYsb0JBQW9CRSxpQkFBaUI7WUFDdkNDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLCtCQUErQiw0QkFBNEI7UUFDcEYsT0FBTztZQUNMZCx1REFBVyxDQUFDLHNCQUFzQjtnQkFDaENnQixVQUFVO2dCQUNWQyxXQUFXO2dCQUNYQyxpQkFBaUIsS0FBSztnQkFDdEJDLGNBQWMsSUFBSTtnQkFDbEJDLGNBQWMsSUFBSTtnQkFDbEJDLFdBQVcsSUFBSTtnQkFDZkMsVUFBVUM7WUFDWjtRQUNGLENBQUM7SUFDSDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO3dCQUFpQkMsT0FBTyxDQUFDO2tDQUN0Qyw0RUFBQ0Y7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0U7a0RBQUs7Ozs7OztrREFDTiw4REFBQ0M7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTVYsOERBQUNKO3dCQUFJQyxXQUFVO3dCQUFTQyxPQUFPOzRCQUFFRyxXQUFXO3dCQUFTO2tDQUNuRCw0RUFBQzNCOzRCQUNDdUIsV0FBVTs0QkFDVkssSUFBRzs0QkFDSEMsS0FBSzdCOzRCQUNMOEIsVUFBVTdCOzs4Q0FFViw4REFBQ3FCO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDUTtrREFDQyw0RUFBQ0M7c0RBQ0MsNEVBQUNDO2dEQUNDQyxNQUFLO2dEQUNMQyxNQUFLO2dEQUNMQyxhQUFZO2dEQUNaQyxRQUFRO2dEQUNSYixPQUFPO29EQUFFYyxPQUFPO29EQUFPQyxPQUFPO2dEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBTWhELDhEQUFDakI7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNpQjt3Q0FBT04sTUFBSzt3Q0FBU1gsV0FBVTtrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWM1RDtHQTNFTXhCO0tBQUFBO0FBNkVOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFzc3dvcmRSZWRpcmVjdC5qc3g/ZDA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5jb25zdCBQYXNzd29yZFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSB1c2VSZWYoKTtcbiAgXG4gIGNvbnN0IHZlcmlmeVBhc3N3b3JkID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybS5jdXJyZW50KTtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKTtcbiAgICBcbiAgICBjb25zdCBjb3JyZWN0UGFzc3dvcmQgPSBcIllvdXJDb3JyZWN0UGFzc3dvcmRcIjsgIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGNvcnJlY3QgcGFzc3dvcmRcblxuICAgIGlmIChlbnRlcmVkUGFzc3dvcmQgPT09IGNvcnJlY3RQYXNzd29yZCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnlvdXJ3ZWJzaXRlLmNvbVwiOyAvLyBSZXBsYWNlIHdpdGggeW91ciB3ZWJzaXRlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0LmVycm9yKFwiSW5jb3JyZWN0IFBhc3N3b3JkXCIsIHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgIGF1dG9DbG9zZTogMjAwMCxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva3lvX3RtX2NvbnRhY3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva3lvX3RtX3RpdGxlXCIgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5QPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz5FbnRlciBwYXNzd29yZDwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIEVORCBUSVRMRSAqL31cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhc3N3b3JkX2Zvcm1cIlxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkRm9ybVwiXG4gICAgICAgICAgICAgIHJlZj17Zm9ybX1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3ZlcmlmeVBhc3N3b3JkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzgwJScsIGNvbG9yOiAnaW5oZXJpdCcgfX0gIC8vIFNldCB0aGUgd2lkdGggYW5kIGNvbG9yIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICB7LyogRU5EIFBBU1NXT1JEICovfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva3lvX3RtX2J1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImliLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgVmVyaWZ5XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogRU5EIFNVQk1JVCBCVVRUT04gKi99XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB7LyogRU5EIEZPUk0gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIEVORCBGSUVMRFMgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogRU5EIFBBU1NXT1JEIFZFUklGSUNBVElPTiAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInRvYXN0IiwiUGFzc3dvcmRQYWdlIiwiZm9ybSIsInZlcmlmeVBhc3N3b3JkIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnQiLCJlbnRlcmVkUGFzc3dvcmQiLCJnZXQiLCJjb3JyZWN0UGFzc3dvcmQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInNwYW4iLCJoMyIsInRleHRBbGlnbiIsImlkIiwicmVmIiwib25TdWJtaXQiLCJ1bCIsImxpIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ3aWR0aCIsImNvbG9yIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PasswordRedirect.jsx\n"));

/***/ })

});