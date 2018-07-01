import { connect } from 'react-redux';

import { fetchRecipes } from '../actions/recipes';
import { getLoading, getError, getResults } from '../selectors/recipes';
import App from './App';

const mapStateToProps = state => ({
  loading: getLoading(state),
  error: getError(state),
  recipes: getResults(state),
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: searchText => dispatch(fetchRecipes(searchText)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
