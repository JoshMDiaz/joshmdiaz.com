import React from 'react'
import SectionWrapper from '../Section/SectionWrapper'
import WorkBlock from './WorkBlock'
import pattern from '../../images/pattern.svg'
import shy from '../../images/shyanne-diaz.png'
import tayloredTies from '../../images/taylored-ties.png'
import rdk from '../../images/rdk.png'
import ties from '../../images/ties.jpg'
import Scroll from 'react-scroll'
const ScrollElement = Scroll.Element;

const workExamples = [
  {
    logo: pattern,
    // bgImage: ties,
    // color: '0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.7)',
    company: 'pattern',
    url: 'https://www.pattern.com'
  },
  {
    logo: shy,
    // bgImage: ties,
    // color: '0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.7)',
    company: 'Shyanne Diaz',
    url: 'http://www.shyannediaz.com'
  },
  {
    logo: tayloredTies,
    // bgImage: ties,
    // color: '0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.7)',
    company: 'Taylored Ties',
    url: 'http://www.tayloredties.com'
  },
  {
    logo: rdk,
    // bgImage: ties,
    // color: '0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.7)',
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