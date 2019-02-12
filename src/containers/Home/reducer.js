import {
  GET_POSTS_REQUESTED,
  GET_POSTS,
  DELETE_POST_REQUESTED,
  DELETE_POST,
  FETCHING,
  DELETING,
  ERROR,
} from './constants';

const initialState = {
  requestType: null,
  error: false,
  posts: [],
  totalPosts: 0,
  limit: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        requestType: null,
        error: action.error.message,
      };
      return state;

    case GET_POSTS_REQUESTED:
      return {
        ...state,
        requestType: FETCHING,
      };

    case GET_POSTS:
      const { posts, totalPosts, limit } = action;
      return {
        ...state,
        requestType: null,
        posts,
        totalPosts,
        limit,
      };

    case DELETE_POST_REQUESTED:
      return {
        ...state,
        error: false,
        requestType: DELETING,
      };

    case DELETE_POST:
      return {
        ...state,
        requestType: null,
      };

    default:
      return state;
  }
};