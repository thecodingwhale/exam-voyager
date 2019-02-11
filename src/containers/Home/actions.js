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
		return api.getPosts(page, limit).then(payload => dispatch({
      type: GET_POSTS,
      posts: payload.posts,
      totalPosts: payload.totalPosts,
    }));
  };
};
