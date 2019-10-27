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

  async getTickets() {
    if (this.searchId === '@INIT') {
      await this.initData();
    }
    return this.allTickets.slice(0, 5);
  }
}
