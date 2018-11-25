import React from 'react'
import SectionWrapper from '../Section/SectionWrapper'
import SocialMedia from '../SocialMedia/SocialMedia'
import ParagraphHeader from '../Section/ParagraphHeader'
import Scroll from 'react-scroll'
const ScrollElement = Scroll.Element;

const Contact = () => {
  return (
    <ScrollElement name="contact">
      <SectionWrapper title="Contact" bgColor="blue">
        <section>
          <ParagraphHeader header="Reach Out" />
          <p>Want to reach me? Feel free to email me or connect with me on social media! I am available for freelance work. If full-time work is needed, I am open to hearing what the job has to offer.</p>
          <div className="my-info">
            <h4>Josh Diaz</h4>
            <p><strong>Software Engineer</strong></p>
            <p><a href="mailto:joshua.michael.diaz@gmail.com">joshua.michael.diaz@gmail.com</a></p>
          </div>
          <SocialMedia />
        </section>
      </SectionWrapper>
    </ScrollElement>
  );
}
 
export default Contact;