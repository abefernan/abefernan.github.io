import React from 'react';
import './SkillList.css';

export { SkillList };

function SkillList({ skills }: Props): JSX.Element {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}

interface Props {
  readonly skills: readonly string[];
}
