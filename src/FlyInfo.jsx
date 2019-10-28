import React from 'react';
import PropTypes from 'prop-types';
import { FlyInfoDiv, FlyInfoElement, FlyInfoTitle, FlyInfoContent } from './styled';

const getStopsTitle = count => {
  const stopsTitle = count > 1 ? `${count} пересадки` : `1 пересадка`;
  return count > 0 ? stopsTitle : 'Без пересадок';
};

const getFlyDates = (date, duration) => {
  const depDateObject = new Date(date);
  const arriveDateObject = new Date(Date.parse(date) + duration * 60000);
  const depDateHours = depDateObject.getHours();
  const depDateMinutes = depDateObject.getMinutes();
  const depHoursFormatted = depDateHours > 9 ? depDateHours : `0${depDateHours}`;
  const depMinutesFormatted = depDateMinutes > 9 ? depDateMinutes : `0${depDateMinutes}`;

  const arriveDateHours = arriveDateObject.getHours();
  const arriveDateMinutes = arriveDateObject.getMinutes();
  const arriveHoursFormatted = arriveDateHours > 9 ? arriveDateHours : `0${arriveDateHours}`;
  const arriveMinutesFormatted =
    arriveDateMinutes > 9 ? arriveDateMinutes : `0${arriveDateMinutes}`;
  const depDateFormatted = `${depHoursFormatted}:${depMinutesFormatted}`;
  const arriveDateFormatted = `${arriveHoursFormatted}:${arriveMinutesFormatted}`;
  return { dep: depDateFormatted, arrive: arriveDateFormatted };
};

const FlyInfo = ({ info }) => {
  const { origin, destination, date, stops, duration } = info;
  const formattedDuration = `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  const flightTime = getFlyDates(date, duration);
  return (
    <FlyInfoDiv>
      <FlyInfoElement>
        <FlyInfoTitle>{`${origin} – ${destination}`}</FlyInfoTitle>
        <FlyInfoContent>{`${flightTime.dep} – ${flightTime.arrive}`}</FlyInfoContent>
      </FlyInfoElement>
      <FlyInfoElement>
        <FlyInfoTitle>В пути</FlyInfoTitle>
        <FlyInfoContent>{formattedDuration}</FlyInfoContent>
      </FlyInfoElement>
      <FlyInfoElement>
        <FlyInfoTitle>{getStopsTitle(stops.length)}</FlyInfoTitle>
        <FlyInfoContent>{stops.join(', ')}</FlyInfoContent>
      </FlyInfoElement>
    </FlyInfoDiv>
  );
};

FlyInfo.propTypes = {
  info: PropTypes.shape({
    origin: PropTypes.string,
    destination: PropTypes.string,
    date: PropTypes.string,
    stops: PropTypes.instanceOf(Array),
    duration: PropTypes.number,
  }),
};

FlyInfo.defaultProps = {
  info: {
    origin: '',
    destination: '',
    date: '',
    stops: [],
    duration: 0,
  },
};

export default FlyInfo;
