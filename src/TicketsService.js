import axios from 'axios';
import _ from 'lodash';

const SEARCH_URL = 'https://front-test.beta.aviasales.ru/search';
const TICKETS_URL = 'https://front-test.beta.aviasales.ru/tickets';

const filterToStopsMap = {
  0: 'none',
  1: 'one',
  2: 'two',
  3: 'three',
};

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
    this.allTickets = this.allTickets.concat(data.tickets);
    return data.stop;
  }

  async getTickets(stopsFilter, sortBy) {
    if (this.searchId === '@INIT') {
      await this.getSearchId();
    }
    const isHaveMoreTickets = await this.fetchTickets();
    const filtered = this.getFilteredTickets(this.allTickets, stopsFilter);
    const sorted = this.getSortedTickets(filtered, sortBy);
    return { tickets: sorted.slice(0, 5), finish: isHaveMoreTickets };
  }

  getFilteredTickets = (coll, filters) => {
    if (filters.all) return coll;
    return coll.filter(ticket => {
      const ticketStopsTo = ticket.segments[0].stops.length;
      const ticketStopsFrom = ticket.segments[1].stops.length;
      return filters[filterToStopsMap[ticketStopsTo]] && filters[filterToStopsMap[ticketStopsFrom]];
    });
  };

  getSortedTickets = (coll, orderBy) => {
    if (orderBy === 'duration')
      return _.sortBy(coll, ticket => ticket.segments[0].duration + ticket.segments[1].duration);
    return _.sortBy(coll, orderBy);
  };
}
