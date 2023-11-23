import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
/* Next의 pages 폴더는 이름이 pages여야 한다 
   Next가 pages 폴더를 인식해서 여기 있는 파일들을 다 코드스플리팅 된 컴포넌트로 만들어준다
   이름이 index인 이유는 Next가 컴포넌트 이름을 라우터 이름으로 구성해줘서 초기 / 주소를 index로한다
*/
const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
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
