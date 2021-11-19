import React from 'react';
import './style.scss';
import CardType from 'src/container/ListCard/cardType';
import { dayDisplay, changeHour } from 'src/util';

const CardWeek = ({ meteoData, displayWeek, displayWeekEnd}) => {
  if (displayWeekEnd) {
    meteoData = meteoData.filter((weekend) => (
      (
        dayDisplay(weekend.dt) === 'Vendredi'
        || dayDisplay(weekend.dt) === 'Samedi'
        || dayDisplay(weekend.dt) === 'Dimanche')
        && weekend.dt < changeHour(23, 6)

    ));
  }
  return (
    <>
      {
      meteoData.map((data) => (
        <CardType meteoData={data} displayWeekEnd={displayWeekEnd} displayWeek={displayWeek} />
      ))
      }
    </>
  );
};
export default CardWeek;
