import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from './constants';

export function loadMovies() {
  return {
    type: LOAD_MOVIES,
  };
}

export function loadMoviesSuccess(movies) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    movies,
  };
}

export function loadMoviesError(error) {
  return {
    type: LOAD_MOVIES_ERROR,
    error,
  };
}
