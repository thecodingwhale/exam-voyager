import api from '../../api';
import {
  GET_POSTS_REQUESTED,
  GET_POSTS,
} from './constants';

export const getPosts = (page, limit) => {
  return dispatch => {
    dispatch({
      type: GET_POSTS_REQUESTED,
    });
		api.getPosts(page, limit).then(response => dispatch({
      type: GET_POSTS,
      posts: response.data,
      totalPosts: response.meta.total,
      limit: response.meta.limit,
    }));
  };
};