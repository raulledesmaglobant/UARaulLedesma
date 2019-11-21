import produce from 'immer';
import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  movies: [
    { id: 1, title: 'The Sixth Sense', release: '1994-05-01' },
    { id: 2, title: 'The Big Lebowski', release: '1994-05-01' },
    { id: 3, title: 'Pretty Woman', release: '1994-05-01' },
  ],
};

/* eslint-disable default-case, no-param-reassign */
const moviesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_MOVIES:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_MOVIES_SUCCESS:
        draft.movies = action.movies;
        draft.loading = false;
        break;

      case LOAD_MOVIES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default moviesReducer;
