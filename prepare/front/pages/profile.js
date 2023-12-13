import React, { useEffect, useState, useCallback } from "react";
import Head from "next/head";
// eslint-disable-next-line
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import axios from "axios";
import { END } from "redux-saga";
// swr는 serversideredering도 적용된다
import useSWR from "swr";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import wrapper from "../store/configureStore";
// eslint-disable-next-line
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_MY_INFO_REQUEST } from "../reducers/user";

// fetcher 주소에서 어떻게 가져올지 설정
const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);
const Profile = () => {
  /*
  const followingList = [{ nickname: "문성" }, { nickname: "여기" }, { nickname: "저기" }];
  const followerList = [{ nickname: "문성" }, { nickname: "여기" }, { nickname: "저기" }];
  */
  // const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [followersLimit, setFollowersLimit] = useState(3);
  const [followingsLimit, setFollowingsLimit] = useState(3);
  console.log("me값", me);

  // opset과 limit을 같이 사용해서 기존에 불러왔던 데이터는 캐싱을 해두고 새로 불러온 데이터만 concat으로 합쳐주면
  // 데이터 낭비를 해결할 수 있다 해보기
  // useEffect에 followersData의 id로 비교해서 기존 state에 concat하면 됨
  // 아니면 swr에 있는 useSWRInfinite? 이전에는 useSWRPages로 했음
  const { data: followersData, error: followerError } = useSWR(`http://localhost:3065/user/followers?limit=${followersLimit}`, fetcher);
  const { data: followingsData, error: followingError } = useSWR(`http://localhost:3065/user/followings?limit=${followingsLimit}`, fetcher);

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_FOLLOWERS_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_FOLLOWINGS_REQUEST,
  //   });
  // }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

  const loadMoreFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 3);
  });

  const loadMoreFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 3);
  });

  if (!me) {
    return "내 정보 로딩중...";
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return "팔로잉/팔로워 로딩 중 에러가 발생합니다.";
  }
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        {/* <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} /> */}
        <FollowList header="팔로잉" data={followingsData} onClickMore={loadMoreFollowings} loading={!followingsData && !followersData} />
        <FollowList header="팔로워" data={followersData} onClickMore={loadMoreFollowers} loading={!followingsData && !followersData} />
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
