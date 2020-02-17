import React from 'react';
import SortItem from './SortItem';
import { SortWrapper } from './styled';

interface SortProps {
  sortBy: string;
  onChangeSorting(direction: string): () => void;
}

const Sort: React.FC<SortProps> = ({ onChangeSorting, sortBy }) => (
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

export default Sort;
