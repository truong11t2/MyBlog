import dotenv from "dotenv";
dotenv.config("./.env");
import db from "./db.js";
import express from "express";

//Our routes
import blogPostRoutes from "./routes/blogPostRoutes.js";
db();
const app = express();

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
    limit: "50mb",
  })
);

app.use("/api/blog-posts", blogPostRoutes);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server runs on port ${port}.`);
});
