import React, { useContext, useEffect } from "react";
import PostContext from "../context/postContext";

const Posts = () => {
  const postContext = useContext(PostContext);

  const { posts, loading, fetchPosts, currentPage, postsPerPage } = postContext;
  useEffect(() => {
    fetchPosts();
    //eslint-disable-next-line
  }, []);

  const indexOflastPost = currentPage * postsPerPage;
  const indexOffirstPost = indexOflastPost - postsPerPage;
  const currentposts = posts.slice(indexOffirstPost, indexOflastPost);

  if (loading) {
    return <h1>Loading.....</h1>;
  } else {
    return (
      <ul className="list-group mb-4">
        {currentposts.map(post => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    );
  }
};

export default Posts;
