import React from 'react';
import FilterItem from './FilterItem';

import { FilterItemsList } from './styled';

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
