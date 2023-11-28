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
    // ? : 1 관계  글이 작성자에 속해있다.
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); // post.
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    // 위에 있는 db.Post.belongsTo(db.User); 와 구별 할때 as를 사용 as에 따라서 post.getLikers 처럼 게시글 좋아요 누른사람 가져옴 Post에 좋아요를 누른 사람들
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
    db.Post.belongsTo(db.Post, { as: "RetweetId" });
  };
  return Post;
};
