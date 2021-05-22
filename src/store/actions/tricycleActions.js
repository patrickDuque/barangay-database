import UIkit from 'uikit';
import axios from '../../api/axios';
import history from '../../helpers/history';
import * as actionTypes from './actionsTypes';

/* ============================================================
													POST ACTIONS
===============================================================*/
export const submitTricycle = (details) => async (dispatch) => {
	dispatch({ type: actionTypes.SUBMIT_TRICYCLE_START });
	try {
		const sendTricycle = await axios.post('/tricycle', details);
		dispatch({ type: actionTypes.SUBMIT_TRICYCLE_SUCCESS, payload: sendTricycle.data.tricycle });
		UIkit.notification({ message: sendTricycle.data.message });
		history.push('/all-tricycle');
	} catch (error) {
		dispatch({ type: actionTypes.SUBMIT_TRICYCLE_FAIL, error: error.message });
		UIkit.notification({ message: error.message });
		history.push('/all-tricycle');
	}
};

/* ============================================================
													GET ACTIONS
===============================================================*/
export const getTricycles = () => async (dispatch) => {
	dispatch({ type: actionTypes.GET_TRICYCLE_START });
	try {
		const tricycles = await axios.get('/tricycle');
		dispatch({ type: actionTypes.GET_TRICYCLE_SUCCESS, tricycles: tricycles.data.tricycles });
	} catch (error) {
		dispatch({ type: actionTypes.GET_TRICYCLE_FAIL, error: error.message });
		UIkit.notification({ message: error.message });
	}
};

/* ============================================================
													DELETE ACTIONS
===============================================================*/
export const deleteTricycle = (id) => async (dispatch) => {
	dispatch({ type: actionTypes.DELETE_TRICYCLE_START });
	try {
		const deletedTricycle = await axios.delete(`/tricycle/${id}`);
		dispatch({ type: actionTypes.DELETE_TRICYCLE_SUCCESS, id });
		UIkit.notification({ message: deletedTricycle.data.message });
	} catch (error) {
		dispatch({ type: actionTypes.DELETE_TRICYCLE_FAIL });
		UIkit.notification({ message: error.message });
	}
};
