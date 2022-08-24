import React from 'react';
import './styles.scss';
import { rounding , windSens} from '../../util';

const Wind = ({ meteoData }) => (
  <div className="detail-contentRight">
    <div className="detail-positionArrow">
      <div className="detail-gustRotate" style={{ transform: `rotate(${meteoData.wind_deg}deg)` }} />
    </div>
    <div className="detail-gustDirection"> vent de { windSens(meteoData.wind_deg)}</div>
    <div className="detail-windSpeed">  {
      meteoData.wind_gust 
        ? ` rafale vent ${rounding(meteoData.wind_gust * 3.6)} km/h`
        : ` vitesse du vent ${rounding(meteoData.wind_speed * 3.6)} km/h`
     }
    </div>
    <div className="detail-Uv"> indice uv {rounding(meteoData.uvi)}</div>
  </div>
);
export default Wind;
