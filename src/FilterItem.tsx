import React from 'react';

import { FilterItemLi } from './styled';

interface FilterItemProps {
  name: string;
  id: string;
  onChangeStopsFilter(id: string): (e: React.SyntheticEvent) => void;
  isChecked: boolean;
}

const FilterItem: React.FC<FilterItemProps> = props => {
  const { name, id, onChangeStopsFilter, isChecked } = props;
  return (
    <FilterItemLi>
      <div className="checkbox">
        <input
          type="checkbox"
          id={id}
          name={id}
          onChange={onChangeStopsFilter(id)}
          checked={isChecked}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    </FilterItemLi>
  );
};

export default FilterItem;
