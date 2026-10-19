# AI Log

> Log of How AI was used to aid in the design and implementation of this project

### [Tue. Oct 6] Project structure folder layout ideas

Example Prompt>

```
I am going to make a fullstack education platform for a school project. Typically I code in C++ lets say with a src and dist folder etc what would be the folder structure for a git repo which contains both the nodejs backend and the front end static html-css-js web app this is for a school project so no react or jsx whatever so it's just simple static html pages with js and css
```

This helped me with finding the folder structure I wanted to organize the project, as well as help with the server.js file.

```js
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/api/courses", (req, res) => {
  res.json([{ id: 1, title: "Intro to Biology" }]);
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
```

Here is the output it gave me. I took inspiration from this for the server.js file.

### [Thu. Oct 8] Help with a broken import 'require()' in nodejs

Prompt> `I switched from import chalk from "chalk"; in nodejs to const require and it doesn't work anymore`

I was prompted to use chalk@4 version instead of the latest to continue using CommonJS instead of ESM

### [Mon. Oct 12] Help with responsive hero banner

Prompt>

```
!!! Just tell me about what I am asking about

I need this banner image to be responsive and have the height shrink on different sizes with this html tailwindcss site. How do I get it to shrink the entire hero div
```

And I pasted my index.html and global.css and it told me I needed to set the image width and height to full and set the object-fit css property to cover which makes sense with what I was seeing

Part of the output was this example of recommended changes to use w-full and h-full etc...

```html
<!-- HERO BANNER -->
<div class="hero-banner h-48 sm:h-64 md:h-80 lg:h-[28rem]">
  <img class="w-full h-full object-cover" src="./assets/hero-banner.jpg" />
  <div class="hero-dark-overlay"></div>
  <div class="flex flex-col items-center justify-center hero-text-container">
    <span class="font-medium text-2xl sm:text-3xl lg:text-4xl text-white"
      >Practice</span
    >
    <span class="hero-effect text-xl sm:text-2xl lg:text-3xl text-purple-200"
      >HTML</span
    >
  </div>
</div>
```

Prompt>

```
what type should my sqlite password column be to take a bcrypt hash
```

Output

```
Your SQLite password column should be a TEXT data type.
A standard bcrypt hash is generated as a 60-character alphanumeric string containing special characters (like $). While some database systems optimize storage with fixed-length fields like CHAR(60), SQLite dynamically allocates space based on the actual value stored.

Why Use TEXT?

• Flexible Storage: SQLite treats TEXT and VARCHAR(N) almost identically. Defining it as TEXT ensures the string is never accidentally truncated.
• Exact Fit: A standard bcrypt hash (e.g., $2b$12$R9h/c...) fits perfectly into a TEXT field without requiring trailing spaces or extra overhead.
```

Prompt>

```
what is the best way to sanitize my form-data

```

```js
// Safe
const stmt = db.prepare(
  "INSERT INTO users (username, password, createdAt) VALUES (?, ?, ?)",
);
stmt.run(username, hash, new Date().toISOString());

// Vulnerable
db.prepare(`INSERT INTO users (username) VALUES ('${username}')`).run();
```

### [Mon. Oct 9] User creation endpoint

Prompt>

```js
router.post("/create", (req, res) => {
  var newUser = req.body;
  const newUserSql = db.prepare(
    "INSERT INTO users (username, password, createdAt) VALUES (?, ?, ?)",
  );
  const newUserRes = newUserSql.run(
    newUser.username,
    newUser.password,
    new Date().toISOString(),
  );

  res.send(newUserRes.lastInsertRowid);
});
```

```
How can I res.send the data from the latest created user
this is an express nodejs better-sqlite3 app
```

Output

```js
router.post("/create", (req, res) => {
  const { username, password } = req.body;

  const insert = db.prepare(
    "INSERT INTO users (username, password, createdAt) VALUES (?, ?, ?)",
  );
  const info = insert.run(username, password, new Date().toISOString());

  const user = db
    .prepare("SELECT id, username, createdAt FROM users WHERE id = ?")
    .get(info.lastInsertRowid);

  res.status(201).json(user);
});
```

### [Mon. Oct 9] Login better-sqlite help

Prompt>

```
Now I'm having trouble with this code
```

```js
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const findUserByName = (username, callback) => {
    return db.get(
      `SELECT * FROM users WHERE username = ?`,
      [username],
      (err, row) => {
        callback(err, row);
      },
    );
  };

  findUserByName(username, (err, user) => {
    if (err) return res.status(500).send("Server failed successfully <(.-.)>");
    if (!user)
      return res
        .status(404)
        .send(
          "We searched pretty hard and couldn't find anyone with that name",
        );
    const result = bcrypt.compareSync(password, user.password);
    if (!result)
      return res
        .status(401)
        .send("That is not the correct password  ۜ\\(סּںסּَ` )/ۜ");

    res.status(200).json({
      answer: "Success",
    });
  });
});
```

```
I am getting errors like db.get is not a function
```

Output

```
The problem is that you’re mixing two different SQLite libraries’ APIs. db.get(sql, params, callback) is the sqlite3 package’s callback style. You’re using better-sqlite3, which is synchronous: you prepare a statement first, then call .get() on the statement, not on db. There are no callbacks.

Here’s the login route rewritten for better-sqlite3:
```

```js
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

    res.status(200).json({ answer: "Success" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server failed successfully <(.-.)>");
  }
});
```
