import { combineReducers } from 'redux';
import user from './user';
import profile from './profile';
import business from './business';
import tricycle from './tricycle';

export default combineReducers({ user, profile, business, tricycle });
