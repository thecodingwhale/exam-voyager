import api from '../../api';
import { push } from 'connected-react-router';
import {
	GET_POST_REQUESTED,
	GET_POST,
  DELETE_POST_REQUESTED,
} from './constants';
import { ERROR } from '../../shared/constants';

export const getPostById = (postId) => {
  return dispatch => {
    dispatch({
      type: GET_POST_REQUESTED,
    });
		api.getPost(postId)
			.then(response => dispatch({
	      type: GET_POST,
	      post: response.data,
			}))
      .catch(error => dispatch({
        type: ERROR,
        error,
      }));
  };
};

export const deletePostById = (postId) => {
  return dispatch => {
    dispatch({
      type: DELETE_POST_REQUESTED,
    });
    api.deletePostById(postId)
      .then(response => dispatch(push('/')))
      .catch(error => dispatch({
        type: ERROR,
        error,
      }));
  };
};