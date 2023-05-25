import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 4rem;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledHeading = styled.h1`
  padding: 2.5rem 0;
`;

const StyledText = styled.p`
  padding-bottom: 2.5rem;
`;

const RichText = ({ heading, text }) => {
  return (
    <Container>
      <Center>
        <StyledHeading>
          {heading}
        </StyledHeading>
        {text && 
          <StyledText>
            {text}
          </StyledText>
        }
      </Center>
    </Container>
  )
}

export default RichText
