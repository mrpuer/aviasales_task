import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';

const SidebarWrapper = styled.aside`
  background: #ffffff;
  border-radius: 5px;
  width: 230px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  h3 {
    line-height: 12px;
    padding: 20px 20px 10px 20px;
    font-size: 12px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <h3>Количество пересадок</h3>
      <Filter />
    </SidebarWrapper>
  );
};

export default Sidebar;
