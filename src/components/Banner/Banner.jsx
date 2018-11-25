import React from 'react'
import me from '../../images/me_drawn.png'

const Banner = () => {
  return (
    <section className="banner">
      <h1 className="animated fadeInDown">Josh<br />Diaz</h1>
      <img src={me} alt="stylized drawing" className="animated fadeInUp" />
    </section>
  );
}
 
export default Banner;