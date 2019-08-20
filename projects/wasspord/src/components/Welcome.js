import { html } from '../unpkg/htm.js';
import { React } from '../unpkg/react.js';

export const Welcome = ({ newGame }) => {
  return html`
    <${React.Fragment}>
      <h1>Welcome</h1>
      <button onClick=${newGame}>New Game</button>
    </${React.Fragment}>
  `;
};
