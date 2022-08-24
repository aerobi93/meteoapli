/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import Meteo from './container/Meteo';

const rootReactElement = (
  <Provider store={store}>
    <Meteo />
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
