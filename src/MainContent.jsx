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
        0: false,
        1: false,
        2: false,
        3: false,
      },
      sortBy: 'price',
    };
  }

  componentDidMount() {
    this.getTickets();
  }

  getTickets = () => {
    const { stopsFilter, sortBy } = this.state;
    Tickets.getTickets(stopsFilter, sortBy).then(data => this.setState({ tickets: data }));
  };

  // onChangeStopsFilter = stopsCount => () => {
  //   this.setState(state => { stopsFilter: { [stopsCount]: !state.stopsFilter[stopsCount], ...state.stopsFilter } })
  // };

  render() {
    const { tickets } = this.state;
    return (
      <MainContentWrapper>
        <Sidebar />
        <SearchResults tickets={tickets} />
      </MainContentWrapper>
    );
  }
}
