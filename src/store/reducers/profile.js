/* eslint-disable default-case */
import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  name          : null,
  address       : null,
  birthday      : null,
  age           : null,
  sex           : null,
  occupation    : null,
  sector        : null,
  contactNumber : null,
  birthplace    : null,
  error         : null,
  loading       : false,
  profiles      : []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.ADD_PROFILE:
      newState.name = action.details.name;
      newState.birthday = action.details.birthday;
      newState.age = action.details.age;
      newState.sex = action.details.sex;
      break;
    case actionTypes.ADD_ADDRESS:
      newState.address = action.address;
      break;
    case actionTypes.ADD_OTHER_DETAILS:
      newState.sector = action.details.sector;
      newState.contactNumber = action.details.contactNumber;
      newState.occupation = action.details.occupation;
      newState.birthplace = action.details.birthplace;
      break;
    case actionTypes.SUBMIT_PROFILE_START:
      newState.loading = true;
      break;
    case actionTypes.SUBMIT_PROFILE_FAIL:
      newState.error = action.error;
      newState.loading = false;
      break;
    case actionTypes.SUBMIT_PROFILE_SUCCESS:
      newState.name = null;
      newState.address = null;
      newState.birthday = null;
      newState.sex = null;
      newState.occupation = null;
      newState.sector = null;
      newState.contactNumber = null;
      newState.birthplace = null;
      newState.error = null;
      newState.loading = false;
      break;
    case actionTypes.GET_PROFILES_START:
      newState.loading = true;
      break;
    case actionTypes.GET_PROFILES_SUCCESS:
      newState.profiles = action.profiles;
      newState.loading = false;
      newState.error = false;
      break;
    case actionTypes.GET_PROFILES_FAIL:
      newState.loading = false;
      newState.error = action.error;
      break;
  }
  return newState;
};

export default reducer;
