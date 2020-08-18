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
    case actionTypes.SIGN_IN_START:
      newState.loading = true;
      break;
    case actionTypes.SIGN_IN_FAIL:
      newState.error = action.error;
      newState.loading = false;
      break;
    case actionTypes.SIGN_IN_SUCCESS:
      newState.user = action.user;
      newState.token = action.token;
      newState.error = null;
      newState.loading = false;
      break;
    case actionTypes.LOGOUT:
      newState.user = null;
      newState.token = null;
  }
  return newState;
};

export default reducer;
