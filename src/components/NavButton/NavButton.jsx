import React, { Component } from 'react'

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      open: false
    }
  }

  toggleMenu = (openMenu) => {
    this.setState({ open: !this.state.open });
    if (!openMenu) {
      setTimeout(() => {
        this.setState({ menuOpen: false });
      }, 500);
    } else {
      this.setState({ menuOpen: true });
    }
  }

  render() { 
    const { open, menuOpen } = this.state;
    return (
      <div id="nav-button" onClick={() => this.toggleMenu(!menuOpen)}>
        <div className={`nav-icon ${open ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}
 
export default NavButton;