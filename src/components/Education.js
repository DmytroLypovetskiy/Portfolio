import React, { Component } from 'react';

class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <section className="card py-3 mb-4">
        <div className="card-header">
          <h2 className="h3">EDUCATION</h2>
        </div>
        <div className="card-body">
          <ul className="list">
            {education.map((edu, idx) => {
              return <li key={idx} className="mb-5">
                <h3 className="h4">{edu.title}</h3>
                <h4 className="font-weight-light">{edu.university}</h4>
                <h4 className="font-weight-light text-muted">{edu.place} / {edu.date}</h4>
              </li>
            })}
          </ul>
        </div>
      </section>
    )
  }
}

export default Education;