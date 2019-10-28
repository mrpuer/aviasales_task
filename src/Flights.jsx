import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Error from './Error';
import Flight from './Flight';
import { FlightsList } from './styled';

const Flights = ({ tickets, error }) => {
  if (error) return <Error title="Sorry, network error. Try again..." message={error} />;
  if (tickets.length === 0)
    return (
      <Error title="There are no results for this request" message="Try change filter parameters" />
    );
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
  error: PropTypes.string,
};

Flights.defaultProps = {
  tickets: [],
  error: null,
};

export default Flights;
