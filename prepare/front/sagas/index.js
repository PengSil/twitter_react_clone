import { all, fork, take, call, put, takeEvery, takeLatest, delay } from "redux-saga/effects"; //eslint-disable-line

import postSaga from "./post";
import userSaga from "./user";

// fork는 비동기 함수 호출 call은 동기 함수 호출
/*
    call의 방식
    axios.post("/api/login")
    .then(()=>{
      yield put({
        type: "LOG_IN_SUCCESS",
        data: result.data,
      });
    })
  
    fork의 방식
    axios.post("/api/login");
*/

// logInAPI(action.data) 함수를 호출할때 이렇게 호출하지만
// call에서는 call(logInAPI, action.data) 이렇게 펼쳐줘야 한다
// 첫번쨰 자리가 함수고 그 다음부터는 매계변수
// 함수 호출할때도 () 안붙이고 해줘야함
// LOG_IN_REQUEST의 action 자체가 매계변수로 전달된다 (watchLogIn)

// put은 dispatch라고 생각하면 된다

/* 
  take는 loginAction이 실행될때까지 기다린다
  yield take("LOG_IN_REQUEST", logIn); 
  이렇게 하면 한번식만 동작해서 while(true)로 감싸줘서 사용하거나 takeEvery를 사용한다
  take는 동기적으로 작동 takeEvery는 비동기적으로 작동
*/
/*
  takeLatest는 여러번 눌렀을때를 대비해 마지막 한번만 실행하고 앞에 나머지는 다 무시한다
  앞에 완료되지 않은게 있으면 없애고 완료된거는 취소하지 않는다. 동시에 로딩중인것만 앞에것들 취소
  서버에 데이터를 보내고 오는 응답을 취소 서버로 가는 요청은 취소가 불가 그래서 서버에서도 중복 데이터가 오는지 체크 해야한다.
  takeLeading은 첫번째만 실행

  throttle을 쓰면 요청 보내는것 까지 시간 제한을 두고 할수있다 
  yield throttle("ADD_POST_REQUEST", addPost, 2000);
*/

// all은 배열을 받아서 한번에 실행을 해줌
// fork는 함수를 실행하는것 call이랑은 다름
// fokr로 실행하고 all로 한번에 받아서 할수 있게함
export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
