import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

function CommonList({ loading, error, items, listItemComponent }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (items !== false) {
    return <List items={items} component={listItemComponent} />;
  }

  return null;
}

CommonList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.any,
  listItemComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
};

export default CommonList;
