import {
	GET_POST_REQUESTED,
	GET_POST,
	DELETE_POST_REQUESTED,
	DELETE_POST,
} from './constants';
import {
	FETCHING,
	ERROR,
	DELETING,
} from '../../shared/constants';

const initialState = {
  requestType: null,
  error: false,
  post: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        requestType: null,
        error: action.error.message,
      };

	  case GET_POST_REQUESTED:
	    return {
	      ...state,
	      requestType: FETCHING,
	    };

	  case GET_POST:
	    return {
	      ...state,
	      requestType: null,
	      post: action.post,
	    };

	  case DELETE_POST_REQUESTED:
	    return {
	      ...state,
	      requestType: DELETING,
	    };

	  case DELETE_POST:
	    return {
	      ...state,
	      requestType: DELETE_POST,
	    };

    default:
      return state;
  }
};