"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/navigation/vertical/index.ts":
/*!******************************************!*\
  !*** ./src/navigation/vertical/index.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mdi_material_ui_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdi-material-ui/Login */ \"./node_modules/mdi-material-ui/Login.js\");\n/* harmony import */ var mdi_material_ui_HomeOutline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdi-material-ui/HomeOutline */ \"./node_modules/mdi-material-ui/HomeOutline.js\");\n/* harmony import */ var mdi_material_ui_FormatLetterCase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdi-material-ui/FormatLetterCase */ \"./node_modules/mdi-material-ui/FormatLetterCase.js\");\n/* harmony import */ var mdi_material_ui_AccountCogOutline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdi-material-ui/AccountCogOutline */ \"./node_modules/mdi-material-ui/AccountCogOutline.js\");\n/* harmony import */ var mdi_material_ui_AccountPlusOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdi-material-ui/AccountPlusOutline */ \"./node_modules/mdi-material-ui/AccountPlusOutline.js\");\n/* harmony import */ var mdi_material_ui_AlertCircleOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdi-material-ui/AlertCircleOutline */ \"./node_modules/mdi-material-ui/AlertCircleOutline.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n// ** Icon imports\n\n\n\n\n\n\nvar navigation = function() {\n    return [\n        {\n            title: 'Dashboard',\n            icon: mdi_material_ui_HomeOutline__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n            path: '/'\n        },\n        {\n            title: 'Account Settings',\n            icon: mdi_material_ui_AccountCogOutline__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            path: '/account-settings'\n        },\n        {\n            sectionTitle: 'Pages'\n        },\n        {\n            title: 'Login',\n            icon: mdi_material_ui_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            path: '/pages/login',\n            openInNewTab: true\n        },\n        {\n            title: 'Register',\n            icon: mdi_material_ui_AccountPlusOutline__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            path: '/pages/register',\n            openInNewTab: true\n        },\n        {\n            title: 'Error',\n            icon: mdi_material_ui_AlertCircleOutline__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            path: '/pages/error',\n            openInNewTab: true\n        },\n        {\n            sectionTitle: 'Converter'\n        },\n        {\n            title: 'Date-time converter ',\n            icon: mdi_material_ui_FormatLetterCase__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            path: '/typography'\n        }\n    ];\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigation);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbmF2aWdhdGlvbi92ZXJ0aWNhbC9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEVBQWtCO0FBQ3VCO0FBR1k7QUFDVTtBQUNFO0FBRUU7QUFDQTtBQU1uRSxHQUFLLENBQUNNLFVBQVUsR0FBRyxRQUFRLEdBQW9CLENBQUM7SUFDOUMsTUFBTSxDQUFDLENBQUM7UUFDTixDQUFDO1lBQ0NDLEtBQUssRUFBRSxDQUFXO1lBQ2xCQyxJQUFJLEVBQUVQLG1FQUFXO1lBQ2pCUSxJQUFJLEVBQUUsQ0FBRztRQUNYLENBQUM7UUFDRCxDQUFDO1lBQ0NGLEtBQUssRUFBRSxDQUFrQjtZQUN6QkMsSUFBSSxFQUFFTCx5RUFBaUI7WUFDdkJNLElBQUksRUFBRSxDQUFtQjtRQUMzQixDQUFDO1FBQ0QsQ0FBQztZQUNDQyxZQUFZLEVBQUUsQ0FBTztRQUN2QixDQUFDO1FBQ0QsQ0FBQztZQUNDSCxLQUFLLEVBQUUsQ0FBTztZQUNkQyxJQUFJLEVBQUVSLDZEQUFLO1lBQ1hTLElBQUksRUFBRSxDQUFjO1lBQ3BCRSxZQUFZLEVBQUUsSUFBSTtRQUNwQixDQUFDO1FBQ0QsQ0FBQztZQUNDSixLQUFLLEVBQUUsQ0FBVTtZQUNqQkMsSUFBSSxFQUFFSiwwRUFBa0I7WUFDeEJLLElBQUksRUFBRSxDQUFpQjtZQUN2QkUsWUFBWSxFQUFFLElBQUk7UUFDcEIsQ0FBQztRQUNELENBQUM7WUFDQ0osS0FBSyxFQUFFLENBQU87WUFDZEMsSUFBSSxFQUFFSCwwRUFBa0I7WUFDeEJJLElBQUksRUFBRSxDQUFjO1lBQ3BCRSxZQUFZLEVBQUUsSUFBSTtRQUNwQixDQUFDO1FBQ0QsQ0FBQztZQUNDRCxZQUFZLEVBQUUsQ0FBVztRQUMzQixDQUFDO1FBQ0QsQ0FBQztZQUNDSCxLQUFLLEVBQUUsQ0FBc0I7WUFDN0JDLElBQUksRUFBRU4sd0VBQWdCO1lBQ3RCTyxJQUFJLEVBQUUsQ0FBYTtRQUNyQixDQUFDO0lBcUJILENBQUM7QUFDSCxDQUFDO0FBRUQsK0RBQWVILFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdmlnYXRpb24vdmVydGljYWwvaW5kZXgudHM/M2U3NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiBJY29uIGltcG9ydHNcbmltcG9ydCBMb2dpbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvTG9naW4nXG5pbXBvcnQgVGFibGUgZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1RhYmxlJ1xuaW1wb3J0IEN1YmVPdXRsaW5lIGZyb20gJ21kaS1tYXRlcmlhbC11aS9DdWJlT3V0bGluZSdcbmltcG9ydCBIb21lT3V0bGluZSBmcm9tICdtZGktbWF0ZXJpYWwtdWkvSG9tZU91dGxpbmUnXG5pbXBvcnQgRm9ybWF0TGV0dGVyQ2FzZSBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRm9ybWF0TGV0dGVyQ2FzZSdcbmltcG9ydCBBY2NvdW50Q29nT3V0bGluZSBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQWNjb3VudENvZ091dGxpbmUnXG5pbXBvcnQgQ3JlZGl0Q2FyZE91dGxpbmUgZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0NyZWRpdENhcmRPdXRsaW5lJ1xuaW1wb3J0IEFjY291bnRQbHVzT3V0bGluZSBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQWNjb3VudFBsdXNPdXRsaW5lJ1xuaW1wb3J0IEFsZXJ0Q2lyY2xlT3V0bGluZSBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQWxlcnRDaXJjbGVPdXRsaW5lJ1xuaW1wb3J0IEdvb2dsZUNpcmNsZXNFeHRlbmRlZCBmcm9tICdtZGktbWF0ZXJpYWwtdWkvR29vZ2xlQ2lyY2xlc0V4dGVuZGVkJ1xuXG4vLyAqKiBUeXBlIGltcG9ydFxuaW1wb3J0IHsgVmVydGljYWxOYXZJdGVtc1R5cGUgfSBmcm9tICdzcmMvQGNvcmUvbGF5b3V0cy90eXBlcydcblxuY29uc3QgbmF2aWdhdGlvbiA9ICgpOiBWZXJ0aWNhbE5hdkl0ZW1zVHlwZSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdGl0bGU6ICdEYXNoYm9hcmQnLFxuICAgICAgaWNvbjogSG9tZU91dGxpbmUsXG4gICAgICBwYXRoOiAnLydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQWNjb3VudCBTZXR0aW5ncycsXG4gICAgICBpY29uOiBBY2NvdW50Q29nT3V0bGluZSxcbiAgICAgIHBhdGg6ICcvYWNjb3VudC1zZXR0aW5ncydcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlY3Rpb25UaXRsZTogJ1BhZ2VzJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdMb2dpbicsXG4gICAgICBpY29uOiBMb2dpbixcbiAgICAgIHBhdGg6ICcvcGFnZXMvbG9naW4nLFxuICAgICAgb3BlbkluTmV3VGFiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1JlZ2lzdGVyJyxcbiAgICAgIGljb246IEFjY291bnRQbHVzT3V0bGluZSxcbiAgICAgIHBhdGg6ICcvcGFnZXMvcmVnaXN0ZXInLFxuICAgICAgb3BlbkluTmV3VGFiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0Vycm9yJyxcbiAgICAgIGljb246IEFsZXJ0Q2lyY2xlT3V0bGluZSxcbiAgICAgIHBhdGg6ICcvcGFnZXMvZXJyb3InLFxuICAgICAgb3BlbkluTmV3VGFiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWN0aW9uVGl0bGU6ICdDb252ZXJ0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0RhdGUtdGltZSBjb252ZXJ0ZXIgJyxcbiAgICAgIGljb246IEZvcm1hdExldHRlckNhc2UsXG4gICAgICBwYXRoOiAnL3R5cG9ncmFwaHknXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICB0aXRsZTogJ0ljb25zJyxcbiAgICAvLyAgIHBhdGg6ICcvaWNvbnMnLFxuICAgIC8vICAgaWNvbjogR29vZ2xlQ2lyY2xlc0V4dGVuZGVkXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB0aXRsZTogJ0NhcmRzJyxcbiAgICAvLyAgIGljb246IENyZWRpdENhcmRPdXRsaW5lLFxuICAgIC8vICAgcGF0aDogJy9jYXJkcydcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRpdGxlOiAnVGFibGVzJyxcbiAgICAvLyAgIGljb246IFRhYmxlLFxuICAgIC8vICAgcGF0aDogJy90YWJsZXMnXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICBpY29uOiBDdWJlT3V0bGluZSxcbiAgICAvLyAgIHRpdGxlOiAnRm9ybSBMYXlvdXRzJyxcbiAgICAvLyAgIHBhdGg6ICcvZm9ybS1sYXlvdXRzJ1xuICAgIC8vIH1cbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9uXG4iXSwibmFtZXMiOlsiTG9naW4iLCJIb21lT3V0bGluZSIsIkZvcm1hdExldHRlckNhc2UiLCJBY2NvdW50Q29nT3V0bGluZSIsIkFjY291bnRQbHVzT3V0bGluZSIsIkFsZXJ0Q2lyY2xlT3V0bGluZSIsIm5hdmlnYXRpb24iLCJ0aXRsZSIsImljb24iLCJwYXRoIiwic2VjdGlvblRpdGxlIiwib3BlbkluTmV3VGFiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/navigation/vertical/index.ts\n");

/***/ })

});