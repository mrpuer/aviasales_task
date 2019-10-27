import React from 'react';
import Sidebar from './Sidebar';
import SearchResults from './SearchResults';

import { MainContentWrapper } from './styled';

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
