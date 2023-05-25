import React from 'react'
import { Link as ReactRouterDomLink } from 'react-router-dom'


import styled from 'styled-components'
 

const Container=styled.div`
width:100%;
heigh:5px;
`
const Copyright=styled.div`
display: flex;
align-items:center;
justify-content:center;
width:100%;
height:5px;
text-align:center;
`


const VStack = styled.div`
padding:2rem;
width:100%;
  display: flex;
  align-items:center;
  justify-content:center;
  gap: 1rem;
`;
const Link = styled(ReactRouterDomLink)`
  text-decoration: none;
  color: black;
`;


const Footer = () => {
  return (
    <Container>
         <VStack>
            <Link to="/">About Us</Link>
            <Link to="/">Learn More</Link>
            <Link to="/">Sustainability</Link>
          </VStack>
          <Copyright>Copyright 2023 Majd Aleid</Copyright>
        </Container>
  )
}

export default Footer