import React, { useReducer } from "react";
import axios from "axios";
import PostContext from "./postContext";
import PostReducer from "./postReducer";

import { GET_POSTS, SET_LOADING } from "./types";

const PostState = props => {
  const initialState = {
    posts: [],
    loading: false
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

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading,
        setLoading,
        fetchPosts
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
