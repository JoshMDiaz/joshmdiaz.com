import React from 'react'
import SectionWrapper from '../Section/SectionWrapper'
import WorkBlock from './WorkBlock'
import pattern from '../../images/pattern.svg'
import shy from '../../images/shyanne-diaz.png'
import tayloredTies from '../../images/taylored-ties.png'
import rdk from '../../images/rdk.png'
import diazre from '../../images/diazre.svg'
import Scroll from 'react-scroll'
const ScrollElement = Scroll.Element;

const workExamples = [
  {
    logo: pattern,
    company: 'pattern',
    url: 'https://www.pattern.com',
    direction: 'left'
  },
  {
    logo: diazre,
    company: 'Diaz Real Estate, LLC',
    url: 'http://www.diazre.com',
    direction: 'right'
  },
  {
    logo: shy,
    company: 'Shyanne Diaz',
    url: 'http://www.shyannediaz.com',
    direction: 'left'
  },
  {
    logo: tayloredTies,
    company: 'Taylored Ties',
    url: 'http://www.tayloredties.com',
    direction: 'right'
  },
  {
    logo: rdk,
    company: 'Ronin Dragon Karate',
    url: 'http://www.rdkutah.com',
    direction: 'left'
  },
]

const Work = () => {
  return (
    <ScrollElement name="work">
      <SectionWrapper title="Work" bgColor="black">
        <section>
          {workExamples.map((e, i) => (
            <WorkBlock {...e} key={i} />
          ))}
        </section>
      </SectionWrapper>
    </ScrollElement>
  );
}
 
export default Work;