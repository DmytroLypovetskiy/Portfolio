import React, { Component } from 'react';

class Skills extends Component {
  render() {
    const { skills } = this.props;
    return (
      <section className="card py-3 mb-4">
        <div className="card-header">
          <h2 className="h3">SKILLS</h2>
        </div>
        <div className="card-body">
          <ul className="list row">
            {skills.map((skill, idx) => {
              return <li key={idx} className="mb-2 col-md-4">
                {Object.entries(skill).map(([key, val]) => {
                  return <div key={key}>
                    <strong className="text-muted">{key}:</strong> <span className="font-weight-light">{val}</span>
                  </div>
                })}
              </li>
            })}
          </ul>
        </div>
      </section>
    )
  }
}

export default Skills;