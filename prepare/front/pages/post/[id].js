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

  // if (router.isFallback) {
  //   return <div>로딩중...</div>;
  // }

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
      <PostCard post={singlePost} />
    </AppLayout>
  );
};

// getStaticPaths는 getStaticProps 이고 다이나믹 라우팅일때 사용이 가능하다
// 다이나믹 라우팅이라 id가 여러가지로 바뀔수 있는데 getStaticProps는 미리 페이지를 빌드해서 html로 만든다
// 근데 다이나믹 라우팅에선 어떤걸 만들어야 할지 몰라서 getStaticPaths로 미리 빌드할 페이지를 정한다
// export async function getStaticPaths() {
//   //const result = await axios.get("/post/list");
//   return {
//     // 45번 게시글이 미리 빌드업 된다
//     paths: [{ params: { id: "45" } }, { params: { id: "46" } }],
//     fallback: true,
//   };
// }

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
