import React from 'react';
import Flight from './Flight';
import { FlightsList } from './styled';

const Flights = () => {
  return (
    <FlightsList>
      <ul>
        <Flight />
      </ul>
    </FlightsList>
  );
};

export default Flights;
