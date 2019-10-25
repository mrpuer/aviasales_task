import React from 'react';
import styled from 'styled-components';
import SortItem from './SortItem';

const SortWrapper = styled.section`
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #dfe5ec;
  height: 48px;
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
`;
const Sort = () => {
  return (
    <SortWrapper>
      <ul>
        <SortItem name="Самый дешевый" isActive="true" />
        <SortItem name="Самый быстрый" isActive="false" />
      </ul>
    </SortWrapper>
  );
};

export default Sort;
