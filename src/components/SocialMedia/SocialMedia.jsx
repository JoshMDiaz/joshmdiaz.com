import React from 'react'
import linkedIn from '../../images/linkedin.svg'
import twitter from '../../images/twitter.svg'
import facebook from '../../images/facebook.svg'
import github from '../../images/github.svg'

const socialArr = [
  {
    img: github,
    name: 'Github',
    url: 'https://github.com/JoshMDiaz'
  },
  {
    img: linkedIn,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/joshmdiaz/'
  },
  {
    img: twitter,
    name: 'Twitter',
    url: 'https://twitter.com/JoshDiaz32'
  },
  {
    img: facebook,
    name: 'Facebook',
    url: 'https://www.facebook.com/josh.m.diaz'
  },
];

const SocialMedia = () => {
  return (
    <div className="social-media">
      { socialArr.map((e, i) => (
        <a href={e.url} target="_blank" rel="noopener noreferrer" key={i}>
          <img src={e.img} alt={e.name} />
        </a>
      ))}
    </div>
  );
}
 
export default SocialMedia;