import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  attributes: {
    Title: string;
    ShortSummary: string;
  };
}

const SinglePost: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!slug) {
          return;
        }
        const res = await fetch(`http://localhost:1337/api/blogs?filters[Title.contains]=${slug}`);
        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await res.json();
        const post = data.data[0];
        setPost(post);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching post: {error.message}</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <main>
      <div className="ml-4">
        <h1>{post.attributes.Title}</h1>
        <p>{post.attributes.ShortSummary}</p>
        {/* Additional content based on your post data structure */}
      </div>
    </main>
  );
};

export default SinglePost;