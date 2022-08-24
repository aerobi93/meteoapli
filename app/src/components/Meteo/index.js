import React, { useEffect } from 'react';
import './styles.scss';

import DetailDay from '../../container/Detail';
import ChangeTown from '../../container/FormChangeTown';
import WeekMeteo from '../../container/ListCard';
import NavBar from '../../container/Navbar';

const Meteo = ({ searchCoordonate, loading, windowWidth, changeSize, town, displayForm, displayNavBar, changeDisplay, daySelected, hourSelected, error }) => {
  useEffect(() => (searchCoordonate('paris')),
    []);
  useEffect(() => {
    if (displayNavBar && windowWidth < 767) {
      changeDisplay('displayNavBar');
    }
    if (!displayNavBar && windowWidth > 767) {
      changeDisplay('displayNavBar');
    }
  },
  [windowWidth]);
  window.addEventListener('resize', changeSize);





  return (
    <div className="meteo">
      <div className="meteo-town">
        <div className="meteo-nameTown">
          meteo de <br />
          {town}
        </div>
        <div className="meteo-changeTown" onClick={() => changeDisplay('displayForm')}>
          changer
        </div>
        
      </div>
      {loading && <div className="spinner" />}
      <div className="displayNav" onClick={() => changeDisplay('displayNavBar')} />
      { displayForm && <ChangeTown /> }
      {(!loading && displayNavBar) && <NavBar />}
      {!loading && !daySelected && hourSelected && <DetailDay /> }
      {!loading && !daySelected && !hourSelected && <DetailDay periode ='actuellement'/> }
      {!loading && daySelected && !hourSelected && <DetailDay /> }
      {!loading && <WeekMeteo />}
    </div>
  );
};
export default Meteo;
