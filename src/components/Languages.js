import React, { Component } from 'react';

class Languages extends Component {
  render() {
    const { languages } = this.props;
    return (
      <section className="card py-3 mb-4">
        <div className="card-header">
          <h2 className="h3">LANGUAGES</h2>
        </div>
        <div className="card-body">
          <ul className="list">
            {languages.map((language, idx) => {
              return <li key={idx} className="mb-2">
                {Object.entries(language).map(([key, val]) => {
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

export default Languages;