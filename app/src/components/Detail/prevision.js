import React from 'react';
import './styles.scss';
import { converInHour, convertInMinute, searchMoonPhase } from "../../util";

const Previson = ({ meteoData,meteoDaily }) => {
  {
    !meteoData.moon_phase 
    && (meteoData.moon_phase = searchMoonPhase(meteoDaily))
  }
  return (
    <div className="prevision">
      <div className="prevision-sunMove">
        <img classeName="prevision-sunIcon" src="sunset.png" alt="soleil avec une fleche vers le bas" />
        <span className="prevision-sun"> le soleil se levera a
          <br />
          { converInHour(meteoData.sunrise)}h{ convertInMinute(meteoData.sunrise)}
        </span>
      </div>
      <div className='prevision-moon'>
        {
        meteoData.moon_phase < 0.1 && <div className="prevision-moonPhase prevision-moonPhase5" /> 
        }
        {
          (meteoData.moon_phase > 0.1 && meteoData.moon_phase < 0.3)
          && <div className="prevision-moonPhase prevision-moonPhase1" />
        }
        {
          (meteoData.moon_phase > 0.3 && meteoData.moon_phase < 0.6)
          && <div className="prevision-moonPhase prevision-moonPhase2" />
        }
        {
          (meteoData.moon_phase > 0.6 && meteoData.moon_phase < 0.9)
          && <div className="prevision-moonPhase prevision-moonPhase3" />
        }
        {
          meteoData.moon_phase > 0.9 && <div className="prevision-moonPhase prevision-moonPhase4" />
        }
        <div className="prevision-moonPhaseDegre"> 
          phase lunaire <br />
          visiblité {meteoData.moon_phase * 100}%
        </div>
      </div>
      <div className="prevision-sunMove">
        <img classeName="prevision-sunIcon" src="sunrise.png" alt="soleil avec une fleche vers le bas" />
        <span className="prevision-sun"> le soleil se couchera a
          <br />
          { converInHour(meteoData.sunset)}h{ convertInMinute(meteoData.sunset)}
        </span>
      </div>
    </div>

  );
}
export default Previson;
