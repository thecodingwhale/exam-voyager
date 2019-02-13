import api from '../../api';
import { push } from 'connected-react-router';
import { CREATE_POST_REQUESTED } from './constants';
import { ERROR } from '../../shared/constants';

export const createPost = (post) => {
  return dispatch => {
    dispatch({
      type: CREATE_POST_REQUESTED,
    });
    return api.createPost(post)
      .then(response => dispatch(push(`/post/${response.data.id}`)))
      .catch(error => dispatch({
        type: ERROR,
        error,
      }));
  };
};