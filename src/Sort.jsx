import React from 'react';
import PropTypes from 'prop-types';
import SortItem from './SortItem';
import { SortWrapper } from './styled';

const Sort = props => {
  const { onChangeSorting, sortBy } = props;
  return (
    <SortWrapper>
      <SortItem
        title="Самый дешевый"
        isActive={sortBy === 'price'}
        position="left"
        clickSortHandle={onChangeSorting('price')}
      />
      <SortItem
        title="Самый быстрый"
        isActive={sortBy === 'duration'}
        position="right"
        clickSortHandle={onChangeSorting('duration')}
      />
    </SortWrapper>
  );
};

Sort.propTypes = {
  onChangeSorting: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
};

Sort.defaultProps = {
  sortBy: 'price',
};

export default Sort;
