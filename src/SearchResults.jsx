import React from 'react';
import PropTypes from 'prop-types';
import Sort from './Sort';
import Flights from './Flights';

import { SearchResultsWrapper } from './styled';

const SearchResults = ({ tickets, onChangeSorting, error }) => {
  return (
    <SearchResultsWrapper>
      <Sort onChangeSorting={onChangeSorting} />
      <Flights tickets={tickets} error={error} />
    </SearchResultsWrapper>
  );
};

SearchResults.propTypes = {
  tickets: PropTypes.instanceOf(Array),
  onChangeSorting: PropTypes.func.isRequired,
  error: PropTypes.string,
};

SearchResults.defaultProps = {
  tickets: [],
  error: null,
};

export default SearchResults;
