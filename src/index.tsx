import 'modern-css-reset';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { applyRandomTheme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

applyRandomTheme();

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
