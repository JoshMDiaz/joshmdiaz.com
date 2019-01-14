import React from 'react'
import PropTypes from 'prop-types'

const colors = {
  red: '#F7484E',
  blue: '#035DAE',
  black: '#292929'
}

const SectionWrapper = ({ title, afterTitle, bgColor, children }) => {
  return (
    <div className={`section-wrapper ${title.toLowerCase()}`}>
      <div className="title-section" style={{ background: colors[bgColor], color: bgColor ? '#FFFFFF' : '#292929' }}>
        <h2>{title}</h2>
        {afterTitle}
      </div>
      <div className="content-section">
        {children}
      </div>
    </div>
  );
}
 
export default SectionWrapper;

SectionWrapper.proptypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  bgColor: PropTypes.string
};