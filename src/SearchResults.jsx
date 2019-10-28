import React from 'react';
import PropTypes from 'prop-types';
import Sort from './Sort';
import Flights from './Flights';

import { SearchResultsWrapper } from './styled';

const SearchResults = ({ tickets, onChangeSorting }) => {
  return (
    <SearchResultsWrapper>
      <Sort onChangeSorting={onChangeSorting} />
      <Flights tickets={tickets} />
    </SearchResultsWrapper>
  );
};

SearchResults.propTypes = {
  tickets: PropTypes.instanceOf(Array),
  onChangeSorting: PropTypes.func.isRequired,
};

SearchResults.defaultProps = {
  tickets: [],
};

export default SearchResults;
