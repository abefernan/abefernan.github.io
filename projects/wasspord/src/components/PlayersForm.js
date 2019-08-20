import { html } from '../unpkg/htm.js';
import { React } from '../unpkg/react.js';

const generateListKey = () => new Date().getTime();

export const PlayersForm = ({ players, startGame }) => {
  const [inputKeys, setInputKeys] = React.useState([
    generateListKey(),
    generateListKey() + 1
  ]);
  const inputListDom = React.useRef(null);

  const addInputField = () => setInputKeys([...inputKeys, generateListKey()]);

  const addPlayers = () => {
    Array.from(inputListDom.current.children).map(li =>
      players.push(li.children[0].value)
    );

    startGame();
  };

  return html`
    <${React.Fragment}>
      <h1 onClick=${addInputField}>Add Players</h1>
      <ul ref=${inputListDom}>
        ${inputKeys.map(
          id =>
            html`
              <li key=${id}><input type="text" /></li>
            `
        )}
      </ul>
      <button onClick=${addPlayers}>Start Game</button>
    </${React.Fragment}>
  `;
};
