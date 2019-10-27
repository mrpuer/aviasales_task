import React from 'react';
import Filter from './Filter';

import { SidebarWrapper } from './styled';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <h3>Количество пересадок</h3>
      <Filter />
    </SidebarWrapper>
  );
};

export default Sidebar;
