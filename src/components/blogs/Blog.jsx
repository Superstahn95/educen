import { data } from "./data";
import BlogCard from "./BlogCard";
function Blog() {
  return (
    <section>
      <div className="flex flex-col items-center py-5">
        <h1 className="font-merriweather font-bold  uppercase text-3xl py-7">
          our blogs
        </h1>
        <p className="text-black/40 capitalize text-[16px]  font-roboto pb-4">
          educational blogs around the world
        </p>
        <hr className="w-[5%] text-center border-black" />
      </div>
      <div className="grid gap-3 md:grid-cols-3 w-[90%] mx-auto">
        {data.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default Blog;
