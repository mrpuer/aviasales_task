import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './FilterItem';
import { FilterItemsList } from './styled';

const Filter = ({ onChangeStopsFilter, stopsFilter }) => {
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

Filter.propTypes = {
  onChangeStopsFilter: PropTypes.func.isRequired,
  stopsFilter: PropTypes.shape({
    all: PropTypes.bool,
    none: PropTypes.bool,
    one: PropTypes.bool,
    two: PropTypes.bool,
    three: PropTypes.bool,
  }),
};

Filter.defaultProps = {
  stopsFilter: {
    all: true,
    none: false,
    one: false,
    two: false,
    three: false,
  },
};

export default Filter;
