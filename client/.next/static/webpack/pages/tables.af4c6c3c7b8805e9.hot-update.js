"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tables",{

/***/ "./src/views/tables/TableBasic.tsx":
/*!*****************************************!*\
  !*** ./src/views/tables/TableBasic.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Table */ \"./node_modules/@mui/material/Table/index.js\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableRow */ \"./node_modules/@mui/material/TableRow/index.js\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TableBody */ \"./node_modules/@mui/material/TableBody/index.js\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableCell */ \"./node_modules/@mui/material/TableCell/index.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/TableContainer */ \"./node_modules/@mui/material/TableContainer/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// ** MUI Imports\n\n\n\n\n\n\nvar _this = undefined;\nvar createData = function(name, calories, fat, carbs, protein) {\n    return {\n        name: name,\n        calories: calories,\n        fat: fat,\n        carbs: carbs,\n        protein: protein\n    };\n};\nvar rows = [\n    createData('Timestamp: ', 159, 6, 24, 4),\n    createData('Unix timestamp: h', 237, 9, 37, 4.3),\n    createData('Eclair', 262, 16, 24, 6),\n    createData('Cupcake', 305, 3.7, 67, 4.3),\n    createData('Gingerbread', 356, 16, 49, 3.9)\n];\nvar TableBasic = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        __source: {\n            fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            sx: {\n                minWidth: 650\n            },\n            \"aria-label\": \"simple table\",\n            __source: {\n                fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: rows.map(function(row) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        sx: {\n                            '&:last-of-type td, &:last-of-type th': {\n                                border: 0\n                            }\n                        },\n                        __source: {\n                            fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                component: \"th\",\n                                scope: \"row\",\n                                __source: {\n                                    fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: row.name\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                align: \"left\",\n                                __source: {\n                                    fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: row.calories\n                            })\n                        ]\n                    }, row.name);\n                })\n            })\n        })\n    }));\n};\n_c = TableBasic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableBasic);\nvar _c;\n$RefreshReg$(_c, \"TableBasic\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvdGFibGVzL1RhYmxlQmFzaWMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsRUFBaUI7QUFDc0I7QUFDQTtBQUNNO0FBRUU7QUFDQTtBQUNVOztBQUV6RCxHQUFLLENBQUNNLFVBQVUsR0FBRyxRQUFRLENBQVBDLElBQVksRUFBRUMsUUFBZ0IsRUFBRUMsR0FBVyxFQUFFQyxLQUFhLEVBQUVDLE9BQWUsRUFBSyxDQUFDO0lBQ25HLE1BQU0sQ0FBQyxDQUFDO1FBQUNKLElBQUksRUFBSkEsSUFBSTtRQUFFQyxRQUFRLEVBQVJBLFFBQVE7UUFBRUMsR0FBRyxFQUFIQSxHQUFHO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxPQUFPLEVBQVBBLE9BQU87SUFBQyxDQUFDO0FBQ2hELENBQUM7QUFFRCxHQUFLLENBQUNDLElBQUksR0FBRyxDQUFDO0lBQ1pOLFVBQVUsQ0FBQyxDQUFhLGNBQUUsR0FBRyxFQUFFLENBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBRztJQUMzQ0EsVUFBVSxDQUFDLENBQW1CLG9CQUFFLEdBQUcsRUFBRSxDQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUc7SUFDakRBLFVBQVUsQ0FBQyxDQUFRLFNBQUUsR0FBRyxFQUFFLEVBQUksRUFBRSxFQUFFLEVBQUUsQ0FBRztJQUN2Q0EsVUFBVSxDQUFDLENBQVMsVUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHO0lBQ3ZDQSxVQUFVLENBQUMsQ0FBYSxjQUFFLEdBQUcsRUFBRSxFQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUc7QUFDOUMsQ0FBQztBQUVELEdBQUssQ0FBQ08sVUFBVSxHQUFHLFFBQ25CLEdBRHlCLENBQUM7O0lBQ3hCLE1BQU0sc0VBQ0hSLG9FQUFjO1FBQUNTLFNBQVMsRUFBRWQsMkRBQUs7Ozs7Ozs7dUZBQzdCQywyREFBSztZQUFDYyxFQUFFLEVBQUUsQ0FBQztnQkFBQ0MsUUFBUSxFQUFFLEdBQUc7WUFBQyxDQUFDO1lBQUVDLENBQVUsYUFBQyxDQUFjOzs7Ozs7OzJGQUNwRGQsK0RBQVM7Ozs7Ozs7MEJBQ1BTLElBQUksQ0FBQ00sR0FBRyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7a0NBQ1gsTUFBTSx5REFBTGpCLDhEQUFRO3dCQUVQYSxFQUFFLEVBQUUsQ0FBQzs0QkFDSCxDQUFzQyx1Q0FBRSxDQUFDO2dDQUN2Q0ssTUFBTSxFQUFFLENBQUM7NEJBQ1gsQ0FBQzt3QkFDSCxDQUFDOzs7Ozs7OztpR0FFQWhCLCtEQUFTO2dDQUFDVSxTQUFTLEVBQUMsQ0FBSTtnQ0FBQ08sS0FBSyxFQUFDLENBQUs7Ozs7Ozs7MENBQ2xDRixHQUFHLENBQUNaLElBQUk7O2lHQUVWSCwrREFBUztnQ0FBQ2tCLEtBQUssRUFBQyxDQUFNOzs7Ozs7OzBDQUFFSCxHQUFHLENBQUNYLFFBQVE7Ozt1QkFWaENXLEdBQUcsQ0FBQ1osSUFBSTs7Ozs7QUFrQjNCLENBQUM7S0F6QktNLFVBQVU7QUEyQmhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy92aWV3cy90YWJsZXMvVGFibGVCYXNpYy50c3g/MDkxZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiBNVUkgSW1wb3J0c1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInXG5pbXBvcnQgVGFibGUgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlUm93J1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlSGVhZCdcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUJvZHknXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDZWxsJ1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDb250YWluZXInXG5cbmNvbnN0IGNyZWF0ZURhdGEgPSAobmFtZTogc3RyaW5nLCBjYWxvcmllczogbnVtYmVyLCBmYXQ6IG51bWJlciwgY2FyYnM6IG51bWJlciwgcHJvdGVpbjogbnVtYmVyKSA9PiB7XG4gIHJldHVybiB7IG5hbWUsIGNhbG9yaWVzLCBmYXQsIGNhcmJzLCBwcm90ZWluIH1cbn1cblxuY29uc3Qgcm93cyA9IFtcbiAgY3JlYXRlRGF0YSgnVGltZXN0YW1wOiAnLCAxNTksIDYuMCwgMjQsIDQuMCksXG4gIGNyZWF0ZURhdGEoJ1VuaXggdGltZXN0YW1wOiBoJywgMjM3LCA5LjAsIDM3LCA0LjMpLFxuICBjcmVhdGVEYXRhKCdFY2xhaXInLCAyNjIsIDE2LjAsIDI0LCA2LjApLFxuICBjcmVhdGVEYXRhKCdDdXBjYWtlJywgMzA1LCAzLjcsIDY3LCA0LjMpLFxuICBjcmVhdGVEYXRhKCdHaW5nZXJicmVhZCcsIDM1NiwgMTYuMCwgNDksIDMuOSlcbl1cblxuY29uc3QgVGFibGVCYXNpYyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8VGFibGUgc3g9e3sgbWluV2lkdGg6IDY1MCB9fSBhcmlhLWxhYmVsPSdzaW1wbGUgdGFibGUnPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHtyb3dzLm1hcChyb3cgPT4gKFxuICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgICAgICAgICAgIGtleT17cm93Lm5hbWV9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgJyY6bGFzdC1vZi10eXBlIHRkLCAmOmxhc3Qtb2YtdHlwZSB0aCc6IHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9J3RoJyBzY29wZT0ncm93Jz5cbiAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdsZWZ0Jz57cm93LmNhbG9yaWVzfTwvVGFibGVDZWxsPlxuXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUJhc2ljXG4iXSwibmFtZXMiOlsiUGFwZXIiLCJUYWJsZSIsIlRhYmxlUm93IiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJjcmVhdGVEYXRhIiwibmFtZSIsImNhbG9yaWVzIiwiZmF0IiwiY2FyYnMiLCJwcm90ZWluIiwicm93cyIsIlRhYmxlQmFzaWMiLCJjb21wb25lbnQiLCJzeCIsIm1pbldpZHRoIiwiYXJpYS1sYWJlbCIsIm1hcCIsInJvdyIsImJvcmRlciIsInNjb3BlIiwiYWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/tables/TableBasic.tsx\n");

/***/ })

});