import {
	CREATE_POST_REQUESTED,
	CREATE_POST,
} from './constants';
import {
  SUBMITTING,
  ERROR,
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

	  case CREATE_POST_REQUESTED:
	    return {
	      ...state,
	      error: false,
	      requestType: SUBMITTING,
	    };

	  case CREATE_POST:
	    return {
	      ...state,
	      requestType: CREATE_POST,
	      post: action.post,
	    };

    default:
      return state;
  }
};