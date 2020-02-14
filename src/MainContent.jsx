import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import Sidebar from './Sidebar';
import { MainContentWrapper, SearchResultsWrapper } from './styled';
import TicketsService from './TicketsService';
import Sort from './Sort';
import Error from './Error';
import Flights from './Flights';
import useInterval from './customHooks/useInterval';

const Tickets = new TicketsService();

const MainContent = () => {
  const [tickets, updateTickets] = useState(null);
  const [error, setError] = useState(null);
  const [sortBy, updateSorting] = useState('price');
  const [stops, setStopsFilter] = useState({
    all: true,
    none: false,
    one: false,
    two: false,
    three: false,
  });

  let intervalId = 0;

  const getTickets = useCallback(() => {
    setError(null);
    Tickets.getTickets(stops, sortBy)
      .then(({ newTickets, finish }) => {
        updateTickets(newTickets);
        if (finish) {
          clearTimeout(intervalId);
        }
      })
      .catch(err => {
        setError(err.message);
      });
  }, [stops, sortBy, intervalId]);

  const intervalRef = useInterval(getTickets, 5000);

  intervalId = intervalRef.current;

  useEffect(() => {
    getTickets();
  }, [getTickets]);

  const onChangeStopsFilter = stopsCount => () => {
    if (stopsCount === 'all') {
      setStopsFilter({
        ..._.mapValues(stops, () => false),
        all: true,
      });
    } else {
      setStopsFilter({
        ...stops,
        [stopsCount]: !stops[stopsCount],
        all: false,
      });
    }
  };

  const onChangeSorting = sortDirection => () => {
    updateSorting(sortDirection);
  };

  return (
    <MainContentWrapper>
      <Sidebar onChangeStopsFilter={onChangeStopsFilter} stopsFilter={stops} />
      <SearchResultsWrapper>
        <Sort onChangeSorting={onChangeSorting} sortBy={sortBy} />
        {error ? (
          <Error title="Sorry, network error. Wait..." message={error} />
        ) : (
          <Flights tickets={tickets} />
        )}
      </SearchResultsWrapper>
    </MainContentWrapper>
  );
};

export default MainContent;
