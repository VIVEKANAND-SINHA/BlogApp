import BlogEditor from "@/components/BlogEditor";
import { Button } from "@mui/material";

export default function AddBlogs() {
  return (
    <>
      <main>
        <BlogEditor placeholder={"Write Your Blogs Here"} />
      </main>
    </>
  );
}
