import React from 'react';
import Filter from './Filter';
import { SidebarWrapper } from './styled';
import { Stops } from './interfaces';

interface SidebarProps {
  stopsFilter: Stops;
  onChangeStopsFilter(sortDirection: string): (e: React.SyntheticEvent) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onChangeStopsFilter, stopsFilter }) => (
  <SidebarWrapper>
    <h3>Количество пересадок</h3>
    <Filter onChangeStopsFilter={onChangeStopsFilter} stopsFilter={stopsFilter} />
  </SidebarWrapper>
);

export default Sidebar;
