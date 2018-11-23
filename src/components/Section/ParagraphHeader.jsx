import React from 'react'
import PropTypes from 'prop-types'

const ParagraphHeader = ({ header }) => {
  return (
    <div className="paragraph-header">
      <h4>{header}</h4>
    </div>
  );
}
 
export default ParagraphHeader;

ParagraphHeader.proptypes = {
  header: PropTypes.string.isRequired
};