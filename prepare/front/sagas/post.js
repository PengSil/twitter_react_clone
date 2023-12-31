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
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  RETWEET_REQUEST,
  RETWEET_SUCCESS,
  RETWEET_FAILURE,
  LOAD_USER_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  LOAD_USER_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_SUCCESS,
  LOAD_HASHTAG_POSTS_FAILURE,
  // generateDummyPost,
} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
//eslint-disable-next-line
import shortId from "shortid";

//eslint-disable-next-line
function retweetAPI(data) {
  return axios.post(`/post/${data}/retweet`);
}

//eslint-disable-next-line
function* retweet(action) {
  try {
    const result = yield call(retweetAPI, action.data);
    // console.log("결과값 ", result);
    yield put({
      type: RETWEET_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RETWEET_FAILURE,
      error: err.response.data,
    });
  }
}

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
    console.error(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
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
    console.error(err);
    yield put({
      type: LIKE_POST_FAILURE,
      error: err.response.data,
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
    console.error(err);
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

//eslint-disable-next-line
function loadPostsAPI(lastId) {
  // get으로는 데이터를 전달할수 없어서 쿼리스트링 방식으로 넣어준다
  // get은 데이터 캐싱도 가능하다 post put patch는 데이터 캐싱이 안된다
  return axios.get(`/posts?lastId=${lastId || 0}`);
}

//eslint-disable-next-line
function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.lastId);
    // console.log("결과값 ", result);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

//eslint-disable-next-line
function loadHashtagPostsAPI(data, lastId) {
  // get으로는 데이터를 전달할수 없어서 쿼리스트링 방식으로 넣어준다
  // get은 데이터 캐싱도 가능하다 post put patch는 데이터 캐싱이 안된다
  // get으로 날릴때 한글넣으면 에러나서 encodeURIComponent를 써준다
  // encodeURIComponent를 쓰면 다른 문자로 변형되는데 decodeURIComponent를 쓰면 다시 돌릴수있다
  return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

//eslint-disable-next-line
function* loadHashtagPosts(action) {
  try {
    const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
    // console.log("결과값 ", result);
    yield put({
      type: LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_HASHTAG_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

//eslint-disable-next-line
function loadUserPostsAPI(data, lastId) {
  // get으로는 데이터를 전달할수 없어서 쿼리스트링 방식으로 넣어준다
  // get은 데이터 캐싱도 가능하다 post put patch는 데이터 캐싱이 안된다
  return axios.get(`/user/${data}/posts/?lastId=${lastId || 0}`);
}

//eslint-disable-next-line
function* loadUserPosts(action) {
  try {
    const result = yield call(loadUserPostsAPI, action.data, action.lastId);
    // console.log("결과값 ", result);
    yield put({
      type: LOAD_USER_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_USER_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

//eslint-disable-next-line
function loadPostAPI(data) {
  // get으로는 데이터를 전달할수 없어서 쿼리스트링 방식으로 넣어준다
  // get은 데이터 캐싱도 가능하다 post put patch는 데이터 캐싱이 안된다
  return axios.get(`/post/${data}`);
}

//eslint-disable-next-line
function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    console.log("결과값 ", result);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
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
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
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
    console.error(err);
    yield put({
      type: REMOVE_POST_FAILURE,
      error: err.response.data,
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
      error: err.response.data,
    });
  }
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
function* watchRetweet() {
  yield takeLatest(RETWEET_REQUEST, retweet);
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
function* watchLoadUserPosts() {
  yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}
function* watchLoadHashtagPosts() {
  yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
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
  yield all([
    fork(watchLoadPost),
    fork(watchLoadUserPosts),
    fork(watchLoadHashtagPosts),
    fork(watchRetweet),
    fork(watchUploadImages),
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchAddPost),
    fork(watchLoadPosts),
    fork(watchRemovePost),
    fork(watchAddComment),
  ]);
}
