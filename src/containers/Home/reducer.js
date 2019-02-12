import {
  GET_POSTS_REQUESTED,
  GET_POSTS,
} from './constants';
import {
  FETCHING,
  ERROR,
} from '../../shared/constants';

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

    default:
      return state;
  }
};