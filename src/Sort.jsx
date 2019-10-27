import React from 'react';
import SortItem from './SortItem';
import { SortWrapper } from './styled';

const Sort = () => {
  return (
    <SortWrapper>
      <ul>
        <SortItem name="Самый дешевый" isActive="true" position="left" />
        <SortItem name="Самый быстрый" isActive="false" position="right" />
      </ul>
    </SortWrapper>
  );
};

export default Sort;
