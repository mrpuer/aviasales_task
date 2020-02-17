import React from 'react';
import Flight from './Flight';
import { FlightsList } from './styled';
import { Ticket } from './interfaces';

const Flights: React.FC<{ tickets: Ticket[] }> = ({ tickets }) => (
  <FlightsList>
    {tickets.length > 0 ? (
      <ul>
        {tickets.map(ticket => (
          <Flight key={`${ticket.carrier}${ticket.price}`} ticket={ticket} />
        ))}
      </ul>
    ) : (
      <p>No results</p>
    )}
  </FlightsList>
);

export default Flights;
