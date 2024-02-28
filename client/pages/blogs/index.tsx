import BlogEditor from "@/components/BlogEditor";
import BlogList from "@/components/BlogList";
import { Button } from "@mui/material";

const Blogs = () => {
  return (
    <>
      <div className="m-4 row">
        <Button href="/addblogs" variant="outlined" className="col-3">
          Write Blogs
        </Button>
        <Button href="/addblogs/editblog" variant="outlined" className="col-3">
          EditBlogs
        </Button>
      </div>
      <BlogList />
    </>
  );
};

export default Blogs;
