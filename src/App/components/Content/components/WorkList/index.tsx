import React from 'react';
import './WorkList.css';

export { WorksList };

function WorksList(): JSX.Element {
  return (
    <ul className="work-list">
      {works.map((work) => (
        <a key={work.title} href={work.link} target="_blank" rel="noopener noreferrer">
          <li>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </li>
        </a>
      ))}
    </ul>
  );
}

const works: readonly Work[] = [
  {
    link: 'https://github.com/abefernan/abefernan.github.io',
    title: 'This site',
    description: 'Simple personal site with Snowpack + React',
  },
  {
    link: 'https://fundacionbarrie.org',
    title: `Fundación Barrié's website`,
    description: 'Implemented the design with CSS and Zurb Foundation',
  },
  {
    link: 'https://github.com/iov-one/ponferrada/tree/master/packages/medulas-react-components',
    title: `IOV's component library`,
    description: 'Added and maintained a few components, and implemented form validators',
  },
  {
    link: 'https://github.com/iov-one/ponferrada/tree/master/packages/ui-logic',
    title: `IOV's UI logic library`,
    description: 'Added and maintained several functions',
  },
  {
    link: 'https://github.com/iov-one/ponferrada/tree/master/packages/sanes-browser-extension',
    title: `IOV's browser extension`,
    description: 'Worked with TS + React + Material UI on several redesigns',
  },
  {
    link: 'https://github.com/iov-one/ponferrada/tree/master/packages/bierzo-wallet',
    title: `IOV'a wallet app`,
    description: 'Started its development with TS + React + Material UI and worked on several redesigns',
  },
  {
    link: 'https://github.com/iov-one/ponferrada/tree/master/packages/sil-governance',
    title: `IOV's governance app`,
    description: 'Implemented from the ground up with TS + React + Material UI',
  },
  {
    link: 'https://github.com/iov-one/iov-core/',
    title: `IOV's iov-core library`,
    description: 'Made some minor contribution to testing for transactions',
  },
];

interface Work {
  readonly link: string;
  readonly title: string;
  readonly description: string;
}
