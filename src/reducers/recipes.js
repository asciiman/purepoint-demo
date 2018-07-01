import {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR,
} from '../constants/recipes';

const initialState = {
  loading: false,
  error: false,
  results: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        loading: true,
        error: false,
        results: [],
      };
    case FETCH_RECIPES_SUCCESS: {
      const results = [...state.results, ...action.data.results];
      return {
        loading: false,
        error: false,
        results,
      };
    }
    case FETCH_RECIPES_ERROR:
      return {
        loading: false,
        error: true,
        results: [],
      };
    default:
      return state;
  }
}
