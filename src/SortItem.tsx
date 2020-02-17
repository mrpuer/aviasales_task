import React from 'react';
import { SortButton } from './styled';

interface SortItemInterface {
  title: string;
  isActive: boolean;
  position: string;
  clickSortHandle: (direction: string) => void;
}

const SortItem: React.FC<SortItemInterface> = ({ title, isActive, position, clickSortHandle }) => (
  <SortButton type="button" position={position} active={isActive} onClick={clickSortHandle}>
    {title}
  </SortButton>
);

export default SortItem;
