export const CHANGE_SIZE = 'CHANGE_SIZE';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SEARCH_COORDONATE = 'SEARCH_COORDONATE';
export const SEARCH_METEO = 'SEARCH_METEO';
export const NEW_COORDONATE = 'NEW_COORDONATE';
export const CHANGE_DISPLAY = 'CHANGE_DISPLAY';
export const METEO_DATA = 'METEO_DATA';
export const CARD_TO_SELECT = 'CARD_TO_SELECT';
export const CHANGE_DISPLAY_CARD = 'CHANGE_DISPLAY_CARD';
export const MESSAGE_ERROR = 'MESSAGE_ERROR';

export const messageError = () => ({
  type: MESSAGE_ERROR,
});
export const changeSize = () => ({
  type: CHANGE_SIZE,
});

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});

export const searchCoordonate = (value) => ({
  type: SEARCH_COORDONATE,
  value,
});

export const searchMeteo = () => ({
  type: SEARCH_METEO,
});

export const newCoordonate = (value) => ({
  type: NEW_COORDONATE,
  value,
});

export const changeDisplay = (display, value) => ({
  type: CHANGE_DISPLAY,
  display,
  value,
});

export const meteoData = (value) => ({
  type: METEO_DATA,
  value,
});

export const cardToSelect = (value) => ({
  type: CARD_TO_SELECT,
  value,
});

export const changeDisplayCard = (value) => ({
  type: CHANGE_DISPLAY_CARD,
  value,
});
