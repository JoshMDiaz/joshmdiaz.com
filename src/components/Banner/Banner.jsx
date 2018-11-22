import React from 'react'
import me from '../../images/me_drawn.png'

const Banner = () => {
  return (
    <section className="banner">
      <h1>Josh<br />Diaz</h1>
      <img src={me} alt="stylized drawing"/>
    </section>
  );
}
 
export default Banner;