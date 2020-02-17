import React, { useState, useEffect, useCallback } from 'react';
import { mapValues } from 'lodash';
import Sidebar from './Sidebar';
import { MainContentWrapper, SearchResultsWrapper } from './styled';
import TicketsService from './TicketsService';
import Sort from './Sort';
import Error from './Error';
import Flights from './Flights';
import useInterval from './customHooks/useInterval';
import { Stops, Ticket } from './interfaces';

const Tickets: TicketsService = new TicketsService();

const MainContent: React.FC = () => {
  const [tickets, updateTickets] = useState<Ticket[]>([]);
  const [error, setError] = useState<string>('');
  const [sortBy, updateSorting] = useState<string>('price');
  const [stops, setStopsFilter] = useState<Stops>({
    all: true,
    none: false,
    one: false,
    two: false,
    three: false,
  });

  let intervalId: number | null = null;

  const getTickets = useCallback(() => {
    setError('');
    Tickets.getTickets(stops, sortBy)
      .then(({ newTickets, finish }) => {
        updateTickets(newTickets);
        if (finish) {
          clearTimeout(intervalId ? intervalId : undefined);
        }
      })
      .catch(err => {
        setError(err.message);
      });
  }, [stops, sortBy, intervalId]);

  intervalId = useInterval(getTickets, 5000).current;

  useEffect(() => {
    getTickets();
  }, [getTickets]);

  const onChangeStopsFilter = (stopsCount: string) => (): void => {
    if (stopsCount === 'all') {
      setStopsFilter({
        ...mapValues(stops, () => false),
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

  const onChangeSorting = (sortDirection: string) => (): void => {
    updateSorting(sortDirection);
  };

  return (
    <MainContentWrapper>
      <Sidebar onChangeStopsFilter={onChangeStopsFilter} stopsFilter={stops} />
      <SearchResultsWrapper>
        <Sort onChangeSorting={onChangeSorting} sortBy={sortBy} />
        {error.length === 0 ? (
          <Flights tickets={tickets} />
        ) : (
          <Error title="Sorry, network error. Wait..." message={error} />
        )}
      </SearchResultsWrapper>
    </MainContentWrapper>
  );
};

export default MainContent;
