import { all, fork, put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from "../reducers/post";
import { ADD_POST_TO_ME } from "../reducers/user";
import shortId from "shortid";

//eslint-disable-next-line
function addPostAPI(data) {
  return axios.post("/api/post", data);
}

//eslint-disable-next-line
function* addPost(action) {
  try {
    //const result = yield call(addPostAPI, action.data);
    console.log("이 액션은 머야", action);
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

//eslint-disable-next-line
function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

//eslint-disable-next-line
function* addComment(action) {
  try {
    //const result = yield call(addCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
