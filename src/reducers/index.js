import { combineReducers } from 'redux';
import recipes from './recipes';

const applicationReducers = {
  recipes,
};

export default combineReducers(applicationReducers);
