import React, { Component } from 'react';

class Summary extends Component {
  render() {
    const { summary } = this.props;
    return (
      <section className="card py-3 mb-4">
        <div className="card-header">
          <h2 className="h3">PERSONAL SUMMARY</h2>
        </div>
        <div className="card-body">
          <p>{summary}</p>
        </div>
      </section>
    )
  }
}

export default Summary;