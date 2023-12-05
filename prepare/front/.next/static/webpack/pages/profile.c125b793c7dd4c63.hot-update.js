"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/NicknameEditForm.js":
/*!****************************************!*\
  !*** ./components/NicknameEditForm.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useinput */ \"./hooks/useinput.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NicknameEditForm = ()=>{\n    _s();\n    const { me } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    const [nickname, onChangeNickname] = (0,_hooks_useinput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((me === null || me === void 0 ? void 0 : me.nickname) || \"\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatch({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.CHANGE_NICKNAME_REQUEST,\n            data: nickname\n        });\n    }, [\n        nickname\n    ]);\n    const style = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            marginBottom: \"20px\",\n            border: \"1px solid #d9d9d9\",\n            padding: \"20px\"\n        }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        style: style,\n        onFinish: onSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Search, {\n            value: nickname,\n            onChange: onChangeNickname,\n            addonBefore: \"닉네임\",\n            enterButton: \"수정\",\n            onSearch: onSubmit\n        }, void 0, false, {\n            fileName: \"C:\\\\webPrograming\\\\next\\\\prepare\\\\front\\\\components\\\\NicknameEditForm.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\webPrograming\\\\next\\\\prepare\\\\front\\\\components\\\\NicknameEditForm.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NicknameEditForm, \"WWSXYapHomVONQ+JoEUC/m/b47E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        _hooks_useinput__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = NicknameEditForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NicknameEditForm);\nvar _c;\n$RefreshReg$(_c, \"NicknameEditForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05pY2tuYW1lRWRpdEZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ0c7QUFDcEI7QUFBQTtBQUVNO0FBQ2tCO0FBRTNELE1BQU1TLG1CQUFtQjs7SUFDdkIsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR1Asd0RBQVdBLENBQUMsQ0FBQ1EsUUFBVUEsTUFBTUMsSUFBSTtJQUNoRCxNQUFNLENBQUNDLFVBQVVDLGlCQUFpQixHQUFHUCwyREFBUUEsQ0FBQ0csQ0FBQUEsZUFBQUEseUJBQUFBLEdBQUlHLFFBQVEsS0FBSTtJQUM5RCxNQUFNRSxXQUFXWCx3REFBV0E7SUFFNUIsTUFBTVksV0FBV2Qsa0RBQVdBLENBQUM7UUFDM0JhLFNBQVM7WUFDUEUsTUFBTVQsbUVBQXVCQTtZQUM3QlUsTUFBTUw7UUFDUjtJQUNGLEdBQUc7UUFBQ0E7S0FBUztJQUViLE1BQU1NLFFBQVFsQiw4Q0FBT0EsQ0FDbkIsSUFBTztZQUNMbUIsY0FBYztZQUNkQyxRQUFRO1lBQ1JDLFNBQVM7UUFDWCxJQUNBLEVBQUU7SUFHSixxQkFDRSw4REFBQ2pCLHFEQUFJQTtRQUFDYyxPQUFPQTtRQUFPSSxVQUFVUDtrQkFDNUIsNEVBQUNWLDZEQUFZO1lBQUNtQixPQUFPWjtZQUFVYSxVQUFVWjtZQUFrQmEsYUFBWTtZQUFNQyxhQUFZO1lBQUtDLFVBQVViOzs7Ozs7Ozs7OztBQUc5RztHQTFCTVA7O1FBQ1dOLG9EQUFXQTtRQUNXSSx1REFBUUE7UUFDNUJILG9EQUFXQTs7O0tBSHhCSztBQTJCTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybS5qcz8wYWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VpbnB1dFwiO1xyXG5pbXBvcnQgeyBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5jb25zdCBOaWNrbmFtZUVkaXRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KG1lPy5uaWNrbmFtZSB8fCBcIlwiKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICAgICAgZGF0YTogbmlja25hbWUsXHJcbiAgICB9KTtcclxuICB9LCBbbmlja25hbWVdKTtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDlkOWQ5XCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBzdHlsZT17c3R5bGV9IG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgIDxJbnB1dC5TZWFyY2ggdmFsdWU9e25pY2tuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2VOaWNrbmFtZX0gYWRkb25CZWZvcmU9XCLri4nrhKTsnoRcIiBlbnRlckJ1dHRvbj1cIuyImOyglVwiIG9uU2VhcmNoPXtvblN1Ym1pdH0gLz5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOaWNrbmFtZUVkaXRGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwidXNlQ2FsbGJhY2siLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiRm9ybSIsIklucHV0IiwidXNlSW5wdXQiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIk5pY2tuYW1lRWRpdEZvcm0iLCJtZSIsInN0YXRlIiwidXNlciIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsImRpc3BhdGNoIiwib25TdWJtaXQiLCJ0eXBlIiwiZGF0YSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwicGFkZGluZyIsIm9uRmluaXNoIiwiU2VhcmNoIiwidmFsdWUiLCJvbkNoYW5nZSIsImFkZG9uQmVmb3JlIiwiZW50ZXJCdXR0b24iLCJvblNlYXJjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NicknameEditForm.js\n"));

/***/ })

});