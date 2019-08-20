import { html } from '../unpkg/htm.js';
import { React } from '../unpkg/react.js';
import { PlayersForm } from './PlayersForm.js';
import { TurnDisplay } from './TurnDisplay.js';
import { Welcome } from './Welcome.js';

const GameState = Object.freeze({
  WELCOME: 1,
  ADD_PLAYERS: 2,
  PLAY_GAME: 3,
  SHOW_RESULTS: 4
});

const players = [];
const scores = [];

export const Game = () => {
  const [state, setState] = React.useState(GameState.WELCOME);

  const goToPlayersForm = () => {
    setState(GameState.ADD_PLAYERS);
  };

  const goToPlayGame = () => {
    setState(GameState.PLAY_GAME);
  };

  const goToShowResults = () => {
    setState(GameState.SHOW_RESULTS);
  };

  return html`
    <${React.Fragment}>
      ${state === GameState.WELCOME &&
        html`
          <${Welcome} newGame=${goToPlayersForm} />
        `}
      ${state === GameState.ADD_PLAYERS &&
        html`
          <${PlayersForm} players=${players} startGame=${goToPlayGame} />
        `}
      ${state === GameState.PLAY_GAME &&
        html`
          <${TurnDisplay}
            players=${players}
            scores=${scores}
            endGame=${goToShowResults}
          />
        `}
      ${state === GameState.SHOW_RESULTS &&
        html`
          <h1>results</h1>
        `}
    </${React.Fragment}>
  `;
};
