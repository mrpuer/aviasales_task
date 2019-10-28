import React from 'react';
import PropTypes from 'prop-types';
import { format, addMinutes } from 'date-fns';
import { FlyInfoDiv, FlyInfoElement, FlyInfoTitle, FlyInfoContent } from './styled';

const getStopsTitle = count => {
  const stopsTitle = count > 1 ? `${count} пересадки` : `1 пересадка`;
  return count > 0 ? stopsTitle : 'Без пересадок';
};

const getFlyDates = (date, duration) => {
  const depDate = new Date(date);
  const depTime = format(depDate, 'HH:mm');
  const arriveTime = format(addMinutes(depDate, duration), 'HH:mm');
  return { dep: depTime, arrive: arriveTime };
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
