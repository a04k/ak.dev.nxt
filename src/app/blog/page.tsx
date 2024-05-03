"use client";
import { useEffect, useState } from "react";
import DefCard from "../Components/defaultCards"

export default function Blog(){

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
      <h1 className="font-amarga text-6xl text-amber-300 mb-12">latest posts:</h1>
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
        Hello there 
      </div>
    </div>
  </main>
)};
