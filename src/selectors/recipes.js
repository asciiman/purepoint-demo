import { createSelector } from 'reselect';

const loadingData = state => state.recipes.loading;
const errorData = state => state.recipes.error;
const resultsData = state => state.recipes.results;

export const getLoading = createSelector(
  [loadingData],
  data => data,
);

export const getError = createSelector(
  [errorData],
  data => data,
);

export const getResults = createSelector(
  [resultsData],
  data => data,
);
