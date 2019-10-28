import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

import { SidebarWrapper } from './styled';

const Sidebar = ({ onChangeStopsFilter, stopsFilter }) => {
  return (
    <SidebarWrapper>
      <h3>Количество пересадок</h3>
      <Filter onChangeStopsFilter={onChangeStopsFilter} stopsFilter={stopsFilter} />
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  onChangeStopsFilter: PropTypes.func.isRequired,
  stopsFilter: PropTypes.shape({
    all: PropTypes.bool,
    none: PropTypes.bool,
    one: PropTypes.bool,
    two: PropTypes.bool,
    three: PropTypes.bool,
  }),
};

Sidebar.defaultProps = {
  stopsFilter: {
    all: true,
    none: false,
    one: false,
    two: false,
    three: false,
  },
};

export default Sidebar;
