import { html } from '../unpkg/htm.js';
import { React } from '../unpkg/react.js';
import { generateListKey } from './Game.js';

export const Results = ({ scores, playAgain }) => {
  return html`
    <${React.Fragment}>
      <h1>Results</h1>
      <ul>
      ${Array.from(scores.entries()).map(
        el =>
          html`
            <li key=${generateListKey()}><p>${el[0]}: ${el[1]}</p></li>
          `
      )}
      </ul>
      <button onClick=${playAgain}>Play Again</button>
    </${React.Fragment}>`;
};
