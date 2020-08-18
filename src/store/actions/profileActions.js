import * as actionTypes from './actionsTypes';
import axios from '../../api/axios';
import history from '../../helpers/history';
import UIkit from 'uikit';

/* ============================================================
													POST ACTIONS
===============================================================*/
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
    dispatch({ type: actionTypes.SUBMIT_PROFILE_FAIL, error: error.message });
    history.push('/');
    UIkit.notification({ message: error.message });
  }
};

/* ============================================================
													GET ACTIONS
===============================================================*/
export const getProfiles = () => async dispatch => {
  dispatch({ type: actionTypes.GET_PROFILES_START });
  try {
    const profiles = await axios.get('/profiles');
    dispatch({ type: actionTypes.GET_PROFILES_SUCCESS, profiles: profiles.data.profiles });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PROFILES_FAIL, error: error.message });
    UIkit.notification({ message: error.message });
  }
};

/* ============================================================
													DELETE ACTIONS
===============================================================*/
export const deleteProfile = id => async dispatch => {
  try {
    const deletedProfile = await axios.delete(`/profiles/${id}`);
    UIkit.notification({ message: deletedProfile.data.message });
    dispatch(getProfiles());
  } catch (error) {
    UIkit.notification({ message: error.message });
  }
};
