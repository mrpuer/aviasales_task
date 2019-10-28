import React from 'react';
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
      sortBy: item => item.price,
    };
  }

  componentDidMount() {
    this.getTickets();
  }

  getTickets = () => {
    const { stopsFilter, sortBy } = this.state;
    Tickets.getTickets(stopsFilter, sortBy).then(data => this.setState({ tickets: data }));
  };

  onChangeStopsFilter = stopsCount => () => {
    this.setState(state => {
      if (stopsCount === 'all') {
        return {
          stopsFilter: {
            all: true,
            none: false,
            one: false,
            two: false,
            three: false,
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
    });
    this.getTickets();
  };

  onChangeSorting = sortBy => () => {
    this.setState({ sortBy });
    this.getTickets();
  };

  render() {
    const { tickets, stopsFilter } = this.state;
    return (
      <MainContentWrapper>
        <Sidebar onChangeStopsFilter={this.onChangeStopsFilter} stopsFilter={stopsFilter} />
        <SearchResults tickets={tickets} onChangeSorting={this.onChangeSorting} />
      </MainContentWrapper>
    );
  }
}
