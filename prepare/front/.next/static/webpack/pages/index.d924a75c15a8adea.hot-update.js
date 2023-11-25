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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ \"./components/PostForm.js\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n/* Next의 pages 폴더는 이름이 pages여야 한다 \r\n   Next가 pages 폴더를 인식해서 여기 있는 파일들을 다 코드스플리팅 된 컴포넌트로 만들어준다\r\n   이름이 index인 이유는 Next가 컴포넌트 이름을 라우터 이름으로 구성해줘서 초기 / 주소를 index로한다\r\n*/ const Home = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { me } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    const { mainPosts, hasMorePost } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.post);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__.LOAD_POSTS_REQUEST\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function onScroll() {\n            console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);\n            // if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {\n            //   dispatch({\n            //     type: LOAD_POSTS_REQUEST,\n            //   });\n            // }\n            if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight) {\n                dispatch({\n                    type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__.LOAD_POSTS_REQUEST\n                });\n            }\n        }\n        window.addEventListener(\"scroll\", onScroll);\n        return ()=>window.removeEventListener(\"scroll\", onScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            me && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\webPrograming\\\\next\\\\prepare\\\\front\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 14\n            }, undefined),\n            mainPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    post: post\n                }, post.id, false, {\n                    fileName: \"C:\\\\webPrograming\\\\next\\\\prepare\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\webPrograming\\\\next\\\\prepare\\\\front\\\\pages\\\\index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"t5W3f13kdHJN+C4GYAtNP8Viywk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUM7QUFDYztBQUNQO0FBQ0Y7QUFDQTtBQUNRO0FBQ3REOzs7QUFHQSxHQUNBLE1BQU1RLE9BQU87O0lBQ1gsTUFBTUMsV0FBV04sd0RBQVdBO0lBQzVCLE1BQU0sRUFBRU8sRUFBRSxFQUFFLEdBQUdSLHdEQUFXQSxDQUFDLENBQUNTLFFBQVVBLE1BQU1DLElBQUk7SUFDaEQsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRSxHQUFHWix3REFBV0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNSSxJQUFJO0lBRXBFZCxnREFBU0EsQ0FBQztRQUNSUSxTQUFTO1lBQ1BPLE1BQU1ULDhEQUFrQkE7UUFDMUI7SUFDRixHQUFHLEVBQUU7SUFFTE4sZ0RBQVNBLENBQUM7UUFDUixTQUFTZ0I7WUFDUEMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPQyxPQUFPLEVBQUVDLFNBQVNDLGVBQWUsQ0FBQ0MsWUFBWSxFQUFFRixTQUFTQyxlQUFlLENBQUNFLFlBQVk7WUFDeEcsaUZBQWlGO1lBQ2pGLGVBQWU7WUFDZixnQ0FBZ0M7WUFDaEMsUUFBUTtZQUNSLElBQUk7WUFDSixJQUFJTCxPQUFPQyxPQUFPLEdBQUdDLFNBQVNDLGVBQWUsQ0FBQ0MsWUFBWSxLQUFLRixTQUFTQyxlQUFlLENBQUNFLFlBQVksRUFBRTtnQkFDcEdoQixTQUFTO29CQUNQTyxNQUFNVCw4REFBa0JBO2dCQUMxQjtZQUNGO1FBQ0Y7UUFDQWEsT0FBT00sZ0JBQWdCLENBQUMsVUFBVVQ7UUFDbEMsT0FBTyxJQUFNRyxPQUFPTyxtQkFBbUIsQ0FBQyxVQUFVVjtJQUNwRCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2IsNkRBQVNBOztZQUNQTSxvQkFBTSw4REFBQ0wsNERBQVFBOzs7OztZQUNmUSxVQUFVZSxHQUFHLENBQUMsQ0FBQ2IscUJBQ2QsOERBQUNULDREQUFRQTtvQkFBZVMsTUFBTUE7bUJBQWZBLEtBQUtjLEVBQUU7Ozs7Ozs7Ozs7O0FBSTlCO0dBckNNckI7O1FBQ2FMLG9EQUFXQTtRQUNiRCxvREFBV0E7UUFDU0Esb0RBQVdBOzs7S0FIMUNNO0FBdUNOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG4vKiBOZXh07J2YIHBhZ2VzIO2PtOuNlOuKlCDsnbTrpoTsnbQgcGFnZXPsl6zslbwg7ZWc64ukIFxyXG4gICBOZXh06rCAIHBhZ2VzIO2PtOuNlOulvCDsnbjsi53tlbTshJwg7Jes6riwIOyeiOuKlCDtjIzsnbzrk6TsnYQg64ukIOy9lOuTnOyKpO2UjOumrO2MhSDrkJwg7Lu07Y+s64SM7Yq466GcIOunjOuTpOyWtOykgOuLpFxyXG4gICDsnbTrpoTsnbQgaW5kZXjsnbgg7J207Jyg64qUIE5leHTqsIAg7Lu07Y+s64SM7Yq4IOydtOumhOydhCDrnbzsmrDthLAg7J2066aE7Jy866GcIOq1rOyEse2VtOykmOyEnCDstIjquLAgLyDso7zshozrpbwgaW5kZXjroZztlZzri6RcclxuKi9cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCk7XHJcbiAgICAgIC8vIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSA+PSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAtIDEwMCkge1xyXG4gICAgICAvLyAgIGRpc3BhdGNoKHtcclxuICAgICAgLy8gICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfVxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIHttZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIkFwcExheW91dCIsIlBvc3RGb3JtIiwiUG9zdENhcmQiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJIb21lIiwiZGlzcGF0Y2giLCJtZSIsInN0YXRlIiwidXNlciIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwicG9zdCIsInR5cGUiLCJvblNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});