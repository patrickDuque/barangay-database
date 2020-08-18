import * as actionTypes from './actionsTypes';
import axios from '../../api/axios';
import history from '../../helpers/history';
import UIkit from 'uikit';

/* ============================================================
													SIGN IN
===============================================================*/
export const signIn = form => async dispatch => {
  try {
    dispatch({ type: actionTypes.SIGN_IN_START });
    const user = await axios.post('/signin', form);
    localStorage.setItem('token', user.data.user.token);
    dispatch({ type: actionTypes.SIGN_IN_SUCCESS, user: user.data.user, token: user.data.user.token });
    checkTokenTimeout();
    history.push('/');
  } catch (error) {
    dispatch({ type: actionTypes.SIGN_IN_FAIL });
    UIkit.notification({ message: error.message });
  }
};

/* ============================================================
													SIGN OUT
===============================================================*/
export const logout = () => {
  localStorage.removeItem('token');
  return { type: actionTypes.LOGOUT };
};

export const checkTokenTimeout = () => dispatch => {
  setTimeout(() => {
    dispatch(logout());
  }, 28800 * 1000);
};
