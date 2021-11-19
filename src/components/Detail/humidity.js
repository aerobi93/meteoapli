import React from 'react';
import './styles.scss';
import { mommentDay, converInHour, dayDisplay } from 'src/util';

const Humidity = ({ meteoData, displayCurrentDay, displayTomorow, displayHour, displayWeek, displayWeekEnd, selectCard }) => (
  <>
    <div className="detail-time">
      {(displayCurrentDay) && mommentDay(converInHour(meteoData.dt))}
      {(displayTomorow || displayHour) && `${converInHour(meteoData.dt)}h`}
      {(displayWeek || displayWeekEnd) && dayDisplay(meteoData.dt)}
    </div>
    {meteoData.weather.map((Weather) => (
      <div className="detail-contentLeft" key={meteoData.dt}>
        <div className="detail-weatherIcon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${Weather.icon}@2x.png)` }} />
        <div className="detail-weatherDescript">
          {Weather.description}
        </div>
        <div className="detail-weatherHumidity">
          taux d' humidité {meteoData.humidity}%
        </div>
      </div>
    ))}
  </>
);
export default Humidity;
