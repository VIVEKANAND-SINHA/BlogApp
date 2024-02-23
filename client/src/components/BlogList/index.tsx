"use client";

import BlogCard from "@/components/Card";
import blogdata from "@/config/blogs.json";

export default function BlogList() {
  return (
    <>
      <div className="w-full grid grid-rows-4 grid-flow-col gap-3 ">
        {blogdata.map((blog: any) => (
          <div className="row-span-3" key={blog.title}>
            <BlogCard data={blog}></BlogCard>
          </div>
        ))}
      </div>
    </>
  );
}
