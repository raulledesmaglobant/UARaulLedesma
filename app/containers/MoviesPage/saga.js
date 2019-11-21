import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_MOVIES } from './constants';
import { loadMoviesSuccess, loadMoviesError } from './actions';

export function* getMovies() {
  // Select username from store
  const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=72b50cde7ce873129666e9183fa89248`;

  try {
    const movies = yield call(request, requestURL);
    const formattedMovies = movies.results.map(item => ({
      id: item.id,
      title: item.title,
      release: item.release_date,
    }));
    yield put(loadMoviesSuccess(formattedMovies));
  } catch (err) {
    yield put(loadMoviesError(err));
  }
}

export default function* moviesData() {
  yield takeLatest(LOAD_MOVIES, getMovies);
}
