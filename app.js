const express = require("express");
const app = express();
const port = 3000;

// # routers
const postsRouter = require("./routers/posts");

app.use("/posts", postsRouter);

const postArr = [
  {
    title: "Ciambellone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis dolor ac nulla interdum, in posuere libero malesuada.",
    image: "./img/ciambellone.jpeg",
    tags: [
      "cooking",
      "baking",
      "homestyle baking",
      "recipes",
      "traditional recipes",
      "regional recipes",
    ],
  },
  {
    title: "Cracker alla barbabietola",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis dolor ac nulla interdum, in posuere libero malesuada.",
    image: "./img/cracker_barbabietola.jpeg",
    tags: [
      "cooking",
      "baking",
      "homestyle cooking",
      "recipes",
      "snack recipes",
      "healthy recipes",
    ],
  },
  {
    title: "Pane fritto dolce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis dolor ac nulla interdum, in posuere libero malesuada.",
    image: "./img/pane_fritto_dolce.jpeg",
    tags: [
      "cooking",
      "baking",
      "homestyle baking",
      "recipes",
      "easy recipes",
      "bread recipes",
    ],
  },
  {
    title: "Pasta alla barbabietola",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis dolor ac nulla interdum, in posuere libero malesuada.",
    image: "./img/pasta_barbabietola.jpeg",
    tags: [
      "cooking",
      "baking",
      "homestyle baking",
      "recipes",
      "healthy recipes",
    ],
  },
  {
    title: "Torta paesana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis dolor ac nulla interdum, in posuere libero malesuada.",
    image: "./img/torta_paesana.jpeg",
    tags: [
      "cooking",
      "baking",
      "homestyle baking",
      "recipes",
      "traditional recipes",
      "regional recipes",
    ],
  },
];

// # static assets

app.get(express.static("public"));

// # routes

app.get("/", (req, res) => {
  const text = "Server del mio blog";
  res.send(text);
});

app.get("/bacheca", (req, res) => {
  const responseObj = {
    count: postArr.length,
    posts: postArr,
  };
  res.json(responseObj);
});

// # listen

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
