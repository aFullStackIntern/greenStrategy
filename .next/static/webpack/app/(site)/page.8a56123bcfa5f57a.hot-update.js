"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(site)/page",{

/***/ "(app-pages-browser)/./app/components/services/Services.jsx":
/*!**********************************************!*\
  !*** ./app/components/services/Services.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/Navbar */ \"(app-pages-browser)/./app/components/navbar/Navbar.jsx\");\n/* harmony import */ var _home_parts_serviceData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/parts/serviceData */ \"(app-pages-browser)/./app/components/home/parts/serviceData.js\");\n/* harmony import */ var _home_parts_ServiceCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/parts/ServiceCard */ \"(app-pages-browser)/./app/components/home/parts/ServiceCard.jsx\");\n\n\n\n\n\nfunction Services() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        padding: {\n            xs: \"20px 20px\",\n            md: \"50px 50px\"\n        },\n        backgroundColor: \"black\",\n        color: \"white\",\n        gap: \"30px\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            direction: {\n                xs: \"column\",\n                md: \"row\"\n            },\n            sx: {\n                justifyContent: \"space-between\",\n                flexWrap: \"wrap\"\n            },\n            children: _home_parts_serviceData__WEBPACK_IMPORTED_MODULE_2__.serviceData.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_parts_ServiceCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    name: el.name,\n                    data: el.data\n                }, el.id, false, {\n                    fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/services/Services.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/services/Services.jsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/services/Services.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Services;\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL1NlcnZpY2VzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBQ2pCO0FBQ2tCO0FBQ0o7QUFFckMsU0FBU007SUFDdEIscUJBQ0UsOERBQUNKLGdHQUFLQTtRQUNKSyxTQUFTO1lBQ1BDLElBQUk7WUFDSkMsSUFBSTtRQUNOO1FBQ0FDLGlCQUFpQjtRQUNqQkMsT0FBTztRQUNQQyxLQUFLO2tCQTZCTCw0RUFBQ1YsZ0dBQUtBO1lBQ0pXLFdBQVc7Z0JBQ1RMLElBQUk7Z0JBQ0pDLElBQUk7WUFDTjtZQUNBSyxJQUFJO2dCQUFFQyxnQkFBZ0I7Z0JBQWlCQyxVQUFVO1lBQU87c0JBRXZEWixnRUFBV0EsQ0FBQ2EsR0FBRyxDQUFDLENBQUNDLG1CQUNoQiw4REFBQ2IsK0RBQVdBO29CQUFDYyxNQUFNRCxHQUFHQyxJQUFJO29CQUFFQyxNQUFNRixHQUFHRSxJQUFJO21CQUFPRixHQUFHRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUFLL0Q7S0FuRHdCZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9TZXJ2aWNlcy5qc3g/NzRkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHksIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL25hdmJhci9OYXZiYXJcIjtcbmltcG9ydCB7IHNlcnZpY2VEYXRhIH0gZnJvbSBcIi4uL2hvbWUvcGFydHMvc2VydmljZURhdGFcIjtcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tIFwiLi4vaG9tZS9wYXJ0cy9TZXJ2aWNlQ2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlcygpIHtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIHBhZGRpbmc9e3tcbiAgICAgICAgeHM6IFwiMjBweCAyMHB4XCIsXG4gICAgICAgIG1kOiBcIjUwcHggNTBweFwiLFxuICAgICAgfX1cbiAgICAgIGJhY2tncm91bmRDb2xvcj17XCJibGFja1wifVxuICAgICAgY29sb3I9e1wid2hpdGVcIn1cbiAgICAgIGdhcD17XCIzMHB4XCJ9XG4gICAgPlxuICAgICAgey8qIDxoMlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGNvbG9yOiBcImxpbWVncmVlblwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgT3VyIFNlcnZpY2VzXG4gICAgICA8L2gyPiAqL31cbiAgICAgIHsvKiA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifT5cbiAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXN0cm9rZVwiXG4gICAgICAgICAgZm9udFNpemU9e1wiNzBweFwifVxuICAgICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgIGZvbnRXZWlnaHQ9e1wiYm9sZFwifVxuICAgICAgICAgIGxpbmVIZWlnaHQ9ezF9XG4gICAgICAgICAgZm9udEZhbWlseT0ge1wiTG9yYVwifVxuICAgICAgICA+XG4gICAgICAgICAgV2UgQXJlJm5ic3A7XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMDA4RDQ2XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBmb250U2l6ZTogXCI3MHB4XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE9mZmVyaW5nOi1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9TdGFjaz4gKi99XG4gICAgICA8U3RhY2tcbiAgICAgICAgZGlyZWN0aW9uPXt7XG4gICAgICAgICAgeHM6IFwiY29sdW1uXCIsXG4gICAgICAgICAgbWQ6IFwicm93XCIsXG4gICAgICAgIH19XG4gICAgICAgIHN4PXt7IGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgZmxleFdyYXA6IFwid3JhcFwiIH19XG4gICAgICA+XG4gICAgICAgIHtzZXJ2aWNlRGF0YS5tYXAoKGVsKSA9PiAoXG4gICAgICAgICAgPFNlcnZpY2VDYXJkIG5hbWU9e2VsLm5hbWV9IGRhdGE9e2VsLmRhdGF9IGtleT17ZWwuaWR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9TdGFjaz5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJveCIsIlR5cG9ncmFwaHkiLCJTdGFjayIsIk5hdmJhciIsInNlcnZpY2VEYXRhIiwiU2VydmljZUNhcmQiLCJTZXJ2aWNlcyIsInBhZGRpbmciLCJ4cyIsIm1kIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJnYXAiLCJkaXJlY3Rpb24iLCJzeCIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJtYXAiLCJlbCIsIm5hbWUiLCJkYXRhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/services/Services.jsx\n"));

/***/ })

});