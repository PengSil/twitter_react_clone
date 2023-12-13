import React, { useState, useCallback } from "react";
import { Card, Popover, Button, Avatar, List } from "antd";
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from "@ant-design/icons";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST } from "../reducers/post";
import FollowButton from "./FollowButton";
import Link from "next/link";
import moment from "moment";

moment.locale("ko");

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoding } = useSelector((state) => state.post);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const { me } = useSelector((state) => state.user);
  // 옵셔널 체이닝 연산자
  //me && me.id;
  const id = me?.id;
  //console.log("포스트", post);

  /*
  postCard가 리랜더링 되는 만큼 실행되는 버그가 있었음
  retweetError에다가 retweet게시글 id까지 넣어서 해결할수도 있음
  지금은 index에다가 써서 1번만 리랜더링 되게 해서 처리함
  useEffect(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);
  */
  const onLike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onUnlike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  const onRetweet = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: RETWEET_REQUEST,
      data: post.id,
    });
  }, [id]);

  const liked = post.Likers.find((v) => v.id === id);
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Card
          cover={post.Images[0] && <PostImages images={post.Images} />}
          actions={[
            <RetweetOutlined key="retweet" onClick={onRetweet} />,
            liked ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike} /> : <HeartOutlined key="heart" onClick={onLike} />,
            <MessageOutlined key="message" onClick={onToggleComment} />,
            <Popover
              key="ellipsis"
              content={
                <Button.Group>
                  {id && post.User.id === id ? (
                    <>
                      <Button>수정</Button>
                      <Button style={{ background: "red", color: "white" }} loading={removePostLoding} onClick={onRemovePost}>
                        삭제
                      </Button>
                    </>
                  ) : (
                    <Button>신고</Button>
                  )}
                </Button.Group>
              }
            >
              <EllipsisOutlined />
            </Popover>,
          ]}
          title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다` : null}
          extra={id && <FollowButton post={post} />}
        >
          {post.RetweetId && post.Retweet ? (
            <Card cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}>
              <div style={{ float: "right" }}>{moment(post.createdAt).format("YYYY.MM.DD")}</div>
              <Card.Meta
                avatar={
                  <Link href={`/user/${post.Retweet.User.id}`} legacyBehavior>
                    <a>
                      <Avatar>{post.Retweet.User.nickname[0]}</Avatar>
                    </a>
                  </Link>
                }
                title={post.Retweet.User.nickname}
                description={<PostCardContent postData={post.Retweet.content} />}
              />
            </Card>
          ) : (
            <>
              <div style={{ float: "right" }}>{moment(post.createdAt).format("YYYY.MM.DD")}</div>
              <Card.Meta
                avatar={
                  <Link href={`/user/${post.User.id}`} legacyBehavior>
                    <a>
                      <Avatar>{post.User.nickname[0]}</Avatar>
                    </a>
                  </Link>
                }
                title={post.User.nickname}
                description={<PostCardContent postData={post.content} />}
              />
            </>
          )}
        </Card>
        {commentFormOpened && (
          <div>
            <CommentForm post={post} />
            <List
              header={`${post.Comments.length}개의 댓글`}
              itemLayout="horizontal"
              dataSource={post.Comments}
              renderItem={(item) => (
                // 강의에서는 <li></li>로 사용하고 있습니다.
                <List.Item>
                  {/* 강의에서는 <Comment />로 사용하고 있습니다. */}
                  <List.Item.Meta
                    // author => title로, content => description으로 적용하면 강의에서 보는 UI와 똑같아요.
                    title={item.User.nickname}
                    avatar={
                      <Link href={`/user/${item.User.id}`} legacyBehavior>
                        <a>
                          <Avatar>{item.User.nickname[0]}</Avatar>
                        </a>
                      </Link>
                    }
                    description={item.content}
                  />
                </List.Item>
              )}
            />
          </div>
        )}
      </div>
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    RetweetId: PropTypes.number,
    Retweet: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;
