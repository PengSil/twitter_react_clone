import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
/* Next의 pages 폴더는 이름이 pages여야 한다 
   Next가 pages 폴더를 인식해서 여기 있는 파일들을 다 코드스플리팅 된 컴포넌트로 만들어준다
   이름이 index인 이유는 Next가 컴포넌트 이름을 라우터 이름으로 구성해줘서 초기 / 주소를 index로한다
*/
const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      //console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      // if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      //   dispatch({
      //     type: LOAD_POSTS_REQUEST,
      //   });
      // }
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasMorePosts, loadPostsLoading]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
