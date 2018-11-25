import React from 'react'
import SectionWrapper from '../Section/SectionWrapper'
import WorkBlock from './WorkBlock'
import pattern from '../../images/pattern.svg'
import shy from '../../images/shyanne-diaz.png'
import tayloredTies from '../../images/taylored-ties.png'
import rdk from '../../images/rdk.png'
import Scroll from 'react-scroll'
const ScrollElement = Scroll.Element;

const workExamples = [
  {
    logo: pattern,
    color: '#FFFFFF',
    company: 'pattern',
    url: 'https://www.pattern.com'
  },
  {
    logo: shy,
    color: '#FAFAFB',
    company: 'Shyanne Diaz',
    url: 'http://www.shyannediaz.com'
  },
  {
    logo: tayloredTies,
    color: '#FFFFFF',
    company: 'Taylored Ties',
    url: 'http://www.tayloredties.com'
  },
  {
    logo: rdk,
    color: '#FAFAFB',
    company: 'Ronin Dragon Karate',
    url: 'http://www.rdkutah.com'
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