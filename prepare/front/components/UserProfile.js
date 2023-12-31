import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Avatar, Button } from "antd";
import { logoutRequestAction } from "../reducers/user";
import Link from "next/link";

const UserProfile = () => {
  const { me, logOutLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        // react 에서 jsx 쓸때는 배열에 key값이 있어야 한다
        <div key="twit">
          <Link href={`/user/${me.id}`} legacyBehavior>
            <a>짹짹</a>
          </Link>
          <br />
          {me.Posts.length}
        </div>,
        <div key="followings">
          <Link href={"/profile"} legacyBehavior>
            <a>팔로잉</a>
          </Link>
          <br />
          {me.Followings.length}
        </div>,
        <div key="followings">
          <Link href={"/profile"} legacyBehavior>
            <a>팔로워</a>
          </Link>
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={
          <Link href={`/user/${me.id}`} legacyBehavior>
            <a>
              <Avatar>{me.nickname[0]}</Avatar>
            </a>
          </Link>
        }
        title={me.nickname}
      />
      <Button onClick={onLogOut} loading={logOutLoading} style={{ marginTop: "7px" }}>
        로그아웃
      </Button>
    </Card>
  );
};

// UserProfile.propTypes = {
//   여기 있는 node는 react 에 있는 node return ( 여기 있는게 모두 node 이다 )
//   setIsLoggedIn: PropTypes.node.isRequired,
// };
export default UserProfile;
