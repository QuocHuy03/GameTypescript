import express from "express";
import path from "path";
require("dotenv").config();
const port = process.env.PORT || 1234;

const app = express();

app.set("view engine", "ejs");
app.set("views", "template");

app.use("/assets", express.static(path.join("dist/frontend")));
app.use("/", express.static(path.join("public")));

app.get("/board", (req, res, next) => {
  res.render("index", {});
});

app.get("/login", (req, res, next) => {
  res.render("login", {});
});

app.listen(port, () => {
  console.log(`Đã Kết Nối Cổng http://localhost:${port}`);
});
