import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import BlogList from "./BlogList";

const Blog = (isAuth) => {
  const [title, setTitle] = useState("");
  const [blogpost, setBlogpost] = useState("");

  const blogCollectionRef = collection(db, "Blog-data");
  let navigate = useNavigate();

  const createBlog = async () => {
    await addDoc(blogCollectionRef, {
      title,
      blogpost,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uuid },
    });

    navigate("/blog");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/authentication");
    }
  }, []);

  return (
    <>
      <div className="blogPage">
        <div className="blogPage-container">
          <h1>Journey Journals: Tales from the Road</h1>

          <div className="input-group">
            <label>Title</label>
            <input
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          <div className="input-group">
            <label>Blog</label>
            <textarea
              placeholder="Post....."
              onChange={(event) => {
                setBlogpost(event.target.value);
              }}
            />
          </div>
          <button onClick={createBlog}>Submit Post</button>
        </div>
      </div>
      <BlogList />
    </>
  );
};
export default Blog;
