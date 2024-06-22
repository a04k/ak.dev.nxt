"use client";
import { useEffect, useState } from "react";
import DefCard from "../Components/defaultCards";

export default function Blog() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("https://your-api-endpoint.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <main>
      <div className="ml-4">
        <h1 className="font-amarga text-6xl text-eb-100 dark:text-beige-100 mb-12">
          Latest Posts:
        </h1>
        <div className="lpContainer grid grid-cols-1 gap-8 font-spmR">
          {/* {posts.map((post) => (
          <DefCard
            key={post.id}
            href={/blog/posts/${slug}}
            link="#"
            name={post.title}
            info={post.summary}
          />
        ))} */}
        </div>
        <h1 className="text-3xl font-spmBI text-center mt-48">
          WORK IN PROGRESS
        </h1>
      </div>
    </main>
  );
}
