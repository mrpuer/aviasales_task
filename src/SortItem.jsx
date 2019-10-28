import React from 'react';
import PropTypes from 'prop-types';
import { SortButton } from './styled';

const SortItem = props => {
  const clickHandler = () => {
    const { clickSortHandle, clickActiveHandle } = props;
    clickSortHandle();
    clickActiveHandle();
  };

  const { title, isActive, position } = props;
  return (
    <SortButton type="button" position={position} active={isActive} onClick={clickHandler}>
      {title}
    </SortButton>
  );
};

SortItem.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  clickSortHandle: PropTypes.func.isRequired,
  clickActiveHandle: PropTypes.func.isRequired,
};

SortItem.defaultProps = {
  title: 'Filter name',
};

export default SortItem;
