import React from 'react';
import styled from 'styled-components';
import FilterItem from './FilterItem';

const FilterItemsList = styled.ul`
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  text-transform: none;
  padding-bottom: 10px;
  font-family: 'Open Sans Light';
`;
const Filter = () => {
  return (
    <FilterItemsList>
      <FilterItem name="Все" id="all" />
      <FilterItem name="Без пересадок" id="no-stop" />
      <FilterItem name="1 пересадка" id="1-stop" />
      <FilterItem name="2 пересадки" id="2-stops" />
      <FilterItem name="3 пересадки" id="3-stops" />
    </FilterItemsList>
  );
};

export default Filter;
