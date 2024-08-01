import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  text-align: center;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1rem;
  max-width: 600px;
  margin: 10px 0;
`;

const NavigationDots = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? 'white' : 'gray')};
  margin: 8px 0;
  cursor: pointer;
`;

const sections = [
  {
    title: 'Brand Name',
    text: 'The brand GD11 started from the GDF11 (Growth differentiation factor 11) known as a so-called ‘rejuvenating protein’, which affects growth and division of cells, ultimately regenerating aged cells. The GDF11, one of key ingredients contained in Human Cord Blood Cell Conditioned Media, USC1994®, is revealed 60 times higher in Human Cord Blood Cell Conditioned Media than any other type of stem cells.',
    bgImage: '/path-to-your-image1.jpg',
  },
  {
    title: 'Philosophy',
    text: 'GD11 is a cell bio-derma cosmetic brand that embodies real visual effects on the skin with international patented technology secured through cord blood stem cell research since 1994 and a proven ingredient in Human Cord Blood Cell Conditioned Media, USC1994®. As an age creator which is not restricted by physical age presents the natural healthy beauty of the skin.',
    bgImage: '/path-to-your-image2.jpg',
  },
  {
    title: 'Concept',
    text: 'GD11 demonstrates scientifically proven results and provides visible positive effects to the skin through Human Cord Blood Cell Conditioned Media, USC1994® completed with Kangstem Biotech’s expertise. The mysterious birth energy contained in the human umbilical cord blood stem cells adds excellent skin self-renewal power as if it were making its own age.',
    bgImage: '/path-to-your-image3.jpg',
  },
  {
    title: 'Benefit',
    text: 'Customized Care: Customized care according to signs of aging such as dry skin, wrinkle, dull skin, and etc.\n\nUnique Raw Material: Human Cord Blood Cell Conditioned Media, USC1994® that raises the natural self-sustaining power.\n\nBio Technology: Technologies that maximize efficacy such as freeze drying, exosomes, etc. are applied.',
    bgImage: '/path-to-your-image4.jpg',
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const scrollToSection = index => {
    document.getElementById(`section-${index}`).scrollIntoView({ behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <AboutContainer>
      {sections.map((section, index) => (
        <Section
          key={index}
          id={`section-${index}`}
          bgImage={section.bgImage}
        >
          <Title>{section.title}</Title>
          <Text>{section.text}</Text>
        </Section>
      ))}
      <NavigationDots>
        {sections.map((_, index) => (
          <Dot
            key={index}
            active={index === activeIndex}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </NavigationDots>
    </AboutContainer>
  );
};

export default About;
