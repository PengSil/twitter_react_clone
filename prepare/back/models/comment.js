// sequelize에서는 table을 model이라고 부른다
module.exports = (sequelize, DataTypes) => {
  // MySQL에는 users 테이블 생성
  const Comment = sequelize.define(
    "Comment",
    {
      // id가 기본적으로 들어있다.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // UserId: 1 belongsTo가 있는곳에 이런 컬럼이 생긴다  소유자
      // PostId: 3 소유 게시글
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 이모티콘 저장
    }
  );
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
};
