import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from './usersReducer';

const reducer = {
  users: usersReducer,
};

export default configureStore({ reducer }, applyMiddleware(thunk));
