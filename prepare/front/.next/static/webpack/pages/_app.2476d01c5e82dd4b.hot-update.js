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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_COMMENT_FAILURE: function() { return /* binding */ ADD_COMMENT_FAILURE; },\n/* harmony export */   ADD_COMMENT_REQUEST: function() { return /* binding */ ADD_COMMENT_REQUEST; },\n/* harmony export */   ADD_COMMENT_SUCCESS: function() { return /* binding */ ADD_COMMENT_SUCCESS; },\n/* harmony export */   ADD_POST_FAILURE: function() { return /* binding */ ADD_POST_FAILURE; },\n/* harmony export */   ADD_POST_REQUEST: function() { return /* binding */ ADD_POST_REQUEST; },\n/* harmony export */   ADD_POST_SUCCESS: function() { return /* binding */ ADD_POST_SUCCESS; },\n/* harmony export */   REMOVE_POST_FAILURE: function() { return /* binding */ REMOVE_POST_FAILURE; },\n/* harmony export */   REMOVE_POST_REQUEST: function() { return /* binding */ REMOVE_POST_REQUEST; },\n/* harmony export */   REMOVE_POST_SUCCESS: function() { return /* binding */ REMOVE_POST_SUCCESS; },\n/* harmony export */   addComment: function() { return /* binding */ addComment; },\n/* harmony export */   addPost: function() { return /* binding */ addPost; },\n/* harmony export */   initialState: function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.mjs\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n\n\n\n_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.seed(123);\nconst initialState = {\n    mainPosts: [\n        {\n            id: 1,\n            User: {\n                id: 1,\n                nickname: \"제로초\"\n            },\n            content: \"첫 번 째 게시글 #해시태그 #익스프레스\",\n            Images: [\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"/images/드메단독1.jpg\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"/images/드메단독2.jpg\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"/images/드메단독3.jpg\"\n                }\n            ],\n            Comments: [\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    User: {\n                        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                        nickname: \"nero\"\n                    },\n                    content: \"댓글1\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    User: {\n                        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                        nickname: \"hero\"\n                    },\n                    content: \"댓글2\"\n                }\n            ]\n        }\n    ],\n    imagePaths: [],\n    addPostLoading: false,\n    addPostDone: false,\n    addPostError: null,\n    removePostLoading: false,\n    removePostDone: false,\n    removePostError: null,\n    addCommentLoading: false,\n    addCommentDone: false,\n    addCommentError: null\n};\ninitialState.mainPosts.concat(Array(20).fill().map(()=>({\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n        User: {\n            id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n            nickname: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.person.nickname\n        },\n        content: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.lorem.paragraph(),\n        Images: [\n            {\n                src: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.image.imageUrl()\n            }\n        ],\n        Comments: [\n            {\n                User: {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    nickname: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.name.findName()\n                },\n                content: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.lorem.sentence()\n            }\n        ]\n    })));\nconst ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nconst ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nconst ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nconst REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nconst REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nconst REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nconst ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nconst ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nconst ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nconst addPost = (data)=>({\n        type: ADD_POST_REQUEST,\n        data\n    });\nconst addComment = (data)=>({\n        type: ADD_COMMENT_REQUEST,\n        data\n    });\nconst dummyPost = (data)=>({\n        id: data.id,\n        content: data.content,\n        User: {\n            id: 1,\n            nickname: \"제로초\"\n        },\n        Images: [],\n        Comments: []\n    });\nconst dummyComment = (data)=>({\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n        content: data,\n        User: {\n            id: 1,\n            nickname: \"제로초\"\n        }\n    });\n// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성 지키면서)\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, (draft)=>{\n        switch(action.type){\n            case ADD_POST_REQUEST:\n                draft.addPostLoading = true;\n                draft.addPostDone = false;\n                draft.addPostError = null;\n                break;\n            case ADD_POST_SUCCESS:\n                draft.addPostLoading = false;\n                draft.addPostDone = true;\n                draft.mainPosts.unshift(dummyPost(action.data));\n                break;\n            case ADD_POST_FAILURE:\n                draft.addPostLoading = false;\n                draft.addPostError = action.error;\n                break;\n            case REMOVE_POST_REQUEST:\n                draft.removePostLoading = true;\n                draft.removePostDone = false;\n                draft.removePostError = null;\n                break;\n            case REMOVE_POST_SUCCESS:\n                draft.removePostLoading = false;\n                draft.mainPosts = draft.mainPosts.filter((v)=>v.id !== action.data);\n                draft.removePostDone = true;\n                break;\n            case REMOVE_POST_FAILURE:\n                draft.removePostLoading = false;\n                draft.removePostError = action.error;\n                break;\n            case ADD_COMMENT_REQUEST:\n                draft.addCommentLoading = true;\n                draft.addCommentDone = false;\n                draft.addCommentError = null;\n                break;\n            case ADD_COMMENT_SUCCESS:\n                {\n                    const post = draft.mainPosts.find((y)=>y.id === action.data.postId);\n                    post.Comments.unshift(dummyComment(action.data.content));\n                    draft.addCommentLoading = false;\n                    draft.addCommentDone = true;\n                    break;\n                // const postIndex = state.mainPosts.findIndex((y) => y.id === action.data.postId);\n                // const post = { ...state.mainPosts[postIndex] };\n                // post.Comments = [dummyComment(action.data.content), ...post.Comments];\n                // const mainPosts = [...state.mainPosts];\n                // mainPosts[postIndex] = post;\n                // return {\n                //   ...state,\n                //   mainPosts,\n                //   addCommentLoading: false,\n                //   addCommentDone: true,\n                // };\n                }\n            case ADD_COMMENT_FAILURE:\n                draft.addCommentLoading = false;\n                draft.addCommentError = action.error;\n                break;\n            default:\n                break;\n        }\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdUQsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUV2RCxFQUFFLEtBQUsrQyxPQUFPUCxJQUFJLENBQUNnQixNQUFNO29CQUNwRUgsS0FBSzlDLFFBQVEsQ0FBQzBDLE9BQU8sQ0FBQ0wsYUFBYUcsT0FBT1AsSUFBSSxDQUFDckMsT0FBTztvQkFDdEQ2QyxNQUFNakMsaUJBQWlCLEdBQUc7b0JBQzFCaUMsTUFBTWhDLGNBQWMsR0FBRztvQkFDdkI7Z0JBQ0EsbUZBQW1GO2dCQUNuRixrREFBa0Q7Z0JBQ2xELHlFQUF5RTtnQkFDekUsMENBQTBDO2dCQUMxQywrQkFBK0I7Z0JBQy9CLFdBQVc7Z0JBQ1gsY0FBYztnQkFDZCxlQUFlO2dCQUNmLDhCQUE4QjtnQkFDOUIsMEJBQTBCO2dCQUMxQixLQUFLO2dCQUNQO1lBQ0EsS0FBS3NCO2dCQUNIVSxNQUFNakMsaUJBQWlCLEdBQUc7Z0JBQzFCaUMsTUFBTS9CLGVBQWUsR0FBRzhCLE9BQU9HLEtBQUs7Z0JBQ3BDO1lBQ0Y7Z0JBQ0U7UUFDSjtJQUNGO0FBQ0Y7QUFFQSwrREFBZUwsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9wb3N0LmpzPzZmZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHsgcHJvZHVjZSB9IGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBmYWtlciB9IGZyb20gXCJAZmFrZXItanMvZmFrZXJcIjtcclxuZmFrZXIuc2VlZCgxMjMpO1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBcIuyyqyDrsogg7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqRcIixcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL+uTnOuplOuLqOuPhTEuanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgc3JjOiBcIi9pbWFnZXMv65Oc66mU64uo64+FMi5qcGdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSwgc3JjOiBcIi9pbWFnZXMv65Oc66mU64uo64+FMy5qcGdcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIuuMk+q4gDFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcImhlcm9cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIuuMk+q4gDJcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5pbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChcclxuICBBcnJheSgyMClcclxuICAgIC5maWxsKClcclxuICAgIC5tYXAoKCkgPT4gKHtcclxuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6IGZha2VyLnBlcnNvbi5uaWNrbmFtZSxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICAgIEltYWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6IFwi7KCc66Gc7LSIXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG4vLyDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEsSDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh5KSA9PiB5LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHkpID0+IHkuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgLy8gY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgIG1haW5Qb3N0cyxcclxuICAgICAgICAvLyAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAvLyAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbInNob3J0SWQiLCJwcm9kdWNlIiwiZmFrZXIiLCJzZWVkIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJjb25jYXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJwZXJzb24iLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwiaW1hZ2VVcmwiLCJuYW1lIiwiZmluZE5hbWUiLCJzZW50ZW5jZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsImZpbHRlciIsInYiLCJwb3N0IiwiZmluZCIsInkiLCJwb3N0SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n"));

/***/ })

});