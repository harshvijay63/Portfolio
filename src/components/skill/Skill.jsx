import React from 'react';
import "./Skill.css";
import Frontend from './Frontend';
import Backend from './Backend';
import SkillSet from './SkillSet';

const Skill = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>


      <div className="skills__technical coner grid">
        <Frontend />
        <Backend />
        <SkillSet />
      </div>
    </section>
  )
}

export default Skill