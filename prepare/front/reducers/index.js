import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

// action creator 동적 액션, 액션 생성기
export const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};

// (이전상태, 액션) => 다음상태
// 리듀서 합치기
// const rootReducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case HYDRATE:
//         console.log("HYDRATE", action);
//         return {
//           ...state,
//           ...action.payload,
//         };
//       default:
//         return state;
//     }
//   },
//   user,
//   post,
// });

// const rootReducer = combineReducers({
//   user,
//   post,
// });

// 이래야 rootReducer의 상태 전체를 덮을수가 있음
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        post,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
