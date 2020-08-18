import * as actionTypes from './actionsTypes';
import axios from '../../api/axios';
import history from '../../helpers/history';
import UIkit from 'uikit';

export const addProfile = details => ({ type: actionTypes.ADD_PROFILE, details });
export const addAddress = address => ({ type: actionTypes.ADD_ADDRESS, address });

export const submitProfile = details => async dispatch => {
  dispatch({ type: actionTypes.SUBMIT_PROFILE_START });
  try {
    const sendProfile = await axios.post('/profiles', details);
    dispatch({ type: actionTypes.SUBMIT_PROFILE_SUCCESS });
    UIkit.notification({ message: sendProfile.data.message });
    history.push('/');
  } catch (error) {
    console.log(error);
    dispatch({ type: actionTypes.SUBMIT_PROFILE_FAIL, error: error.message });
    history.push('/');
    UIkit.notification({ message: error.message });
  }
};
