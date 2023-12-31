const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();

const { Post, Image, User, Comment } = require("../models");

// GET /posts
router.get("/", async (req, res, next) => {
  try {
    const where = {};
    // 초기 로딩이 아닐때
    if (parseInt(req.query.lastId, 10)) {
      // 조건이 lastid보다 작은걸로
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    } // 21 20 19 18 17 16 15 14 13 12 11 10
    const posts = await Post.findAll({
      // 10개 가져와라
      where,
      limit: 10,
      // offset: 0, // 0~10 까지 가져와라 범위설정 게시글 추가 삭제 할때 문제가 있어서 안씀
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ], // 내림차순 정렬(최신꺼 가져오기) 댓글들도 내림차순으로 정렬
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, // 좋아요 누른사람
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
      ],
    });
    // console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
