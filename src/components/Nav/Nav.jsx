import React from 'react'

const sections = [ 'About', 'Work', 'Contact' ]

const Nav = ({ close, closing }) => {
  return (
    <div className={`nav animated ${closing ? 'slideOutRight' : 'slideInRight'}`}>
      <ul>
        { sections.map((e, i) => (
          <li key={i} onClick={() => close(false, e.toLowerCase())}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default Nav;