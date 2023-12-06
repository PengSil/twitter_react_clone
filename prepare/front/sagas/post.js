import { all, fork, put, takeLatest, delay, call } from "redux-saga/effects"; // eslint-disable-line
import axios from "axios";
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  // generateDummyPost,
} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
//eslint-disable-next-line
import shortId from "shortid";

//eslint-disable-next-line
function uploadImagesAPI(data) {
  return axios.post("/post/images", data);
}

//eslint-disable-next-line
function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    // console.log("결과값 ", result);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      data: err.response.data,
    });
  }
}

//eslint-disable-next-line
function likePostAPI(data) {
  // data가 이미 있기 때문에 data를 따로 전달 안해줘도 된다.
  return axios.patch(`/post/${data}/like`);
}

//eslint-disable-next-line
function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.data);
    // console.log("결과값 ", result);
    yield put({
      type: LIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LIKE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

//eslint-disable-next-line
function unlikePostAPI(data) {
  return axios.delete(`/post/${data}/like`);
}

//eslint-disable-next-line
function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data);
    // console.log("결과값 ", result);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UNLIKE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

//eslint-disable-next-line
function loadPostsAPI(data) {
  return axios.get("/posts", data);
}

//eslint-disable-next-line
function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.data);
    // console.log("결과값 ", result);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}

//eslint-disable-next-line
function addPostAPI(data) {
  // formData를 넘길때는 바로 데이터로 넘겨줘야 한다 { content: data }이렇게하면 안됨
  return axios.post("/post", data);
}

//eslint-disable-next-line
function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

//eslint-disable-next-line
function removePostAPI(data) {
  // delete는 데이터를 못넣는다
  return axios.delete(`/post/${data}`);
}

//eslint-disable-next-line
function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

//eslint-disable-next-line
function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data); // POST  /post/1/comment
}

//eslint-disable-next-line
function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}
function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}
function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}
function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}
function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchUploadImages), fork(watchLikePost), fork(watchUnlikePost), fork(watchAddPost), fork(watchLoadPosts), fork(watchRemovePost), fork(watchAddComment)]);
}
