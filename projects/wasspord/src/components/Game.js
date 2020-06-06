import { html } from '../unpkg/htm.js';
import { React } from '../unpkg/react.js';
import { PlayersForm } from './PlayersForm.js';
import { Results } from './Results.js';
import { TurnDisplay } from './TurnDisplay.js';
import { Welcome } from './Welcome.js';

export const generateListKey = () =>
  Math.floor(Math.random() * new Date().getTime());

const GameState = Object.freeze({
  WELCOME: 1,
  ADD_PLAYERS: 2,
  PLAY_GAME: 3,
  SHOW_RESULTS: 4
});

let players;
let scores;

const initScores = players => {
  scores = new Map();

  for (const player of players) {
    scores.set(player, 0);
  }
};

export const Game = () => {
  const [state, setState] = React.useState(GameState.WELCOME);

  const goToPlayersForm = () => {
    players = [];
    setState(GameState.ADD_PLAYERS);
  };

  const goToPlayGame = () => {
    initScores(players);
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
          <${Results} scores=${scores} playAgain=${goToPlayersForm} />
        `}
    </${React.Fragment}>
  `;
};
