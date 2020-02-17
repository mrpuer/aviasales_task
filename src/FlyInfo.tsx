import React from 'react';
import { format, addMinutes } from 'date-fns';
import { FlyInfoDiv, FlyInfoElement, FlyInfoTitle, FlyInfoContent } from './styled';
import { Segment } from './interfaces';

const getStopsTitle = (count: number): string => {
  const stopsTitle: string = count > 1 ? `${count} пересадки` : `1 пересадка`;
  return count > 0 ? stopsTitle : 'Без пересадок';
};

const getFlyDates = (date: string, duration: number): { dep: string; arrive: string } => {
  const depDate = new Date(date);
  const depTime = format(depDate, 'HH:mm');
  const arriveTime = format(addMinutes(depDate, duration), 'HH:mm');
  return { dep: depTime, arrive: arriveTime };
};

const FlyInfo: React.FC<{ info: Segment }> = ({ info }) => {
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

export default FlyInfo;
