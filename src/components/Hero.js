import React from 'react';
import styled, { keyframes } from 'styled-components';

const HeroContainer = styled.div`
background-image: url(${process.env.PUBLIC_URL}/images/background.jpg);
background-size: cover;
  background-position: center;
  position: relative;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const trackingInExpandFwd = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

const HeroText = styled.p`
  position: absolute;
  bottom: 20%;
  width: 100%;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 4rem;

  animation: ${trackingInExpandFwd} 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`;

const HeroButton = styled.button`
  width: 10rem;
  background-color: #FF38BD;
  color: white;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  height:2rem;
  &:hover {
    opacity: 0.7;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage  />
      <HeroText>
      Presenting Snowboard Extravaganza!
      </HeroText>
      <HeroButton>
        Shop Now
      </HeroButton>
    </HeroContainer>
  );
};

export default Hero;



 