import axios from 'axios';
import _ from 'lodash';
import { Stops, Ticket } from './interfaces';

const SEARCH_URL = 'https://front-test.beta.aviasales.ru/search';
const TICKETS_URL = 'https://front-test.beta.aviasales.ru/tickets';

const filterToStopsMap = {
  0: 'none',
  1: 'one',
  2: 'two',
  3: 'three',
} as {
  [key: number]: string;
};

export default class TicketsService {
  searchId: string;
  allTickets: Ticket[];
  stop: boolean;

  constructor() {
    this.searchId = '@INIT';
    this.allTickets = [];
    this.stop = false;
  }

  async getSearchId(): Promise<void> {
    const resp = await axios.get(SEARCH_URL);
    this.searchId = resp.data.searchId;
  }

  async fetchTickets(): Promise<void> {
    const resp = await axios.get(TICKETS_URL, {
      params: { searchId: this.searchId },
    });
    const { data } = resp;
    this.allTickets = this.allTickets.concat(data.tickets);
    this.stop = data.stop;
  }

  async getTickets(
    stopsFilter: Stops,
    sortBy: string
  ): Promise<{ newTickets: Ticket[]; finish: boolean }> {
    if (!this.stop) {
      if (this.searchId === '@INIT') {
        await this.getSearchId();
      }
      await this.fetchTickets();
    }
    const filtered = this.getFilteredTickets(this.allTickets, stopsFilter);
    const sorted = this.getSortedTickets(filtered, sortBy);
    return { newTickets: sorted.slice(0, 5), finish: this.stop };
  }

  getFilteredTickets = (coll: Ticket[], filters: Stops): Ticket[] => {
    if (filters.all) return coll;
    return coll.filter(ticket => {
      const ticketStopsTo = ticket.segments[0].stops.length;
      const ticketStopsFrom = ticket.segments[1].stops.length;
      return filters[filterToStopsMap[ticketStopsTo]] && filters[filterToStopsMap[ticketStopsFrom]];
    });
  };

  getSortedTickets = (coll: Ticket[], orderBy: string): Ticket[] => {
    if (orderBy === 'duration')
      return _.sortBy(coll, ticket => ticket.segments[0].duration + ticket.segments[1].duration);
    return _.sortBy(coll, orderBy);
  };
}
