import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { END } from "redux-saga";
import { useSelector } from "react-redux";
import Head from "next/head";

import wrapper from "../../store/configureStore";
import { LOAD_POST_REQUEST } from "../../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import AppLayout from "../../components/AppLayout";
import PostCard from "../../components/PostCard";

const Post = () => {
  const router = useRouter();
  // 동적 라우팅 페이지를 여러개 해야할때 쓴다
  const { id } = router.query;
  const { singlePost } = useSelector((state) => state.post);

  return (
    <AppLayout>
      {/* 얘네는 알아서 serversiderendering이 된다 이게 되는지 확인하고 싶으면 PostMan에 넣어보기 */}
      <Head>
        <title>
          {singlePost.User.nickname}
          님의 글
        </title>
        <meta name="description" content={singlePost.content} />
        <meta property="og:title" content={`${singlePost.User.nickname}님의 게시글`} />
        <meta property="og:description" content={singlePost.content} />
        <meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : "https://nodebird.com/favicon.ico"} />
        <meta property="og:url" content={`https://nodebird.com/post/${id}`} />
      </Head>
      <PostCard post={singlePost}></PostCard>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_POST_REQUEST,
    //context.params.id or context.query.id 하면 useRouter에 접근할수있다const { id } = router.query;
    data: context.params.id,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Post;
