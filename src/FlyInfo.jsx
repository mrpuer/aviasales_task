import React from 'react';
import { FlyInfoDiv, FlyInfoElement, FlyInfoTitle, FlyInfoContent } from './styled';

const FlyInfo = () => {
  return (
    <FlyInfoDiv>
      <FlyInfoElement>
        <FlyInfoTitle>MOW – HKT</FlyInfoTitle>
        <FlyInfoContent>10:45 – 08:00</FlyInfoContent>
      </FlyInfoElement>
      <FlyInfoElement>
        <FlyInfoTitle>В пути</FlyInfoTitle>
        <FlyInfoContent>21ч 15м</FlyInfoContent>
      </FlyInfoElement>
      <FlyInfoElement>
        <FlyInfoTitle>2 пересадки</FlyInfoTitle>
        <FlyInfoContent>HKG, JNB</FlyInfoContent>
      </FlyInfoElement>
    </FlyInfoDiv>
  );
};

export default FlyInfo;
