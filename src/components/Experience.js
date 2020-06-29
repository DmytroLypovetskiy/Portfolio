import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const { experience } = this.props;
    return (
      <section className="card py-3 mb-4">
        <div className="card-header">
          <h2 className="h3">WORK EXPERIENCE</h2>
        </div>
        <div className="card-body">
          <ul className="list">
            {experience.map((exp, idx) => {
              return <li key={idx} className="mb-5">
                <h3 className="h4">{exp.title}</h3>
                <h4 className="font-weight-light">{exp.company}</h4>
                <h4 className="font-weight-light text-muted">{exp.date}</h4>
                <ul>
                  {exp.duties.map((duty, _idx) => <li key={_idx}>{duty}</li>)}
                </ul>
              </li>
            })}
          </ul>
        </div>
      </section>
    )
  }
}

export default Experience;