"use server";

import { redirect } from "next/navigation";
import { getAllPosts, likePostAction, SavePost } from "./actions-helper";

export async function sendAction(prevState, formData) {
  const image = formData.get("image");
  const description = formData.get("description");
  const title = formData.get("title");
  const data = { image, description, title, email: "ademola" };
  if (!image || !description || !title) {
    return {
      error: "All fields are required",
    };
  }
  await SavePost(data);
  setTimeout(() => {
    console.log("Timing out");
  }, 10000);
  redirect("/");
}
export async function getPosts() {
  const AllPosts = await getAllPosts();
  // rresponsible for sorting the posts
  return AllPosts;
}
export async function likePost(formData) {
  const postId = formData.get("postId");
  await likePostAction({ post_id: postId, user_id: "1" });
}
