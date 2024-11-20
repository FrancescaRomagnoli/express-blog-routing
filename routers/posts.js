const express = require("express");
const router = express.Router();
const postsList = require("../resources/post-list");

// # index

router.get("/", (req, res) => {
  //   res.send("Posts list");

  const responseObj = {
    count: postsList.length,
    posts: postsList,
  };
  res.json(responseObj);
});

// # show

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  //   res.send(`Post ${postId}`);

  res.send(postsList[postId]);
});

// # store

router.post("/", (req, res) => {
  res.send("Create a new post");
});

// # update

router.put("/:id", (req, res) => {
  const postId = req.params.id;
  res.send(`Update post ${postId}`);
});

// # modify

router.patch("/:id", (req, res) => {
  const postId = req.params.id;
  res.send(`Modify post ${postId}`);
});

// # destroy

router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  res.send(`Deleted post ${postId}`);
});

// # export

module.exports = router;
