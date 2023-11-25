import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import Router from "next/router";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  /*
  const followingList = [{ nickname: "문성" }, { nickname: "여기" }, { nickname: "저기" }];
  const followerList = [{ nickname: "문성" }, { nickname: "여기" }, { nickname: "저기" }];
  */
  const { me } = useSelector((state) => state.user);
  console.log("me값", me);

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

export default Profile;
