import xss from "xss";
import fs from "fs";
import sql from "better-sqlite3";

const db = sql("posts.db");

export const SavePost = async (data) => {
  data.description = xss(data.description);
  const extension = data.image.name.split(".").pop();
  const timeStamp = new Date().getTime();
  const pathVal = `public/posts/${timeStamp}.${extension}`;
  const dataStream = fs.createWriteStream(pathVal);
  const ImgBuffer = await data.image.arrayBuffer();
  dataStream.write(Buffer.from(ImgBuffer), (error) => {
    if (error) {
      throw new Error("Failed to upload");
    }
  });
  data.image = `posts/${timeStamp}.${extension}`;
  db.prepare(
    `
    INSERT INTO posts (title, image, description, email)
    VALUES (?, ?, ?, ?)
  `
  ).run(data.title, data.image, data.description, data.email);
};
export const getAllPosts = async (data) => {
  setTimeout(() => {}, 50000);
  const posts = db
    .prepare(
      `SELECT  posts.*, COALESCE(GROUP_CONCAT(likes.user_id), '') AS likes  
          FROM posts LEFT JOIN likes ON posts.id = likes.post_id 
          GROUP BY posts.id
          ORDER BY posts.id`
    )
    .all();
  return posts;
};

export const likePostAction = async (data) => {
  // Check if the like already exists
  const isPresent = db
    .prepare(
      `SELECT EXISTS (SELECT 1 FROM likes WHERE user_id = ? AND post_id = ?) AS "exists"`
    )
    .get(data.user_id, data.post_id); // Correct parameter order
  
  console.log(isPresent);

  // If the like doesn't exist, insert it
  if (!isPresent.exists) {
    db.prepare(`INSERT INTO likes (user_id, post_id) VALUES (?, ?)`).run(
      data.user_id,
      data.post_id
    );
  } else {
    // Otherwise, delete the like
    db.prepare(`DELETE FROM likes WHERE user_id = ? AND post_id = ?`).run(
      data.user_id,
      data.post_id
    );
  }
};

