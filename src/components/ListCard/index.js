import React from 'react';
import './style.scss';

import CardWeek from 'src/container/ListCard/cardWeek';
import CardHour from 'src/container/ListCard/cardHour';
import CardType from 'src/container/ListCard/cardType';
import { CompareHour, HourToTimeStamp, meteoHOurSelected } from 'src/util';

const ListCard = ({ meteoData, displayCurrentDay, displayWeek, displayWeekEnd, displayHour, displayTomorow }) => (

  <div className="meteoWeek">
    {displayCurrentDay
    && (
    <CardType
      meteoData={meteoData.current}
      displayCurrentDay={displayCurrentDay}
      periode="actuellement"
    />
    )}
    {(displayCurrentDay && CompareHour(10))
      && (
      <CardType
        meteoData={meteoHOurSelected(meteoData.hourly, HourToTimeStamp(10))}
        displayCurrentDay={displayCurrentDay}
      />
      )}
    {(displayCurrentDay && CompareHour(14))
      && (
      <CardType
        meteoData={meteoHOurSelected(meteoData.hourly, HourToTimeStamp(14))}
        displayCurrentDay={displayCurrentDay}
      />
      )}
    {(displayCurrentDay && CompareHour(18))
      && (
      <CardType
        meteoData={meteoHOurSelected(meteoData.hourly, HourToTimeStamp(18))}
        displayCurrentDay={displayCurrentDay}
      />
      )}
    {(displayCurrentDay && CompareHour(22))
      && (
      <CardType
        meteoData={meteoHOurSelected(meteoData.hourly, HourToTimeStamp(22))}
        displayCurrentDay={displayCurrentDay}
      />
      )}
    {displayHour && <CardHour meteoData={meteoData.hourly} />}
    {displayTomorow && <CardHour meteoData={meteoData.hourly} />}
    {displayWeek && <CardWeek meteoData={meteoData.daily} />}
    {displayWeekEnd && <CardWeek meteoData={meteoData.daily}/>}

  </div>
);
export default ListCard;
