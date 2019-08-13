import React, { useContext } from "react";
import PostContext from "../context/postContext";

const Pagination = () => {
  const postContext = useContext(PostContext);

  const { postsPerPage, posts, setCurrentPage } = postContext;

  let pageNumbers = [];
  console.log(posts.length);

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination" style={{ justifyContent: "center" }}>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              href="!#"
              onClick={() => setCurrentPage(number)}
              className="page-link"
              style={{ cursor: "pointer" }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
