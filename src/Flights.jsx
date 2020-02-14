import React from 'react';
import PropTypes from 'prop-types';
import Flight from './Flight';
import { FlightsList } from './styled';

const Flights = ({ tickets }) => {
  return (
    <FlightsList>
      <ul>
        {tickets &&
          tickets.map((ticket, id) => (
            // eslint-disable-next-line react/no-array-index-key
            <Flight key={id} ticket={ticket} />
          ))}
      </ul>
    </FlightsList>
  );
};

Flights.propTypes = {
  tickets: PropTypes.instanceOf(Array),
};

Flights.defaultProps = {
  tickets: null,
};

export default Flights;
