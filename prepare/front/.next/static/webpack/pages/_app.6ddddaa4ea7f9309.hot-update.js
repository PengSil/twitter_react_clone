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

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_COMMENT_FAILURE: function() { return /* binding */ ADD_COMMENT_FAILURE; },\n/* harmony export */   ADD_COMMENT_REQUEST: function() { return /* binding */ ADD_COMMENT_REQUEST; },\n/* harmony export */   ADD_COMMENT_SUCCESS: function() { return /* binding */ ADD_COMMENT_SUCCESS; },\n/* harmony export */   ADD_POST_FAILURE: function() { return /* binding */ ADD_POST_FAILURE; },\n/* harmony export */   ADD_POST_REQUEST: function() { return /* binding */ ADD_POST_REQUEST; },\n/* harmony export */   ADD_POST_SUCCESS: function() { return /* binding */ ADD_POST_SUCCESS; },\n/* harmony export */   REMOVE_POST_FAILURE: function() { return /* binding */ REMOVE_POST_FAILURE; },\n/* harmony export */   REMOVE_POST_REQUEST: function() { return /* binding */ REMOVE_POST_REQUEST; },\n/* harmony export */   REMOVE_POST_SUCCESS: function() { return /* binding */ REMOVE_POST_SUCCESS; },\n/* harmony export */   addComment: function() { return /* binding */ addComment; },\n/* harmony export */   addPost: function() { return /* binding */ addPost; },\n/* harmony export */   initialState: function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    mainPosts: [\n        {\n            id: 1,\n            User: {\n                id: 1,\n                nickname: \"제로초\"\n            },\n            content: \"첫 번 째 게시글 #해시태그 #익스프레스\",\n            Images: [\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"/images/드메단독1.jpg\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"/images/드메단독2.jpg\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"/images/드메단독3.jpg\"\n                }\n            ],\n            Comments: [\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    User: {\n                        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                        nickname: \"nero\"\n                    },\n                    content: \"댓글1\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    User: {\n                        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                        nickname: \"hero\"\n                    },\n                    content: \"댓글2\"\n                }\n            ]\n        }\n    ],\n    imagePaths: [],\n    addPostLoading: false,\n    addPostDone: false,\n    addPostError: null,\n    removePostLoading: false,\n    removePostDone: false,\n    removePostError: null,\n    addCommentLoading: false,\n    addCommentDone: false,\n    addCommentError: null\n};\nconst ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nconst ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nconst ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nconst REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nconst REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nconst REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nconst ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nconst ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nconst ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nconst addPost = (data)=>({\n        type: ADD_POST_REQUEST,\n        data\n    });\nconst addComment = (data)=>({\n        type: ADD_COMMENT_REQUEST,\n        data\n    });\nconst dummyPost = (data)=>({\n        id: data.id,\n        content: data.content,\n        User: {\n            id: 1,\n            nickname: \"제로초\"\n        },\n        Images: [],\n        Comments: []\n    });\nconst dummyComment = (data)=>({\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n        content: data,\n        User: {\n            id: 1,\n            nickname: \"제로초\"\n        }\n    });\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case ADD_POST_REQUEST:\n            return {\n                ...state,\n                addPostLoading: true,\n                addPostDone: false,\n                addPostError: null\n            };\n        case ADD_POST_SUCCESS:\n            return {\n                ...state,\n                mainPosts: [\n                    dummyPost(action.data),\n                    ...state.mainPosts\n                ],\n                addPostLoading: false,\n                addPostDone: true\n            };\n        case ADD_POST_FAILURE:\n            return {\n                ...state,\n                addPostLoading: false,\n                addPostError: action.error\n            };\n        case REMOVE_POST_REQUEST:\n            return {\n                ...state,\n                removePostLoading: true,\n                removePostDone: false,\n                removePostError: null\n            };\n        case REMOVE_POST_SUCCESS:\n            return {\n                ...state,\n                mainPosts: state.mainPosts.filter((v)=>v.id !== action.data.id),\n                removePostLoading: false,\n                removePostDone: true\n            };\n        case REMOVE_POST_FAILURE:\n            return {\n                ...state,\n                removePostLoading: false,\n                removePostError: action.error\n            };\n        case ADD_COMMENT_REQUEST:\n            return {\n                ...state,\n                addCommentLoading: true,\n                addCommentDone: false,\n                addCommentError: null\n            };\n        case ADD_COMMENT_SUCCESS:\n            {\n                const postIndex = state.mainPosts.findIndex((y)=>y.id === action.data.postId);\n                // const post = state.mainPosts[postIndex];\n                // const Comments = [dummyComment(action.data.content), ...post.Comments];\n                const post = {\n                    ...state.mainPosts[postIndex]\n                };\n                post.Comments = [\n                    dummyComment(action.data.content),\n                    ...post.Comments\n                ];\n                const mainPosts = [\n                    ...state.mainPosts\n                ];\n                // mainPosts[postIndex] = { ...post, Comments };\n                mainPosts[postIndex] = post;\n                return {\n                    ...state,\n                    mainPosts,\n                    addCommentLoading: false,\n                    addCommentDone: true\n                };\n            }\n        case ADD_COMMENT_FAILURE:\n            return {\n                ...state,\n                addCommentLoading: false,\n                addCommentError: action.error\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz82ZmY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBcIuyyqyDrsogg7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqRcIixcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL+uTnOuplOuLqOuPhTEuanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgc3JjOiBcIi9pbWFnZXMv65Oc66mU64uo64+FMi5qcGdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSwgc3JjOiBcIi9pbWFnZXMv65Oc66mU64uo64+FMy5qcGdcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIuuMk+q4gDFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcImhlcm9cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIuuMk+q4gDJcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6IFwi7KCc66Gc7LSIXCIsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogXCLsoJzroZzstIhcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpLFxyXG4gICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICByZW1vdmVQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh5KSA9PiB5LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAvLyBjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XHJcbiAgICAgIC8vIGNvbnN0IENvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0geyAuLi5wb3N0LCBDb21tZW50cyB9O1xyXG4gICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbInNob3J0SWQiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJnZW5lcmF0ZSIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsImZpbHRlciIsInYiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ5IiwicG9zdElkIiwicG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n"));

/***/ })

});