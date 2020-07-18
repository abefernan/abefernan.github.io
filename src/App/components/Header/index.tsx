import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

export { Header };

function Header(): JSX.Element {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <a href="/">
              <h1>@abefernan</h1>
            </a>
          </li>
          <li>
            <a href="https://github.com/abefernan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abefernan/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a href="#whoami">Who am I?</a>
          </li>
          <li>
            <a href="#whatdoido">What do I do?</a>
          </li>
          <li>
            <a href="#whathaveidone">What have I done?</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
