import React from 'react';
import './styles.scss';
import { rounding, searchTempMin, searchTempMax } from 'src/util';

const Temperature = ({ meteoData, meteoHourly }) => (
  <div className="detail-contentCentral">
    <div className="detail-temperature">
      {
        meteoData.temp.day
          ? `${rounding((meteoData.temp.day - 273.15))} °c`
          : `${rounding((meteoData.temp - 273.15))} °c`
      }

    </div>
    <div className="detail-temperatureResenti">
      resentit{' '}
      {
        meteoData.feels_like.day 
          ? `${rounding((meteoData.feels_like.day - 273.15))}°c`
          : `${rounding((meteoData.feels_like - 273.15))} °c`
        }
    </div>
    <div className="detail-tempMinMax">
      <div className='dtail-minMAx'>
        {
          meteoData.temp.min 
            ? `min ${rounding((meteoData.temp.min - 273.15))}°c`
            : `min ${rounding((searchTempMin(meteoHourly) - 273.15))} °c`
        }
      </div>
      <div className='dtail-minMAx'>
        {
          meteoData.temp.max 
            ? `max ${rounding((meteoData.temp.max - 273.15))}°c`
            : `max ${rounding((searchTempMax(meteoHourly) - 273.15))} °c`
        }
      </div>
    </div>
  </div>
);
export default Temperature;
