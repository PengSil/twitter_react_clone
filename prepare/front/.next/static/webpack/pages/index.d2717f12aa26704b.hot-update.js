"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FollowButton = (param)=>{\n    let { post } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { me, followLoading, unfollowLoading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    if (post.User.id === me.id) {\n        return null;\n    }\n    //const isFollowing = me && me.Followings.find((v)=>v.id===post.User.id)\n    const isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find((v)=>v.id === post.User.id);\n    const onClickButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        if (isFollowing) {\n            dispatch({\n                type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.UNFOLLOW_REQUEST,\n                data: post.User.id\n            });\n        } else {\n            dispatch({\n                type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.FOLLOW_REQUEST,\n                data: post.User.id\n            });\n        }\n    }, [\n        isFollowing\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {\n        loading: followLoading || unfollowLoading,\n        onClick: onClickButton,\n        children: isFollowing ? \"언팔로우\" : \" 팔로우\"\n    }, void 0, false, {\n        fileName: \"C:\\\\webPrograming\\\\next\\\\prepare\\\\front\\\\components\\\\FollowButton.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FollowButton, \"oQRGZ4+MgpAjZ6p1zzrPk3lOofY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = FollowButton;\nFollowButton.propTypes = {\n    post: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowButton);\nvar _c;\n$RefreshReg$(_c, \"FollowButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0J1dHRvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1k7QUFDcEI7QUFDTDtBQUVzQztBQUVwRSxNQUFNUSxlQUFlO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUM1QixNQUFNQyxXQUFXUCx3REFBV0E7SUFDNUIsTUFBTSxFQUFFUSxFQUFFLEVBQUVDLGFBQWEsRUFBRUMsZUFBZSxFQUFFLEdBQUdYLHdEQUFXQSxDQUFDLENBQUNZLFFBQVVBLE1BQU1DLElBQUk7SUFDaEYsSUFBSU4sS0FBS08sSUFBSSxDQUFDQyxFQUFFLEtBQUtOLEdBQUdNLEVBQUUsRUFBRTtRQUMxQixPQUFPO0lBQ1Q7SUFDQSx3RUFBd0U7SUFDeEUsTUFBTUMsY0FBY1AsZUFBQUEseUJBQUFBLEdBQUlRLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVKLEVBQUUsS0FBS1IsS0FBS08sSUFBSSxDQUFDQyxFQUFFO0lBRXBFLE1BQU1LLGdCQUFnQnJCLGtEQUFXQSxDQUFDO1FBQ2hDLElBQUlpQixhQUFhO1lBQ2ZSLFNBQVM7Z0JBQ1BhLE1BQU1oQiw0REFBZ0JBO2dCQUN0QmlCLE1BQU1mLEtBQUtPLElBQUksQ0FBQ0MsRUFBRTtZQUNwQjtRQUNGLE9BQU87WUFDTFAsU0FBUztnQkFDUGEsTUFBTWpCLDBEQUFjQTtnQkFDcEJrQixNQUFNZixLQUFLTyxJQUFJLENBQUNDLEVBQUU7WUFDcEI7UUFDRjtJQUNGLEdBQUc7UUFBQ0M7S0FBWTtJQUNoQixxQkFDRSw4REFBQ2Isd0RBQU1BO1FBQUNvQixTQUFTYixpQkFBaUJDO1FBQWlCYSxTQUFTSjtrQkFDekRKLGNBQWMsU0FBUzs7Ozs7O0FBRzlCO0dBM0JNVjs7UUFDYUwsb0RBQVdBO1FBQ21CRCxvREFBV0E7OztLQUZ0RE07QUE2Qk5BLGFBQWFtQixTQUFTLEdBQUc7SUFDdkJsQixNQUFNTCwwREFBZ0IsQ0FBQ3lCLFVBQVU7QUFDbkM7QUFFQSwrREFBZXJCLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanM/MzBmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IEZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgaWYgKHBvc3QuVXNlci5pZCA9PT0gbWUuaWQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICAvL2NvbnN0IGlzRm9sbG93aW5nID0gbWUgJiYgbWUuRm9sbG93aW5ncy5maW5kKCh2KT0+di5pZD09PXBvc3QuVXNlci5pZClcclxuICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoaXNGb2xsb3dpbmcpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtpc0ZvbGxvd2luZ10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cclxuICAgICAge2lzRm9sbG93aW5nID8gXCLslrjtjJTroZzsmrBcIiA6IFwiIO2MlOuhnOyasFwifVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJQcm9wVHlwZXMiLCJCdXR0b24iLCJGT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1JFUVVFU1QiLCJGb2xsb3dCdXR0b24iLCJwb3N0IiwiZGlzcGF0Y2giLCJtZSIsImZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0xvYWRpbmciLCJzdGF0ZSIsInVzZXIiLCJVc2VyIiwiaWQiLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidiIsIm9uQ2xpY2tCdXR0b24iLCJ0eXBlIiwiZGF0YSIsImxvYWRpbmciLCJvbkNsaWNrIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FollowButton.js\n"));

/***/ })

});