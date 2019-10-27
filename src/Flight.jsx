import React from 'react';
import FlyInfo from './FlyInfo';
import { FlightLi, FlyInfoMain, FlyPrice, CompanyLogo } from './styled';

const Flights = () => {
  return (
    <FlightLi>
      <FlyInfoMain>
        <FlyPrice>13 400 p</FlyPrice>
        <CompanyLogo>Logo</CompanyLogo>
      </FlyInfoMain>
      <FlyInfo />
      <FlyInfo />
    </FlightLi>
  );
};

export default Flights;
