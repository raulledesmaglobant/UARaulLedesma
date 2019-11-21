import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import { Wrapper, Title, Release } from './styled';

function MovieListItem(props) {
  const { item } = props;

  const content = (
    <Wrapper>
      <Title>{item.title}</Title>
      <Release>{item.release}</Release>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`movie-list-item-${item.id}`} item={content} />;
}

MovieListItem.propTypes = {
  item: PropTypes.object,
};

export default MovieListItem;
