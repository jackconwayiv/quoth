import express from "express";
import router from "./routes";
// const path = require("path");
const app = express();

// static middleware
app.use(express.json());
// app.use(express.static(path.join(__dirname, "../../", "public")));

//mounted routes:
app.use("/quotes", router);

// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../public/index.html"));
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

export default app;
