import { GET_POSTS, SET_LOADING, SET_CURRENT_PAGE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
