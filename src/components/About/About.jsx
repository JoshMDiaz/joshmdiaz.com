import React from 'react'
import SectionWrapper from '../Section/SectionWrapper'
import ParagraphHeader from '../Section/ParagraphHeader'
import me from '../../images/me.jpg'
import Scroll from 'react-scroll'
const ScrollElement = Scroll.Element;

const About = () => {
  return (
    <ScrollElement name="about">
      <SectionWrapper title="About" bgColor="red">
        <section>
          <div>
            <ParagraphHeader header="Who I Am" />
            <div className="picture-wrapper">
              <img src={me} alt="me" className="me" />
            </div>
            <p>My name is Josh Diaz. I love playing tennis, pickleball, racquetball, ping pong and anything else with a racket or a paddle! I love my family and my two huskies. I enjoy doing side projects - anything to keep me busy.</p>
            <p>I am the Owner and CEO of Diaz Real Estate, LLC. We do Virtual Tours for real estate. <a href="https://diazre.com" target="blank" rel="noopener noreferrer">You can check us out here!</a></p>
            <p>I graduated from Utah Valley University with a Bachelors in Digital Media and an emphasis in internet Technologies. I played tennis in high school and college. I can't wait to tell my kids stories about the "good ol' days" when I nearly turned pro! (Even though there is no way that would have happened...)</p>
          </div>
          <div>
            <ParagraphHeader header="What I Do" />
            <p>I am a professional Software Engineer. I specialize in Front-end web development. I have a passion for the UI/UX aspect as well as the programming aspect of developing beautiful products.</p>
            <p>I have been programming since I could walk. Just kidding, I was never a child prodigy. I have, however, always had the desire to excel at whatever I have been passionate about. Fortunately, I love this work.</p>
          </div>
          <div>
            <ParagraphHeader header="What I Want" />
            <p>I am continually looking for freelance work. I love building web and mobile applications. I am always trying to improve my skillset so I can produce the best products possible. If you are interested in creating a website, mobile application or simply adding to the value of a website that you currently have, then please contact me to get started!</p>
          </div>
        </section>
      </SectionWrapper>
    </ScrollElement>
  );
}
 
export default About;