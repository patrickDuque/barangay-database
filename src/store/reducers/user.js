/* eslint-disable default-case */
import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  user    : null,
  token   : null,
  error   : null,
  loading : false
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.SIGN_IN:
      newState.user = action.user;
      newState.token = action.token;
      newState.error = null;
      newState.loading = false;
  }
  return newState;
};

export default reducer;
