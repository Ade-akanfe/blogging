const sql = require("better-sqlite3");

const db = sql("posts.db"); // Use a single database for both tables

// Create the posts table
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    email TEXT NOT NULL
  )
`
).run();

// Create the likes table with a foreign key reference to the posts table
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    UNIQUE (user_id, post_id) 
  )
`
).run();

// Create indexes for performance
db.prepare(
  `
  CREATE INDEX IF NOT EXISTS idx_post_id ON likes(post_id);
`
).run();

db.prepare(
  `
  CREATE INDEX IF NOT EXISTS idx_user_id ON likes(user_id);
`
).run();

