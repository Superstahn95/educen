import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function BlogCard({ blog }) {
  const truncateText = (str) => {
    return str.length > 100 ? str.substring(0, 97) + "..." : str;
  };
  return (
    <div className="shadow-sm overflow-hidden mx-3">
      <div className="h-[300px] overflow-hidden">
        <LazyLoadImage
          effect="blur"
          src={blog.img}
          alt="image"
          className="w-full h-[300px] cursor-pointer object-cover transition-all duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="relative font-roboto p-4">
        <h2 className="capitalize font-bold text-xl font-roboto">
          {blog.title}
        </h2>
        <p className="text-black/40 py-3">{truncateText(blog.body)}</p>
        <div>
          <Link>read more</Link>
        </div>
        <div className="absolute left-4 -top-4">
          <span className="bg-sky-900 text-white p-3">{blog.date}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
