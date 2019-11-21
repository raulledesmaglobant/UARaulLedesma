import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMovies = state => state.movies || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectMovies,
    moviesState => moviesState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectMovies,
    moviesState => moviesState.error,
  );

const makeSelectMovies = () =>
  createSelector(
    selectMovies,
    moviesState => moviesState.movies,
  );

export { selectMovies, makeSelectLoading, makeSelectError, makeSelectMovies };
