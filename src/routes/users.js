const express = require("express");
const c = require("chalk");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../db");
const authJWT = require("../utils/authjwt");

/*
CREATE TABLE users (
	user_id INTEGER PRIMARY KEY AUTOINCREMENT,
	username TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL,
	firstname TEXT,
	lastname TEXT,
	createdAt TEXT NOT NULL)
*/

router.post("/create", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res
      .status(400)
      .send("Bad request; missing username or password field <._.<");
    return;
  }

  const select = db
    .prepare("SELECT 1 FROM users WHERE username = ?")
    .get(username);
  if (select) {
    res.status(409).send("Username already exists");
    return;
  }

  const insert = db.prepare(
    "INSERT INTO users (username, password, createdAt) VALUES (?, ?, ?)",
  );
  bcrypt.hash(password, 10, (err, hash) => {
    const info = insert.run(username, hash, new Date().toISOString());
    const user = db
      .prepare(
        "SELECT user_id, username, createdAt FROM users WHERE user_id = ?",
      )
      .get(info.lastInsertRowid);
    console.log(c.yellow("[API]") + ` User created: (${username})`);

    res.status(201).json(user);
  });
});

// Inspiration: Antihero - https://stackoverflow.com/a/67557200
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  try {
    const user = db
      .prepare("SELECT * FROM users WHERE username = ?")
      .get(username);

    if (!user) {
      return res
        .status(404)
        .send(
          "We searched pretty hard and couldn't find anyone with that name",
        );
    }

    const result = bcrypt.compareSync(password, user.password);
    if (!result) {
      return res
        .status(401)
        .send("That is not the correct password  ۜ\\(סּںסּَ` )/ۜ");
    }

    /*
    {
      user_id: 13,
      username: 'joe',
      password: '$2b$10$Yy4z07I0SFYmh6CLyOJwyOlTI6yGMANnIJDWa7LrTBCOOED2pmqMG',
      firstname: null,
      lastname: null,
      createdAt: '2026-10-19T11:51:56.489Z'
    }
    */
    const payload = {
      id: user.user_id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      createdAt: user.createdAt,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server failed successfully <(.-.)>");
  }
});

router.get("/profile", authJWT, (req, res) => {
  res.status(200).json({ message: "Profile accessed", user: req.user });
});

module.exports = router;
