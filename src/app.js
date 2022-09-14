const request = require("request");

const loadArticles = (callback) => {
  //Please Click On the Link Before Running
  const url =
    "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=27d6b6b942984ba785350734c0fc64ed";
  request({ url, json: true }, (error, response) => {
    callback(response.body.articles);
  });
};
const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
const viewPath = path.join(__dirname, "../view");
app.set("views", viewPath);

app.get("/", (req, res) => {
  loadArticles((articles) => {
    res.render("index", {
      articles,
    });
  });
});

app.listen(port, () => {
  console.log("server is running");
});
