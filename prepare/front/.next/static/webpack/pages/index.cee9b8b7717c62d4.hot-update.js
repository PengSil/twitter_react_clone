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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ \"./components/PostForm.js\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n/* Next의 pages 폴더는 이름이 pages여야 한다 \r\n   Next가 pages 폴더를 인식해서 여기 있는 파일들을 다 코드스플리팅 된 컴포넌트로 만들어준다\r\n   이름이 index인 이유는 Next가 컴포넌트 이름을 라우터 이름으로 구성해줘서 초기 / 주소를 index로한다\r\n*/ const Home = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { me } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.post);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (retweetError) {\n            alert(retweetError);\n        }\n    }, [\n        retweetError\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__.LOAD_MY_INFO_REQUEST\n        });\n        dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__.LOAD_POSTS_REQUEST\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function onScroll() {\n            //console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);\n            // if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {\n            //   dispatch({\n            //     type: LOAD_POSTS_REQUEST,\n            //   });\n            // }\n            // VirtualizedList 구현해보기\n            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {\n                if (hasMorePosts && !loadPostsLoading) {\n                    var _mainPosts_;\n                    const lastId = (_mainPosts_ = mainPosts[mainPosts.length - 1]) === null || _mainPosts_ === void 0 ? void 0 : _mainPosts_.id;\n                    dispatch({\n                        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__.LOAD_POSTS_REQUEST,\n                        lastId\n                    });\n                }\n            }\n        }\n        window.addEventListener(\"scroll\", onScroll);\n        return ()=>window.removeEventListener(\"scroll\", onScroll);\n    }, [\n        hasMorePosts,\n        loadPostsLoading,\n        mainPosts\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            me && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\webPrograming\\\\next\\\\prepare\\\\front\\\\pages\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 14\n            }, undefined),\n            mainPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    post: post\n                }, post.id, false, {\n                    fileName: \"C:\\\\webPrograming\\\\next\\\\prepare\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\webPrograming\\\\next\\\\prepare\\\\front\\\\pages\\\\index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"eO+QMWR+/tIpNUDFV1MauWXrqHY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFDUDtBQUNGO0FBQ0E7QUFDUTtBQUNFO0FBQ3hEOzs7QUFHQSxHQUNBLE1BQU1TLE9BQU87O0lBQ1gsTUFBTUMsV0FBV1Asd0RBQVdBO0lBQzVCLE1BQU0sRUFBRVEsRUFBRSxFQUFFLEdBQUdULHdEQUFXQSxDQUFDLENBQUNVLFFBQVVBLE1BQU1DLElBQUk7SUFDaEQsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRSxHQUFHZix3REFBV0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNTSxJQUFJO0lBRXJHakIsZ0RBQVNBLENBQUM7UUFDUixJQUFJZ0IsY0FBYztZQUNoQkUsTUFBTUY7UUFDUjtJQUNGLEdBQUc7UUFBQ0E7S0FBYTtJQUVqQmhCLGdEQUFTQSxDQUFDO1FBQ1JTLFNBQVM7WUFDUFUsTUFBTVosZ0VBQW9CQTtRQUM1QjtRQUNBRSxTQUFTO1lBQ1BVLE1BQU1iLDhEQUFrQkE7UUFDMUI7SUFDRixHQUFHLEVBQUU7SUFFTE4sZ0RBQVNBLENBQUM7UUFDUixTQUFTb0I7WUFDUCw0R0FBNEc7WUFDNUcsaUZBQWlGO1lBQ2pGLGVBQWU7WUFDZixnQ0FBZ0M7WUFDaEMsUUFBUTtZQUNSLElBQUk7WUFDSix3QkFBd0I7WUFDeEIsSUFBSUMsT0FBT0MsT0FBTyxHQUFHQyxTQUFTQyxlQUFlLENBQUNDLFlBQVksR0FBR0YsU0FBU0MsZUFBZSxDQUFDRSxZQUFZLEdBQUcsS0FBSztnQkFDeEcsSUFBSVosZ0JBQWdCLENBQUNDLGtCQUFrQjt3QkFDdEJGO29CQUFmLE1BQU1jLFVBQVNkLGNBQUFBLFNBQVMsQ0FBQ0EsVUFBVWUsTUFBTSxHQUFHLEVBQUUsY0FBL0JmLGtDQUFBQSxZQUFpQ2dCLEVBQUU7b0JBQ2xEcEIsU0FBUzt3QkFDUFUsTUFBTWIsOERBQWtCQTt3QkFDeEJxQjtvQkFDRjtnQkFDRjtZQUNGO1FBQ0Y7UUFDQU4sT0FBT1MsZ0JBQWdCLENBQUMsVUFBVVY7UUFDbEMsT0FBTyxJQUFNQyxPQUFPVSxtQkFBbUIsQ0FBQyxVQUFVWDtJQUNwRCxHQUFHO1FBQUNOO1FBQWNDO1FBQWtCRjtLQUFVO0lBRTlDLHFCQUNFLDhEQUFDViw2REFBU0E7O1lBQ1BPLG9CQUFNLDhEQUFDTiw0REFBUUE7Ozs7O1lBQ2ZTLFVBQVVtQixHQUFHLENBQUMsQ0FBQ2YscUJBQ2QsOERBQUNaLDREQUFRQTtvQkFBZVksTUFBTUE7bUJBQWZBLEtBQUtZLEVBQUU7Ozs7Ozs7Ozs7O0FBSTlCO0dBbkRNckI7O1FBQ2FOLG9EQUFXQTtRQUNiRCxvREFBV0E7UUFDMENBLG9EQUFXQTs7O0tBSDNFTztBQXFETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG4vKiBOZXh07J2YIHBhZ2VzIO2PtOuNlOuKlCDsnbTrpoTsnbQgcGFnZXPsl6zslbwg7ZWc64ukIFxyXG4gICBOZXh06rCAIHBhZ2VzIO2PtOuNlOulvCDsnbjsi53tlbTshJwg7Jes6riwIOyeiOuKlCDtjIzsnbzrk6TsnYQg64ukIOy9lOuTnOyKpO2UjOumrO2MhSDrkJwg7Lu07Y+s64SM7Yq466GcIOunjOuTpOyWtOykgOuLpFxyXG4gICDsnbTrpoTsnbQgaW5kZXjsnbgg7J207Jyg64qUIE5leHTqsIAg7Lu07Y+s64SM7Yq4IOydtOumhOydhCDrnbzsmrDthLAg7J2066aE7Jy866GcIOq1rOyEse2VtOykmOyEnCDstIjquLAgLyDso7zshozrpbwgaW5kZXjroZztlZzri6RcclxuKi9cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nLCByZXR3ZWV0RXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmV0d2VldEVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KHJldHdlZXRFcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW3JldHdlZXRFcnJvcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCk7XHJcbiAgICAgIC8vIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSA+PSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAtIDEwMCkge1xyXG4gICAgICAvLyAgIGRpc3BhdGNoKHtcclxuICAgICAgLy8gICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBWaXJ0dWFsaXplZExpc3Qg6rWs7ZiE7ZW067O06riwXHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgY29uc3QgbGFzdElkID0gbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgbGFzdElkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gIH0sIFtoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcsIG1haW5Qb3N0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiQXBwTGF5b3V0IiwiUG9zdEZvcm0iLCJQb3N0Q2FyZCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiSG9tZSIsImRpc3BhdGNoIiwibWUiLCJzdGF0ZSIsInVzZXIiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwicmV0d2VldEVycm9yIiwicG9zdCIsImFsZXJ0IiwidHlwZSIsIm9uU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGFzdElkIiwibGVuZ3RoIiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});