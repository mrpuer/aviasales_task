import React from 'react';
import _ from 'lodash';
import Sidebar from './Sidebar';
import { MainContentWrapper, SearchResultsWrapper } from './styled';
import TicketsService from './TicketsService';
import Sort from './Sort';
import Error from './Error';
import Flights from './Flights';

const Tickets = new TicketsService();

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      stopsFilter: {
        all: true,
        none: false,
        one: false,
        two: false,
        three: false,
      },
      sortBy: 'price',
      error: null,
      intervalId: 0,
    };
  }

  componentDidMount() {
    this.getTickets();
    const intervalId = setInterval(this.getTickets, 5000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  getTickets = () => {
    this.setState({ error: null });
    const { stopsFilter, sortBy, intervalId } = this.state;
    Tickets.getTickets(stopsFilter, sortBy)
      .then(({ tickets, finish }) => {
        this.setState({ tickets });
        if (finish) {
          clearInterval(intervalId);
        }
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  };

  onChangeStopsFilter = stopsCount => () => {
    this.setState(state => {
      if (stopsCount === 'all') {
        return {
          stopsFilter: {
            ..._.mapValues(state.stopsFilter, () => false),
            all: true,
          },
        };
      }
      return {
        stopsFilter: {
          ...state.stopsFilter,
          [stopsCount]: !state.stopsFilter[stopsCount],
          all: false,
        },
      };
    }, this.getTickets);
  };

  onChangeSorting = sortBy => () => {
    this.setState({ sortBy }, this.getTickets);
  };

  render() {
    const { tickets, stopsFilter, error, sortBy } = this.state;
    return (
      <MainContentWrapper>
        <Sidebar onChangeStopsFilter={this.onChangeStopsFilter} stopsFilter={stopsFilter} />
        <SearchResultsWrapper>
          <Sort onChangeSorting={this.onChangeSorting} sortBy={sortBy} />
          {error ? (
            <Error title="Sorry, network error. Wait..." message={error} />
          ) : (
            <Flights tickets={tickets} />
          )}
        </SearchResultsWrapper>
      </MainContentWrapper>
    );
  }
}
