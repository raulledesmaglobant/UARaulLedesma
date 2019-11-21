import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import CommonList from 'components/CommonList';
import MovieListItem from 'components/MovieListItem';
import RefreshIcon from './RefreshIcon';
import messages from './messages';

import { loadMovies } from './actions';
import reducer from './reducer';
import saga from './saga';

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectMovies,
} from './selectors';

const key = 'movies';

function MoviesPage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { loading, error, movies, onMoviesRefresh } = props;
  const commonListProps = {
    loading,
    error,
    items: movies,
    listItemComponent: MovieListItem,
  };

  return (
    <div>
      <Helmet>
        <title>Movies Page</title>
        <meta name="description" content="Movies page" />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <RefreshIcon onClick={onMoviesRefresh} />
      <CommonList {...commonListProps} />
    </div>
  );
}

MoviesPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movies: PropTypes.array.isRequired,
  onMoviesRefresh: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  movies: makeSelectMovies(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onMoviesRefresh: () => dispatch(loadMovies()),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesPage);
