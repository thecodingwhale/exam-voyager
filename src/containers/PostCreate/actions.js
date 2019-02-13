import api from '../../api';
import {
  CREATE_POST_REQUESTED,
  CREATE_POST,
} from './constants';
import {
	ERROR
} from '../../shared/constants';

export const createPost = (post) => {
  return dispatch => {
    dispatch({
      type: CREATE_POST_REQUESTED,
    });
    return api.createPost(post)
	    .then(response => dispatch({
	      type: CREATE_POST,
	      post: response.data,
	    }))
      .catch(error => dispatch({
        type: ERROR,
        error,
      }));
  };
}