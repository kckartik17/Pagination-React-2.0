import React from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import PostState from "./context/PostState";

function App() {
  return (
    <div className="App">
      <PostState>
        <div className="container mt-5">
          <h1 className="text-primary mb-3 text-center">My Posts</h1>
          <Posts />
          <Pagination />
        </div>
      </PostState>
    </div>
  );
}

export default App;
