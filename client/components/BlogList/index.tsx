"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/Card";
// import blogdata from "@/config/blogs.json";

export default function BlogList() {
  const [blogdata, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/blog/allblogs", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBlogData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full grid grid-rows-4 grid-flow-col gap-3">
      {blogdata.map((blog: any) => (
        <div className="row-span-3" key={blog._id}>
          <BlogCard data={blog}></BlogCard>
        </div>
      ))}
    </div>
  );
}
