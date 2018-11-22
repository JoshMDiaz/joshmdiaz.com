import React from 'react'

const SectionWrapper = ({ title, bgColor, children }) => {
  return (
    <section className={`section-wrapper ${title}`} style={{ background: bgColor }}>
      <div className="title-section">
        <h2>{title}</h2>
      </div>
      <div className="content-section">
        {children}
      </div>
    </section>
  );
}
 
export default SectionWrapper;