import React from 'react';
import './style.scss';
import { rounding, mommentDay, dayDisplay, converInHour } from 'src/util';

const CardType = ({ periode, meteoData, displayCurrentDay, displayWeek, displayWeekEnd, displayHour, displayTomorow, cardToSelect}) => {
  const handleClick = (value) => {
    cardToSelect(value);
  };
  if (displayCurrentDay && !periode) {
    periode = mommentDay(converInHour(meteoData.dt));
  }
  if (displayWeek || displayWeekEnd) {
    periode = dayDisplay(meteoData.dt);
  }
  if (displayHour || displayTomorow) {
    periode = `${converInHour(meteoData.dt)}h`;
  }
  return (
    <form
      className="meteoWeek-card"
      onClick={() => handleClick((meteoData.dt))}
    >
      <div className="meteoWeek-day"> {periode} </div>
      {
        meteoData.weather.map((weather) => (
          <>
            <div className="meteoWeek-icon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${weather.icon}@2x.png)` }} />
          </>
        ))
      }
      <div className="meteoWeek-temp">{((displayWeek && !displayCurrentDay) || displayWeekEnd ? 'min' : '')}
        {rounding(((displayWeek && !displayCurrentDay || displayWeekEnd ? meteoData.temp.min : meteoData.temp)
         - 273.15))}°C
      </div>
      {(displayWeek || displayWeekEnd) && <div className="meteoWeek-temp">max {rounding((meteoData.temp.max - 273.15))}°C </div>}
    </form>
  );
};
export default CardType;
