import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import SearchResults from './SearchResults';

const MainContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
`;

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MainContentWrapper>
        <Sidebar />
        <SearchResults />
      </MainContentWrapper>
    );
  }
}
