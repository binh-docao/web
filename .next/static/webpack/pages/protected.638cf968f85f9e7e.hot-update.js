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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst PasswordPage = ()=>{\n    _s();\n    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [passwordType, setPasswordType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"password\");\n    const verifyPassword = (e)=>{\n        e.preventDefault();\n        const formData = new FormData(form.current);\n        const enteredPassword = formData.get(\"password\");\n        const correctPassword = \"lebow\"; // Replace with your correct password\n        if (enteredPassword === correctPassword) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Redirecting...\", {\n                position: \"top-center\",\n                autoClose: 1500,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: false,\n                draggable: true,\n                progress: undefined\n            });\n            setTimeout(()=>{\n                window.location.href = \"https://www.instagram.com/vicsjpeg/\"; // Replace with your website\n            }, 2200); // 2000 milliseconds (or 2 seconds)\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Incorrect Password\", {\n                position: \"top-center\",\n                autoClose: 1500,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: false,\n                draggable: true,\n                progress: undefined\n            });\n        }\n    };\n    const togglePasswordVisibility = ()=>{\n        setPasswordType(passwordType === \"password\" ? \"text\" : \"password\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tokyo_tm_contact\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"tokyo_tm_title\",\n                        style: {},\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title_flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Protected\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Enter password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fields\",\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"password_form\",\n                            id: \"passwordForm\",\n                            ref: form,\n                            onSubmit: verifyPassword,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"first\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: passwordType,\n                                                    name: \"password\",\n                                                    placeholder: \"Enter Password\",\n                                                    required: true,\n                                                    style: {\n                                                        width: \"60%\",\n                                                        color: \"inherit\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"s\",\n                                                    onClick: togglePasswordVisibility,\n                                                    children: passwordType === \"password\" ? \"Show\" : \"Hide\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"tokyo_tm_button\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"ib-button\",\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/binhdocao/Documents/Binh's Portfolio/components/PasswordRedirect.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(PasswordPage, \"4zNqFbAu2npc0xcv7Omib4Lw+c8=\");\n_c = PasswordPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PasswordPage);\nvar _c;\n$RefreshReg$(_c, \"PasswordPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bhc3N3b3JkUmVkaXJlY3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQStDO0FBQ1I7QUFDUTtBQUUvQyxNQUFNSSxlQUFlLElBQU07O0lBQ3pCLE1BQU1DLE9BQU9KLDZDQUFNQTtJQUNuQixNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNTSxpQkFBaUIsQ0FBQ0MsSUFBTTtRQUM1QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxXQUFXLElBQUlDLFNBQVNQLEtBQUtRLE9BQU87UUFDMUMsTUFBTUMsa0JBQWtCSCxTQUFTSSxHQUFHLENBQUM7UUFFckMsTUFBTUMsa0JBQWtCLFNBQVUscUNBQXFDO1FBRXZFLElBQUlGLG9CQUFvQkUsaUJBQWlCO1lBQ3JDYix5REFBYSxDQUFDLGtCQUFrQjtnQkFDNUJlLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLGlCQUFpQixLQUFLO2dCQUN0QkMsY0FBYyxJQUFJO2dCQUNsQkMsY0FBYyxLQUFLO2dCQUNuQkMsV0FBVyxJQUFJO2dCQUNmQyxVQUFVQztZQUNaO1lBQ0FDLFdBQVcsSUFBTTtnQkFDZkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsdUNBQXVDLDRCQUE0QjtZQUM5RixHQUFHLE9BQU8sbUNBQW1DO1FBQ2pELE9BQU87WUFDTDFCLHVEQUFXLENBQUMsc0JBQXNCO2dCQUNoQ2UsVUFBVTtnQkFDVkMsV0FBVztnQkFDWEMsaUJBQWlCLEtBQUs7Z0JBQ3RCQyxjQUFjLElBQUk7Z0JBQ2xCQyxjQUFjLEtBQUs7Z0JBQ25CQyxXQUFXLElBQUk7Z0JBQ2ZDLFVBQVVDO1lBQ1o7UUFFRixDQUFDO0lBQ0g7SUFFQSxNQUFNTSwyQkFBMkIsSUFBTTtRQUNyQ3hCLGdCQUFnQkQsaUJBQWlCLGFBQWEsU0FBUyxVQUFVO0lBQ25FO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUMwQjtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO3dCQUFpQkMsT0FBTyxDQUFDO2tDQUN0Qyw0RUFBQ0Y7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0U7a0RBQUs7Ozs7OztrREFDTiw4REFBQ0M7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTVYsOERBQUNKO3dCQUFJQyxXQUFVO3dCQUFTQyxPQUFPOzRCQUFFRyxXQUFXO3dCQUFTO2tDQUNuRCw0RUFBQ2hDOzRCQUNDNEIsV0FBVTs0QkFDVkssSUFBRzs0QkFDSEMsS0FBS2xDOzRCQUNMbUMsVUFBVWhDOzs4Q0FFViw4REFBQ3dCO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDUTtrREFDQyw0RUFBQ0M7OzhEQUNDLDhEQUFDQztvREFDQ0MsTUFBTXRDO29EQUNOdUMsTUFBSztvREFDTEMsYUFBWTtvREFDWkMsUUFBUTtvREFDUmIsT0FBTzt3REFBRWMsT0FBTzt3REFBT0MsT0FBTztvREFBVTs7Ozs7OzhEQUUxQyw4REFBQ0M7b0RBQU9OLE1BQUs7b0RBQUlPLFNBQVNwQjs4REFDdkJ6QixpQkFBaUIsYUFBYSxTQUFTLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBTXRELDhEQUFDMEI7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNpQjt3Q0FBT04sTUFBSzt3Q0FBU1gsV0FBVTtrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWM1RDtHQS9GTTdCO0tBQUFBO0FBaUdOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFzc3dvcmRSZWRpcmVjdC5qc3g/ZDA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5jb25zdCBQYXNzd29yZFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSB1c2VSZWYoKTtcbiAgY29uc3QgW3Bhc3N3b3JkVHlwZSwgc2V0UGFzc3dvcmRUeXBlXSA9IHVzZVN0YXRlKFwicGFzc3dvcmRcIik7XG5cbiAgY29uc3QgdmVyaWZ5UGFzc3dvcmQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtLmN1cnJlbnQpO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpO1xuICAgIFxuICAgIGNvbnN0IGNvcnJlY3RQYXNzd29yZCA9IFwibGVib3dcIjsgIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGNvcnJlY3QgcGFzc3dvcmRcblxuICAgIGlmIChlbnRlcmVkUGFzc3dvcmQgPT09IGNvcnJlY3RQYXNzd29yZCkge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUmVkaXJlY3RpbmcuLi5cIiwge1xuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxuICAgICAgICAgICAgYXV0b0Nsb3NlOiAxNTAwLFxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdmljc2pwZWcvXCI7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIHdlYnNpdGVcbiAgICAgICAgfSwgMjIwMCk7IC8vIDIwMDAgbWlsbGlzZWNvbmRzIChvciAyIHNlY29uZHMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0LmVycm9yKFwiSW5jb3JyZWN0IFBhc3N3b3JkXCIsIHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDE1MDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgICAgfSk7XG5cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIHNldFBhc3N3b3JkVHlwZShwYXNzd29yZFR5cGUgPT09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva3lvX3RtX2NvbnRhY3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva3lvX3RtX3RpdGxlXCIgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Qcm90ZWN0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPkVudGVyIHBhc3N3b3JkPC9oMz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogRU5EIFRJVExFICovfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFzc3dvcmRfZm9ybVwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRGb3JtXCJcbiAgICAgICAgICAgICAgcmVmPXtmb3JtfVxuICAgICAgICAgICAgICBvblN1Ym1pdD17dmVyaWZ5UGFzc3dvcmR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3Bhc3N3b3JkVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc2MCUnLCBjb2xvcjogJ2luaGVyaXQnIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInNcIiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9PlxuICAgICAgICAgICAgICAgICAgICAgIHtwYXNzd29yZFR5cGUgPT09IFwicGFzc3dvcmRcIiA/IFwiU2hvd1wiIDogXCJIaWRlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIHsvKiBFTkQgUEFTU1dPUkQgKi99XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9reW9fdG1fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiaWItYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiBFTkQgU1VCTUlUIEJVVFRPTiAqL31cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIHsvKiBFTkQgRk9STSAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogRU5EIEZJRUxEUyAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBFTkQgUEFTU1dPUkQgVkVSSUZJQ0FUSU9OICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ0b2FzdCIsIlBhc3N3b3JkUGFnZSIsImZvcm0iLCJwYXNzd29yZFR5cGUiLCJzZXRQYXNzd29yZFR5cGUiLCJ2ZXJpZnlQYXNzd29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50IiwiZW50ZXJlZFBhc3N3b3JkIiwiZ2V0IiwiY29ycmVjdFBhc3N3b3JkIiwic3VjY2VzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInNwYW4iLCJoMyIsInRleHRBbGlnbiIsImlkIiwicmVmIiwib25TdWJtaXQiLCJ1bCIsImxpIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ3aWR0aCIsImNvbG9yIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PasswordRedirect.jsx\n"));

/***/ })

});