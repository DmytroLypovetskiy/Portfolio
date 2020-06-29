import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <section className="card py-3 mb-4">
        <div className="card-header">
          <h2 className="h3">CONTACT INFORMATION</h2>
        </div>
        <div className="card-body">
          <ul className="list row">
            {contacts.map((contact, idx) => {
              return <li key={idx} className="mb-2 col-md-4">{Object.entries(contact).map(([key, val]) => {
                return <div key={key}>
                  <strong className="text-muted">{key}:</strong> <span className="font-weight-light">{val}</span>
                </div>
              })}</li>
            })}
          </ul>
        </div>
      </section>
    )
  }
}

export default Contacts;