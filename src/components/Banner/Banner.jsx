import React from 'react'
import me from '../../images/me_drawn.png'
import Slide from 'react-reveal/Slide'

const Banner = () => {
  return (
    <section className="banner">
      <Slide down>
        <h1>Josh<br />Diaz</h1>
      </Slide>
      <Slide up>
        <img src={me} alt="stylized drawing" />
      </Slide>
    </section>
  );
}
 
export default Banner;