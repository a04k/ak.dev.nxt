// import { useState, useEffect } from "react";
// import BlogCard from "../Components/blogCard";

// interface Post {
//   id: number;
//   attributes: {
//     Title: string;
//     Description: string;
//     createdAt: string;
//     urlSlug: string;
//   };
// }

const Blog: React.FC = () => {
  // const [posts, setPosts] = useState<Post[] | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const res = await fetch("https://ak-dev-cms.onrender.com/api/posts?populate=*");
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch posts");
  //       }
  //       const data = await res.json();
        
  //       const sortedPosts = data.data.sort((a: Post, b: Post) => b.id - a.id);
  //       // sort posts by id in descending order (latest first because ID is self/auto incrementing)
  //       // this is a pretty horrible implementation IMO, Change later.
  //       // nvm goated implementation 🐐
        
  //       setPosts(sortedPosts);
  //     } catch (err) {
  //       setError(err as Error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  // const renderContent = () => {
  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>Error fetching posts: {error.message}</div>;
  //   }

  //   if (!posts || posts.length === 0) {
  //     return <div>No posts found.</div>;
  //   }

  //   return (
  //     <div className="lpContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 font-spmR">
  //       {posts.map((post) => (
  //         <BlogCard
  //           key={post.id}
  //           href={`/blog/${post.attributes.urlSlug}`}
  //           link="_self"
  //           name={post.attributes.Title}
  //           info={post.attributes.Description}
  //           date={post.attributes.createdAt.split("T")[0]}
  //         />
  //       ))}
  //     </div>
  //   );
  // };

  return (
    <main>
      <div className="ml-4">
        <h1 className="font-amarga text-8xl dark:text-white mb-12">
          Latest Posts:
        </h1>
        <div className="font-spmR text-xl text-orange-600 dark:text-petronas-400">
          Work in Progress, Releasing Soon!
        </div>
      </div>
    </main>
  );
};

export default Blog;
