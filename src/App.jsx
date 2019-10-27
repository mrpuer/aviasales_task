import React from 'react';
import MainContent from './MainContent';
import logo from './img/logo.svg';
import { GlobalStyle, Header } from './styled';
import TicketsService from './TicketsService';

const Tickets = new TicketsService();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
    };
  }

  componentDidMount() {
    Tickets.getTickets().then(data => this.setState({ tickets: data }));
  }

  render() {
    const { tickets } = this.state;
    if (tickets.length === 0) return null;
    console.log(tickets);
    return (
      <>
        <GlobalStyle />
        <Header>
          <img src={logo} alt="Aviasales logo" />
        </Header>
        <MainContent />
        {tickets[0].price}
      </>
    );
  }
}
