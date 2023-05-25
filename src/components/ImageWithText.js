import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding:auto;
  margin:auto;
`;

const Contentdescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Img = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    padding-right:3rem;
    ${({ reverse }) => (reverse ? 'padding-right:3rem' : 'padding-left:3rem')};

  }
`;

const StyledButton = styled.button`
  width: 10rem;
  background-color: #FF38BD;
  color: white;
  height:2rem;
  &:hover {
    opacity: 70%;
  }
`;

const Heading = styled.h1`
  padding-bottom: 2rem;
`;

const Text = styled.p`
  padding-bottom: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
 

  @media (min-width: 768px) {
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    
  }
`;

const ImageWithText = ({ button, reverse, image, heading, text }) => {
  return (
    <Container>
      <FlexContainer reverse={reverse}>
        <Img src={image} alt={heading} />
        <Contentdescription>
          {heading && <Heading>{heading}</Heading>}
          {text && <Text>{text}</Text>}
          {button && <StyledButton>Buy Now</StyledButton>}
        </Contentdescription>
      </FlexContainer>
    </Container>
  )
}

export default ImageWithText
