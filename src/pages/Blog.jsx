import React from "react";
import Intro from "../components/intro/Intro";
import { data } from "../components/blogs/data";
import BlogCard from "../components/blogs/BlogCard";

function Blog() {
  return (
    <>
      <Intro page={"blog"} />
      <div className="w-[90%] py-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
}

export default Blog;
