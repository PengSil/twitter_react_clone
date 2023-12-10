import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import axios from "axios";
import { END } from "redux-saga";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import wrapper from "../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from "../reducers/user";

const Profile = () => {
  /*
  const followingList = [{ nickname: "문성" }, { nickname: "여기" }, { nickname: "저기" }];
  const followerList = [{ nickname: "문성" }, { nickname: "여기" }, { nickname: "저기" }];
  */
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  console.log("me값", me);

  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  // 서버쪽에서 실행하면 context.req라는게 존재한다
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  // 서버일때랑 쿠키가 있을때 이렇게 안하면 쿠키가 공유되는일이 생긴다 서버에서 실행하는거라
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  // request가 success가 될때까지 기다리는 코드
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Profile;
