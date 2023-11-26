// sequelize에서는 table을 model이라고 부른다
module.exports = (sequelize, DataTypes) => {
  // MySQL에는 users 테이블 생성
  const Image = sequelize.define(
    "Image",
    {
      // id가 기본적으로 들어있다.
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", // 이모티콘 저장
    }
  );
  Image.associate = (db) => {};
  return Image;
};
