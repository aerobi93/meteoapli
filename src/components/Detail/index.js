/* eslint-disable yoda */
import React from 'react';
import './styles.scss';
import Humidity from 'src/container/Detail/humidity';
import Temperature from 'src/container/Detail/temperature';
import Previson from 'src/container/Detail/prevision';
import Wind from 'src/container/Detail/wind';
import { changeDisplay } from 'src/action';

const DetailDay = ({ displayTomorow, displayHour, displaySunrise, changeDisplay, windowWidth}) => (

  <div className="detail">
    <div className="detail-flex">
      <Humidity />
      <div className="detail-degrade" />
      <Temperature />
      {windowWidth >= 728 ? <div className="detail-degrade" /> : <div className="detail-degradeHorizon" /> }
      <Wind />
      {(!displayTomorow && !displayHour) && <div className="detail-displaySun" onClick={() => changeDisplay('displaySunrise')} /> }
      {displaySunrise && <div className="detail-degradeHorizon" />}
      {displaySunrise && <Previson />}
      {displaySunrise && <div className="detail-degradeHorizon" />}
    </div>
  </div>
);
export default DetailDay;
