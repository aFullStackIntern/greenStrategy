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

/***/ "(app-pages-browser)/./app/components/footer/Footer.jsx":
/*!******************************************!*\
  !*** ./app/components/footer/Footer.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_assets_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/assets/2.png */ \"(app-pages-browser)/./public/assets/2.png\");\n/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Email */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Email.js\");\n/* harmony import */ var _mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/LocationOn */ \"(app-pages-browser)/./node_modules/@mui/icons-material/LocationOn.js\");\n/* harmony import */ var _mui_icons_material_LocalPhone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/LocalPhone */ \"(app-pages-browser)/./node_modules/@mui/icons-material/LocalPhone.js\");\n/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Instagram */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Instagram.js\");\n\n\n\n\n\n\n\n\n\n\nfunction Footer() {\n    return(// <Stack\n    //   width={\"100%\"}\n    //   direction={\"row\"}\n    //   sx={{ justifyContent: \"space-between\", borderTop: \"1px solid #dddddd\" }}\n    //   backgroundColor={\"black\"}\n    //   color={\"#ddd\"}\n    //   padding={\"100px 70px\"}\n    // >\n    //   <Stack fontSize={\"1.6rem\"} gap={\"15px\"}>\n    //     <Image src={logo} alt=\"\" width={250} height={50} />\n    //     <Stack direction={\"row\"} gap={\"10px\"}>\n    //       <InstagramIcon className=\"icon\" />\n    //       <FacebookIcon className=\"icon\" />\n    //       <XIcon className=\"icon\" />\n    //       <LinkedInIcon className=\"icon\" />\n    //     </Stack>\n    //     <Typography>All Rights Reserved.</Typography>\n    //   </Stack>\n    //   <Box\n    //     sx={{ width: \"1px\", height: \"150px\", backgroundColor: \"white\" }}\n    //   ></Box>\n    //   <Stack gap={\"5px\"} className=\"expanding-link\" fontSize={\"0.9rem\"}>\n    //     <Typography\n    //       fontWeight={\"bold\"}\n    //       sx={{ marginBottom: \"5px\", fontSize: \"1.2rem\" }}\n    //     >\n    //       Services:{\" \"}\n    //     </Typography>\n    //     <Link href={\"/\"} style={{ textDecoration: \"none\", color: \"#ddd\" }}>\n    //       Market Research\n    //     </Link>\n    //     <Link href={\"/\"} style={{ textDecoration: \"none\", color: \"#ddd\" }}>\n    //       Data Analysis\n    //     </Link>\n    //     <Link href={\"/\"} style={{ textDecoration: \"none\", color: \"#ddd\" }}>\n    //       Digital Marketing\n    //     </Link>\n    //     <Link href={\"/\"} style={{ textDecoration: \"none\", color: \"#ddd\" }}>\n    //       Web Development\n    //     </Link>\n    //   </Stack>\n    //   <Stack gap={\"5px\"} className=\"expanding-link\" fontSize={\"0.9rem\"}>\n    //     <Typography\n    //       sx={{ marginBottom: \"5px\", fontSize: \"1.2rem\" }}\n    //       fontWeight={\"bold\"}\n    //     >\n    //       Quick links:\n    //     </Typography>\n    //     <Link href={\"/\"} style={{ textDecoration: \"none\", color: \"#ddd\" }}>\n    //       Home\n    //     </Link>\n    //     <Link href={\"/About\"} style={{ textDecoration: \"none\", color: \"#ddd\" }}>\n    //       About\n    //     </Link>\n    //     <Link\n    //       href={\"/Contacts\"}\n    //       style={{ textDecoration: \"none\", color: \"#ddd\" }}\n    //     >\n    //       Contacts\n    //     </Link>\n    //   </Stack>\n    //   <Box\n    //     sx={{ width: \"1px\", height: \"150px\", backgroundColor: \"white\" }}\n    //   ></Box>\n    //   <Stack gap={\"15px\"}>\n    //     <Typography color={\"#ddd\"} fontSize={\"1.2rem\"} fontWeight={\"bold\"}>\n    //       Subscribe to our newsletter:{\" \"}\n    //     </Typography>\n    //     <Stack direction={\"row\"} gap={\"10px\"}>\n    //       <input\n    //         required\n    //         style={{\n    //           backgroundColor: \"black\",\n    //           color: \"#ddd\",\n    //           padding: \"5px 0 5px 15px\",\n    //           height: \"50px\",\n    //           outline: \"none\",\n    //           borderRadius: \"10px\",\n    //           border: \"1px solid #ddd\",\n    //         }}\n    //         placeholder=\"johnDoe@gmail.com\"\n    //       />\n    //       <button className=\"btn-black\">Subscibe</button>\n    //     </Stack>\n    //   </Stack>\n    // </Stack>\n    // <>\n    //   <Stack\n    //     direction={\"row\"}\n    //     justifyContent={\"space-around\"}\n    //     p={\"40px 80px 80px 80px\"}\n    //   >\n    //     <Stack width={\"60%\"}>\n    //       <Typography color=\"#0c9265\" fontSize={\"25px\"}>\n    //         let's talk\n    //       </Typography>\n    //       <Stack gap={\"37px\"}>\n    //         <Stack direction={\"row\"} gap={\"10px\"}>\n    //           <Typography\n    //             className=\"text-stroke\"\n    //             fontSize={\"90px\"}\n    //             color=\"transparent\"\n    //             fontWeight={\"bold\"}\n    //             lineHeight={1}\n    //           >\n    //             about your{\" \"}\n    //             <span style={{ color: \"white\", fontSize: \"90px\" }}>\n    //               {\" \"}\n    //               next project.\n    //             </span>\n    //           </Typography>\n    //         </Stack>\n    //         <button className=\"btn-animated\">Get in touch</button>\n    //       </Stack>\n    //     </Stack>\n    //     <Stack width={\"30%\"} gap={\"15px\"} justifyContent={\"center\"}>\n    //       <Typography color=\"white\" fontSize={\"35px\"} fontWeight={\"bold\"}>\n    //         contact{\" \"}\n    //         <span style={{ color: \"#0c9265\", fontSize: \"35px\" }}>us</span>\n    //       </Typography>\n    //       <Stack gap={\"10px\"}>\n    //         <Stack direction={\"row\"} gap={\"15px\"}>\n    //           <LocalPhoneIcon sx={{ color: \"#0c9265\" }} />{\" \"}\n    //           <span style={{ color: \"white\" }}>+919823273822</span>\n    //         </Stack>\n    //         <Stack direction={\"row\"} gap={\"15px\"}>\n    //           <EmailIcon sx={{ color: \"#0c9265\" }} />{\" \"}\n    //           <span style={{ color: \"white\" }}>+info@green.com</span>\n    //         </Stack>\n    //         <Stack direction={\"row\"} gap={\"15px\"}>\n    //           <LocalPhoneIcon sx={{ color: \"#0c9265\" }} />{\" \"}\n    //           <span style={{ color: \"white\" }}>+919823273822</span>\n    //         </Stack>\n    //         <Stack direction={\"row\"} gap={\"15px\"}>\n    //           <HomeIcon sx={{ color: \"#0c9265\" }} />{\" \"}\n    //           <span style={{ color: \"white\" }}>\n    //             613 The Metropolis Tower Business Bay, Dubai, UAE\n    //           </span>\n    //         </Stack>\n    //       </Stack>\n    //       <Stack direction={\"row\"} gap={\"10px\"}>\n    //         <FacebookIcon sx={{ color: \"#0c9265\" }} />\n    //         <InstagramIcon sx={{ color: \"#0c9265\" }} />\n    //       </Stack>\n    //     </Stack>\n    //   </Stack>\n    // </>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                width: \"100%\",\n                height: \"20vh\",\n                bgcolor: \"#0a320a\",\n                direction: \"row\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: _public_assets_2_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: 100\n                        }, void 0, false, {\n                            fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                            lineNumber: 172,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                        lineNumber: 171,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        direction: \"row\",\n                        gap: \"10px\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                sx: {\n                                    color: \"white\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                                lineNumber: 175,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                color: \"white\",\n                                children: \"The Metropolis,BusinessBay\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                                lineNumber: 176,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                        lineNumber: 174,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        direction: \"row\",\n                        gap: \"10px\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_LocalPhone__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                sx: {\n                                    color: \"white\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                                lineNumber: 179,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                color: \"white\",\n                                children: \"+9715 61728827\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                                lineNumber: 180,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                        lineNumber: 178,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        direction: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                sx: {\n                                    color: \"white\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                                lineNumber: 183,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                color: \"white\",\n                                children: \"info@gns.com\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                                lineNumber: 184,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                        lineNumber: 182,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        direction: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                sx: {\n                                    color: \"white\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                                lineNumber: 187,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                color: \"white\",\n                                children: \"GreenandStrategy\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                                lineNumber: 188,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                        lineNumber: 186,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n                lineNumber: 163,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mobyink/project/GreenNstrategy/app/components/footer/Footer.jsx\",\n            lineNumber: 162,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNyQztBQUNFO0FBQ1M7QUFDVTtBQUNGO0FBQ1k7QUFDQTtBQUNGO0FBQzNDLFNBQVNZO0lBQ3RCLE9BQ0UsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNkVBQTZFO0lBQzdFLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLElBQUk7SUFDSiw2Q0FBNkM7SUFDN0MsMERBQTBEO0lBRTFELDZDQUE2QztJQUM3QywyQ0FBMkM7SUFDM0MsMENBQTBDO0lBQzFDLG1DQUFtQztJQUNuQywwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLG9EQUFvRDtJQUNwRCxhQUFhO0lBQ2IsU0FBUztJQUNULHVFQUF1RTtJQUN2RSxZQUFZO0lBQ1osdUVBQXVFO0lBQ3ZFLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIseURBQXlEO0lBQ3pELFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLDBFQUEwRTtJQUMxRSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLDBFQUEwRTtJQUMxRSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLDBFQUEwRTtJQUMxRSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLDBFQUEwRTtJQUMxRSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGFBQWE7SUFDYix1RUFBdUU7SUFDdkUsa0JBQWtCO0lBQ2xCLHlEQUF5RDtJQUN6RCw0QkFBNEI7SUFDNUIsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsMEVBQTBFO0lBQzFFLGFBQWE7SUFDYixjQUFjO0lBQ2QsK0VBQStFO0lBQy9FLGNBQWM7SUFDZCxjQUFjO0lBQ2QsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQiwwREFBMEQ7SUFDMUQsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJ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LE9BQU87Z0NBQVE7Ozs7OzswQ0FDcEMsOERBQUNuQiwwR0FBVUE7Z0NBQUNtQixPQUFNOzBDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEM7S0F4THdCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9mb290ZXIvRm9vdGVyLmpzeD80NWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgU3RhY2ssIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMb2dvIGZyb20gXCJAL3B1YmxpYy9hc3NldHMvMi5wbmdcIlxuaW1wb3J0IEVtYWlsSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FbWFpbFwiO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0hvbWVcIjtcbmltcG9ydCBMb2NhdGlvbk9uSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NhdGlvbk9uXCI7XG5pbXBvcnQgTG9jYWxQaG9uZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTG9jYWxQaG9uZVwiO1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvSW5zdGFncmFtXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgLy8gPFN0YWNrXG4gICAgLy8gICB3aWR0aD17XCIxMDAlXCJ9XG4gICAgLy8gICBkaXJlY3Rpb249e1wicm93XCJ9XG4gICAgLy8gICBzeD17eyBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGJvcmRlclRvcDogXCIxcHggc29saWQgI2RkZGRkZFwiIH19XG4gICAgLy8gICBiYWNrZ3JvdW5kQ29sb3I9e1wiYmxhY2tcIn1cbiAgICAvLyAgIGNvbG9yPXtcIiNkZGRcIn1cbiAgICAvLyAgIHBhZGRpbmc9e1wiMTAwcHggNzBweFwifVxuICAgIC8vID5cbiAgICAvLyAgIDxTdGFjayBmb250U2l6ZT17XCIxLjZyZW1cIn0gZ2FwPXtcIjE1cHhcIn0+XG4gICAgLy8gICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD1cIlwiIHdpZHRoPXsyNTB9IGhlaWdodD17NTB9IC8+XG5cbiAgICAvLyAgICAgPFN0YWNrIGRpcmVjdGlvbj17XCJyb3dcIn0gZ2FwPXtcIjEwcHhcIn0+XG4gICAgLy8gICAgICAgPEluc3RhZ3JhbUljb24gY2xhc3NOYW1lPVwiaWNvblwiIC8+XG4gICAgLy8gICAgICAgPEZhY2Vib29rSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cbiAgICAvLyAgICAgICA8WEljb24gY2xhc3NOYW1lPVwiaWNvblwiIC8+XG4gICAgLy8gICAgICAgPExpbmtlZEluSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cbiAgICAvLyAgICAgPC9TdGFjaz5cbiAgICAvLyAgICAgPFR5cG9ncmFwaHk+QWxsIFJpZ2h0cyBSZXNlcnZlZC48L1R5cG9ncmFwaHk+XG4gICAgLy8gICA8L1N0YWNrPlxuICAgIC8vICAgPEJveFxuICAgIC8vICAgICBzeD17eyB3aWR0aDogXCIxcHhcIiwgaGVpZ2h0OiBcIjE1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH19XG4gICAgLy8gICA+PC9Cb3g+XG4gICAgLy8gICA8U3RhY2sgZ2FwPXtcIjVweFwifSBjbGFzc05hbWU9XCJleHBhbmRpbmctbGlua1wiIGZvbnRTaXplPXtcIjAuOXJlbVwifT5cbiAgICAvLyAgICAgPFR5cG9ncmFwaHlcbiAgICAvLyAgICAgICBmb250V2VpZ2h0PXtcImJvbGRcIn1cbiAgICAvLyAgICAgICBzeD17eyBtYXJnaW5Cb3R0b206IFwiNXB4XCIsIGZvbnRTaXplOiBcIjEuMnJlbVwiIH19XG4gICAgLy8gICAgID5cbiAgICAvLyAgICAgICBTZXJ2aWNlczp7XCIgXCJ9XG4gICAgLy8gICAgIDwvVHlwb2dyYXBoeT5cbiAgICAvLyAgICAgPExpbmsgaHJlZj17XCIvXCJ9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiI2RkZFwiIH19PlxuICAgIC8vICAgICAgIE1hcmtldCBSZXNlYXJjaFxuICAgIC8vICAgICA8L0xpbms+XG4gICAgLy8gICAgIDxMaW5rIGhyZWY9e1wiL1wifSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIiNkZGRcIiB9fT5cbiAgICAvLyAgICAgICBEYXRhIEFuYWx5c2lzXG4gICAgLy8gICAgIDwvTGluaz5cbiAgICAvLyAgICAgPExpbmsgaHJlZj17XCIvXCJ9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiI2RkZFwiIH19PlxuICAgIC8vICAgICAgIERpZ2l0YWwgTWFya2V0aW5nXG4gICAgLy8gICAgIDwvTGluaz5cbiAgICAvLyAgICAgPExpbmsgaHJlZj17XCIvXCJ9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiI2RkZFwiIH19PlxuICAgIC8vICAgICAgIFdlYiBEZXZlbG9wbWVudFxuICAgIC8vICAgICA8L0xpbms+XG4gICAgLy8gICA8L1N0YWNrPlxuICAgIC8vICAgPFN0YWNrIGdhcD17XCI1cHhcIn0gY2xhc3NOYW1lPVwiZXhwYW5kaW5nLWxpbmtcIiBmb250U2l6ZT17XCIwLjlyZW1cIn0+XG4gICAgLy8gICAgIDxUeXBvZ3JhcGh5XG4gICAgLy8gICAgICAgc3g9e3sgbWFyZ2luQm90dG9tOiBcIjVweFwiLCBmb250U2l6ZTogXCIxLjJyZW1cIiB9fVxuICAgIC8vICAgICAgIGZvbnRXZWlnaHQ9e1wiYm9sZFwifVxuICAgIC8vICAgICA+XG4gICAgLy8gICAgICAgUXVpY2sgbGlua3M6XG4gICAgLy8gICAgIDwvVHlwb2dyYXBoeT5cbiAgICAvLyAgICAgPExpbmsgaHJlZj17XCIvXCJ9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiI2RkZFwiIH19PlxuICAgIC8vICAgICAgIEhvbWVcbiAgICAvLyAgICAgPC9MaW5rPlxuICAgIC8vICAgICA8TGluayBocmVmPXtcIi9BYm91dFwifSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIiNkZGRcIiB9fT5cbiAgICAvLyAgICAgICBBYm91dFxuICAgIC8vICAgICA8L0xpbms+XG4gICAgLy8gICAgIDxMaW5rXG4gICAgLy8gICAgICAgaHJlZj17XCIvQ29udGFjdHNcIn1cbiAgICAvLyAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIiNkZGRcIiB9fVxuICAgIC8vICAgICA+XG4gICAgLy8gICAgICAgQ29udGFjdHNcbiAgICAvLyAgICAgPC9MaW5rPlxuICAgIC8vICAgPC9TdGFjaz5cbiAgICAvLyAgIDxCb3hcbiAgICAvLyAgICAgc3g9e3sgd2lkdGg6IFwiMXB4XCIsIGhlaWdodDogXCIxNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9fVxuICAgIC8vICAgPjwvQm94PlxuICAgIC8vICAgPFN0YWNrIGdhcD17XCIxNXB4XCJ9PlxuICAgIC8vICAgICA8VHlwb2dyYXBoeSBjb2xvcj17XCIjZGRkXCJ9IGZvbnRTaXplPXtcIjEuMnJlbVwifSBmb250V2VpZ2h0PXtcImJvbGRcIn0+XG4gICAgLy8gICAgICAgU3Vic2NyaWJlIHRvIG91ciBuZXdzbGV0dGVyOntcIiBcIn1cbiAgICAvLyAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIC8vICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBnYXA9e1wiMTBweFwifT5cbiAgICAvLyAgICAgICA8aW5wdXRcbiAgICAvLyAgICAgICAgIHJlcXVpcmVkXG4gICAgLy8gICAgICAgICBzdHlsZT17e1xuICAgIC8vICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcbiAgICAvLyAgICAgICAgICAgY29sb3I6IFwiI2RkZFwiLFxuICAgIC8vICAgICAgICAgICBwYWRkaW5nOiBcIjVweCAwIDVweCAxNXB4XCIsXG4gICAgLy8gICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgLy8gICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIC8vICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgIC8vICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkZGRcIixcbiAgICAvLyAgICAgICAgIH19XG4gICAgLy8gICAgICAgICBwbGFjZWhvbGRlcj1cImpvaG5Eb2VAZ21haWwuY29tXCJcbiAgICAvLyAgICAgICAvPlxuICAgIC8vICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWJsYWNrXCI+U3Vic2NpYmU8L2J1dHRvbj5cbiAgICAvLyAgICAgPC9TdGFjaz5cbiAgICAvLyAgIDwvU3RhY2s+XG4gICAgLy8gPC9TdGFjaz5cbiAgICAvLyA8PlxuXG4gICAgLy8gICA8U3RhY2tcbiAgICAvLyAgICAgZGlyZWN0aW9uPXtcInJvd1wifVxuICAgIC8vICAgICBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1hcm91bmRcIn1cbiAgICAvLyAgICAgcD17XCI0MHB4IDgwcHggODBweCA4MHB4XCJ9XG4gICAgLy8gICA+XG4gICAgLy8gICAgIDxTdGFjayB3aWR0aD17XCI2MCVcIn0+XG4gICAgLy8gICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCIjMGM5MjY1XCIgZm9udFNpemU9e1wiMjVweFwifT5cbiAgICAvLyAgICAgICAgIGxldCdzIHRhbGtcbiAgICAvLyAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgLy8gICAgICAgPFN0YWNrIGdhcD17XCIzN3B4XCJ9PlxuICAgIC8vICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17XCJyb3dcIn0gZ2FwPXtcIjEwcHhcIn0+XG4gICAgLy8gICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zdHJva2VcIlxuICAgIC8vICAgICAgICAgICAgIGZvbnRTaXplPXtcIjkwcHhcIn1cbiAgICAvLyAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAvLyAgICAgICAgICAgICBmb250V2VpZ2h0PXtcImJvbGRcIn1cbiAgICAvLyAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsxfVxuICAgIC8vICAgICAgICAgICA+XG4gICAgLy8gICAgICAgICAgICAgYWJvdXQgeW91cntcIiBcIn1cbiAgICAvLyAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBmb250U2l6ZTogXCI5MHB4XCIgfX0+XG4gICAgLy8gICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgLy8gICAgICAgICAgICAgICBuZXh0IHByb2plY3QuXG4gICAgLy8gICAgICAgICAgICAgPC9zcGFuPlxuICAgIC8vICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgLy8gICAgICAgICA8L1N0YWNrPlxuICAgIC8vICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tYW5pbWF0ZWRcIj5HZXQgaW4gdG91Y2g8L2J1dHRvbj5cbiAgICAvLyAgICAgICA8L1N0YWNrPlxuICAgIC8vICAgICA8L1N0YWNrPlxuICAgIC8vICAgICA8U3RhY2sgd2lkdGg9e1wiMzAlXCJ9IGdhcD17XCIxNXB4XCJ9IGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifT5cbiAgICAvLyAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9e1wiMzVweFwifSBmb250V2VpZ2h0PXtcImJvbGRcIn0+XG4gICAgLy8gICAgICAgICBjb250YWN0e1wiIFwifVxuICAgIC8vICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzBjOTI2NVwiLCBmb250U2l6ZTogXCIzNXB4XCIgfX0+dXM8L3NwYW4+XG4gICAgLy8gICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIC8vICAgICAgIDxTdGFjayBnYXA9e1wiMTBweFwifT5cbiAgICAvLyAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IGdhcD17XCIxNXB4XCJ9PlxuICAgIC8vICAgICAgICAgICA8TG9jYWxQaG9uZUljb24gc3g9e3sgY29sb3I6IFwiIzBjOTI2NVwiIH19IC8+e1wiIFwifVxuICAgIC8vICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pis5MTk4MjMyNzM4MjI8L3NwYW4+XG4gICAgLy8gICAgICAgICA8L1N0YWNrPlxuICAgIC8vICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17XCJyb3dcIn0gZ2FwPXtcIjE1cHhcIn0+XG4gICAgLy8gICAgICAgICAgIDxFbWFpbEljb24gc3g9e3sgY29sb3I6IFwiIzBjOTI2NVwiIH19IC8+e1wiIFwifVxuICAgIC8vICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PitpbmZvQGdyZWVuLmNvbTwvc3Bhbj5cbiAgICAvLyAgICAgICAgIDwvU3RhY2s+XG4gICAgLy8gICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBnYXA9e1wiMTVweFwifT5cbiAgICAvLyAgICAgICAgICAgPExvY2FsUGhvbmVJY29uIHN4PXt7IGNvbG9yOiBcIiMwYzkyNjVcIiB9fSAvPntcIiBcIn1cbiAgICAvLyAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT4rOTE5ODIzMjczODIyPC9zcGFuPlxuICAgIC8vICAgICAgICAgPC9TdGFjaz5cbiAgICAvLyAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IGdhcD17XCIxNXB4XCJ9PlxuICAgIC8vICAgICAgICAgICA8SG9tZUljb24gc3g9e3sgY29sb3I6IFwiIzBjOTI2NVwiIH19IC8+e1wiIFwifVxuICAgIC8vICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxuICAgIC8vICAgICAgICAgICAgIDYxMyBUaGUgTWV0cm9wb2xpcyBUb3dlciBCdXNpbmVzcyBCYXksIER1YmFpLCBVQUVcbiAgICAvLyAgICAgICAgICAgPC9zcGFuPlxuICAgIC8vICAgICAgICAgPC9TdGFjaz5cbiAgICAvLyAgICAgICA8L1N0YWNrPlxuICAgIC8vICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IGdhcD17XCIxMHB4XCJ9PlxuICAgIC8vICAgICAgICAgPEZhY2Vib29rSWNvbiBzeD17eyBjb2xvcjogXCIjMGM5MjY1XCIgfX0gLz5cbiAgICAvLyAgICAgICAgIDxJbnN0YWdyYW1JY29uIHN4PXt7IGNvbG9yOiBcIiMwYzkyNjVcIiB9fSAvPlxuICAgIC8vICAgICAgIDwvU3RhY2s+XG4gICAgLy8gICAgIDwvU3RhY2s+XG4gICAgLy8gICA8L1N0YWNrPlxuICAgIC8vIDwvPlxuICAgIDw+XG4gICAgICA8U3RhY2s+XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIHdpZHRoPXtcIjEwMCVcIn1cbiAgICAgICAgICBoZWlnaHQ9e1wiMjB2aFwifVxuICAgICAgICAgIGJnY29sb3I9e1wiIzBhMzIwYVwifVxuICAgICAgICAgIGRpcmVjdGlvbj17XCJyb3dcIn1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9XG4gICAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299IHdpZHRoPXsxMDB9IC8+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBnYXA9e1wiMTBweFwifT5cbiAgICAgICAgICAgIDxMb2NhdGlvbk9uSWNvbiBzeD17eyBjb2xvcjogXCJ3aGl0ZVwiIH19IC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cIndoaXRlXCI+VGhlIE1ldHJvcG9saXMsQnVzaW5lc3NCYXk8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBnYXA9e1wiMTBweFwifT5cbiAgICAgICAgICAgIDxMb2NhbFBob25lSWNvbiBzeD17eyBjb2xvcjogXCJ3aGl0ZVwiIH19IC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cIndoaXRlXCI+Kzk3MTUgNjE3Mjg4Mjc8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifT5cbiAgICAgICAgICAgIDxFbWFpbEljb24gc3g9e3sgY29sb3I6IFwid2hpdGVcIiB9fSAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ3aGl0ZVwiPmluZm9AZ25zLmNvbTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9PlxuICAgICAgICAgICAgPEluc3RhZ3JhbUljb24gc3g9e3sgY29sb3I6IFwid2hpdGVcIiB9fSAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ3aGl0ZVwiPkdyZWVuYW5kU3RyYXRlZ3k8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiU3RhY2siLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiTGluayIsIkltYWdlIiwiTG9nbyIsIkVtYWlsSWNvbiIsIkhvbWVJY29uIiwiTG9jYXRpb25Pbkljb24iLCJMb2NhbFBob25lSWNvbiIsIkluc3RhZ3JhbUljb24iLCJGb290ZXIiLCJ3aWR0aCIsImhlaWdodCIsImJnY29sb3IiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJzcmMiLCJnYXAiLCJzeCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/footer/Footer.jsx\n"));

/***/ })

});