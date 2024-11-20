const express = require("express");
const router = express.Router();

// # index

router.get("/", (req, res) => {
  res.send("Posts list");
});

// # show

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  res.send(`Post ${postId}`);
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

module.exports = router;
