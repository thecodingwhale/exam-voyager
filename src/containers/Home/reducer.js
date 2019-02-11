import { fromJS } from 'immutable';
import {
  GET_POSTS_REQUESTED,
  GET_POSTS,
} from './constants';

const initialState = {
  fetching: false,
  posts: [],
  totalPosts: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUESTED:
      return {
        ...state,
        fetching: true
      };

    case GET_POSTS:
      return {
        ...state,
        fetching: false,
        posts: action.posts,
        totalPosts: action.totalPosts,
      };

    default:
      return state;
  }
};