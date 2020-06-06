import { Game } from './components/Game.js';
import { html } from './unpkg/htm.js';
import { ReactDOM } from './unpkg/react.js';

ReactDOM.render(
  html`
    <${Game} />
  `,
  document.querySelector('main')
);
