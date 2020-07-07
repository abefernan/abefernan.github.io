import React from 'react';
import './Content.css';

function Content(): JSX.Element {
  return (
    <main className="Content">
      <section>
        <h2 id="whoami">Who am I?</h2>
        <p>
          <span role="img" aria-label="Man Mage Emoji">
            🧙‍♂️
          </span>{' '}
          My name is Abel Fernández, but I go by <em>@abefernan</em> on some sites. I&apos;m a Frontend Developer who
          does remote work as a freelance.
        </p>
        <p>
          <span role="img" aria-label="House Emoji">
            🏠
          </span>{' '}
          I currently live in Vigo, which also happens to be my hometown. It&apos;s a nice coastal city in northwestern
          Spain that I encourage you to visit.
        </p>
        <p>
          <span role="img" aria-label="Yarn Emoji">
            🧶
          </span>{' '}
          My main hobbies are geeky ones like playing videogames, watching films, or reading fantasy novels; but I also
          have a great time cooking and listening to music (sometimes at the same time). I also try to drag myself to
          the gym every now and then.
        </p>
        <p>
          <span role="img" aria-label="Graduation Cap Emoji">
            🎓
          </span>{' '}
          I&apos;ve got a Computer Engineering background and I love learning all things that have to do with
          programming. Even if I&apos;m mostly focused on frontend web development (which I find <em>very</em> awesome),
          I try to read about current trends in other areas like DevOps from time to time.
        </p>
      </section>
      <section>
        <h2 id="whatdoido">What do I do?</h2>
        <p>
          My most familiar knowledge and workflow have to do with making React apps and deploying them. Below you can
          find a list of technologies and tools that I&apos;m comfortable working with, but I&apos;m also very keen on
          picking up new ones.
        </p>
        <h3>
          <span role="img" aria-label="Toolbox Emoji">
            🚀
          </span>
          Technologies
        </h3>
        <ul className="tech-list">
          <li>JavaScript ES2020</li>
          <li>TypeScript</li>
          <li>React with Hooks</li>
          <li>Redux with Hooks</li>
          <li>CSS, PostCSS, Flexbox, Grid</li>
          <li>Material UI Core</li>
          <li>Docker with Compose</li>
        </ul>
        <h3>
          <span role="img" aria-label="Toolbox Emoji">
            🔧
          </span>
          Tools
        </h3>
        <ul className="tech-list">
          <li>Windows 10 or Linux-based OS</li>
          <li>Visual Studio Code</li>
          <li>Vim</li>
          <li>GitHub issues and PRs</li>
        </ul>
      </section>
      <section>
        <h2 id="whathaveidone">What have I done?</h2>
        <p>
          <span role="img" aria-label="Man Construction Worker Emoji">
            👷‍♂️
          </span>{' '}
          Some things that I have done or contributed to, to some extent:
          <ul className="works">
            <a href="https://github.com/abefernan/abefernan.github.io" target="_blank" rel="noopener noreferrer">
              <li>
                <h3>This site</h3>
                <p>Simple personal site with Snowpack + React</p>
              </li>
            </a>
            <a href="https://fundacionbarrie.org" target="_blank" rel="noopener noreferrer">
              <li>
                <h3>Fundación Barrié&apos;s website</h3>
                <p>Implemented the design with CSS and Zurb Foundation</p>
              </li>
            </a>
            <a
              href="https://github.com/iov-one/ponferrada/tree/master/packages/medulas-react-components"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <h3>IOV&apos;s component library</h3>
                <p>Added and maintained a few components, and implemented form validators</p>
              </li>
            </a>
            <a
              href="https://github.com/iov-one/ponferrada/tree/master/packages/ui-logic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <h3>IOV&apos;s UI logic library</h3>
                <p>Added and maintained several functions</p>
              </li>
            </a>
            <a
              href="https://github.com/iov-one/ponferrada/tree/master/packages/sanes-browser-extension"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <h3>IOV&apos;s browser extension</h3>

                <p>Worked with TS + React + Material UI on several redesigns</p>
              </li>
            </a>
            <a
              href="https://github.com/iov-one/ponferrada/tree/master/packages/bierzo-wallet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <h3>IOV&apos;s wallet app</h3>
                <p>Started its development with TS + React + Material UI and worked on several redesigns</p>
              </li>
            </a>
            <a
              href="https://github.com/iov-one/ponferrada/tree/master/packages/sil-governance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <h3>IOV&apos;s governance app</h3>
                <p>Implemented from the ground up with TS + React + Material UI</p>
              </li>
            </a>
            <a href="https://github.com/iov-one/iov-core/" target="_blank" rel="noopener noreferrer">
              <li>
                <h3>IOV&apos;s iov-core library</h3>
                <p>Made some minor contribution to testing for transactions</p>
              </li>
            </a>
          </ul>
        </p>
      </section>
    </main>
  );
}

export default Content;
