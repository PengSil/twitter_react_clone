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
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;