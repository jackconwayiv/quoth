const express = require("express");
// const path = require("path");
const app = express();
const routes = require("./routes");

// static middleware
app.use(express.json());
// app.use(express.static(path.join(__dirname, "../../", "public")));

//mounted routes:
app.use("/quotes", routes);

// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../public/index.html"));
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
