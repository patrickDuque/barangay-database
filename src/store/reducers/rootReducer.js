import { combineReducers } from 'redux';
import user from './user';
import profile from './profile';
import business from './business';

export default combineReducers({ user, profile, business });
