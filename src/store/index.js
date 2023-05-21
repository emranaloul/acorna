import thunk from 'redux-thunk';
import {combineReducers ,configureStore } from '@reduxjs/toolkit';
import {  applyMiddleware } from 'redux';

import orders from './order';
import auth from './auth';
const reducers = combineReducers({orders, auth})

const store = configureStore({reducer: reducers}, applyMiddleware(thunk))
export default store