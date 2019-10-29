import React from 'react';
import PropTypes from 'prop-types';
import { SortButton } from './styled';

const SortItem = props => {
  const { title, isActive, position, clickSortHandle } = props;
  return (
    <SortButton type="button" position={position} active={isActive} onClick={clickSortHandle}>
      {title}
    </SortButton>
  );
};

SortItem.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  clickSortHandle: PropTypes.func.isRequired,
};

SortItem.defaultProps = {
  title: 'Filter name',
};

export default SortItem;
