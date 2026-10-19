const path = require("path");
const SQLite = require("better-sqlite3");

const db = new SQLite(path.join(__dirname, "data/sqlite.db"), {
  fileMustExist: true,
});
db.pragma("journal_mode = WAL");

module.exports = db;
