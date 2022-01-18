import React from "react"
import data from "../yourdata"

// constructor(props) {
//   super(props);
//   this.skillRef = ;
// }

// handleSkill = (direction) => {
//   if (direction === 'left') {
//     React.createRef() ? (current.ScrollLeft -= 200) : null;

//   } else {
//     React.createRef() ? (current.ScrollLeft += 200) : null;

//   }
// }

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>skills<span>.</span></h1>
          {/* <div>
            <button onClick={() => this.handleSkill('left')}>Prev</button>
          </div> */}
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
          {/* <div>
            <button onClick={() => this.handleSkill('right')}>Next </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Skills
