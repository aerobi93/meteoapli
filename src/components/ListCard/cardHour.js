import React from 'react';
import './style.scss';
import CardType from 'src/container/ListCard/cardType'
import {changeHour, displayTomorow  } from 'src/util';

const CardHour = ({ meteoData, selectDay, selectHour, displayTomorow, displayHour }) => {
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
