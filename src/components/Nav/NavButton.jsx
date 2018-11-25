import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Nav from './Nav';

const scroller = Scroll.scroller;
 
class NavButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      open: false
    }
  }

  toggleMenu = (openMenu, section, navButton) => {
    if (!openMenu) {
      this.setState({
        menuOpen: false, closing: true
      }, () => {
        setTimeout(() => {
          this.setState({ open: false });
        }, 250);
      });
      this.scrollToSection(section);
    } else {
      this.setState({ menuOpen: true, open: true, closing: false });
    }
  }

  scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 300,
      offset: 0,
      smooth: true
    })
  }

  render() { 
    const { open, menuOpen, closing } = this.state;
    return (
      <div>
        <div id="nav-button" onClick={() => this.toggleMenu(!menuOpen, null, true)}>
          <div className={`nav-icon ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
          {open && <Nav close={this.toggleMenu} closing={closing} /> }
      </div>
    );
  }
}
 
export default NavButton;