import * as actionTypes from './actionsTypes';
import axios from '../../api/axios';
import history from '../../helpers/history';
import UIkit from 'uikit';

/* ============================================================
													POST ACTIONS
===============================================================*/
export const submitBusiness = details => async dispatch => {
  dispatch({ type: actionTypes.SUBMIT_BUSINESS_START });
  try {
    const sendBusiness = await axios.post('/business', details);
    dispatch({ type: actionTypes.SUBMIT_BUSINESS_SUCCESS });
    UIkit.notification({ message: sendBusiness.data.message });
    history.push('/all-business');
  } catch (error) {
    dispatch({ type: actionTypes.SUBMIT_BUSINESS_FAIL, error: error.message });
    UIkit.notification({ message: error.message });
    history.push('/all-business');
  }
};

/* ============================================================
													GET ACTIONS
===============================================================*/
export const getBusinesses = () => async dispatch => {
  dispatch({ type: actionTypes.GET_BUSINESS_START });
  try {
    const businesses = await axios.get('/business');
    dispatch({ type: actionTypes.GET_BUSINESS_SUCCESS, businesses: businesses.data.businesses });
  } catch (error) {
    dispatch({ type: actionTypes.GET_BUSINESS_FAIL, error: error.message });
    UIkit.notification({ message: error.message });
  }
};

// export const getSingleProfile = id => async dispatch => {
//   dispatch({ type: actionTypes.GET_SINGLE_PROFILE_START });
//   try {
//     const profile = await axios.get(`${id}`);
//     dispatch({ type: actionTypes.GET_SINGLE_PROFILE_SUCCESS, profile: profile.data.profile });
//     UIkit.notification({ message: profile.data.message });
//   } catch (error) {
//     dispatch({ type: actionTypes.GET_SINGLE_PROFILE_FAIL, error: error.message });
//     UIkit.notification({ message: error.message });
//   }
// };

/* ============================================================
													DELETE ACTIONS
===============================================================*/
export const deleteBusiness = id => async dispatch => {
  try {
    const deletedProfile = await axios.delete(`/business/${id}`);
    dispatch({ type: actionTypes.DELETE_BUSINESS, id });
    UIkit.notification({ message: deletedProfile.data.message });
  } catch (error) {
    UIkit.notification({ message: error.message });
  }
};
