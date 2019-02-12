import { combineReducers } from 'redux';
import homeReducer from './containers/Home/reducer';
import postReducer from './containers/Post/reducer';

export default combineReducers({
	homeReducer,
	postReducer,
});
