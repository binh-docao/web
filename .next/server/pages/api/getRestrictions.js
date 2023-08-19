"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getRestrictions";
exports.ids = ["pages/api/getRestrictions"];
exports.modules = {

/***/ "(api)/./pages/api/getRestrictions.js":
/*!**************************************!*\
  !*** ./pages/api/getRestrictions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Inside pages/api/houseGirls.js\nasync function handler(req, res) {\n    if (!req.query.name) {\n        return res.status(400).json({\n            error: \"Name query parameter is required\"\n        });\n    }\n    try {\n        const response = await fetch(\"https://data.mongodb-api.com/app/data-dsllj/endpoint/data/v1/action/findOne\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Access-Control-Request-Headers\": \"*\",\n                \"api-key\": process.env.MONGODB_API_KEY\n            },\n            body: JSON.stringify({\n                collection: \"housegirls\",\n                database: \"test\",\n                dataSource: \"Cluster0\",\n                filter: {\n                    \"name\": req.query.name\n                },\n                projection: {\n                    \"_id\": 1,\n                    \"name\": 1,\n                    \"dietaryRestrictions\": 1\n                } // projecting the dietaryRestrictions\n            })\n        });\n        const data = await response.json();\n        console.log(\"Request received\", req.query);\n        if (!data.document) {\n            return res.status(404).json({\n                error: \"Housegirl not found\"\n            });\n        }\n        res.status(200).json(data.document.dietaryRestrictions);\n        console.log(\"MongoDB response\", data);\n        res.status(200).json(data[0].dietaryRestrictions); // Assuming the dietaryRestrictions is an array or object.\n    } catch (error) {\n        res.status(500).json({\n            error: \"Failed fetching data from MongoDB Atlas\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UmVzdHJpY3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpQ0FBaUM7QUFFbEIsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSSxDQUFDRCxJQUFJRSxLQUFLLENBQUNDLElBQUksRUFBRTtRQUNuQixPQUFPRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBbUM7SUFDMUUsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sK0VBQStFO1lBQzFHQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixrQ0FBa0M7Z0JBQ2xDLFdBQVdDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtZQUN4QztZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CQyxZQUFZO2dCQUNaQyxVQUFVO2dCQUNWQyxZQUFZO2dCQUNaQyxRQUFRO29CQUFFLFFBQVFwQixJQUFJRSxLQUFLLENBQUNDLElBQUk7Z0JBQUM7Z0JBQ2pDa0IsWUFBWTtvQkFBRSxPQUFPO29CQUFHLFFBQVE7b0JBQUcsdUJBQXVCO2dCQUFFLEVBQUUscUNBQXFDO1lBQ3JHO1FBQ0Y7UUFFQSxNQUFNQyxPQUFPLE1BQU1mLFNBQVNGLElBQUk7UUFDaENrQixRQUFRQyxHQUFHLENBQUMsb0JBQW9CeEIsSUFBSUUsS0FBSztRQUd6QyxJQUFJLENBQUNvQixLQUFLRyxRQUFRLEVBQUU7WUFDbEIsT0FBT3hCLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBc0I7UUFDL0QsQ0FBQztRQUNETCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDaUIsS0FBS0csUUFBUSxDQUFDQyxtQkFBbUI7UUFFcERILFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JGO1FBR2hDckIsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ2lCLElBQUksQ0FBQyxFQUFFLENBQUNJLG1CQUFtQixHQUFJLDBEQUEwRDtJQUNoSCxFQUFFLE9BQU9wQixPQUFPO1FBQ2RMLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUEwQztJQUMxRTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2t5by1uZXh0anMvLi9wYWdlcy9hcGkvZ2V0UmVzdHJpY3Rpb25zLmpzPzZkMDMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5zaWRlIHBhZ2VzL2FwaS9ob3VzZUdpcmxzLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBpZiAoIXJlcS5xdWVyeS5uYW1lKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ05hbWUgcXVlcnkgcGFyYW1ldGVyIGlzIHJlcXVpcmVkJyB9KTtcbiAgICB9XG4gIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RhdGEubW9uZ29kYi1hcGkuY29tL2FwcC9kYXRhLWRzbGxqL2VuZHBvaW50L2RhdGEvdjEvYWN0aW9uL2ZpbmRPbmUnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1IZWFkZXJzJzogJyonLFxuICAgICAgICAgICdhcGkta2V5JzogcHJvY2Vzcy5lbnYuTU9OR09EQl9BUElfS0VZLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogXCJob3VzZWdpcmxzXCIsXG4gICAgICAgICAgZGF0YWJhc2U6IFwidGVzdFwiLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IFwiQ2x1c3RlcjBcIixcbiAgICAgICAgICBmaWx0ZXI6IHsgXCJuYW1lXCI6IHJlcS5xdWVyeS5uYW1lIH0sIC8vIGZpbHRlciBieSB0aGUgaG91c2VnaXJsJ3MgbmFtZVxuICAgICAgICAgIHByb2plY3Rpb246IHsgXCJfaWRcIjogMSwgXCJuYW1lXCI6IDEsIFwiZGlldGFyeVJlc3RyaWN0aW9uc1wiOiAxIH0gLy8gcHJvamVjdGluZyB0aGUgZGlldGFyeVJlc3RyaWN0aW9uc1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gIFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IHJlY2VpdmVkJywgcmVxLnF1ZXJ5KTtcblxuXG4gICAgICBpZiAoIWRhdGEuZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdIb3VzZWdpcmwgbm90IGZvdW5kJyB9KTtcbiAgICB9XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YS5kb2N1bWVudC5kaWV0YXJ5UmVzdHJpY3Rpb25zKTtcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIHJlc3BvbnNlJywgZGF0YSk7XG5cbiAgXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhWzBdLmRpZXRhcnlSZXN0cmljdGlvbnMpOyAgLy8gQXNzdW1pbmcgdGhlIGRpZXRhcnlSZXN0cmljdGlvbnMgaXMgYW4gYXJyYXkgb3Igb2JqZWN0LlxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIGZldGNoaW5nIGRhdGEgZnJvbSBNb25nb0RCIEF0bGFzJyB9KTtcbiAgICB9XG4gIH1cbiAgIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsIm5hbWUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX0FQSV9LRVkiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbGxlY3Rpb24iLCJkYXRhYmFzZSIsImRhdGFTb3VyY2UiLCJmaWx0ZXIiLCJwcm9qZWN0aW9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImRpZXRhcnlSZXN0cmljdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getRestrictions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getRestrictions.js"));
module.exports = __webpack_exports__;

})();