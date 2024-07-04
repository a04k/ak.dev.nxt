"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCard from "../Components/blogCard";

interface Post {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    createdAt: string;
    urlSlug: string;
  };
}

const BlogPost: React.FC = () => {
  const router = useRouter();
  const [slug, setSlug] = useState<string | null>(null);
  const [post, setPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setSlug(window.location.pathname.split('/').pop() || null);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res: Response = await fetch("https://ak-dev-cms.onrender.com/api/posts?populate=*");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        
        const sortedPosts = data.data.sort((a: Post, b: Post) => b.id - a.id);
        setPosts(sortedPosts);
        const currentPost = sortedPosts.find((p: Post) => p.attributes.urlSlug === slug);
        if (currentPost) {
          setPost(currentPost);
        } else {
          router.push("/blog");
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchPosts();
    }
  }, [slug, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching posts: {error.message}</div>;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-1/3 p-4">
        <Link href="/blog" className="text-blue-500 hover:underline">
          &larr; Back to blog
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mt-4">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              href={`/blog/${post.attributes.urlSlug}`}
              link="_self"
              name={post.attributes.Title}
              info={post.attributes.Description}
              date={post.attributes.createdAt.split("T")[0]}
            />
          ))}
        </div>
      </aside>
      <main className="md:w-2/3 p-4">
        <Link href="/blog" className="text-blue-500 hover:underline mb-4 block">
          &larr; Back to blog
        </Link>
        {post ? (
          <article>
            <h1 className="text-4xl mb-4">{post.attributes.Title}</h1>
            <time className="block mb-4" dateTime={post.attributes.createdAt}>
              {new Date(post.attributes.createdAt).toLocaleDateString()}
            </time>
            <p>{post.attributes.Description}</p>
          </article>
        ) : (
          <div>Post not found</div>
        )}
      </main>
    </div>
  );
};

export default BlogPost;