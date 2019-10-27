import React from 'react';
import Sort from './Sort';
import Flights from './Flights';

import { SearchResultsWrapper } from './styled';

const SearchResults = () => {
  return (
    <SearchResultsWrapper>
      <Sort />
      <Flights />
    </SearchResultsWrapper>
  );
};

export default SearchResults;
