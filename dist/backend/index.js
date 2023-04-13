"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
require("dotenv").config();
const port = process.env.PORT || 1234;
const app = express_1.default();
app.set("view engine", "ejs");
app.set("views", "template");
app.use("/assets", express_1.default.static(path_1.default.join("dist/frontend")));
app.use("/", express_1.default.static(path_1.default.join("public")));
app.get("/board", (req, res, next) => {
    res.render("index", {});
});
app.get("/login", (req, res, next) => {
    res.render("login", {});
});
app.listen(port, () => {
    console.log(`Đã Kết Nối Cổng http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map