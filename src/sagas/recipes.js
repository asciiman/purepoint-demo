import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { fetchRecipesSuccess, fetchRecipesError } from '../actions/recipes';
import { FETCH_RECIPES } from '../constants/recipes';

// TODO: Recipe Puppy does not have a CORS policy in place, so we are currently
// using an online proxy service to access the data.  What would be better
// would be to build our own proxy service instead of relying on this 3rd party
// service, which is slow and may be unreliable.

async function fetchData(query, page) {
  try {
    const url = `https://cors.io/?http://www.recipepuppy.com/api/?p=${page}&q=${query}`;
    const { data } = await axios.get(url);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

function* fetchPage(searchText, page) {
  const response = yield call(fetchData, searchText, page);
  if (response.error) {
    yield put(fetchRecipesError(response.error));
  } else {
    yield put(fetchRecipesSuccess(response.data, page));
  }
  return response;
}

function* fetchRecipes({ searchText }) {
  const response = yield call(fetchPage, searchText, 1);
  if (response.data) {
    yield call(fetchPage, searchText, 2);
  }
}

export default function* logsFlow() {
  // eslint-disable-next-line
  console.log('starting recipes flow');
  yield takeLatest(FETCH_RECIPES, fetchRecipes);
}
