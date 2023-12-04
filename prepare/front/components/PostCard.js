import React, { useState, useCallback } from "react";
import { Card, Popover, Button, Avatar, List } from "antd";
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from "@ant-design/icons";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import { REMOVE_POST_REQUEST } from "../reducers/post";
import FollowButton from "./FollowButton";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoding } = useSelector((state) => state.post);
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const { me } = useSelector((state) => state.user);
  // 옵셔널 체이닝 연산자
  //me && me.id;
  const id = me?.id;
  console.log("포스트", post);

  const onToggleLike = useCallback(() => {
    console.log("버튼클릭중");
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Card
          cover={post.Images[0] && <PostImages images={post.Images} />}
          actions={[
            <RetweetOutlined key="retweet" />,
            liked ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} /> : <HeartOutlined key="heart" onClick={onToggleLike} />,
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
          extra={id && <FollowButton post={post} />}
        >
          <Card.Meta avatar={<Avatar>{post.User.nickname[0]}</Avatar>} title={post.User.nickname} description={<PostCardContent postData={post.content} />} />
        </Card>
        {commentFormOpened && (
          <div>
            <CommentForm post={post} />
            <List
              header={`${post.Comments.length}개의 댓글`}
              itemLayout="horizontal"
              dataSource={post.Comments}
              renderItem={(item) => (
                console.log("item값", item),
                (
                  // 강의에서는 <li></li>로 사용하고 있습니다.
                  <List.Item>
                    {/* 강의에서는 <Comment />로 사용하고 있습니다. */}
                    <List.Item.Meta
                      // author => title로, content => description으로 적용하면 강의에서 보는 UI와 똑같아요.
                      title={item.User.nickname}
                      avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                      description={item.content}
                    />
                  </List.Item>
                )
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
  }).isRequired,
};

export default PostCard;
