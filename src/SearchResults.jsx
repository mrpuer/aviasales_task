import React from 'react';
import styled from 'styled-components';
import Sort from './Sort';

const SearchResultsWrapper = styled.main`
  width: 500px;
  margin-left: 20px;
`;

const SearchResults = () => {
  return (
    <SearchResultsWrapper>
      <Sort />
      <section>Items List</section>
    </SearchResultsWrapper>
  );
};

export default SearchResults;
