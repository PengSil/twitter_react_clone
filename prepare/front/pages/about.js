import React from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import { END } from "redux-saga";

import { Avatar, Card } from "antd";
import AppLayout from "../components/AppLayout";
import wrapper from "../store/configureStore";
import { LOAD_USER_REQUEST } from "../reducers/user";

const About = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <AppLayout>
      <Head>
        <title>NodeBird</title>
      </Head>
      {userInfo ? (
        <Card
          actions={[
            <div key="twit">
              짹짹
              <br />
              {userInfo.Posts}
            </div>,
            <div key="following">
              팔로잉
              <br />
              {userInfo.Followings}
            </div>,
            <div key="follower">
              팔로워
              <br />
              {userInfo.Followers}
            </div>,
          ]}
        >
          <Card.Meta avatar={<Avatar>{userInfo.nickname[0]}</Avatar>} title={userInfo.nickname} description="노드버드 매니아" />
        </Card>
      ) : null}
    </AppLayout>
  );
};

/* 언제 접속해도 데이터가 바뀔일 없으면 getStaticProps를 쓰고 화면이 바껴야하면 getSerSideProps를 사용해야한다
빌드 할때 미리 server side rendering을 해서 html로 만들어서 나중에 페이지에 접속하면 그때 html을 전달함 */
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  console.log("getStaticProps");
  store.dispatch({
    type: LOAD_USER_REQUEST,
    data: 11,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default About;
