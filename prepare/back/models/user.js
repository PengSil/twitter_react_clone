const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        email: {
          type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, // 필수
          unique: true, // 고유한 값
        },
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false, // 필수
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false, // 필수
        },
      },
      {
        // 두번째 객체로 모델에 대한 세팅이 들어간다
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  // 테이블 관계 설정
  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    // as 좋아요를 누른 얘들
    // through 는 테이블 이름을 바꿔주는거고 foreignKey는 컬럼의 id를 바꿔준다
    // n:n 관계인 경우 중간 테이블이 하나 더 생기는데 이 테이블 이름은 해당하는 두 테이블의 이름을 합친 UserPost으로 나온다 그래서 헷갈리니 through로 이름을 바꿔준다
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.belongsToMany(db.User, { through: "Follow", as: "Followers", foreignKey: "FollowingId" });
    db.User.belongsToMany(db.User, { through: "Follow", as: "Followings", foreignKey: "FollowerId" });
  }
};
