import React, { useEffect } from 'react';
import './styles.scss';
import { changeHour, dayDisplay } from 'src/util'
const NavBar = ({ meteoData, changeDisplayCard, displayNavBar, displayCurrentDay, displayWeek, displayWeekEnd, displayHour, displayTomorow, changeDisplay, cardToSelect }) => {
  const handleClick = (periodeSelected) => {
    changeDisplayCard(periodeSelected);
    changeDisplay('displaySunrise', false);
    changeDisplay('displayNavBar');

    if (periodeSelected === 'displayCurrentDay' || periodeSelected === 'displayHour') {
      cardToSelect(meteoData.current.dt);
    }
    if (periodeSelected === 'displayTomorow') {
      const newData = meteoData.hourly.find((data) => (
        (data.dt === changeHour(8, 2))
      ));
      cardToSelect(newData.dt);
    }
    if (periodeSelected === 'displayWeek') {
      const newData = meteoData.daily.find((data) => (data));
      cardToSelect(newData.dt);
    }
    if (periodeSelected === 'displayWeekEnd') {
      const newData = meteoData.daily.find(
        (data) => (dayDisplay(data.dt) === 'Vendredi' || dayDisplay(data.dt) === 'Samedi' || dayDisplay(data.dt) === 'Dimanche'),
      );
      cardToSelect(newData.dt);
    }
  };

  return (
    <div className="navbar">
      <div className={displayCurrentDay ? 'navbar-choice__open' : 'navbar-choice'} onClick={() => handleClick('displayCurrentDay')}> haujourd'hui </div>
      <div className={displayTomorow ? 'navbar-choice__open' : 'navbar-choice'} onClick={() => handleClick('displayTomorow')}> demain </div>
      <div className={displayHour ? 'navbar-choice__open' : 'navbar-choice'} onClick={() => handleClick('displayHour')}>par heure</div>
      <div className={displayWeek ? 'navbar-choice__open' : 'navbar-choice'} onClick={() => handleClick('displayWeek')}>7 jours </div>
      <div className={displayWeekEnd ? 'navbar-choice__open' : 'navbar-choice'} onClick={() => handleClick('displayWeekEnd')}> week-end </div>
    </div>

  );
};
export default NavBar;
