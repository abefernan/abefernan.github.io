import React from 'react';
import { SkillList } from './components/SkillList';
import { WorksList } from './components/WorkList';
import './Content.css';

export { Content };

function Content(): JSX.Element {
  return (
    <main className="content">
      <section>
        <h2 id="whoami">Who am I?</h2>
        <div>
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
            I currently live in Vigo, which also happens to be my hometown. It&apos;s a nice coastal city in
            northwestern Spain that I encourage you to visit.
          </p>
          <p>
            <span role="img" aria-label="Yarn Emoji">
              🧶
            </span>{' '}
            My main hobbies are geeky ones like playing videogames, watching films, or reading fantasy novels; but I
            also have a great time cooking and listening to music (sometimes at the same time). I also try to drag
            myself to the gym every now and then.
          </p>
          <p>
            <span role="img" aria-label="Graduation Cap Emoji">
              🎓
            </span>{' '}
            I&apos;ve got a Computer Engineering background and I love learning all things that have to do with
            programming. Even if I&apos;m mostly focused on frontend web development (which I find <em>very</em>{' '}
            awesome), I try to read about current trends in other areas like DevOps from time to time.
          </p>
        </div>
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
        <SkillList skills={technologies} />
        <h3>
          <span role="img" aria-label="Toolbox Emoji">
            🔧
          </span>
          Tools
        </h3>
        <SkillList skills={tools} />
      </section>
      <section>
        <h2 id="whathaveidone">What have I done?</h2>
        <p>
          <span role="img" aria-label="Man Construction Worker Emoji">
            👷‍♂️
          </span>{' '}
          Some things that I have done or contributed to, to some extent:
        </p>
        <WorksList />
      </section>
    </main>
  );
}

const technologies: readonly string[] = [
  'JavaScript ES2020',
  'TypeScript',
  'React with Hooks',
  'Redux with Hooks',
  'CSS, PostCSS, Flexbox, Grid',
  'Material-UI',
  'Docker with Compose',
];

const tools: readonly string[] = ['Windows 10 or Linux-based OS', 'Visual Studio Code', 'Vim', 'GitHub issues and PRs'];
