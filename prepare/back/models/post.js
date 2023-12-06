// sequelize에서는 table을 model이라고 부른다
module.exports = (sequelize, DataTypes) => {
  // MySQL에는 users 테이블 생성
  const Post = sequelize.define(
    "Post",
    {
      // id가 기본적으로 들어있다.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // PostId -> RetweetId
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 이모티콘 저장
    }
  );
  Post.associate = (db) => {
    // N : 1 관계  글이 작성자에 속해있다.
    // sequelize 에서 관계 쉽게 쓰라고 이런것들을 만들어줌 (post.addUser, post.getUser)
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); // post.addHashtags
    db.Post.hasMany(db.Comment); // post.addComments, post.getComments
    db.Post.hasMany(db.Image); // post.addImages, post.getImages
    // 위에 있는 db.Post.belongsTo(db.User); 와 구별 할때 as를 사용 as에 따라서 post.getLikers 처럼 게시글 좋아요 누른사람 가져옴 Post에 좋아요를 누른 사람들
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // post.addLikers, post.removeLikers
    db.Post.belongsTo(db.Post, { as: "Retweet" }); // post.addRetweet
  };
  return Post;
};
