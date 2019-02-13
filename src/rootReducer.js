import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import homeReducer from './containers/Home/reducer';
import postReducer from './containers/Post/reducer';
import postCreateReducer from './containers/PostCreate/reducer';

export default combineReducers({
	homeReducer,
	postReducer,
	postCreateReducer,
	form: formReducer,
});
