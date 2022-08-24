export const rounding = (tempK) => (Math.round(tempK));


export const dayDisplay = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const days = date.getDay();
  let day = '';
  switch (days) {
    case 0:
      day = 'Dimanche';
      break;
    case 1:
      day = 'Lundi';
      break;
    case 2:
      day = 'Mardi';
      break;
    case 3:
      day = 'Mercredi';
      break;
    case 4:
      day = 'Jeudi';
      break;
    case 5:
      day = 'Vendredi';
      break;
    case 6:
      day = 'Samedi';
      break;
  }
  return day;
};

export function searchInAllData(data, cardSelected) {
  let newData = '';
  const hour = data.hourly.find((hourly) => (hourly.dt === cardSelected));
  const day = data.daily.find((daily) => (daily.dt === cardSelected));
  if (data.current.dt === cardSelected) {
    newData = data.current;
  }
  else if (day) {
    newData = day;
  }
  else if (hour) {
    newData = hour;
  }
  return newData;
}
export const searchMoonPhase = (day) => {
  const moonToday = day.find((phase) => (phase));
  return moonToday.moon_phase;
};

export const searchTempMin = (meteoHourly) => {
  const min = meteoHourly.map((tempMin) => (tempMin.temp));
  return Math.min(...min);
};

export const searchTempMax = (meteoHourly) => {
  const max = meteoHourly.map((tempMax) => (tempMax.temp));
  return Math.max(...max);
};

export const windSens = (windDeg) => {
  let windDirection = '';
  if (windDeg > 22.5 && windDeg < 67.5) {
    windDirection = 'nord-est';
  }
  else if (windDeg > 67.5 && windDeg < 112.5) {
    windDirection = 'est';
  }
  else if (windDeg > 112.5 && windDeg < 157.5) {
    windDirection = 'sud-est';
  }
  else if (windDeg > 157.5 && windDeg < 202.5) {
    windDirection = 'sud';
  }
  else if (windDeg > 202 && windDeg < 247.5) {
    windDirection = 'sud-ouest';
  }
  else if (windDeg > 247.5 && windDeg < 292.5) {
    windDirection = 'ouest';
  }
  else if (windDeg > 292 && windDeg < 337.5) {
    windDirection = 'nord-ouest';
  }
  else if ((windDeg > 337.5 && windDeg > 292) || (windDeg >= 0 && windDeg < 22.5)) {
    windDirection = 'nord';
  }
  return windDirection;
};
export const converInHour = (time) => {
  const dateTime = new Date(time * 1000);
  const hour = dateTime.getHours();
  return hour;
};

export const convertInMinute = (time) => {
  const dateTime = new Date(time * 1000);
  const minute = dateTime.getMinutes();
  return minute;
};

export const changeHour = (hour, numberDay) => {
  const dateTime = new Date().setHours(hour, 0, 0, 0);
  const time = new Date();
  const withMoreDay = new Date(dateTime).setDate(time.getDate() + numberDay);
  return withMoreDay / 1000;
};

export const HourToTimeStamp = (hourly) => {
  const dateTime = new Date();
  const hourUnix = dateTime.setHours(hourly, 0, 0, 0);
  return hourUnix / 1000;
};

export const meteoHOurSelected = (meteoData, hour) => {
  const meteo = meteoData.find((data) => (
    data.dt === hour
  ));
  return meteo;
};

export const CompareHour = (hours) => {
  const dateTime = new Date();
  const ActualHours = dateTime.getHours();
  return ActualHours <= hours;
};

export const mommentDay = (hour) => {
  let momment = '';
  switch (hour) {
    case 10:
      momment = 'ce matin';
      break;
    case 14:
      momment = 'cette apres midi';
      break;
    case 18:
      momment = 'ce soir';
      break;
    case 22:
      momment = 'cette nuit';
      break;
    default:
      momment = 'actuelement';
  }
  return momment;
};


