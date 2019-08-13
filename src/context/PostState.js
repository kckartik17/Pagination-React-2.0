import React, { useReducer } from "react";
import axios from "axios";
import PostContext from "./postContext";
import PostReducer from "./postReducer";

import { GET_POSTS, SET_LOADING, SET_CURRENT_PAGE } from "./types";

const PostState = props => {
  const initialState = {
    posts: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 10
  };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  const fetchPosts = async () => {
    setLoading();

    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  };

  const setCurrentPage = number => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: number
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading,
        currentPage: state.currentPage,
        postsPerPage: state.postsPerPage,
        setLoading,
        fetchPosts,
        setCurrentPage
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
