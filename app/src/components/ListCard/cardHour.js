import React from 'react';
import './style.scss';
import CardType from '../../container/ListCard/cardType'
import {changeHour, displayTomorow  } from '../../util';

const CardHour = ({ meteoData, displayTomorow, displayHour }) => {
  const newData = meteoData.filter((day) => {
    if (!displayTomorow) {
      return day.dt <= changeHour(23, 0);
    }
    if (displayTomorow) {
      return (day.dt > changeHour(23, 0)) && (day.dt <= changeHour(23, 1));
    }
  });
  return (
    <>
      {
      newData.map((hourly) => (
        <CardType
          meteoData={hourly}
          key={hourly.dt}
          displayTomorow={displayTomorow}
          displayHour={displayHour}
        />
      ))
      }
    </>
  );
};
export default CardHour;
