/* eslint-disable yoda */
import React from 'react';
import './styles.scss';
import Humidity from '../../container/Detail/humidity';
import Temperature from '../../container/Detail/temperature';
import Previson from '../../container/Detail/prevision';
import Wind from '../../container/Detail/wind';
import { changeDisplay } from '../../action';

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
