import React from 'react';
import PropTypes from 'prop-types';

import { FilterItemLi } from './styled';

const FilterItem = props => {
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

FilterItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChangeStopsFilter: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
};

FilterItem.defaultProps = {
  name: 'Filter name',
  isChecked: props => props.id === 'all',
};

export default FilterItem;
