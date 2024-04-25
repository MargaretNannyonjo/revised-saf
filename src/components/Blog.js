import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import BlogList from "./BlogList";

const Blog = ({ isAuth }) => {
  const [addPost, setAddPost] = useState(false);
  const [title, setTitle] = useState("");
  const [blogpost, setBlogpost] = useState("");

  const blogCollectionRef = collection(db, "Blog-data");
  let navigate = useNavigate();

  const createBlog = async () => {
    await addDoc(blogCollectionRef, {
      title,
      blogpost,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });

    // Clear form fields
    setTitle("");
    setBlogpost("");

    // Hide the form
    setAddPost(false);

    navigate("/blog");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/authentication");
    }
  }, []);

  const createPost = () => {
    setAddPost(!addPost); // Toggle addPost state
  };

  return (
    <>
      <div className="blogPage">
        <h1>Journey Journals: Tales from the Road</h1>
        <button className="btn" onClick={createPost}>
          {addPost ? "Cancel" : "Create a Post"}
        </button>
        {addPost && (
          <div className="blogPage-container">
            <form className="form">
              <div className="input-group">
                <label>Title</label>
                <input
                  placeholder="Title..."
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>

              <div className="input-group">
                <label>Blog</label>
                <textarea
                  placeholder="Post....."
                  value={blogpost}
                  onChange={(event) => {
                    setBlogpost(event.target.value);
                  }}
                />
              </div>
              <button type="button" onClick={createBlog}>
                Submit Post
              </button>
            </form>
          </div>
        )}
      </div>
      <BlogList isAuth={isAuth} />
    </>
  );
};
export default Blog;
