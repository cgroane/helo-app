import {createStore, applyMiddleware} from 'redux';

import promiseMiddleware from 'redux-promise-middleware';
import userDashboard from './ducks/userDashboard';

export default createStore(userDashboard, applyMiddleware(promiseMiddleware()));