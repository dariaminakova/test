import ticketsreducer from './ticketsReducer';
import formreducer from './formReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers ({
    ticketsreducer,
    formreducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;