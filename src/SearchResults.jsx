import React from 'react';
import PropTypes from 'prop-types';
import Sort from './Sort';
import Flights from './Flights';

import { SearchResultsWrapper } from './styled';

const SearchResults = ({ tickets }) => {
  return (
    <SearchResultsWrapper>
      <Sort />
      <Flights tickets={tickets} />
    </SearchResultsWrapper>
  );
};

SearchResults.propTypes = {
  tickets: PropTypes.instanceOf(Array),
};

SearchResults.defaultProps = {
  tickets: [],
};

export default SearchResults;
