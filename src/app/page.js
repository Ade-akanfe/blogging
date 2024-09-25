import PostCard from "@/components/post/post-card";
import { getPosts } from "@/lib/post";

const Home = async () => {
  const posts = await getPosts();

  if (!posts || posts.length < 1) {
    return (
      <p className="w-full text-center text-base text-red-900">No post found</p>
    );
  }
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 py-5">
      {posts.map((val) => (
        <PostCard key={val.id} {...val} />
      ))}
    </div>
  );
};
export default Home;
