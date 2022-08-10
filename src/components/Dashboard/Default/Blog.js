import React from "react";
import AllBlogs from "../../Pages/Blog/AllBlogs";
import PrimarySearchAppBar from "./Navbar";

const Blog = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <br />
      <AllBlogs/>
    </div>
  );
};

export default Blog;
