/* eslint-disable default-case */
import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  businesses : [],
  loading    : false,
  error      : null
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.SUBMIT_BUSINESS_START:
      newState.loading = true;
      break;
    case actionTypes.SUBMIT_BUSINESS_SUCCESS:
      newState.error = null;
      newState.loading = false;
      break;
    case actionTypes.SUBMIT_BUSINESS_FAIL:
      newState.error = action.error;
      newState.loading = false;
      break;
    case actionTypes.GET_BUSINESS_START:
      newState.loading = true;
      break;
    case actionTypes.GET_BUSINESS_SUCCESS:
      newState.businesses = action.businesses;
      newState.loading = false;
      newState.error = null;
      break;
    case actionTypes.GET_BUSINESS_FAIL:
      newState.error = action.error;
      newState.loading = false;
      break;
    case actionTypes.DELETE_BUSINESS:
      newState.businesses = state.businesses.filter(business => business._id !== action.id);
      break;
  }
  return newState;
};

export default reducer;
