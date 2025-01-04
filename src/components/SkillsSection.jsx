import React from 'react';
import '../css/SkillsSection.css';

const SkillsSection = () => {

  const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'Python'];

  return (
    <section className="skills-section">
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
