const express = require("express");

const app = express();

app.listen(3000);

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("\nNew request made:");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("error", { title: "Error" });
});
