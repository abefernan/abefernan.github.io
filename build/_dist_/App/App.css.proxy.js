
const code = ".App{text-align:center}.App-logo{height:40vmin;pointer-events:none}@media (prefers-reduced-motion:no-preference){.App-logo{animation:App-logo-spin 20s linear infinite}}.App-header{background-color:#282c34;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin);color:#fff}.App-link{color:#61dafb}@keyframes App-logo-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
