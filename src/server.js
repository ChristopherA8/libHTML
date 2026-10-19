const express = require("express");
const path = require("path");
const c = require("chalk");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const db = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Routes
const user = require("./routes/users");
app.use("/api/users", user);

app.listen(PORT, () => {
  console.log(
    c.blue("[SERVER]") + " Server is running on http://localhost:3000",
  );
});

process.on("SIGINT", () => {
  db.close();
  process.exit();
});
