import React from 'react';
import FlyInfo from './FlyInfo';
import { FlightLi, FlyInfoMain, FlyPrice, CompanyLogo } from './styled';
import { Ticket } from './interfaces';

const Flights: React.FC<{ ticket: Ticket }> = ({ ticket }) => {
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

export default Flights;
