const express = require("express");
const path = require("path");
const c = require("chalk");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/user", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(
    c.blue("[SERVER]") + " Server is running on http://localhost:3000",
  );
});
