import {MESSAGE_ERROR, CHANGE_SIZE, CHANGE_VALUE, NEW_COORDONATE, SEARCH_COORDONATE, CHANGE_DISPLAY, METEO_DATA, CARD_TO_SELECT, CHANGE_DISPLAY_CARD } from '../action';


const initialState = {
  town: '',
  latitude: '',
  longitude: '',
  newValue: '',
  meteoData: '',
  windowWidth: window.innerWidth,
  error: '',
  displayForm: false,
  displayNavBar: true,
  displaySunrise: false,
  loading: true,
  selectCard: '',
  displayCurrentDay: true,
  displayWeek: false,
  displayWeekEnd: false,
  displayHour: false,
  displayTomorow: false,

};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MESSAGE_ERROR:
      return {
        ...state,
        error: !state.error,
      };
    case CHANGE_SIZE:
      return {
        ...state,
        windowWidth: window.innerWidth,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        newValue: action.value,
      };
    case NEW_COORDONATE:
      return {
        ...state,
        town: action.value.name,
        latitude: action.value.coord.lat,
        longitude: action.value.coord.lon,
      };
    case SEARCH_COORDONATE:
      return {
        ...state,
        newValue: '',
      };
    case CHANGE_DISPLAY:
      if (action.value === false) {
        return {
          ...state,
          [action.display]: action.value,
        };
      }
      return {
        ...state,
        [action.display]: !state[action.display],
      };
    case METEO_DATA:
      return {
        ...state,
        meteoData: action.value,
      };
    case CARD_TO_SELECT:
      return {
        ...state,
        selectCard: action.value,
      };
    case CHANGE_DISPLAY_CARD:
      return {
        ...state,
        displayCurrentDay: action.value === 'displayCurrentDay',
        displayWeek: action.value === 'displayWeek',
        displayWeekEnd: action.value === 'displayWeekEnd',
        displayHour: action.value === 'displayHour',
        displayTomorow: action.value === 'displayTomorow',
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
