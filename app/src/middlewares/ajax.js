import axios from 'axios';
import { SEARCH_COORDONATE, SEARCH_METEO } from '../action';
import { newCoordonate, searchMeteo, meteoData, changeDisplay, cardToSelect } from '../action';


const ajax = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SEARCH_COORDONATE:
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${action.value}&appid=3571c0352c17d542004999a575b6f178`)
        .then((response) => {
          store.dispatch(newCoordonate(response.data));
          store.dispatch(searchMeteo());
        })
        .catch((error) => (console.error(error)));
      break;
    case SEARCH_METEO:
      axios
        .get(`http://api.openweathermap.org/data/2.5/onecall?lat=${state.latitude}&lon=${state.longitude}&lang=fr&appid=3571c0352c17d542004999a575b6f178&unit=Celsius`)
        .then((response) => {
          store.dispatch(cardToSelect(response.data.current.dt));
          store.dispatch(meteoData(response.data));
          store.dispatch(changeDisplay('loading'));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    default:
  }
  next(action);
};
export default ajax;
