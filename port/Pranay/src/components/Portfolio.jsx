import React from 'react';
import styled from 'styled-components';

// Navbar Component
const Navbar = styled.nav`
  background-color: #011327;
  color: #fff;
  padding: 20px;
`;

const Logo = styled.a`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  margin-right: 10px;
  text-decoration: none;
`;

const MainSection = styled.section`
  background-color: #011327;
  padding: 50px;
  text-align: center;
`;

const AboutSection = styled.section`
  background-color: #011327;
  padding: 50px;
  text-align: center;
  margin-top: 50px;
`;

const ServicesSection = styled.section`
  background-color: #011327;
  padding: 50px;
  text-align: center;
  margin-top: 50px;
`;

const ContactSection = styled.section`
  background-color: #011327;
  padding: 50px;
  text-align: center;
  margin-top: 50px;
`;

const Footer = styled.footer`
  background-color: #011327;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FullScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;
`;

const App = () => {
  return (
    <FullScreenContainer>
      <Navbar>
        <Content>
          <Logo href="/">Pranay's Portfolio</Logo> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Content>
      </Navbar>
      <MainSection>
        <Content>
          <h1>Welcome to My Portfolio</h1>
          {/* <p>This is the main section of the website.</p> */}
          <p>Feel free to explore and learn more about me and my services.</p>
        </Content>
      </MainSection>
      <AboutSection id="about">
        <Content>
          <h2>About Me</h2>
          {/* <p>This is the about section of the website.</p> */}
          <p>I'm a multidisciplinary professional specializing in web development, Android app development, graphics design, web design, and video editing. With expertise in creating engaging digital experiences, I bring your ideas to life through responsive websites, intuitive mobile apps, stunning graphics, and compelling video content. Let's collaborate and make an impact.</p>
        </Content>
      </AboutSection>
      <ServicesSection id="services">
        <Content>
          <h2>Services</h2>
          <p>1. Web Development: Build responsive websites with HTML, CSS, and JavaScript for a seamless user experience.</p>
          <p>2. Android App Development: Create native mobile applications for the Android platform using Java and Kotlin.</p>
          <p>3. Graphics Design: Design visually appealing logos, branding materials, illustrations, and infographics.</p>
          <p>4. Web Design: Develop intuitive and visually captivating website layouts with a focus on user experience (UX) and user interface (UI) design.</p>
          <p>5. Video Editing: Transform raw footage into engaging and professional videos for various purposes.</p>

        </Content>
      </ServicesSection>
      <ContactSection id="contact">
        <Content>
          <h2>Contact Me</h2>
          <p>This is the contact section of the website.</p>
          <p>If you have any questions or inquiries, feel free to reach out to me.</p>
        </Content>
      </ContactSection>
      <Footer>
        <Content>
          <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        </Content>
      </Footer>
    </FullScreenContainer>
  );
};

export default App;
