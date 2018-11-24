import React from 'react'
import PropTypes from 'prop-types'

const WorkBlock = ({ logo, color, company, url }) => {
  return (
    <div
      className="work-block"
      style={{
        background: color,
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={company} />
      </a>
    </div>
  )
}

export default WorkBlock

WorkBlock.proptypes = {
  logo: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
}
