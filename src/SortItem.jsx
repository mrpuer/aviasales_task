import React from 'react';
import PropTypes from 'prop-types';
import { SortItemLeft, SortItemRight } from './styled';

const SortItem = props => {
  const { name, isActive, position } = props;
  return position === 'left' ? (
    <SortItemLeft active={isActive === 'true'}>{name}</SortItemLeft>
  ) : (
    <SortItemRight active={isActive === 'true'}>{name}</SortItemRight>
  );
};

SortItem.propTypes = {
  name: PropTypes.string,
  isActive: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

SortItem.defaultProps = {
  name: 'Filter name',
};

export default SortItem;
