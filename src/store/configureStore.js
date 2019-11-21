import {createStore} from 'redux';
import notes from './reducers/notes';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    notes,
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;