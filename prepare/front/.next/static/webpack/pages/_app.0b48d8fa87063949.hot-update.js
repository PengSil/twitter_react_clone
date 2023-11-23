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

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ postSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//eslint-disable-next-line\nfunction addPostAPI(data) {\n    return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/post\", data);\n}\n//eslint-disable-next-line\nfunction* addPost(action) {\n    try {\n        //const result = yield call(addPostAPI, action.data);\n        console.log(\"이 액션은 머야\", action);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        const id = shortid__WEBPACK_IMPORTED_MODULE_3___default().generate();\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__.ADD_POST_SUCCESS,\n            data: {\n                id,\n                content: action.data\n            }\n        });\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_TO_ME,\n            data: id\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__.ADD_POST_FAILURE,\n            data: err.response.data\n        });\n    }\n}\n//eslint-disable-next-line\nfunction addCommentAPI(data) {\n    return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/post/\".concat(data.postId, \"/comment\"), data);\n}\n//eslint-disable-next-line\nfunction* addComment(action) {\n    try {\n        //const result = yield call(addCommentAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__.ADD_COMMENT_SUCCESS,\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__.ADD_COMMENT_FAILURE,\n            data: err.response.data\n        });\n    }\n}\nfunction* watchAddPost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_1__.ADD_POST_REQUEST, addPost);\n}\nfunction* watchRemovePost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_1__.REMOVE_POST_REQUEST, addPost);\n}\nfunction* watchAddComment() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_1__.ADD_COMMENT_REQUEST, addComment);\n}\nfunction* postSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchRemovePost),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddComment)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy9wb3N0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUU7QUFDN0M7QUFXQTtBQUN3QjtBQUNwQjtBQUU5QiwwQkFBMEI7QUFDMUIsU0FBU2lCLFdBQVdDLElBQUk7SUFDdEIsT0FBT2Isa0RBQVUsQ0FBQyxhQUFhYTtBQUNqQztBQUVBLDBCQUEwQjtBQUMxQixVQUFVRSxRQUFRQyxNQUFNO0lBQ3RCLElBQUk7UUFDRixxREFBcUQ7UUFDckRDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRjtRQUN4QixNQUFNakIseURBQUtBLENBQUM7UUFDWixNQUFNb0IsS0FBS1IsdURBQWdCO1FBQzNCLE1BQU1kLHVEQUFHQSxDQUFDO1lBQ1J3QixNQUFNbkIsNERBQWdCQTtZQUN0QlcsTUFBTTtnQkFDSk07Z0JBQ0FHLFNBQVNOLE9BQU9ILElBQUk7WUFDdEI7UUFDRjtRQUNBLE1BQU1oQix1REFBR0EsQ0FBQztZQUNSd0IsTUFBTVgsMERBQWNBO1lBQ3BCRyxNQUFNTTtRQUNSO0lBQ0YsRUFBRSxPQUFPSSxLQUFLO1FBQ1osTUFBTTFCLHVEQUFHQSxDQUFDO1lBQ1J3QixNQUFNbEIsNERBQWdCQTtZQUN0QlUsTUFBTVUsSUFBSUMsUUFBUSxDQUFDWCxJQUFJO1FBQ3pCO0lBQ0Y7QUFDRjtBQUVBLDBCQUEwQjtBQUMxQixTQUFTWSxjQUFjWixJQUFJO0lBQ3pCLE9BQU9iLGtEQUFVLENBQUMsYUFBeUIsT0FBWmEsS0FBS2EsTUFBTSxFQUFDLGFBQVdiO0FBQ3hEO0FBRUEsMEJBQTBCO0FBQzFCLFVBQVVjLFdBQVdYLE1BQU07SUFDekIsSUFBSTtRQUNGLHdEQUF3RDtRQUN4RCxNQUFNakIseURBQUtBLENBQUM7UUFDWixNQUFNRix1REFBR0EsQ0FBQztZQUNSd0IsTUFBTWhCLCtEQUFtQkE7WUFDekJRLE1BQU1HLE9BQU9ILElBQUk7UUFDbkI7SUFDRixFQUFFLE9BQU9VLEtBQUs7UUFDWixNQUFNMUIsdURBQUdBLENBQUM7WUFDUndCLE1BQU1mLCtEQUFtQkE7WUFDekJPLE1BQU1VLElBQUlDLFFBQVEsQ0FBQ1gsSUFBSTtRQUN6QjtJQUNGO0FBQ0Y7QUFFQSxVQUFVZTtJQUNSLE1BQU05Qiw4REFBVUEsQ0FBQ0csNERBQWdCQSxFQUFFYztBQUNyQztBQUVBLFVBQVVjO0lBQ1IsTUFBTS9CLDhEQUFVQSxDQUFDUywrREFBbUJBLEVBQUVRO0FBQ3hDO0FBRUEsVUFBVWU7SUFDUixNQUFNaEMsOERBQVVBLENBQUNNLCtEQUFtQkEsRUFBRXVCO0FBQ3hDO0FBRWUsVUFBVUk7SUFDdkIsTUFBTXBDLHVEQUFHQSxDQUFDO1FBQUNDLHdEQUFJQSxDQUFDZ0M7UUFBZWhDLHdEQUFJQSxDQUFDaUM7UUFBa0JqQyx3REFBSUEsQ0FBQ2tDO0tBQWlCO0FBQzlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NhZ2FzL3Bvc3QuanM/OThjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG4vL2VzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIuydtCDslaHshZjsnYAg66i47JW8XCIsIGFjdGlvbik7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGNvbnRlbnQ6IGFjdGlvbi5kYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vL2VzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaEFkZFBvc3QpLCBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksIGZvcmsod2F0Y2hBZGRDb21tZW50KV0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJhbGwiLCJmb3JrIiwicHV0IiwidGFrZUxhdGVzdCIsImRlbGF5IiwiYXhpb3MiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsInNob3J0SWQiLCJhZGRQb3N0QVBJIiwiZGF0YSIsInBvc3QiLCJhZGRQb3N0IiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImlkIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiY29udGVudCIsImVyciIsInJlc3BvbnNlIiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsImFkZENvbW1lbnQiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJwb3N0U2FnYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/post.js\n"));

/***/ })

});