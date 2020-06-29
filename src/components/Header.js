import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { name, title, role } = this.props;

    return (
      <header className="text-center px-3 pt-4">
        <div>
          <h1>{name}</h1>
          <h2 className="font-weight-light">{title} / {role}</h2>
        </div>
      </header>
    )
  }
}

export default Header;