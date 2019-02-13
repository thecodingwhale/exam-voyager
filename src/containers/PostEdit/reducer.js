import {
	UPDATE_POST_REQUESTED,
	UPDATE_POST,
} from './constants';
import {
  ERROR,
  SUBMITTING,
} from '../../shared/constants';

const initialState = {
  requestType: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        requestType: null,
        error: action.error.message,
      };

    case UPDATE_POST_REQUESTED:
      return {
        ...state,
        error: false,
        requestType: SUBMITTING,
      };

    case UPDATE_POST:
      return {
        ...state,
        requestType: UPDATE_POST,
      };

    default:
      return state;
  }
};