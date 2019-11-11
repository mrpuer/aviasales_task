import React from 'react';
import _ from 'lodash';
import Sidebar from './Sidebar';
import SearchResults from './SearchResults';
import { MainContentWrapper } from './styled';
import TicketsService from './TicketsService';

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
    };
  }

  componentDidMount() {
    this.getTickets();
  }

  getTickets = () => {
    this.setState({ error: null });
    const { stopsFilter, sortBy } = this.state;
    Tickets.getTickets(stopsFilter, sortBy)
      .then(({ tickets, finish }) => {
        this.setState({ tickets });
        if (!finish) {
          setTimeout(this.getTickets, 5000);
        }
      })
      .catch(err => this.setState({ error: err.message }));
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
    const { tickets, stopsFilter, error } = this.state;
    return (
      <MainContentWrapper>
        <Sidebar onChangeStopsFilter={this.onChangeStopsFilter} stopsFilter={stopsFilter} />
        <SearchResults tickets={tickets} onChangeSorting={this.onChangeSorting} error={error} />
      </MainContentWrapper>
    );
  }
}
