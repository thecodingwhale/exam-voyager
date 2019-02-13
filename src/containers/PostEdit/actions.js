import { push } from 'connected-react-router';
import api from '../../api';
import {
  UPDATE_POST_REQUESTED,
  UPDATE_POST,
} from './constants';
import {
	ERROR
} from '../../shared/constants';

export const updatePost = (id, post) => {
	return dispatch => {
    dispatch({
      type: UPDATE_POST_REQUESTED,
    });
    return api.updatePost(id, post)
	    .then(response => dispatch(push(`/post/${id}`)))
      .catch(error => dispatch({
        type: ERROR,
        error,
      }));
	}
}