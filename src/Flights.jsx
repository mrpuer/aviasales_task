import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Flight from './Flight';
import { FlightsList } from './styled';

const Flights = ({ tickets }) => {
  if (tickets.length === 0) return null;
  return (
    <FlightsList>
      <ul>
        {tickets.map(ticket => (
          <Flight key={_.uniqueId()} ticket={ticket} />
        ))}
      </ul>
    </FlightsList>
  );
};

Flights.propTypes = {
  tickets: PropTypes.instanceOf(Array),
};

Flights.defaultProps = {
  tickets: [],
};

export default Flights;
