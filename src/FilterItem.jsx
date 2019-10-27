import React from 'react';
import PropTypes from 'prop-types';

import { FilterItemLi } from './styled';

const FilterItem = props => {
  const { name, id } = props;
  return (
    <FilterItemLi>
      <div className="checkbox">
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{name}</label>
      </div>
    </FilterItemLi>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
};

FilterItem.defaultProps = {
  name: 'Filter name',
};

export default FilterItem;
