import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { END } from "redux-saga";
import axios from "axios";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";

/* Next의 pages 폴더는 이름이 pages여야 한다 
   Next가 pages 폴더를 인식해서 여기 있는 파일들을 다 코드스플리팅 된 컴포넌트로 만들어준다
   이름이 index인 이유는 Next가 컴포넌트 이름을 라우터 이름으로 구성해줘서 초기 / 주소를 index로한다
*/
const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector((state) => state.post);

  useEffect(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);

  useEffect(() => {
    function onScroll() {
      //console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      // if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      //   dispatch({
      //     type: LOAD_POSTS_REQUEST,
      //   });
      // }
      // VirtualizedList 구현해보기
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasMorePosts, loadPostsLoading, mainPosts]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

// 쿠키를 보낼때 브라우저에서 백엔드 서버로 보내서 처리 했었는데
// SSR을 사용함으로써 프론트에서 백엔드 서버로 보내서 cors가 발생함
// 밑에 코드는 front서버에서 보내는거임
// getServerSideProps를 하면 방문한 그때 serverside randering이됨 그때그때함
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
  store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });
  // request가 success가 될때까지 기다리는 코드
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;
