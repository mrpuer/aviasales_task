import axios from 'axios';

const SEARCH_URL = 'https://front-test.beta.aviasales.ru/search';
const TICKETS_URL = 'https://front-test.beta.aviasales.ru/tickets';

export default class TicketsService {
  constructor() {
    this.searchId = '@INIT';
    this.allTickets = [];
  }

  async getSearchId() {
    const resp = await axios.get(SEARCH_URL);
    this.searchId = resp.data.searchId;
  }

  async fetchTickets() {
    const resp = await axios.get(TICKETS_URL, {
      params: { searchId: this.searchId },
    });
    const { data } = resp;
    this.allTickets = [...data.tickets];
  }

  async initData() {
    await this.getSearchId();
    await this.fetchTickets();
  }

  async getTickets(stopsFilter) {
    if (this.searchId === '@INIT') {
      await this.initData();
    }
    return this.getFilteredTicket(stopsFilter).slice(0, 5);
  }

  getFilteredTicket = filters => {
    if (filters.length === 0) return this.allTickets;
    return this.allTickets.filter(ticket => {
      const ticketStopsTo = ticket.segments[0].stops.length;
      const ticketStopsFrom = ticket.segments[1].stops.length;
      return filters.contains(ticketStopsTo) && filters.contains(ticketStopsFrom);
    });
  };
}
