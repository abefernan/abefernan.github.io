import { html } from '../unpkg/htm.js';
import { React } from '../unpkg/react.js';

const generateTurns = players => {
  const turns = [];

  for (let i = 0; i < players.length - 1; i++) {
    turns.push([players[i], players[i + 1]]);
  }

  turns.push([players[players.length - 1], players[0]]);

  return turns;
};

export const TurnDisplay = ({ players, scores, endGame }) => {
  const [turns, setTurns] = React.useState(generateTurns(players));
  const hinter = turns[0][0];
  const guesser = turns[0][1];
  const [score, setScore] = React.useState(0);

  const cycleTurns = () => {
    const cycledTurns = [...turns];
    cycledTurns.push(cycledTurns.shift());
    setTurns(cycledTurns);
  };

  const nextTurn = () => {
    scores.set(hinter, scores.get(hinter) + parseInt(score, 10));
    scores.set(guesser, scores.get(guesser) + parseInt(score, 10));

    const winner = Array.from(scores.values()).some(score => score >= 20);
    if (winner) endGame();
    else cycleTurns();
  };

  return html`
    <${React.Fragment}>
      <h1>${hinter} hints and ${guesser} guesses</h1>
      Score: <input type="number" min="0" max="5" onChange=${event =>
        setScore(event.target.value)} />
      <button onClick=${nextTurn}>Next turn</button>
    </${React.Fragment}>
  `;
};
