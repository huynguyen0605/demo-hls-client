import {createStore} from 'redux';

import createReducer from './store/reducers/rootReducers';

const rootReducers = createReducer();
const reduxStore = createStore(rootReducers);

export default reduxStore;