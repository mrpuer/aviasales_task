import React from 'react';
import FilterItem from './FilterItem';
import { FilterItemsList } from './styled';
import { Stops } from './interfaces';

interface FilterProps {
  stopsFilter: Stops;
  onChangeStopsFilter(sortDirection: string): (e: React.SyntheticEvent) => void;
}

const Filter: React.FC<FilterProps> = ({ onChangeStopsFilter, stopsFilter }) => {
  return (
    <FilterItemsList>
      <FilterItem
        name="Все"
        id="all"
        onChangeStopsFilter={onChangeStopsFilter}
        isChecked={stopsFilter.all}
      />
      <FilterItem
        name="Без пересадок"
        id="none"
        onChangeStopsFilter={onChangeStopsFilter}
        isChecked={stopsFilter.none}
      />
      <FilterItem
        name="1 пересадка"
        id="one"
        onChangeStopsFilter={onChangeStopsFilter}
        isChecked={stopsFilter.one}
      />
      <FilterItem
        name="2 пересадки"
        id="two"
        onChangeStopsFilter={onChangeStopsFilter}
        isChecked={stopsFilter.two}
      />
      <FilterItem
        name="3 пересадки"
        id="three"
        onChangeStopsFilter={onChangeStopsFilter}
        isChecked={stopsFilter.three}
      />
    </FilterItemsList>
  );
};

export default Filter;
