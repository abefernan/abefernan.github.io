import __SNOWPACK_ENV__ from '/__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import * as React from '/web_modules/react.js';
import * as ReactDOM from '/web_modules/react-dom.js';
import App from './App/index.js';
import './index.css.proxy.js';
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root')); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement

if (import.meta.hot) {
  import.meta.hot.accept();
}