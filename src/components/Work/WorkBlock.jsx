import React from 'react'
import PropTypes from 'prop-types'
import Slide from 'react-reveal/Slide'

const WorkBlock = ({ logo, company, url, direction }) => {
  return (
    <div className="work-block">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Slide left={direction === 'left'} right={direction === 'right'}>
          <img src={logo} alt={company} />
        </Slide>
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
