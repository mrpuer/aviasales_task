import React from 'react';
import PropTypes from 'prop-types';
import FlyInfo from './FlyInfo';
import { FlightLi, FlyInfoMain, FlyPrice, CompanyLogo } from './styled';

const Flights = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  const carrierLogo = `http://pics.avs.io/99/36/${carrier}.png`;
  const formattedPrice = `${new Intl.NumberFormat('ru-RU').format(price)} р`;
  return (
    <FlightLi>
      <FlyInfoMain>
        <FlyPrice>{formattedPrice}</FlyPrice>
        <CompanyLogo>
          <img src={carrierLogo} alt="Carrier logo" />
        </CompanyLogo>
      </FlyInfoMain>
      <FlyInfo info={segments[0]} />
      <FlyInfo info={segments[1]} />
    </FlightLi>
  );
};

Flights.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.instanceOf(Array),
  }),
};

Flights.defaultProps = {
  ticket: {
    price: 0,
    carrier: '',
    segments: [],
  },
};

export default Flights;
